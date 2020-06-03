import React from "react";
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

const SignUpBuyer = () => {
  return (
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
                  <MDBIcon icon="lock" /> Buyer
                </h3>
              </MDBCardHeader>
              <br/>
              <MDBCol md="6">  
              <MDBInput
                icon='user'
                name='fname'
                type='text'
                id='materialFormRegisterfNameEx'
                label='First Name'
                outline
                required
              ></MDBInput>
              </MDBCol>
              <MDBCol md="6">
              <MDBInput
                icon='user'
                name='lname'
                type='text'
                id='materialFormRegisterlNameEx'
                label='Last Name'
                outline
                required
              ></MDBInput>
              </MDBCol>
              <MDBInput
                icon='envelope-open'
                type='email'
                id='materialFormRegisterConfirmEx3'
                name='email'
                label = "Email"
                outline
                required
              ></MDBInput>
              <MDBInput
                icon='key'
                name='Password'
                type="password"
                id='materialFormRegisterPasswordEx4'
                label='Password'
                outline
                required
              ></MDBInput>
              <MDBInput
                icon='location-arrow'
                type='text'
                id='materialFormRegisterNameEx'
                name='city'
                label='City'
                outline
                required
              ></MDBInput>
              <MDBInput
                icon="map-marker"
                type='text'
                id='materialFormRegisterNameEx3'
                name='address'
                label = "Address"
                outline
                required
              ></MDBInput>

              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" className="mb-3" type="submit">
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
  );
};

export default SignUpBuyer;