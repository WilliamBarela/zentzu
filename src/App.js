import React from 'react';
import logo from './img/lauburu.svg';
import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Login = () => <h1>Login</h1>
const Register = () => <h1>Register</h1>
const Profile = () => <h1>Profile</h1>
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
