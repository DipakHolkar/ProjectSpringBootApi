

import React, { useEffect, useState } from 'react'
function EditCourse() {

const [allcourselist, setallcourselistlist] = useState([])
const [course_name, setCourseName] = useState('')
const [course_duration, setCourseduration] = useState('')
const [course_details, setCoursedetails] = useState('')
const [course_fees, setCoursefees] = useState('')
const [course_info, setcourseinfo] = useState('')

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("http://localhost:4000/todo").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setName(resp[0].name)
        setMobile(resp[0].mobile)
        setEmail(resp[0].email)
        setUserId(resp[0].id)
      })
    })
  }

  function deleteUser(id) {
    fetch(`http://localhost:4000/todo/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function selectUser(id)
  {
    let item=users[id-1];
    setName(item.name)
        setEmail(item.email)
        setMobile(item.mobile);
        setUserId(item.id)
  }
  function updateUser()
  {
    let item={name,mobile,email}
    console.warn("item",item)
    fetch(`http://localhost:4000/todo/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  return (
    <div className="App">
      <h1>Update Course</h1>
      <table border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
          <th>Course name</th>
                        <th>Course Duration</th>
                        <th>Course details</th>
                        <th>Course Fees</th>
                        <th>update</th>
                        <th>Delete</th>
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                    <td>{val.course_name}</td>
                    <td>{val.course_duration}</td>
                    <td>{val.course_info}</td>
                    <td>{val.course_fees}</td>
                <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                <td><button onClick={() => selectUser(item.id)}>Update</button></td>

              </tr>
            )
          }
        </tbody>
      </table>
      <div>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br />
        <input type="text" value={mobile}  onChange={(e)=>{setMobile(e.target.value)}} /> <br /><br />
        <button onClick={updateUser} >Update User</button>  
      </div>
    </div>
  );
}
export default EditCourse;