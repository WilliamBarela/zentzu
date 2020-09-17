import React from 'react';
import { useParams } from 'react-router-dom';

export default function CoursesShow () {
  let { courseId } = useParams();
  return(
    <h1>Course ID: { courseId }</h1>
  )
}
