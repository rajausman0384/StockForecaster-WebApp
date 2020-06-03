import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = props => {
  return (
    <MDBFooter color="indigo" className="font-small pt-0" style={{ ...props.style, zIndex: 2 }}>
      <MDBContainer>
        <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">About us</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Market</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Prices</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Help</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Contact</a>
            </h6>
          </MDBCol>
        </MDBRow>
        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
        <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <MDBCol md="8" sm="12" className="mt-5">
            <p style={{ lineHeight: "1.7rem" }}>
              Pakistan Stock Forcaster provides live markets summmary, Buy and Sell Rates, Last Day Close Price [LDCP] and changing prices of gold and currencies.
            </p>
          </MDBCol>
        </MDBRow>
        <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
        <MDBRow className="pb-3">
          <MDBCol md="12">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fa fa-facebook-f fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fa fa-twitter fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fa fa-linkedin-in fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fa fa-instagram fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="pin-ic">
                <i className="fa fa-pinterest fa-lg white-text"> </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
         <a href="#">PAKISTAN STOCK FORCASTER  </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;