import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const StudentCourseView = () => {
  const [course, setCourse] = useState({
    course_name : "",
    course_duration : "",
    course_details: "",
    course_fees : "",
    course_info : "",    
  });
  const { course_id } = useParams();
  useEffect(() => {
    loadCourse();
  }, []);
  const loadCourse = async () => {
    const res = await axios.get(`http://localhost:8080/getcoursebyid/${course_id}`);
    setCourse(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/studenthome">
        Back To Courselist
      </Link>
      <h1 className="display-4">Course name: {course.course_name}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Course name: {course.course_name}</li>
        <li className="list-group-item">Course Duration: {course.course_duration}</li>
        <li className="list-group-item">Course details: {course.course_details}</li>
        <li className="list-group-item">Course Information: {course.course_info}</li>
        <li className="list-group-item">Course fees: {course.course_fees}</li>
      </ul>
    </div>
  );
};

export default StudentCourseView;