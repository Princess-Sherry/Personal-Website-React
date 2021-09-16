import React from "react";
import './NavBar.css';
import Item from './components/Item';

const NavBar = () => (
    <div class="navbar">
        <Item href="HOME">Home</Item>
        <Item href="RESUME">Resume</Item>
        <Item href="SERVICES">Services</Item>
        <Item href="BLOG">Blog</Item>
        <Item href="CONTACT">Contact</Item>
    </div>
)

export default NavBar;