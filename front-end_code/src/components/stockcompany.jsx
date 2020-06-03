import React, { Component } from 'react';
import { isAuthenticated } from "../auth";
import { Redirect, Link } from "react-router-dom";
import { read } from "./apiUser";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

import '../css/cardimage.css';

class stockcompany extends Component {
  constructor() {
    super();
    this.state = {
        user: "",
        redirectToSignin: false
    };
}
init = userId => {
    const token = isAuthenticated().token;
    read(userId, token).then(data => {
        if (data.error) {
            this.setState({ redirectToSignin: true });
        } else {
            this.setState({ user: data });
        }
    });
};
componentDidMount() {
    const userId = this.props.match.params.userId;
    this.init(userId);
}
componentWillReceiveProps(props) {
    const userId = props.match.params.userId;
    this.init(userId);
}
  render() {
    const { redirectToSignin, user } = this.state;
        if (redirectToSignin) return <Redirect to="/signin" />;
    return (
      <div>
        <br/>
      <MDBRow className = 'justify-content-center'>
        <MDBCol md = '3'>
        <MDBCard cascade className=" text-center mx-4 mt-4" >
            <MDBCardImage cascade className="img-fluid" src="https://cdn0.iconfinder.com/data/icons/stock-market-3/64/enterprise-organization-business-company-team-512.png" />
            <MDBCardBody cascade>
              {/* <MDBCardTitle>Company</MDBCardTitle> */}
              <MDBBtn href={`/user/${user._id}/stockmanage/addstock`}> Add Stock</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      <MDBCol md = "3">
        <MDBCard cascade className=" text-center mx-4 mt-4" >
          <MDBCardImage cascade className="img-fluid" src="https://image.flaticon.com/icons/png/512/343/343875.png" />
          <MDBCardBody cascade   >
            {/* <MDBCardTitle>Buyer</MDBCardTitle> */}
            <MDBBtn href="/regbuy"> View Stock</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md = "3">
      <MDBCard cascade className=" text-center mx-4 mt-4" >
          <MDBCardImage cascade className="img-fluid" src="https://image.flaticon.com/icons/svg/270/270985.svg" />
          <MDBCardBody cascade>
            {/* <MDBCardTitle>Seller</MDBCardTitle> */}
            <MDBBtn href="/regsell"> Delete Stock</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <br/>
    </div>
    )
  }
}

export default stockcompany;