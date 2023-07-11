import React from "react";
import "./Feed.css";
import PostBox from "./PostBox";
import Post from "../Post/Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <PostBox />
      {/* Posts */}
      <Post />
    </div>
  );
};

export default Feed;
