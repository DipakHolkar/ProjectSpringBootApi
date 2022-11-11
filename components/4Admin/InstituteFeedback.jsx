import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const InstituteFeedback = () => {
    const [allinstitutelist, setAllinstitutelist] = useState([])
    const [instituteName,setInstituteName] = useState('')
    const [address,setAddress] = useState('')
    const [emailId,setEmailId] = useState('')
    const [contactNum,setContactNum] = useState('')
    const [authorizationStatus,setAuthorizationStatus]= useState('');
    
       
    
   

    useEffect( ()=> {
        
        fetch("http://localhost:8080/getallintitutes")
        .then( resp =>  resp.json() )
        .then( data =>  setAllinstitutelist(data) )
        
    },[]);

   
    const inputstyle = {
        color: 'black',
        background: 'transparent',
    }
   
   
    

    return (
        <div>
            <h1>Intitutes wise feedback</h1>
            <hr />

            
            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>AuthorizationStatus</th>
                        <th>View Feedback</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <React.Fragment>
                        {allinstitutelist ? allinstitutelist.map((val,i) => {

                            return (<tr key={i}>
                                <td>{val.instituteName}</td>
                                <td>{val.contactNum}</td>
                                <td>{val.address}</td>
                                <td>{val.emailId}</td>
                                <td>{val.authorizationStatus}</td>
                                
                                {/* <td><button type="button" class="btn btn-info" to="/adminhome/getfeedback/institutewise/institute_id">Veiw</button></td> */}
                                <td> <Link className="btn btn-primary mr-2" to={`/institutewisefeedback/${val.user.user_id}`}>View</Link>  </td>
                            </tr>)
                        }) : <h5> No Data Found-*</h5>}
                    </React.Fragment>
                </tbody>
            </table>
        </div>
    )
}

export default InstituteFeedback;