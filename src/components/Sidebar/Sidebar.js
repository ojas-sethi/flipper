import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import MessageSharpIcon from "@mui/icons-material/MessageSharp";
import BookmarkSharpIcon from "@mui/icons-material/BookmarkSharp";
import ListAltSharpIcon from "@mui/icons-material/ListAltSharp";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      {/* App Icon/ Flipper Icon */}
      <TwitterIcon />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchSharpIcon} text="Explore" />
      <SidebarOption Icon={NotificationsSharpIcon} text="Notifications" />
      <SidebarOption Icon={MessageSharpIcon} text="Messages" />
      <SidebarOption Icon={BookmarkSharpIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltSharpIcon} text="Lists" />
      <SidebarOption Icon={AccountBoxSharpIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizSharpIcon} text="Options" />
    </div>
  );
};
export default Sidebar;
