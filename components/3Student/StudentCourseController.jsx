import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const StudentCourseController = () => {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const { institute_id } = useParams();

  const loadCourses = async () => {
    const result = await axios.get("http://localhost:8080/getallcoursesinstitutewise/" + institute_id);
    setCourse(result.data.reverse());
  }; 

  return (
    <div className="container">
      <div className="py-4">
        
        <h1>Course List</h1>        
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Sr.no</th>
              <th scope="col">Course name</th>
              <th scope="col">Course Duration</th>
              {/* <th scope="col">Course details</th>
              <th scope="col">Course Information</th>
              <th scope="col">Course fees</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{course.course_name}</td>
                <td>{course.course_duration}</td>
                {/* <td>{course.course_details}</td>
                <td>{course.course_info}</td>
                <td>{course.course_fees}</td>*/}

                <td>  <Link class="btn btn-info mr-2" to={`/studentcoursecontrolle/studentcourseview/${course.course_id}`}>
                    View
                  </Link>
                  <Link class="btn btn-primary mr-2" to={`/studentcoursecontrolle/studentcourseenroll/${course.course_id}`}>
                    Enroll
                  </Link>
                  <Link class="btn btn-primary mr-2" to={`/studentcoursecontrolle/givefeedback/${institute_id}/${course.course_id}`}>
                    Give Feedback
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       
      </div>
    </div>
  );
};

export default StudentCourseController;