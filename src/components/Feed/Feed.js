import React, { useState, useEffect } from "react";
import "./Feed.css";
import PostBox from "./PostBox";
import Post from "../Post/Post";
import { db } from "./firebaseFile";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const newPost = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return newPost;
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <PostBox />
      {/* Posts */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
