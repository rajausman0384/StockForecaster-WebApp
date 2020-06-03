import React from 'react';
import logo from '../assets/mdb-react.png';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const SideNavPage = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/profile" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Profile
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/tables" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Tables
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/maps" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Maps
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/404" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        404
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default SideNavPage;































































// import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

// class SideNavPage extends Component {
//   state = {
//     sideNavLeft: false,
//   }

// sidenavToggle = sidenavId => () => {
//   const sidenavNr = `sideNav${sidenavId}`
//   this.setState({
//     [sidenavNr]: !this.state[sidenavNr]
//   });
// };

// render() {
//     return (
//       <Router>
//         <MDBContainer>
//           <MDBBtn onClick={this.sidenavToggle("Left")}>
//             <MDBIcon size="lg" icon="bars" />
//           </MDBBtn>
//           <MDBSideNav slim fixed mask="rgba-blue-strong" triggerOpening={this.state.sideNavLeft} breakWidth={1300}
//             className="sn-bg-1">
//             <li>
//               <div className="logo-wrapper sn-ad-avatar-wrapper">
//                 <a href="#!">
//                   <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" />
//                   <span>Anna Deynah</span>
//                 </a>
//               </div>
//             </li>

//             <MDBSideNavNav>
//               <MDBSideNavLink to="/other-page" topLevel>
//                 <MDBIcon icon="pencil-alt" className="mr-2" />Submit listing</MDBSideNavLink>
//               <MDBSideNavCat name="Submit blog" id="submit-blog" icon="chevron-right">
//                 <MDBSideNavLink>Submit listing</MDBSideNavLink>
//                 <MDBSideNavLink>Registration form</MDBSideNavLink>
//               </MDBSideNavCat>
//               <MDBSideNavCat name="Instruction" id="instruction" icon="hand-pointer" href="#">
//                 <MDBSideNavLink>For bloggers</MDBSideNavLink>
//                 <MDBSideNavLink>For authors</MDBSideNavLink>
//               </MDBSideNavCat>
//               <MDBSideNavCat name="About" id="about" icon="eye">
//                 <MDBSideNavLink>Instruction</MDBSideNavLink>
//                 <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
//               </MDBSideNavCat>
//               <MDBSideNavCat name="Contact me" id="contact-me" icon="envelope">
//                 <MDBSideNavLink>FAQ</MDBSideNavLink>
//                 <MDBSideNavLink>Write a message</MDBSideNavLink>
//               </MDBSideNavCat>
//             </MDBSideNavNav>
//           </MDBSideNav>
//         </MDBContainer>
//       </Router>
//     );
//   }
// }

// export default SideNavPage;