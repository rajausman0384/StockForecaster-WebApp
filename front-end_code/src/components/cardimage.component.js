import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

import '../css/cardimage.css';

class CardExample extends Component {
  render() {
    return (
      <div>
        <br/>
      <MDBRow className = 'justify-content-center'>
        <MDBCol md = '3'>
        <MDBCard cascade className=" text-center mx-4 mt-4" >
            <MDBCardImage cascade className="img-fluid" src="https://cdn0.iconfinder.com/data/icons/stock-market-3/64/enterprise-organization-business-company-team-512.png" />
            <MDBCardBody cascade>
              <MDBCardTitle>Company</MDBCardTitle>
              <MDBBtn href="/regcmp"> Register</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      <MDBCol md = "3">
        <MDBCard cascade className=" text-center mx-4 mt-4" >
          <MDBCardImage cascade className="img-fluid" src="https://image.flaticon.com/icons/png/512/343/343875.png" />
          <MDBCardBody cascade   >
            <MDBCardTitle>Buyer</MDBCardTitle>
            <MDBBtn href="/regbuy"> Register</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md = "3">
      <MDBCard cascade className=" text-center mx-4 mt-4" >
          <MDBCardImage cascade className="img-fluid" src="https://image.flaticon.com/icons/svg/270/270985.svg" />
          <MDBCardBody cascade>
            <MDBCardTitle>Seller</MDBCardTitle>
            <MDBBtn href="/regsell"> Register</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <br/>
    </div>
    )
  }
}

export default CardExample;