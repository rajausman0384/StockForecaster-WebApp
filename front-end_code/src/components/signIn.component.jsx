import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate,isAuthenticated} from "../auth";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

class Signin extends Component {
  constructor() {
      super();
      this.state = {
          email: "",
          password: "",
          error: "",
          redirectToReferer: false,
          loading: false,
      };
  }

  handleChange = name => event => {
      this.setState({ error: "" });
      this.setState({ [name]: event.target.value });
  };

  
  clickSubmit = event => {
      event.preventDefault();
      this.setState({ loading: true });
      const { email, password } = this.state;
      const user = {
          email,
          password
      };
      signin(user).then(data => {
        if (data.error) {
            this.setState({ error: data.error, loading: false });
        } else {
            // authenticate
            authenticate(data, () => {
                this.setState({ redirectToReferer: true });
            });
        }
    });
    }
      // console.log(user);
  //     if (this.state.recaptcha) {
  //         signin(user).then(data => {
  //             if (data.error) {
  //                 this.setState({ error: data.error, loading: false });
  //             } else {
  //                 // authenticate
  //                 authenticate(data, () => {
  //                     this.setState({ redirectToReferer: true });
  //                 });
  //             }
  //         });
  //     } else {
  //         this.setState({
  //             loading: false,
  //             error: "What day is today? Please write a correct answer!"
  //         });
  //     }
  // };
  signinForm = (email, password) => (
    <div>
      <br/>
    <MDBContainer >
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="6">
          <MDBCard>
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Log in
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Your email"
               group
               type="text" 
               validate
               onChange={this.handleChange("email")}
               type="email"
               value={email}
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                onChange={this.handleChange("password")}
                value={password}
                containerClass="mb-0"
              />
              <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Password?
                </a>
              </p>
              <div className="text-center mb-4 mt-5">
                <MDBBtn
                  color="danger"
                  type="button"
                  className="btn-block z-depth-2"
                  onClick={this.clickSubmit}
                >
                  Log in
                </MDBBtn>
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <a
                  href="/register"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Sign up
                </a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <br/>
    </div>
  );
  render() {
    const {
        email,
        password,
        error,
        redirectToReferer,
        loading
    } = this.state;

    if (redirectToReferer)  {
      
        return <Redirect to={`/shares`} />;
    }
    return (
      <div className="container">

          <div
              className="alert alert-danger"
              style={{ display: error ? "" : "none" }}
          >
              {error}
          </div>

          {loading ? (
              <div className="jumbotron text-center">
                  <h2>Loading...</h2>
              </div>
          ) : (
              ""
          )}

          {this.signinForm(email, password)}

          
      </div>
  );
  }
};


export default Signin;