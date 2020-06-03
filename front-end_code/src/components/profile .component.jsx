import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { Redirect, Link } from "react-router-dom";
import { read } from "./apiUser";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { MDBIcon,MDBCard, MDBAvatar, MDBCardBody, MDBCardTitle, MDBBadge, MDBCardText, MDBCardHeader, MDBCardFooter,  MDBContainer } from
"mdbreact";
import DefaultProfile from "../images/raja.jpg";
import DeleteUser from "./DeleteUser";
class Profile extends Component {
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

        // const photoUrl = user._id
        //     ? `${process.env.REACT_APP_API_URL}/user/photo/${
        //           user._id
        //       }?${new Date().getTime()}`
        //     : DefaultProfile;

        return (
            // <div>
            // <br/>
            //     <br/>
            // <MDBContainer>
            // <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
            //     <MDBCardHeader color="success-color">Profile</MDBCardHeader>
            //     <MDBCardBody>
            //     {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
            //     <MDBCardText><h6><strong>Name : </strong>{user.name}</h6></MDBCardText>
            //     <MDBCardText><h6><strong>Email : </strong>{user.email}</h6></MDBCardText>
            //     <MDBCardText><h6><strong>Contact : </strong>{user.phone}</h6></MDBCardText>
            //     {isAuthenticated().user &&
            //                 isAuthenticated().user._id === user._id && (
            //                     <MDBBtn href = {`/user/edit/${user._id}`} color="success" size="sm">
            //                         Edit Profile
            //                     </MDBBtn>
                                
            //                 )}
            //     {isAuthenticated().user &&
            //                 isAuthenticated().user._id === user._id && (
            //                     <DeleteUser userId={user._id} />
                                
            //                 )}
                
                
            //     </MDBCardBody>
            //     <MDBCardFooter color="success-color">{`Joined ${new Date(
            //                     user.created
            //                 ).toDateString()}`}</MDBCardFooter>
            // </MDBCard>
            // </MDBContainer>
            // <br/>
            // <br/>
            // </div>

            <div id='profile-v1' className='mb-5'>
            <MDBContainer fluid className='mb-5'>
              <section className='section team-section mb-5'>
                <MDBRow center className='text-center'>
                  <MDBCol md='8' className='mb-r'>
                    <MDBCard cascade className='cascading-admin-card user-card'>
                      <div className='admin-up d-flex justify-content-start'>
                        <MDBIcon icon='users' className='info-color py-4 z-depth-2' />{' '}
                        <div className='data'>
                          <h5 className='font-weight-bold dark-grey-text'>
                            Profile {' '}
                            {/* <span className='text-muted'>Complete your profile</span> */}
                          </h5>
                        </div>
                      </div>
    
                      <MDBCardBody>
          <MDBRow>
            <MDBCol md="4">
              <MDBInput readOnly
                value={user.name}
                name="name"
                // onChange={this.handleChange("name")}
                type="text"
                id="materialFormRegisterNameEx"
                label="Name"
                required
              >
                {/* <div className="valid-tooltip">Looks good!</div> */}
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput readOnly
                value={user.email}
                // onChange={this.handleChange("email")}
                type="email"
                id="materialFormRegisterConfirmEx3"
                name="email"
                label="Your Email address"
              >
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput readOnly
                value={user.password}
                name="password"
                // onChange={this.handleChange("password")}
                type="password"
                id="materialFormRegisterPasswordEx"
                label="Password"
                required
              >
                {/* <div className="valid-tooltip">Looks good!</div> */}
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol md="4">
              <MDBInput readOnly
                value={user.phone}
                // onChange={this.handleChange("phone")}
                type="number"
                id="materialFormRegisterPasswordEx5"
                name="phone"
                label="Phone"
                required
              >
                
                {/* <div className="valid-tooltip">Looks good!</div> */}
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput readOnly
                value={user.NTN}
                // onChange={this.handleChange("NTN")}
                type="number"
                id="materialFormRegisterPasswordEx5"
                name="NTN"
                label="NTN"
                required
              >
                {/* <div className="invalid-tooltip">
                  Please provide a valid NTN Number.
                </div>
                <div className="valid-tooltip">Looks good!</div> */}
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput readOnly
                value={user.city}
                // onChange={this.handleChange("city")}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="city"
                label="City"
                required
              >
                {/* <div className="invalid-tooltip">
                  Please provide a valid city.
                </div>
                <div className="valid-tooltip">Looks good!</div> */}
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol md="12">
          <MDBInput readOnly
                value={user.address}
                // onChange={this.handleChange("address")}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="address"
                label="Address"
                required
              >
              </MDBInput>
              </MDBCol>
              {/* <MDBCol md="12">
          
              </MDBCol> */}
          </MDBRow>
               {isAuthenticated().user &&
                            isAuthenticated().user._id === user._id && (
                                <MDBBtn href = {`/user/edit/${user._id}`} color="success">
                                    Edit Profile
                                </MDBBtn>
                                
                            )}
                {isAuthenticated().user &&
                            isAuthenticated().user._id === user._id && (
                                <DeleteUser userId={user._id} />
                                
                            )}
          {/* <MDBBtn color="success" onClick={this.clickSubmit}>
            Edit Profile
          </MDBBtn> */}
          </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md='4' className='mb-r'>
                    <MDBCard className='profile-card'>
                      <MDBAvatar
                        tag='img'
                        src="https://cdn0.iconfinder.com/data/icons/stock-market-3/64/enterprise-organization-business-company-team-512.png"
                        className='z-depth-1-half mb-4'
                      />
                      <MDBCardBody className='pt-0 mt-0'>
                        <h3 className='mb-3 font-bold'>
                          <strong>{user.name}</strong>
                        </h3>
                        {/* <h6 className='font-bold cyan-text mb-4'>Web Designer</h6> */}
                        <p className='mt-4 text-muted'>
                        <MDBInput readOnly
                value={user.about}
                // onChange={this.handleChange("about")}
                type="textarea"
                id="materialFormRegisterPasswordEx4"
                name="about"
                label="About"
                required
              >
              </MDBInput>
                        </p>
                        {/* <MDBBtn color='info' rounded>
                          Follow
                        </MDBBtn> */}
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </section>
            </MDBContainer>
          </div>
        )







