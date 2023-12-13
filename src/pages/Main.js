import useDebounce from "../hooks/debounce.js";
import React, {useContext, useState, useEffect} from 'react'
import SimpleSidebar from "../components/SimpleSidebar.js";
import Post from "../components/Post.js";
import {IdContext} from "../Context.js";
import { Input } from '@chakra-ui/react'
import axios from 'axios';
const BASE_URL="http://localhost:1999/api/v1"

function Main() {
  const {id, setId, token} = useContext(IdContext);
  const [search, setSearch] = useState("");
  const [searchedUser, setSearchedUser] = useState([]);
  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    const f = async()=>{
      const response = await axios.get(BASE_URL+"/searchUser", {
        params: {
          name: debounceSearch,
        }
      });
      setSearchedUser(response.data.data);
    }
    if(debounceSearch)f();
    const getPost = async() =>{
      const response = await axios.get(BASE_URL+"/getPosts", {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
    }
    getPost();
  }, [debounceSearch])

  return (
    <div id="main_container">
      <SimpleSidebar />
      <div id="main_right_container">
        <div id="main_searcn_section">
          <Input id="search_bar" placeholder='Search User' onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        {searchedUser.length>0 && search !== "" ? (
          <div class="user-container" id="user_container">
            {searchedUser.map((ele) => (
              <div class="user-profile" key={ele.id}>
                <img class="user-avatar" src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt={`${ele.username} Avatar`} />
                <p>{ele.username}</p>
              </div>
            ))}
          </div>
        ):null}
        <div id="right-feed-section">
          {/* username, profile_image, image, caption, likeCount, commentscount */}
          <div id="content-section">
            <Post />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main