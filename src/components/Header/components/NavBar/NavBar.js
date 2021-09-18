import {
  BLOG_BASE_URL,
  CONTACT_BASE_URL, HOME_BASE_URL,
  RESUME_BASE_URL,
  SERVICES_BASE_URL
} from "components/Routes/URLMap";
import React from "react";
import Item from "./components/Item";
import "./NavBar.css";

const NavBar = () => (
  <div class="navbar">
    <Item to={HOME_BASE_URL} active={true}>Home</Item>
    <Item to={RESUME_BASE_URL}>Resume</Item>
    <Item to={SERVICES_BASE_URL}>Services</Item>
    <Item to={BLOG_BASE_URL}>Blog</Item>
    <Item to={CONTACT_BASE_URL}>Contact</Item>
  </div>
);

export default NavBar;
