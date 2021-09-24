import React from "react";
import Logo from "../Logo";
import NavBar from "./components/NavBar";
import ResponsiveDrawer from "./components/NavBarDrawer/NavBarDrawer";
import "./Header.css";

const Header = () => (
  <div className="layout__header">
    <Logo />
    <div className="header__large">
      <NavBar />
    </div>
    <div className="header__small">
      <ResponsiveDrawer />
    </div>
  </div>
);

export default Header;
