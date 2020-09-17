import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import CoursesIndex from '../views/courses/Index.js';
import CoursesNew from '../views/courses/New.js';
import CoursesShow from '../views/courses/Show.js';

export default function Courses() {
  let match = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/new`}>
          <CoursesNew />
        </Route>
        <Route path={`${match.path}/:courseId`}>
          <CoursesShow />
        </Route>
        <Route path={`${match.path}`}>
          <CoursesIndex match={match} />
        </Route>
      </Switch>
    </Router>
  )
}
