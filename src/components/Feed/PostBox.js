import React from "react";
import "./PostBox.css";
import { Avatar, Button } from "@material-ui/core";

const PostBox = () => {
  return (
    <div className="postBox">
      <form>
        <div className="postBox__input">
          <Avatar src="https://media.licdn.com/dms/image/C4D03AQFd9B0nhxddOg/profile-displayphoto-shrink_800_800/0/1643489954675?e=1694649600&v=beta&t=kV_I9JsM8v0O8T1vNb05WqIEN-D-jZEMMLEpn_j7gWs" />
          <input
            placeholder="What's going on in that big brain of yours?"
            type="text"
          />
        </div>
        <input
          className="postBox__inputImage"
          placeholder="Enter Image URL"
          type="text"
        />
        <Button className="postBox__postButton">Post</Button>
      </form>
    </div>
  );
};
export default PostBox;
