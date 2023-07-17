import React, { useState } from "react";
import "./PostBox.css";
import { Avatar, Button } from "@material-ui/core";
import { db } from "./firebaseFile";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

const PostBox = () => {
  const [postMessage, setPostMessage] = useState("");
  const [postImage, setPostImage] = useState("");

  const sendPost = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        displayName: "Ojas Sethi",
        username: "ojassethi",
        verified: true,
        text: postMessage,
        image: postImage,
        avatar:
          "https://media.licdn.com/dms/image/C4D03AQFd9B0nhxddOg/profile-displayphoto-shrink_800_800/0/1643489954675?e=1694649600&v=beta&t=kV_I9JsM8v0O8T1vNb05WqIEN-D-jZEMMLEpn_j7gWs",
      });
      console.log("Document written with ID: ", docRef.id);
      setPostMessage("");
      setPostImage("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="postBox">
      <form>
        <div className="postBox__input">
          <Avatar src="https://media.licdn.com/dms/image/C4D03AQFd9B0nhxddOg/profile-displayphoto-shrink_800_800/0/1643489954675?e=1694649600&v=beta&t=kV_I9JsM8v0O8T1vNb05WqIEN-D-jZEMMLEpn_j7gWs" />
          <input
            onChange={(event) => setPostMessage(event.target.value)}
            value={postMessage}
            placeholder="What's going on in that big brain of yours?"
            type="text"
          />
        </div>
        <input
          onChange={(event) => setPostImage(event.target.value)}
          value={postImage}
          className="postBox__inputImage"
          placeholder="Enter Image URL"
          type="text"
        />
        <Button
          onClick={sendPost}
          type="submit"
          className="postBox__postButton"
        >
          Post
        </Button>
      </form>
    </div>
  );
};
export default PostBox;
