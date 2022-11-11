import React from 'react';
class Login extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {

      username: "",
      password: "",
      student: {},
      institute: {},
      admin: {},
      loginerror: ""

    }
  }
  handleChange = (e) => {
    const n = e.target.name;
    const v = e.target.value;
    this.setState({ [n]: v })
  }
  submitData = (e) => {
    e.preventDefault();

    console.log(e);

    const reqData =
    {
      method: "POST",


      headers:
      {
        "content-type": "application/json"
      },
      body: JSON.stringify
        (
          {
            username: this.state.username,

            password: this.state.password
          }
        )

    }
    console.log(reqData);
    fetch("http://localhost:8080/log", reqData)
      .then(resp => resp.text())
      .then(data => {
        if (data.length != 0) {
          const userinfo = JSON.parse(data);
          console.log("json obje:", JSON.stringify(userinfo));
          if (userinfo.user_role == "student") {
            this.setState({ student: userinfo });
            localStorage.setItem("loggedinuser", JSON.stringify(userinfo));
            console.log(userinfo.user_role);
            this.props.history.push("/studenthome");
          }
          else if (userinfo.user_role == "institute") {
            this.setState({ institute: userinfo });
            localStorage.setItem("loggedinuser", JSON.stringify(userinfo));

            this.props.history.push("/intitutehome");//path is remaining

          }
          else {
            this.setState({ admin: userinfo });
            localStorage.setItem("loggedinuser", JSON.stringify(userinfo));

            //mystore.dispatch({type:'LOGGEDIN'})
            this.props.history.push("/adminhome");
          }
        }
        else {
          
          this.setState({ loginerror: "Invalid Username or password" });

          alert(this.state.loginerror);
        }
        console.log(data);
      })


  }


  render() {
    return (
      <div>

        <div className='LoginPage'>
          <section className="vh-100" >
            <div className="container py-4 h-40" >
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="" >

                    <div className="logincardbody p-5 text-center "  >

                      <h1 style={{ color: 'whitesmoke' }}>e-Course-Network</h1>
                      <h3 className="mb-5" style={{ color: 'InfoBackground' }} >Sign in</h3>

                      <div className="form-outline mb-4">
                        <input type="email" id="email"
                          name="username" onChange={this.handleChange} className="form-control form-control-lg" placeholder='email'
                        />

                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="password"
                          name="password" onChange={this.handleChange} className="form-control form-control-lg" placeholder='password'
                        />

                      </div>
                      <a onClick={this.submitData} className="btn btn-info">Log In</a>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

        </div>


      </div>
    )
  }
}

export default Login;