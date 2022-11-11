import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const StudentProfile = () => {
  const [student, setStudent] = useState([]);
  const history = useHistory();

  useEffect(() => {
    loadStudent();
  }, []);

  let user = JSON.parse(localStorage.getItem('loggedinuser'))
  console.log("Studenthome" + user.user_id);
  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8080/getStudentById/${user.user_id}`);
    console.log(result);
    setStudent(result.data);
  };
  function handleClick() {
    history.push("/studenthome");
  }

  return (
    <div className="container">
      <div className="py-4">
        <h1>Student Information </h1>
        <div class="text-right"> 
        <button class="btn btn-primary mr-2" type="button" onClick={handleClick}>
            Main Page
            </button>
            </div>
            
        <table class="table border shadow" >
          <thead class="thead-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Qualification</th>
              <th scope="col">EmailID</th>
              <th scope="col">Contact</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>

            <tr>

              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.qualification}</td>
              <td>{student.emailid}</td>
              <td>{student.contactno}</td>
              <td>
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/student/${user.user_id}`}
                >
                  update
                  </Link>
              </td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
  );
};

export default StudentProfile;