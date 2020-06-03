import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBBtn } from 'mdbreact';

const LinkCard = props => {
  return (
    <section className='pb-4 pt-5 mb-5'>
      <MDBCard className='text-center'>
        <MDBCardHeader color='primary-color' tag='h3'>
          Full documentation
        </MDBCardHeader>
        <MDBCardBody>
          <p className='card-text'>
            Read the full documentation for these components.
          </p>
          <MDBBtn tag='a' href={props.docs} color='primary' target='_blank'>
            Learn more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </section>
  );
};

export default LinkCard;
