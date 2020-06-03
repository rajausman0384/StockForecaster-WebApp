import React from 'react';
import { MDBFooter } from 'mdbreact';

const Copyrights = props => {
  const date = new Date().getFullYear();
  return (
    <MDBFooter
      className={props.className}
      style={{ ...props.style, zIndex: 2 }}
    >
      <p className='footer-copyright mb-0 py-3 text-center'>
        &copy; {date} Copyright:{' '}
        <a href='https://www.MDBootstrap.com'> MDBootstrap.com </a>
      </p>
    </MDBFooter>
  );
};
export default Copyrights;
