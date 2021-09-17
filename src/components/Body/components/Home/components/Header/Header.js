import React from "react";
import Info from "./components/Info";
import Avatar from "./components/Avatar";  
import "./Header.css";

const Header = () => (
  <div class="homepage__header">
    <Avatar />
    <Info />
  </div>
);

export default Header;
