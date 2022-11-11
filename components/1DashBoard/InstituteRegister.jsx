import React, { useReducer, useState } from "react";

import '../services/css/Style.css'
import { useHistory} from "react-router-dom";




const init =
{
    username: { value: "", hasError: true, touched: false, error: "" },
    password: { value: "", hasError: true, touched: false, error: "" },
    instituteName: { value: "", hasError: true, touched: false, error: "" },
    address: { value: "", hasError: true, touched: false, error: "" },
    emailId: { value: "", hasError: true, touched: false, error: "" },
    contactNum: { value: "", hasError: true, touched: false, error: "" },
    authorizationStatus: { value: "", hasError: true, touched: false, error: "" },
    isFormValid: false
}

const validateData = (name, value) => {
    let hasError = false, error = "";
    switch (name) {
        case "username":
            let uname = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
            if (!uname.test(value)) {
                hasError = true;
                error = "Username must be email id"
            }
            break;

        case "password":
            let pass = /^[a-z]+@+[0-9]{3}$/;
            if (!pass.test(value)) {
                hasError = true;
                error = "Password should be ex:- prana@123 in this form "
            }
            break;
        case "address":
            let add = /^[a-zA-Z]+$/;
            if (!add.test(value)) {
                hasError = true;
                error = "Enter Address"
            }
            break;

        case "emailId":
            let email = /^[a-z]+[0-9]+@[a-z]+\.[a-z]+$/;
            if (!email.test(value)) {
                hasError = true;
                error = "email ex:- abcd123@xyz.pqr"
            }
            break;
        case "contactNum":
            let contact = /^[0-9]{10}$/;
            if (!contact.test(value)) {
                hasError = true;
                error = "contact number should of 10 digits"
            }
            break;


    }
    return { hasError, error }

}

const reducer = (state, action) => {
    //console.log(state);
    switch (action.type) {
        case 'update': {
            const { name, value, hasError, error, touched, isFormValid } = action.data;
            return {
                ...state,
                [name]: { ...state[name], value, hasError, error, touched },
                isFormValid
            }   //modifying and returning new object as state
        }
        case 'clear': {
            return init;
        }
    }
}

function InstituteRegister() {
    let history = useHistory();
    const [state, dispatch] = useReducer(reducer, init)
    
    const [flag, setFlag] = useState(false);

    const onFocusOut = (name, value, dispatch) => {
        const { hasError, error } = validateData(name, value)
        let isFormValid = true
        for (const key in state) {
            const item = state[key]
            if (key === name && hasError) {
                isFormValid = false
                break
            } else if (key !== name && item.hasError) {
                isFormValid = false
                break
            }
        }
        dispatch({
            type: "update",
            data: { name, value, hasError, error, touched: true, isFormValid },
        })
    }

    const onInputChange = (name, value, dispatch) => {

        const { hasError, error } = validateData(name, value);

        let isFormValid = true;
        for (const key in state) {
            let item = state[key];

            if (item.hasError) {
                isFormValid = false;
                break;
            }
        }

        dispatch({ type: 'update', data: { name, value, hasError, error, touched: true, isFormValid } })
    }

    const handleChange = (e) => {
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({ [nm]: val });
    };

    const submitData = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/registerinstitute",
            {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    username: state.username.value,
                    password: state.password.value,

                    instituteName: state.instituteName.value,
                    address: state.address.value,

                    emailId: state.emailId.value,
                    contactNum: state.contactNum.value,
                    authorizationStatus:"Pending",

                })
            }).then(() => { alert("Institute registerd Sucessfully") })

            history.push("/login");

    }


    return (

        <div className="form">

            
            <h2>Institute Registration</h2>

            <form className="form-body">


                <div>
                    <label className="form__label">Enter Username: </label>
                    <input className="form__input" type="text" name="username" placeholder="name@gmail.com" onChange={(e) => { onInputChange("username", e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("username", e.target.value, dispatch) }} />
                    <p style={{ display: state.username.touched && state.username.hasError ? "block" : "none", color: "red" }}>{state.username.error}</p>
                </div>
                <div>
                    <label className="form__label">Enter Password:</label>
                    <input className="form__input" type="password" name="password" placeholder="firstname@123" onChange={(e) => { onInputChange("password", e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("password", e.target.value, dispatch) }} />
                    <p style={{ display: state.password.touched && state.password.hasError ? "block" : "none", color: "red" }}>{state.password.error}</p>
                </div>


                <div>
                    <label className="form__label" >Enter Institute name:</label>
                    <input className="form__input" type="text" name="institute_name" placeholder="Enter Institute" onChange={(e) => { onInputChange("instituteName", e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("instituteName", e.target.value, dispatch) }} />
                    <p style={{ display: state.instituteName.touched && state.instituteName.hasError ? "block" : "none", color: "red" }}>{state.instituteName.error}</p>
                </div>

                <div>

                    <label className="form__label">Enter address:</label>
                    <input className="form__input" type="text" name="address" placeholder="Enter address" onChange={(e) => { onInputChange("address", e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("address", e.target.value, dispatch) }} />
                    <p style={{ display: state.address.touched && state.address.hasError ? "block" : "none", color: "red" }}>{state.address.error}</p>
                </div>

                <div>
                    <label className="form__label">Enter Emailid</label>
                    <input className="form__input" type="email" name="emailId" placeholder="firstname123@gmail.com" onChange={(e) => { onInputChange("emailId", e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("emailId", e.target.value, dispatch) }} />
                    <p style={{ display: state.emailId.touched && state.emailId.hasError ? "block" : "none", color: "red" }}>{state.emailId.error}</p>
                </div>



                <div>
                    <label className="form__label">Enter Mobile Number</label>
                    <input className="form__input" type="number" name="contact_num" placeholder="Enter Mobile No." onChange={(e) => { onInputChange("contactNum", e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("contactNum", e.target.value, dispatch) }} />
                    <p style={{ display: state.contactNum.touched && state.contactNum.hasError ? "block" : "none", color: "red" }}>{state.contactNum.error}</p>
                </div>

                {/* <div>
                    <label className="form__label">Enter Authorization Status</label>
                    <input className="form__input" type="text" name="authorization_status" placeholder="Enter Authorization Status." onChange={(e) => { onInputChange("authorizationStatus", e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("authorizationStatus", e.target.value, dispatch) }} />
                    <p style={{ display: state.authorizationStatus.touched && state.authorizationStatus.hasError ? "block" : "none", color: "red" }}>{state.authorizationStatus.error}</p>
                </div> */}


                <div class="footer">
                    <button className="btn btn-primary" type="submit" value="Register" onClick={submitData} disabled={state.isFormValid ? false :true}>Register</button>
                </div>
            </form>

            

        </div>

    );

};


export default InstituteRegister;