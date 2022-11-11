import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const InstituteCourseEnrollList = () => {
 
  const [students, setStudent] = useState([]);

  const [course, setCourse] = useState({
    course_name : "",
    course_duration : "",
    course_details: "",
    course_fees : "",
   course_info : "",    
  });
  
  const {course_id} = useParams();

  useEffect(() => {   
    loadStudent();
    loadCourse();
  }, []);
  
  
  const loadStudent = async () => {
    const res = await axios.get(`http://localhost:8080/findstudentbycourseid/${course_id}`);    
    setStudent(res.data.reverse());
  };

  const loadCourse = async () => {
    const res = await axios.get(`http://localhost:8080/getcoursebyid/${course_id}`);
    setCourse(res.data);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/intitutehome/institutecoursecontroller">
        Back To Courselist
      </Link>
      <h1 className="display-4">Course name: {course.course_name}</h1>
      <hr />
      <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Sr.no</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>                               
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default InstituteCourseEnrollList;