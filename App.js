import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Homepage from './components/0NavBar/HomePage';
import Header from './components/0NavBar/Header';

import Signup from './components/1DashBoard/Signup';
import StudentRegister from './components/1DashBoard/StudentRegister';
import InstituteRegister from './components/1DashBoard/InstituteRegister';
import Login from './components/1DashBoard/Login';

import InstituteHome from './components/2Institute/InstituteHome';

import StudentHome from './components/3Student/StudentHome';
import StudentCourseController from './components/3Student/StudentCourseController';
import StudentCourseView from './components/3Student/StudentCourseView';

import Adminhome from './components/4Admin/Adminhome';

import PrivateRoute from './components/5Security/PrivateRoute';
import Feedback from './components/3Student/Feedback';
import AdminFeedbackView from './components/4Admin/AdminFeedbackView';

import StudentCourseEnroll from './components/3Student/StudentCourseEnroll';
import StudentProfile from './components/3Student/StudentProfile';
import UpdateStudent from './components/3Student/UpdateStudent';
import Aboutus from './components/0NavBar/Aboutus'


function App(props) {
  return (

    <div>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path='/' component={Homepage} ></Route>

            <Route path="/signup" component={Signup}></Route>
            <Route path="/instituteregister" component={InstituteRegister}></Route>
            <Route path="/studentregister" component={StudentRegister}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/aboutus" component={Aboutus}></Route>

            <PrivateRoute path="/intitutehome" component={InstituteHome}></PrivateRoute>

            <PrivateRoute path="/studenthome" component={StudentHome}></PrivateRoute>
            <Route path="/studentcoursecontroller/:institute_id" component={StudentCourseController}></Route>
            <Route path="/studentcoursecontrolle/studentcourseview/:course_id" component={StudentCourseView}></Route>
            <Route path="/studentcoursecontrolle/studentcourseenroll/:course_id" component={StudentCourseEnroll}></Route>
            <Route path="/studentprofile" component={StudentProfile}></Route>
            <Route path="/student/:student_id" component={UpdateStudent}></Route>


            <PrivateRoute path="/adminhome" component={Adminhome}></PrivateRoute>

            <Route path="/studentcoursecontrolle/givefeedback/:institute_id/:course_id" component={Feedback}></Route>
            {/* <Route path="/institutewisefeedback/:institute_id" component={AdminFeedbackView}></Route> */}

          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
