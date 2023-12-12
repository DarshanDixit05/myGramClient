import useDebounce from "../hooks/debounce.js";
import React, {useContext, useState, useEffect} from 'react'
import SimpleSidebar from "../components/SimpleSidebar.js";
import Post from "../components/Post.js";
import {IdContext} from "../Context.js";
import { Input } from '@chakra-ui/react'
import axios from 'axios';
const BASE_URL="http://localhost:1999/api/v1"

function Main() {
  const {id, setId} = useContext(IdContext);
  const [search, setSearch] = useState("");

  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    const f = async()=>{
      const response = await axios.get(BASE_URL+"/searchUser", {debounceSearch});

      console.log(response);
    }
    if(debounceSearch)f();
    
  }, [debounceSearch])

  return (
    <div id="main_container">
      <SimpleSidebar />
      <div id="main_right_container">
        <div id="main_searcn_section">
          <Input id="search_bar" placeholder='Search User' onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div id="right-feed-section">
          <div id="content-section">
            <Post />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main