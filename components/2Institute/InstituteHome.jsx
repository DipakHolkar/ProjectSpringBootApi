import React, { Component } from 'react'
import '../services/css/styleone.css'
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";

import InstituteCourseController from './InstituteCourseController';
import InstituteCourseInsert from './InstituteCourseInsert';
import InstituteCourseView from './InstituteCourseView';
import InstituteCourseUpdate from './InstituteCourseUpdate';
import GetFeedback from './GetFeedback';
import InstituteHomeNew from './InstituteHomeNew';
import UpdateInstituteNew from './UpdateInstituteNew';
import InstituteCourseEnrollList from './InstituteCourseEnrolllist';


function InstituteHome() {
    const LinkStyle = {
        color: 'black',
    }
    return (
        <Router>
            <div className='innerContainer'>
                <div className="sidenavbar">
                    <div className="sidenavbarItem">
                        <div className='NavBarContaineritem'>
                            <Link className='dashboardsidelink' style={LinkStyle} to='/intitutehome/institutecoursecontroller'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                            </svg> Course</Link>
                        </div>
                        <div className='NavBarContaineritem'>
                            <Link className='dashboardsidelink' style={LinkStyle} to='/InstituteHomeNew'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                            </svg>Institute</Link>
                        </div>

                        {/* <div className='NavBarContaineritem'>
                            <Link className='dashboardsidelink' style={LinkStyle} to='/adminhome/institute'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" fill="currentColor" class="bi bi-view-list" viewBox="0 0 16 16">
                                <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z" />
                            </svg> View Student</Link>
                        </div> */}
                    </div>

                    <div className='sidebarcontainer'>

                        <Switch>

                            <Route path='/intitutehome/institutecoursecontroller' component={InstituteCourseController}></Route>
                            <Route path="/institutecoursecontroller/institutecourseinsert" component={InstituteCourseInsert}></Route>
                            <Route path="/institutecoursecontroller/institutecourseview/:course_id" component={InstituteCourseView}></Route>                            
                            <Route path="/institutecoursecontroller/institutecourseupdate/:course_id" component={InstituteCourseUpdate}></Route>
                            <Route path='/adminhome/getfeedback' component={GetFeedback}></Route> 

                            <Route path="/InstituteHomeNew" component={ InstituteHomeNew }></Route>
                            <Route path="/institute/:institute_id" component={UpdateInstituteNew}></Route>
                            <Route path='/adminhome/student' ></Route>
                            <Route path="/institutecourseenrolllist/:course_id" component={InstituteCourseEnrollList}></Route>
                                                   
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default InstituteHome;