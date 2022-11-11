import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";

import './adminhome.css'
import AdminInstituteController from "./AdminInstituteController";
import AdminFeedbackView from "./AdminFeedbackView";
import InstituteFeedback from "./InstituteFeedback";
import AdminInstituteUpdate from "./AdminInstituteUpdate";
import AllRegisterStudents from './AllRegisterStudents'
function Adminhome() {
    const LinkStyle = {
        color: 'black',
    }
    return (
        <Router>
            <div className='innerContainer'>
                <div className="sidenavbar">
                    <div className="sidenavbarItem">
                        <div className='NavBarContaineritem'>
                            <Link className='dashboardsidelink' style={LinkStyle} to='/adminhome/student'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                            </svg> Student</Link>
                        </div>
                        <div className='NavBarContaineritem'>
                            <Link className='dashboardsidelink' style={LinkStyle} to='/adminhome/institute'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" fill="currentColor" class="bi bi-view-list" viewBox="0 0 16 16">
                                <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z" />
                            </svg> Institute</Link>
                        </div>
                        <div className='NavBarContaineritem'>
                            <Link className='dashboardsidelink' style={LinkStyle} to='/adminhome/getfeedback'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" fill="currentColor" class="bi bi-chat-square-text" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            </svg> Feedback</Link>
                        </div>
                    </div>
                    <div className='sidebarcontainer'>

                        <Switch>

                            <Route path='/adminhome/institute' component={AdminInstituteController}></Route>
                            <Route path='/adminhome/getfeedback' component={InstituteFeedback}></Route>
                            <Route path='/adminhome/student' component={AllRegisterStudents}></Route>
                            <Route path="/institutewisefeedback/:institute_id" component={AdminFeedbackView}></Route>
                            <Route path='/updatebyinstitute/:institute_id' component={AdminInstituteUpdate}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Adminhome;