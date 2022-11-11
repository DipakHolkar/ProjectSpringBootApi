import React, { useReducer, useState } from "react";
import '../services/css/Style.css'
import { useHistory} from "react-router-dom";




const init =
{
    username: { value: "", hasError: true, touched: false, error: "" },
    password: { value: "", hasError: true, touched: false, error: "" },
    firstname: { value: "", hasError: true, touched: false, error: "" },
    lastname: { value: "", hasError: true, touched: false, error: "" },
    qualification: { value: "", hasError: true, touched: false, error: "" },
    emailid: { value: "", hasError: true, touched: false, error: "" },
    contactno: { value: "", hasError: true, touched: false, error: "" },
    //student: {},
    isFormValid: false
}

const validateData = (name, value) => {
    
    let hasError = false, error = "";
    switch (name) {
        case "username":
            let uname = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
            if (!uname.test(value)) {
                hasError = true;
                error = "* User name must be Email id"
            }
            break;

        case "password":
            let pass = /^[a-z]+@+[0-9]{3}$/;
            if (!pass.test(value)) {
                hasError = true;
                error = "* Password should be ex:- pass@123 in this form "
            }
            break;
        case "firstname":
            let fname = /^[A-Z][a-z]{2,15}$/;
            if (!fname.test(value)) {
                hasError = true;
                error = "* First letter capital rest small"
            }
            break;
        case "lastname":
            let lname =  /^[A-Z][a-z]{2,15}$/;
            if (!lname.test(value)) {
                hasError = true;
                error = "* First letter capital rest small"
            }
            break;
        case "Qualification":
            let quali = /^[a-zA-Z]+$/;
            if (!quali.test(value)) {
                hasError = true;
                error = "* Enter qualification "
            }
            break;

        case "emailid":
            let email = /^[a-z]+[0-9]+@[a-z]+\.[a-z]+$/;
            if (!email.test(value)) {
                hasError = true;
                error = "* email must be in this format:abcd123@xyz.pqr"
            }
            break;
        case "contactno":
            let contact = /^[0-9]{10}$/;
            if (!contact.test(value)) {
                hasError = true;
                error = "* contact number should of 10 digits"
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

function StudentRegister() {

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
 
        fetch("http://localhost:8080/registerstudent",
        {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                username: state.username.value,
                password: state.password.value,
                firstname: state.firstname.value,
                lastname: state.lastname.value,
                qualification: state.qualification.value,
                emailid: state.emailid.value,
                contactno: state.contactno.value,
                
            })
        }).then(() => { alert("Student registerd Sucessfully") })

      
        
        history.push("/login");

}

    
    return (

        <div className="form">

            {/* <section className="d-flex justify-content"> */}
            {/*  <div className="left_data mt-1" style={{ width: "85%" }}>*/}
            <h2>Student Registration</h2>

            <form className="form-body">


                <div>
                    <label className="form__label">Enter Username: </label>
                    <input className="form__input" type="text" name="username" placeholder="name@gmail.com" onChange={(e) => { onInputChange("username",e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("username", e.target.value, dispatch) }} />
                    <p style={{ display: state.username.touched && state.username.hasError ? "block" : "none", color: "red" }}>{state.username.error}</p>
                </div>
                <div>
                <label className="form__label">Enter Password:</label>
                <input className="form__input" type="password" name="password" placeholder="firstname@123" onChange={(e) => { onInputChange("password",e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("password", e.target.value, dispatch) }} />
                    <p style={{ display: state.password.touched && state.password.hasError ? "block" : "none", color: "red" }}>{state.password.error}</p>
                </div>


                <div>
                <label className="form__label" >Enter Firstname:</label>
                <input className="form__input" type="text" name="firstname" placeholder="Enter Firstname" onChange={(e) => { onInputChange("firstname", e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("firstname", e.target.value, dispatch) }} />
                    <p style={{ display: state.firstname.touched && state.firstname.hasError ? "block" : "none", color: "red" }}>{state.firstname.error}</p>
                    </div>

                    <div>
                    
                    <label className="form__label">Enter Lastname:</label>
                    <input className="form__input" type="text" name="lastname" placeholder="Enter Lastname" onChange={(e) => { onInputChange("lastname", e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("lastname", e.target.value, dispatch) }} />
                    <p style={{ display: state.lastname.touched && state.lastname.hasError ? "block" : "none", color: "red" }}>{state.lastname.error}</p>
                    </div>

                    <div>
                <label className="form__label">Enter Qualification:</label>
                <input className="form__input" type="text" name="qualification" placeholder="Enter Qualification" onChange={(e) => { onInputChange("qualification", e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("qualification", e.target.value, dispatch) }} />
                    <p style={{ display: state.qualification.touched && state.qualification.hasError ? "block" : "none", color: "red" }}>{state.qualification.error}</p>
                    </div>

                <div>
                <label className="form__label">Enter Emailid</label>
                <input className="form__input" type="email" name="emailid" placeholder="firstname123@gmail.com" onChange={(e) => { onInputChange("emailid", e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("emailid", e.target.value, dispatch) }} />
                    <p style={{ display: state.emailid.touched && state.emailid.hasError ? "block" : "none", color: "red" }}>{state.emailid.error}</p>
                    </div>

                <div>
                <label className="form__label">Enter Mobile Number</label>
                      <input className="form__input"  type="number"name="contactno" placeholder="Enter Mobile No."onChange={(e) => { onInputChange("contactno", e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("contactno", e.target.value, dispatch) }} />
                    <p style={{ display: state.contactno.touched && state.contactno.hasError ? "block" : "none", color: "red" }}>{state.contactno.error}</p>
                    </div>

                
                <div class="footer">
                <button  className="btn btn-primary" type="submit" value="Register" onClick={submitData} disabled={state.isFormValid ? false :true}>Register</button>
                </div>
            </form>

            {/* </section> */}

        </div>

    );

};


export default StudentRegister;