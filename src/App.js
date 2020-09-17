import React from 'react';
//import logo from './img/lauburu.svg';
import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import People from "./routes/People.js";
import Courses from "./routes/Courses.js";
import Login from "./components/Login.js";
import PeopleNew from './views/people/New.js';
import Profile from './views/people/Profile.js';
import ProtectedRoute from './components/ProtectedRoute.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <ProtectedRoute path="/profile" component={Profile} />

        <ProtectedRoute path="/courses" component={Courses} />

        <Route path="/people">
          <People />
        </Route>

        <Route path="/">
          <PeopleNew />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
