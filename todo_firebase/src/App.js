import React from "react";
import Navbar from "./layout/Navbar.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import CreateProject from './project/CreateProject';
import ProjectDetail from './project/ProjectDetail';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/create" component={CreateProject} />
          <Route path="/detail/:id" component={ProjectDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
