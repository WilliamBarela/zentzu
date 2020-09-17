import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CoursesIndex extends Component {
  constructor(props){
    super(props);
    this.match = props.match;
  }

  render() {
    return (
      <>
        <h1>Courses</h1>
        <Link to={`${this.match.url}/new`}>New Course</Link>
        <Link to={`${this.match.url}/1`}>Course 1</Link>
        <Link to={`${this.match.url}/3`}>Course 3</Link>
      </>
    )
  }
}
