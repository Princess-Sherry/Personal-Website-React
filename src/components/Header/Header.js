import React from "react";
import Logo from "../Logo";
import NavBar from "./components/NavBar";
import './Header.css';

const Header = () => (
    <div className="layout__header">
        <Logo />
        <NavBar />
    </div>
)

export default Header;