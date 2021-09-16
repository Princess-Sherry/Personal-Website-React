import React from "react";
import './Body.css';
import Home from './components/Home';
import Resume from './components/Resume';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';

const Body = () => (
    <div>
        <Home />
        <Resume />
        <Services />
        <Blog />
        <Contact />
    </div>

)

export default Body;