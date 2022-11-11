import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const InstituteCourseInsert = () => {
  let history = useHistory();
  const [course, setCourse] = useState({
    course_name : "",
    course_duration : "",
    course_details: "",
    course_fees : "",
    course_info : "",
    
  });

  let user = JSON.parse(localStorage.getItem('loggedinuser'))
  console.log(user.user_id);

  const { course_name, course_duration, course_details,course_fees , course_info} = course;
  const onInputChange = e => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8080/addcourse", {

        institute_id: user.user_id,
        course_name: course_name,
        course_duration: course_duration,
        course_details: course_details,
        course_info: course_info,
        course_fees: course_fees,
      

    });
    history.push("/intitutehome/institutecoursecontroller");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Course</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Course  Name"
              name="course_name"
              value={course_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter course duration"
              name="course_duration"
              value={course_duration}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Course Details"
              name="course_details"
              value={course_details}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Course fees"
              name="course_fees"
              value={course_fees}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Course Information"
              name="course_info"
              value={course_info}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Course</button>
        </form>
      </div>
    </div>
  );
};

export default InstituteCourseInsert;