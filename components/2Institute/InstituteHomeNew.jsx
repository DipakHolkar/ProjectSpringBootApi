import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const InstituteHomeNew = () => {
  const [institute, setInstitute] = useState([]);

  useEffect(() => {
    loadInstitute();
  }, []);

  let user = JSON.parse(localStorage.getItem('loggedinuser'))
  console.log("Institutehome"+user.user_id);

  const loadInstitute = async () => {
    const result = await axios.get(`http://localhost:8080/getInstituteById/${user.user_id}`);
    console.log(result);
    setInstitute(result.data);
  };
 
  const deleteInstitute = async institute_id=> {
    await axios.delete(`http://localhost:8080/deleteInstitute/${institute_id}`);
    loadInstitute();
  }; 

  return (
    <div className="container">
      <div className="py-4">
        
        <h1>Institute </h1>
   {/* <Link type="button" className="btn btn-secondary"  style={{"margin-right":"-425"}} to="/courses/add">Add Course</Link>*/}
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              
              <th scope="col">Institute Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email Id</th>
              <th scope="col">Contact Details</th>
              <th scope="col">Action</th>


              {/* <th scope="col">authorization_status</th>*/}
            </tr>
          </thead>
          <tbody>
          {/*  {institute.map((institute, index) => (*/}
              <tr>
                
                <td>{institute.instituteName}</td>
                <td>{institute.address}</td>
                <td>{institute.emailId}</td>
                <td>{institute.contactNum}</td>
                {/*<td>{institute.authorization_status}</td>*/}
              <td> {/* <Link class="btn btn-primary mr-2" to={`/institute/${institute.institute_id}`}>
                    View
            </Link>*/}
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/institute/${user.user_id}`}
                  >
                    update
                  </Link>

                   {/* <Link
                    class="btn btn-danger"
                    //onClick={() => deleteInstitute(institute.institute)}
                  >
                    Delete
                  </Link>*/}
                </td>
              </tr>
           
          </tbody>
        </table>
       
      </div>
    </div>
  );
};

export default InstituteHomeNew;