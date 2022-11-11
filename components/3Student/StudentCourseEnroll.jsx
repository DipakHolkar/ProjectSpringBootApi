import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const StudentCourseEnroll = () => {
  
  let user = JSON.parse(localStorage.getItem('loggedinuser'))
  console.log(user.user_id);
  const { course_id } = useParams();
  useEffect(() => {
  
    loadCourse();
  }, []);

  const loadCourse = async () => {
     
    const res = await axios.post("http://localhost:8080/studentenroll", {

      student_id: user.user_id,
      course_id: course_id,            
    });
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/studenthome">
        Back To Courselist
      </Link>
      <h1 className="display-4">Successfully Enroll</h1>      
    </div>
  );
};

export default StudentCourseEnroll;