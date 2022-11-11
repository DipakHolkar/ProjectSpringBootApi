import React, { Component } from 'react'

import '../services/css/styleone.css'
import { useEffect, useState } from "react";


let InstituteWiseCourse = () => {
    const [ courselist, setAllcourselist] = useState([])
    let user = JSON.parse(localStorage.getItem('loggedinuser'))

    useEffect( ()=> {
        
        fetch("http://localhost:8080/getallcoursesinstitutewise/"+user.user_id)
        .then( resp =>  resp.json() )
        .then( data =>   setAllcourselist(data) )
    },[]);
    return (
        // <div>
        //     <h1> Course list </h1>

        //     <div className='studenthome'>
        //     <table className="table table-bordered">
        //         <tr>
        //             <th>Sr No.</th>
        //             <th>Course Name</th>
        //             <th>Course Duration</th>
        //             <th>Course Details</th>
        //             <th>Select your Course</th>
        //         </tr>
        //         <tr>
        //             <td>1</td>
        //             <td>PGDAC</td>
        //             <td>6</td>
        //             <td>The course is targeted towards engineering graduates and MCA/MSc who wish to venture into the domain of advanced computing. </td>
        //             <td><a href="">Book</a></td>
        //         </tr>
        //     </table>


        //   </div>

        // </div>

        <div className='container'>
            <h2 className='text-center'>These are the courses provided by KNOW IT</h2>
            <div className="row">
                <table className='table table-striped table-bordered '>
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Course Name</th>
                            <th>Course Duration</th>
                            <th>Course Details</th>
                            <th>Enroll for your Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             courselist.map(
                                 c =>
                             <tr key={c.s_Id}>
                                     <td>{c.courseName}</td>
                                     <td ></td>
                                     <td ></td>
                                     <td > </td>
                                     <td><a href="/" className="btn btn-warning">Enroll Now</a></td>
                             </tr>
                        
                            
                            )
                        }
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default InstituteWiseCourse;