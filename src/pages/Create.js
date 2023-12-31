import React, { useState , useContext, useEffect} from 'react';
import { Flex, Heading, Input, Textarea, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {UserContext} from "../Contexts/UserContext.js";
import axios from 'axios';
const BASE_URL="http://localhost:1999/api/v1"

const firebaseConfig = {
    apiKey: "AIzaSyDem3Qk_p-ba-Rt2P7sSjn3IATYJ38jnpc",
    authDomain: "portfolio-93174.firebaseapp.com",
    projectId: "portfolio-93174",
    storageBucket: "portfolio-93174.appspot.com",
    messagingSenderId: "406967397725",
    appId: "1:406967397725:web:672b8696fb33903d204cb4",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

function Create(){
  const {token} = useContext(UserContext);
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePostCreation = async () => {
    try {
      const storageRef = ref(storage, `images/${Date.now()}_${image.name}`);
      await uploadBytes(storageRef, image);

      const imageUrl = await getDownloadURL(storageRef);

      console.log('Image URL:', imageUrl);
      const formData = {
        caption: caption,
        imageUrl: imageUrl,
      };
      
      const response = await axios.post(
        BASE_URL + "/createPost",
        {formData},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setCaption('');
      setImage(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    console.log(token);
    if (token !== null && loading) {
      handlePostCreation();
    }
  }, [ loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 
  };

  return (
    <>
      {!loading ? (
        <Flex direction="column" align="center" justify="center" height="100vh" width="50vw" margin="auto">
          <Heading mb={4}>Create a Post</Heading>
          <FormControl mb={4}>
            <FormLabel>Image</FormLabel>
            <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Caption</FormLabel>
            <Textarea value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Enter your caption" />
          </FormControl>
          <Button colorScheme="teal" onClick={handleSubmit}>
            Create Post
          </Button>
        </Flex>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default Create;