import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const InstituteCourseUpdate = () => {
  let history = useHistory();
  const { course_id } = useParams();
  console.log(course_id);
  const [course, setCourse] = useState({
    course_name : "",
    course_duration : "",
    course_details: "",
    course_fees : "",
    course_info : "",
  });

  const { course_name, course_duration, course_details,course_fees , course_info} = course;
  const onInputChange = e => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCourse();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/updatecourse/${course_id}`, course);
    history.push("/intitutehome/institutecoursecontroller");
  };

  const loadCourse = async () => {
      console.log(course_id);
    const result = await axios.get(`http://localhost:8080/getcoursebyid/${course_id}`);
    setCourse(result.data);
  };
  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Update Course</h2>
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
          <button className="btn btn-warning btn-block">Update Course</button>
        </form>
      </div>
    </div>
  );
};

export default InstituteCourseUpdate;