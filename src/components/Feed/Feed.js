import React, { useState, useEffect } from "react";
import "./Feed.css";
import PostBox from "./PostBox";
import Post from "../Post/Post";
import { db } from "./firebaseFile";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

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

      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default Feed;