        //     <div className="container">
        //         <h2 className="mt-5 mb-5">Profile</h2>
        //         <div className="row">
        //             {/* <div className="col-md-6">
        //                 <img
        //                     className="card-img-top"
        //                     src={DefaultProfile}
        //                     style={{ height: "200px", width: "auto" }}
        //                     className="img-thumbnail"
        //                     src={photoUrl}
        //                     onError={i => (i.target.src = `${DefaultProfile}`)}
        //                     alt={user.name}
        //                     style={{
        //                         width: "100%",
        //                         height: "15vw",
        //                         objectFit: "cover"
        //                     }}
        //                 />
        //             </div> */}

        //             <div className="col-md-6">
        //                 <div className="lead mt-2">
        //                     <p>Name {user.name}</p>
        //                     <p>Email: {user.email}</p>
        //                     <p>{`Joined ${new Date(
        //                         user.created
        //                     ).toDateString()}`}</p>
        //                 </div>
        //                 {isAuthenticated().user &&
        //                     isAuthenticated().user._id === user._id && (
        //                         <div className="d-inline-block">
        //                             <Link
        //                                 className="btn btn-raised btn-success mr-5"
        //                                 to={`/user/edit/${user._id}`}
        //                             >
        //                                 Edit Profile
        //                             </Link>
        //                             <DeleteUser userId={user._id} />
        //                         </div>
        //                     )}
        //             </div>
        //         </div>
        //     </div>
        // );
    }
}
export default Profile;

















// import React, { Component } from "react";
// import { isAuthenticated } from "../auth";
// import { read } from "./apiUser";

// class Profile extends Component {
//   constructor() {
//     super();
//     this.state = {
//        user: "",
//       redirectToSignin: false,
//     //   following: false,
//     //   posts: []
//     error: "",
//     };
//   }


//     init = userId => {
//     const token = isAuthenticated().token;
//     read(userId, token).then(data => {
//       if (data.error) {
//         this.setState({ redirectToSignin: true });
//       } else {
//         this.setState({ user: data });
//       }
//     });
//   };


//   componentDidMount() {
//     const userId = this.props.match.params.userId;
//     this.init(userId);
//   }

