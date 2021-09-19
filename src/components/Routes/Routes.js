import Blog from "pages/components/Blog";
import Contact from "pages/components/Contact";
import Home from "pages/components/Home";
import Resume from "pages/components/Resume";
import Services from "pages/components/Services";
import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route exact path="/">
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
);

export default Routes;
