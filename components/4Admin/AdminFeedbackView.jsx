import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";



const AdminFeedbackView = () => {
    const { institute_id } = useParams();
      const inputstyle = {
        color:'black',
        background: 'transparent',
    }
      const linkstyle = {
        color:'black',
        background: 'green',
    }
    

    const [allfeedbacklist, setAllFeedbackList] = useState([])
    useEffect(() => {
        loadFeedbacks();
      }, []);

      const loadFeedbacks = async () => {
        const result = await axios.get(`http://localhost:8080/getallfeedbackinstitutewise/${institute_id}` );
        setAllFeedbackList(result.data);
      }; 

    return(
        <div>
            <h1>Feedback Management</h1>
            <hr/>
                    
                    <table className='table'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>FeedID</th>
                                <th>Student Name</th>
                                <th>Course Name</th>
                                
                                <th>Feedback</th>
                                <th>Feedback date</th>

                            </tr>
                        </thead>
                        <tbody>
                            <React.Fragment>
                             {allfeedbacklist ? allfeedbacklist.map((val) => {
                                return <tr>
                               <td>{val.feedback_id}</td>
                                <td>{val.student.firstname +" " +val.student.lastname }</td>
                                <th>{val.course.course_name}</th>
                                <td>{val.feedback}</td>
                                <td>{val.feedback_date}</td>
                             
                              
                            </tr>
                            } ) : <h5> No Data Found-*</h5>}
                        </React.Fragment>
                        </tbody>
                    </table>
        </div>
    )
}



export default AdminFeedbackView;