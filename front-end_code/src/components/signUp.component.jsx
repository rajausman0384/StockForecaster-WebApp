import React, {Component} from "react";

import { Link } from "react-router-dom";
import { signup } from "../auth";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBInput,
  MDBBtn
} from "mdbreact";
class SignUpPage extends Component {
  constructor() {
      super();
      this.state = {
          name: "",
          email: "",
          verifyEmail: "",
          password: "",
          phone: "",
          NTN: "",
          city: "",
          address: "",
          about: "",
          error: "",
          open: false,
          
      };
  }

  handleChange = name => event => {
      this.setState({ error: "" });
      this.setState({ [name]: event.target.value });
  };

  clickSubmit = event => {
    event.preventDefault();
    const { name, email, verifyEmail,password,phone,NTN,city,address,about } = this.state;
    const user = {
        name,
        email,
        verifyEmail,
        password,
        phone,
        NTN,
        city,
        address,
        about
    };
  
    signup(user).then(data => {
      if (data.error) this.setState({ error: data.error });
      else
          this.setState({
              error: "",
              name: "",
            email: "",
            confirm: "",
            password: "",
            phone: "",
            NTN: "",
            city: "",
            address: "",
            about: "",
            error: "",
            
              open: true
          });
  });
}
    signupForm = (name, email, confirm, password,phone,NTN,city,address,about) => (
      <div >
     <br/>
     <br />  
    <MDBContainer >
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="6">  
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header warm-flame-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Company
                </h3>
              </MDBCardHeader>
              <br/>
              <MDBInput className="form-control form-control-lg"
                icon='user'
                name='Name'
                type='text'
                id='materialFormRegisterNameEx'
                label='Name'
                outline
                required
                onChange={this.handleChange("name")}
                value={name}
              ></MDBInput>
              <MDBInput className="form-control form-control-lg"
                icon='envelope-open'
                type='email'
                id='materialFormRegistermEmail'
                name='email'
                label = "Email"
                outline
                required
                onChange={this.handleChange("email")}
                value={email}
              ></MDBInput>
              {/* <MDBInput className="form-control form-control-lg"
                label="Confirm Email"
                icon="exclamation-triangle"
                id='materialFormRegisterConfirmEx'
                name='confirm'
                type="email"
                outline
                required
                error="wrong"
                success="right"
                onChange={this.handleChange("confirm")}
                value={confirm}
                    /> */}
              <MDBInput className="form-control form-control-lg"
                icon='key'
                name='password'
                type="password"
                id='materialFormRegisterPasswordEx4'
                label='Password'
                outline
                required
                onChange={this.handleChange("password")}
                value={password}
              ></MDBInput>
              <MDBInput className="form-control form-control-lg"
                icon='phone'
                name='phone'
                type="number"
                id='materialFormRegisterPhone'
                label='Phone'
                outline
                required
                onChange={this.handleChange("phone")}
                value={phone}
              ></MDBInput>
              <MDBInput className="form-control form-control-lg"
                icon='book'
                name='NTN'
                type="number"
                id='materialFormRegisterNTN'
                label='NTN'
                outline
                required
                onChange={this.handleChange("NTN")}
                value={NTN}
              ></MDBInput>
              <MDBInput className="form-control form-control-lg"
                icon='location-arrow'
                type='text'
                id='materialFormRegisterNameEx'
                name='city'
                label='City'
                outline
                required
                onChange={this.handleChange("city")}
                value={city}
              ></MDBInput>
              <MDBInput className="form-control form-control-lg"
                icon="map-marker"
                type='text'
                id='materialFormRegisterNameEx3'
                name='address'
                label = "Address"
                outline
                required
                onChange={this.handleChange("address")}
                value={address}  
              ></MDBInput>
                 <MDBInput className="form-control form-control-lg"
                icon="pencil-alt"
                type="textarea"
                rows="2"
                id='materialFormRegisterNameabout'
                name='about'
                label = "About"
                outline
                required
                onChange={this.handleChange("about")}
                value={about}  
              ></MDBInput>

              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" className="mb-3" onClick={this.clickSubmit}>
                  SignUp
                </MDBBtn>
              </div>

              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Already a member? <a href = '/login'>Login</a></p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <br/>
    </div>
    )
    render() {
      const { name, email,confirm, password,phone,NTN,city,address,about, error, open } = this.state;
      return (
        <div className="container">
                <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                >
                    {error}
                </div>

                <div
                    className="alert alert-info"
                    style={{ display: open ? "" : "none" }}
                >
                    New account is successfully created. Please{" "}
                    <Link to="/login">Sign In</Link>.
                </div>

                {this.signupForm(name, email, confirm, password,phone,NTN,city,address,about)}
            </div>
      );
    }

  
  
}

export default SignUpPage;


