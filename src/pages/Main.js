import React from 'react'
import SimpleSidebar from "../components/SimpleSidebar.js";
import Post from "../components/Post.js";

function Main() {
  return (
    <div id="main_container">
      <SimpleSidebar />
      <div id="main_right_container">
        <div id="main_story_section">
          Stories
        </div>
        <div id="right-feed-section">
          <div id="content-section">
            <Post />
          </div>
          <div id="suggestion-section">
            Suggestion
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main