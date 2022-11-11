import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const InstituteCourseController = () => {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  let user = JSON.parse(localStorage.getItem('loggedinuser'))
  console.log(user.user_id);

  const loadCourses = async () => {
    const result = await axios.get("http://localhost:8080/getallcoursesinstitutewise/" + user.user_id);
    setCourse(result.data.reverse());
  };

  const deleteCourse = async course_id=> {
    await axios.delete(`http://localhost:8080/deletecourse/${course_id}`);
    loadCourses();
  };

  return (
    <div className="container">
      <div className="py-4">
        
        <h1>Course List</h1>
        <Link type="button" className="btn btn-secondary"  style={{"margin-right":"-425"}} to="/institutecoursecontroller/institutecourseinsert">Add Course</Link>
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

                <td>  <Link class="btn btn-primary mr-2" to={`/institutecoursecontroller/institutecourseview/${course.course_id}`}>
                    View
                  </Link>
                  <Link class="btn btn-primary mr-2" to={`/institutecourseenrolllist/${course.course_id}`}>
                    Enroll List
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/institutecoursecontroller/institutecourseupdate/${course.course_id}`}
                  >
                    Update
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteCourse(course.course_id)}
                  >
                    Delete
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

export default InstituteCourseController;