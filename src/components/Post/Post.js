import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublishIcon from "@mui/icons-material/Publish";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://media.licdn.com/dms/image/C4D03AQFd9B0nhxddOg/profile-displayphoto-shrink_800_800/0/1643489954675?e=1694649600&v=beta&t=kV_I9JsM8v0O8T1vNb05WqIEN-D-jZEMMLEpn_j7gWs" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Ojas Sethi{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @ojassethi
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>This is obbviously not a Twitter ripoff.</p>
          </div>
        </div>
        <img
          src="https://media3.giphy.com/media/xTiN0CNHgoRf1Ha7CM/giphy.gif?cid=ecf05e47jgk6cxn5xp22joxipipci8f0bo0b3krsp507obyy&ep=v1_gifs_gifId&rid=giphy.gif&ct=g"
          alt="A funny gif that you unfortunately can't see."
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
