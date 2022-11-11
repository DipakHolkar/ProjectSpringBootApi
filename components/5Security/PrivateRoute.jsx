import React from "react";
import { Route,Redirect } from "react-router-dom";
const PrivateRoute=({Children,...rest})=>{
    let isAuth=false;
    let user = JSON.parse(localStorage.getItem('loggedinuser'))
    if(user!=null){
        isAuth=true;
    }
    return(<Route{...rest} render={()=>isAuth?(Children):(<Redirect  to="/"/>)}/>);
}
export default PrivateRoute;