import React, { useState ,useEffect} from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
const Feedback = () => {
  let history = useHistory();
  const { course_id } = useParams();
  const { institute_id } = useParams();
  console.log(course_id);
  const [studFeedback, setFeedback] = useState({

    feedback: "",
    feedback_date: ""

  });

  //const { institute_id } = useParams();
  
  let user = JSON.parse(localStorage.getItem('loggedinuser'))
  console.log(user.user_id);

  const { feedback, feedback_date } = studFeedback;
  const onInputChange = e => {
    setFeedback({ ...studFeedback, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    
    loadCourses();
  }, []);

  const loadCourses = async () => {
   
    const result = await axios.get(`http://localhost:8080/getcoursebyid/${course_id}` );
    console.log("res",result.institute_id)
    // setCourse(result.data.reverse());
  }; 
  
  const onSubmit = async e => {
    e.preventDefault();
  
    await axios.post("http://localhost:8080/postfeedback", {

      student_id: user.user_id,
      institute_id: institute_id,
      course_id:course_id ,
      feedback: feedback,
      feedback_date: feedback_date



    });
   // alert.show('Thank you for your feedback!')
   alert(" Thanks for your feedback");
     history.push("/studentcoursecontroller/"+institute_id);


  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Give Feedback</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your feedback"
              name="feedback"
              value={feedback}
              onChange={e => onInputChange(e)}
            />
          </div>

          <input type="date" className="form-control form-control-lg" name="feedback_date" value={feedback_date}
            onChange={e => onInputChange(e)}></input>

          <button type ="submit"className="btn btn-primary btn-block" >Send Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;