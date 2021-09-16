import { Avatar } from "@material-ui/core";
import React from "react";
import Info from "./components/Info/Info";
import "./Header.css";

const Header = () => (
  <div class="homepage__header">
    <Avatar />
    <Info />
  </div>
);

export default Header;
