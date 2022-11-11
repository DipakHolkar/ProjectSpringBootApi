import React, { Component } from 'react'
import { Link } from "react-router-dom";

import '../services/css/styleone.css'
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

let StudentHome = () => {

    const [intitutes, setInstitutes] = useState([]);
    let user = JSON.parse(localStorage.getItem('loggedinuser'))
    const history = useHistory();
    
    useEffect( ()=> {
        
        fetch("http://localhost:8080/getallintitutes")
        .then( resp =>  resp.json() )
        .then( data =>  setInstitutes(data) )
    },[]);

    function handleClick() {
        history.push("/studentprofile");
      }
    
    return (
        <div className="container">
            <h1> Intitutes </h1>
            <h2>Welcome:{user.username}</h2>
            <div class="text-right"> 
            <button class="btn btn-primary mr-2" type="button" onClick={handleClick}>
             Student Info
            </button>
            </div>
            <div className='studenthome'>
            <table className="table table-bordered">
            <thead class="thead-dark">
            <tr>
              <th scope="col">Sr.no</th>
              <th scope="col">Institute Name</th>
              <th scope="col">Address</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
                {
                    intitutes.map((v,i)=>{
                        return (

                            <tr >
                                <td >{i+1}</td>
                                <td className='instituteNames'>{v.instituteName}</td>
                                <td>{v.address}</td>
                               {/*  <td>{ <a href="institutecourseinfo" style={{ marginTop: '10px', width: '50%',fontColor:'green' }}   >View Course</a>}</td>*/}
                               <td>  <Link class="btn btn-outline-primary mr-2" to={`/studentcoursecontroller/${v.user.user_id}`}> View Courses</Link> </td>
                            </tr>
                        )
                    })
                }
                 </tbody>
            </table>
           

          </div>

        </div>
    )
}

export default StudentHome;