import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

// const isActive = (history, path) => {
//   if (history.location.pathname === path) return { color: '#ff9900' };
//   else return { color: '#ffffff' };
// };



class NavbarPage extends Component {
state = {
  isOpen: false,
  redirectToReferer: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

clickSubmit = event => {
  signout( () => {
    this.setState({ redirectToReferer: true });
});
}

render() {
  const {
    redirectToReferer
} = this.state;


  if (redirectToReferer) {
    return <Redirect to="/login" />;
}

  return (
    
      <MDBNavbar color="default-color"  expand='md'
      scrolling
      fixed='top' dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">PSF</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          
            {!isAuthenticated() && (
              <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink  to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              <MDBNavLink to= '/'>Market</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/'>Pricing</MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
            )}
            {isAuthenticated() && (
              <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink  to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              <MDBNavLink to= {`/user/${isAuthenticated().user._id}/dataportal`}>Market</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={`/user/${isAuthenticated().user._id}/dashboard`}>Pricing</MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
            )}
            
          
          <MDBNavbarNav right>
          <MDBNavItem>
          {!isAuthenticated() && (
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  
                  <div className="d-none d-md-inline">User</div>
             
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right style={{ minWidth: '100px' }}>
                  <MDBDropdownItem href="/login">Login</MDBDropdownItem>
                  <MDBDropdownItem href="/register">Signup</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
          )}
          {isAuthenticated() && (
            <MDBDropdown>
            <MDBDropdownToggle nav caret>
              
              <div className="d-none d-md-inline">{`${isAuthenticated().user.name}'s profile`}</div>
         
            </MDBDropdownToggle>
            <MDBDropdownMenu className="dropdown-default" right style={{ minWidth: '100px' }}>
              <MDBDropdownItem href ={`/user/${isAuthenticated().user._id}`}>Profile</MDBDropdownItem>
              <MDBDropdownItem onClick = {this.clickSubmit}>Signout</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          )}

            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
  
    );
  }
}

export default NavbarPage;