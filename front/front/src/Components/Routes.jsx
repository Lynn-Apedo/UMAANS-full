import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import AddProject from "./Pages/AddProject";
import Projects from "./Pages/Projects";
import Project from "./Pages/Project";
import ProjectProfil from "./Pages/ProjectProfil";
import About from "./Pages/About";
import Profil from "./Pages/Profil";
// import ProjectByUserId from "./Pages/ProjectByUserId";
import EditProject from "./Pages/EditProject";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/profil">
        <Profil />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>

      {/* <Route exact path="/projects/ofuser/:id">
        <ProjectByUserId />
      </Route> */}
      <Route exact path="/editproject/:id">
        <EditProject />
      </Route>

      <Route exact path="/projects/:id">
        <Project />
      </Route>

      <Route exact path="/projectprofil/:id">
        <ProjectProfil />
      </Route>

      <Route exact path="/addproject">
        <AddProject />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
