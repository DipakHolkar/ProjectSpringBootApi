import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllRegisterStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  let user = JSON.parse(localStorage.getItem('loggedinuser'))
  console.log("Institutehome"+user.user_id);

  const loadStudents = async () => {
    const result = await axios.get(`http://localhost:8080/allregisterstudent`);
    console.log(result);
    setStudents(result.data);
  };
 
   
  return (
    <div className="container">
      <div className="py-4">
        
        <h1>Students List </h1>
   {/* <Link type="button" className="btn btn-secondary"  style={{"margin-right":"-425"}} to="/courses/add">Add Course</Link>*/}
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Qualification</th>
              <th scope="col">EmailId</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
          {students.map((students, index) => ( 
              <tr>
                
                <td>{students.firstname}</td>
                <td>{students.lastname}</td>
                <td>{students.qualification}</td>
                <td>{students.emailid}</td>
                <td>{students.contactno}</td>
                
              </tr>
          ))}
          </tbody>
        </table>
       
      </div>
    </div>
  );
};

export default AllRegisterStudents;