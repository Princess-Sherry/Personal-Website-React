import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/components/Home";
import Resume from "pages/components/Resume";
import Services from "pages/components/Services";
import Blog from "pages/components/Blog";
import Contact from "pages/components/Contact";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
