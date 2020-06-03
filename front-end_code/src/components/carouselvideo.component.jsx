import React, { Component } from "react";
import logo from "../videos/stock1.mp4";
import logo1 from "../videos/stock2.mp4";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBCol, MDBRow } from "mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer className=" mt-4">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12">
          <MDBCarousel activeItem={1} length={2} showControls={true} showIndicators={true} className="z-depth-1">
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <video className="video-fluid d-block" autoPlay loop>
                  <source src={logo1}/>
                </video>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <video className="video-fluid d-block" autoPlay loop>
                <source src={logo}/>
                </video>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default CarouselPage;
