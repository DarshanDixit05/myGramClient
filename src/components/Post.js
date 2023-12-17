import React, {useState, useContext} from 'react'
import { Input, Card, CardHeader, CardBody, CardFooter,Flex,Avatar,Box,Heading,Text,IconButton,Image, Button, 
} from '@chakra-ui/react'
import {
    FiHeart,
    FiMessageCircle,
    FiNavigation,
    FiMoreVertical
} from 'react-icons/fi'
import {UserContext} from "../Contexts/UserContext.js";
import axios from 'axios';
const BASE_URL="http://localhost:1999/api/v1"

function Post(props) {
    const {token} = useContext(UserContext);
    const [likeToggle, setLikeToggle] = useState(false);
    const handleLikeClick = async(e) =>{
        e.preventDefault();
        // if(!likeToggle){
        //     const response = await axios.post(BASE_URL+"/addLike"+"/"+props.postId, {
        //         headers: {
        //             'Authorization': `Bearer ${token}`,
        //             'Content-Type': 'application/json',
        //           },
        //     });
        //     console.log(response);
        // }else{
        //     const response = await axios.post(BASE_URL+"/removeLike"+"/"+props.postId, {
        //         headers: {
        //             'Authorization': `Bearer ${token}`,
        //             'Content-Type': 'application/json',
        //           },
        //     });
        //     console.log(response);
        // }
        setLikeToggle(!likeToggle);
    }

  return (
    <Card maxW='md'>
    <CardHeader pt="1" pb="1">
        <Flex spacing='4'>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar size='md' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            <Box>
            <Heading size='sm'>{props.username}</Heading>
            </Box>
        </Flex>
        <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
            icon={<FiMoreVertical />}
        />
        </Flex>
    </CardHeader>
    <Image
    boxSize='350px'
        objectFit='cover'
        src={props.image}
        alt='Chakra UI'
    />
    <CardBody pt="1" pb="1">
        <Button onClick={handleLikeClick} flex='1' pl="0" mt='0' variant='ghost' leftIcon={<FiHeart style={{ fill: likeToggle ? 'red' : 'white' }} color={likeToggle ? 'red' : 'black'}/>}>
        </Button>
        <Button flex='1' mt='0' variant='ghost' leftIcon={<FiMessageCircle />}>
        </Button>
        <Button flex='1' mt='0' variant='ghost' leftIcon={<FiNavigation />}>
        </Button>
        <Text>{props.likeCount} likes</Text>
        <Text>
            {props.caption}
        </Text>
    </CardBody>
    <CardFooter
     display="block"
     pt="0"
    >
        <div>View all {props.commentscount} comments</div>
        <Input id="comment" type="text" name="comment" />
    </CardFooter>
    </Card>
  )
}

export default Post