//   render() {
//     return (
//               <div className="container">
//                 <h2 className="mt-5 mb-5">Profile</h2>
//                   <p>{isAuthenticated().user.name}</p>
//                   <p>{isAuthenticated().user.email}</p>
//                   <p>{`Joined ${new Date(this.state.user.created).toDateString()}`}</p>
//                   </div>
//     )
//   }
// }

// export default Profile;










// import React, { Component } from "react";
// import { isAuthenticated } from "../auth";
// import { Redirect, Link } from "react-router-dom";
// import { read } from "./apiUser";
// import DefaultProfile from "../images/raja.jpg";
// import DeleteUser from "./DeleteUser";
// // import FollowProfileButton from "./FollowProfileButton";
// // import ProfileTabs from "./ProfileTabs";
// // import { listByUser } from "../post/apiPost";

// class Profile extends Component {
//   constructor() {
//     super();
//     this.state = {
//        user: "",
//       redirectToSignin: false,
//     //   following: false,
//       error: "",
//     //   posts: []
//     };
//   }

//   // check follow
// //   checkFollow = user => {
// //     const jwt = isAuthenticated();
// //     const match = user.followers.find(follower => {
// //       // one id has many other ids (followers) and vice versa
// //       return follower._id === jwt.user._id;
// //     });
// //     return match;
// //   };

//   clickFollowButton = callApi => {
//     const userId = isAuthenticated().user._id;
//     const token = isAuthenticated().token;

//     callApi(userId, token, this.state.user._id).then(data => {
//       if (data.error) {
//         this.setState({ error: data.error });
//       } else {
//         this.setState({ user: data });
//       }
//     });
//   };

//   init = userId => {
//     const token = isAuthenticated().token;
//     read(userId, token).then(data => {
//       if (data.error) {
//         this.setState({ redirectToSignin: true });
//       } else {
//         this.setState({ user: data });
//       }
//     });
//   };

// //   loadPosts = userId => {
// //     const token = isAuthenticated().token;
// //     listByUser(userId, token).then(data => {
// //       if (data.error) {
// //         console.log(data.error);
// //       } else {
// //         this.setState({ posts: data });
// //       }
// //     });
// //   };

//   componentDidMount() {
//     const userId = this.props.match.params.userId;
//     this.init(userId);
//   }

//   componentWillReceiveProps(props) {
//     const userId = props.match.params.userId;
//     this.init(userId);
//   }

//   render() {
//     const { redirectToSignin, user} = this.state;
//     if (redirectToSignin) return <Redirect to="/login" />;

//     const photoUrl = user._id
//       ? `${process.env.REACT_APP_API_URL}/user/photo/${
//           user._id
//         }?${new Date().getTime()}`
//       : DefaultProfile;

//     return (
//       <div className="container">
//         <h2 className="mt-5 mb-5">Profile</h2>
//         <div className="row">
//           <div className="col-md-4">
//             <img
//               style={{ height: "200px", width: "auto" }}
//               className="img-thumbnail"
//               src={photoUrl}
//               onError={i => (i.target.src = `${DefaultProfile}`)}
//               alt={user.name}
//             />
//           </div>

//           <div className="col-md-8">
//             <div className="lead mt-2">
//               <p>Hello {user.name}</p>
//               <p>Email: {user.email}</p>
//               {/* <p>{`Joined ${new Date(user.created).toDateString()}`}</p> */}
//             </div>

//             {isAuthenticated().user &&
//             isAuthenticated().user._id === user._id  (
//               <div className="d-inline-block">
//                 {/* <Link
//                   className="btn btn-raised btn-info mr-5"
//                   to={`/post/create`}
//                 >
//                   Create Post
//                 </Link> */}

//                 <Link
//                   className="btn btn-raised btn-success mr-5"
//                   to={`/user/edit/${user._id}`}
//                 >
//                   Edit Profile
//                 </Link>
//                 <DeleteUser userId={user._id} />
//               </div>
//             ) 
//             // : (
//             //   <FollowProfileButton
//             //     following={this.state.following}
//             //     onButtonClick={this.clickFollowButton}
//             //   />
//             // )
//             }

            
//           </div>
//         </div>
//         <div className="row">
//           <div className="col md-12 mt-5 mb-5">
//             <hr />
//             <p className="lead">{user.about}</p>
//             <hr />

//             {/* <ProfileTabs
//               followers={user.followers}
//               following={user.following}
//               posts={posts}
//             /> */}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Profile;
