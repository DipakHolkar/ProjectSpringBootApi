import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CourseInfo = () => {
    const [allcourselist, setallcourselistlist] = useState([])
    const [cID,setCourseID]=useState('')
    const [course_name, setCourseName] = useState('')
    const [course_duration, setCourseduration] = useState('')
    const [course_details, setCoursedetails] = useState('')
    const [course_fees, setCoursefees] = useState('')
    const [course_info, setcourseinfo] = useState('')
    let user = JSON.parse(localStorage.getItem('loggedinuser'))
  

    const onChangeName = (e) => {
        const course_name = e.target.value;
        setCourseName(course_name)
    };

    const onChangecourseduration = (e) => {
        const course_duration = e.target.value;
        setCourseduration(course_duration)
    }
    const onChangeCourseDetails = (e) => {
        const course_details = e.target.value;
        setCoursedetails(course_details);
    }

    const onChangefees = (e) => {
        const course_fees = e.target.value;
        setCoursefees(course_fees)
    }

    const onChangecourseinfo = (e) => {
        const course_info = e.target.value;
        setcourseinfo(course_info);
    }






    useEffect(() => {

        fetch("http://localhost:8080/getallcoursesinstitutewise/" + user.user_id)
            .then(resp => resp.json())
            .then(data => setallcourselistlist(data))
          
      
           
    }, [])
   
    const setupdateCourseID = (cID) => {
        alert(cID)
        const ID = cID
        setCourseID(ID)
        var item=allcourselist[cID];
        setCourseName(item.course_name)
        setCourseduration(item.course_duration)
        setCoursefees(item.course_fees)
        setcourseinfo(item.course_info)
        setCoursedetails(item.course_details)
    }

    const updatecourse=(cID)=>
    
    {
        alert("hello")
        alert(cID);
       
        
    
        

      var item={course_name,course_duration,course_fees,course_info,course_details}
      console.log("item",item)
      fetch(`http://localhost:8080/updatecourse/${user.course_id}`, {
        method: 'PUT',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(item)
      }).then((result) => {
        result.json().then((resp) => {
            fetch("http://localhost:8080/getallcoursesinstitutewise/" + user.user_id)
            .then(resp => resp.json())
            .then(data => setallcourselistlist(data))
        })
      })
    }

    const deletecourse = (deleteCourseId) => {
        alert(deleteCourseId);
        if (window.confirm("Delete the item?")) {
            fetch("http://localhost:8080/deletecourse/" + deleteCourseId, { method: 'DELETE' }
            )
                .then((response) => {
                    alert("Deleted Member Successfully")
                    fetch("http://localhost:8080/getallcoursesinstitutewise/" + user.user_id)
                        .then(resp => resp.json())
                        .then(data => setallcourselistlist(data))
                })
        }
    }

    const inputstyle = {
        color: 'black',
        background: 'transparent',
    }

    const saveCourseInfo = () => {


        axios.post("http://localhost:8080/addcourse", {

            institute_id: user.user_id,
            course_name: course_name,
            course_duration: course_duration,
            course_details: course_details,
            course_info: course_info,
            course_fees: course_fees,

        })
            .then((response) => {
                alert("Institute  Added")
                fetch("http://localhost:8080/getallcoursesinstitutewise/" + user.user_id)
                    .then(resp => resp.json())
                    .then(data => setallcourselistlist(data))

            })


        setCourseName("")
        setCourseduration("")
        setCoursefees("")
        setcourseinfo("")
        setCoursedetails("")

    };




    return (
        <div>
            <h1>Courses</h1>
            <hr />
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add
            </button>



            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">ADD Course</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='addmembersform'>
                                <form >
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label htmlFor='course_name'>Course  Name</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='course_name'
                                                value={course_name}
                                                onChange={onChangeName}
                                            ></input>
                                        </div>

                                        <div className='col-md-4'>
                                            <label htmlFor='course_duration'>course duration</label>
                                            <input
                                                style={inputstyle}
                                                type='number'
                                                className='form-control form-control-sm'
                                                name='course_duration'
                                                value={course_duration}
                                                onChange={onChangecourseduration}
                                            ></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='course_details'>Course Details</label>
                                            <textarea
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='course_details'
                                                value={course_details}
                                                onChange={onChangeCourseDetails}
                                            ></textarea>
                                        </div>

                                        <div className='col-md-4'>
                                            <label htmlFor='course_info'>Course Information</label>
                                            <textarea
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='course_info'
                                                value={course_info}
                                                onChange={onChangecourseinfo}
                                            ></textarea>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='contact'>Course fees</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='course_fees'
                                                value={course_fees}
                                                onChange={onChangefees}
                                            ></input>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={saveCourseInfo} data-dismiss="modal"  >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update Course</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div >
                                <form >
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label htmlFor='course_name'>Course  Name</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='course_name'
                                                value={course_name}
                                                onChange={onChangeName}
                                            ></input>
                                        </div>

                                        <div className='col-md-4'>
                                            <label htmlFor='course_duration'>course duration</label>
                                            <input
                                                style={inputstyle}
                                                type='number'
                                                className='form-control form-control-sm'
                                                name='course_duration'
                                                value={course_duration}
                                                onChange={onChangecourseduration}
                                            ></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='course_details'>Course Details</label>
                                            <textarea
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='course_details'
                                                value={course_details}
                                                onChange={onChangeCourseDetails}
                                            ></textarea>
                                        </div>

                                        <div className='col-md-4'>
                                            <label htmlFor='course_info'>Course Information</label>
                                            <textarea
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='course_info'
                                                value={course_info}
                                                onChange={onChangecourseinfo}
                                            ></textarea>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='contact'>Course fees</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='course_fees'
                                                value={course_fees}
                                                onChange={onChangefees}
                                            ></input>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={()=>{updatecourse(cID)}} data-dismiss="modal"  >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>




            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Course name</th>
                        <th>Course Duration</th>
                        <th>Course details</th>
                        <th>Course Fees</th>
                        <th>update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <React.Fragment>
                        {allcourselist ? allcourselist.map((val, i) => {

                            return (<tr key={i}>
                                <td>{val.course_name}</td>

                                <td>{val.course_duration}</td>
                                <td>{val.course_info}</td>
                                <td>{val.course_fees}</td>


                                <td><button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#updateModal" onClick={()=>{setupdateCourseID(val.course_id)}}>update</button></td>
                                <td><button type="button" class="btn btn-danger" onClick={() => { deletecourse(val.course_id) }}>Delete</button></td>
                            </tr>)
                        }) : <h5> No Data Found-*</h5>}


                    </React.Fragment>
                </tbody>
            </table>
        </div>
    )
}

export default CourseInfo;