import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const UpdateStudent = () => {
  let history = useHistory();
  
  const { student_id } = useParams();
  console.log(student_id);
  const [student, setStudent] = useState({
    firstname : "",
    lastname : "",
    qualification: "",
    emailid : "",
    contactno : ""
     
  });

  const { firstname, lastname, qualification,emailid, contactno} = student;
  const onInputChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadStudentsInfo();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/updatestudent/${student_id}`, student);
    history.push("/StudentProfile");
  };

  const loadStudentsInfo = async () => {
      console.log(student_id);
    const result = await axios.get(`http://localhost:8080/getStudentById/${student_id}`);
    setStudent(result.data);
  };
  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Update Students</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Student  Name"
            name="firstname"
            value={firstname}
            onChange={e => onInputChange(e)}
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter LastName"
            name="lastname"
            value={lastname}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Qualification"
            name="qualification"
            value={qualification}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Email Id"
            name="emailid"
            value={emailid}
            onChange={e => onInputChange(e)}
          />
           </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter contact_num"
            name="contactno"
            value={contactno}
            onChange={e => onInputChange(e)}
          />
        </div>
          <button className="btn btn-warning btn-block">Update Student</button>
        </form>
      </div>
    </div>
  );
};

 
export default UpdateStudent;