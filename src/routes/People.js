import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

export default function People() {
  let match = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/:personId/courses`}>
        </Route>
        <Route path={`${match.path}/:personId/questions`}>
        </Route>
      </Switch>
    </Router>
  )
}
