import React from 'react';
import logo from './img/lauburu.svg';
import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Profile from "./components/Profile.js";

const Courses = () => <h1>Courses</h1>
const PersonCourses = () => <h1>Person Courses</h1>

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/courses">
          <Courses />
        </Route>

        <Route path="/person/courses">
          <PersonCourses />
        </Route>

        <Route path="/">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
