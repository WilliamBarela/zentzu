import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

//FIXME: make another component called Course
//use useParams for :courseId to allow for saveable and usable urls of a course for the index

//FIXME: make me a component with a form to create a course
const CoursesNew = () => <h1>Form to Create New Course</h1>;

//FIXME: make me a component which lists all courses
const CoursesIndex = ({match}) => {
  return(
    <>
      <h1>Courses</h1>
      <Link to={`${match.url}/new`}>New Course</Link>
      <Link to={`${match.url}/1`}>Course 1</Link>
      <Link to={`${match.url}/3`}>Course 3</Link>
    </>
  )
};

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
