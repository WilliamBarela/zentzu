import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import CoursesIndex from '../views/courses/Index.js';
import CoursesNew from '../views/courses/New.js';

//FIXME: make another component called Course
//use useParams for :courseId to allow for saveable and usable urls of a course for the index

export default function Courses() {
  let match = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/new`}>
          <CoursesNew />
        </Route>
        <Route path={`${match.path}/:courseId`}>
          { /* FIXME: <Course /> */ }
        </Route>
        <Route path={`${match.path}`}>
          <CoursesIndex match={match} />
        </Route>
      </Switch>
    </Router>
  )
}
