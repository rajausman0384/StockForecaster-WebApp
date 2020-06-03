import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

const data = [
  ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
  ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
  ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
  ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
];

const addstock = props => {
  return (
    <MDBCard>
      <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
        Table Editable
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default addstock;




































// import React, { Component } from "react";
// import { isAuthenticated } from "../auth";
// import { Redirect, Link } from "react-router-dom";
// import { read } from "./apiUser";
// import { findlist} from "./apiUser";
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBBadge, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer } from
// "mdbreact";

// import DefaultProfile from "../images/raja.jpg";
// import DeleteUser from "./DeleteUser";
// class addstock extends Component {
//     constructor() {
//         super();
//         this.state = {
//             user: "",
//             value: "MLCF",
//             listdata: [],
//             redirectToSignin: false
//         };
//         this.handleChange = this.handleChange.bind(this);
//     this.handlePrint = this.handlePrint.bind(this);
//     }
//     init = userId => {
//         const token = isAuthenticated().token;
//         read(userId, token).then(data => {
//             if (data.error) {
//                 this.setState({ redirectToSignin: true });
//             } else {
//                 this.setState({ user: data });
//             }
//         });
//         findlist(userId, token).then(data => {
//             if (data.error) {
//                 this.setState({ redirectToSignin: true });
//             } else {
//                 this.setState({ listdata: data });
//             }
//         });
//     };
//     componentDidMount() {
//         const userId = this.props.match.params.userId;
//         this.init(userId);
//     }
//     componentWillReceiveProps(props) {
//         const userId = props.match.params.userId;
//         this.init(userId);
//     }
//     // handlePrint() {
//     //     if (this.refs.listType) {
//     //         <div>
//     //            <p>{this.refs.listType.value}</p> 
//     //         </div>
//     //     }
//     //   }

//     handlePrint() {
//         if (this.state.value) {
//           console.log(this.state.value);
//         }
//       }
    
//       handleChange(e) {
//         this.setState({ value: e.target.value });
//       }



//     render() {
//     //     const { redirectToSignin, user,listdata } = this.state;
//     //     if (redirectToSignin) return <Redirect to="/signin" />;
//     //     const symbol =[];
        
//     //     function alpha(){
//     //     for (let i=0; i<=299; i++){
//     //       symbol[i] = listdata.map(listdata => <div>{listdata.symbol[i]}</div>)
            
//     //     }
//     //     return symbol;
//     // }


//         // const photoUrl = user._id
//         //     ? `${process.env.REACT_APP_API_URL}/user/photo/${
//         //           user._id
//         //       }?${new Date().getTime()}`
//         //     : DefaultProfile;

//         return (
//             <div>
//                 <br></br>
//            <br></br>
           
//             <MDBContainer>
//             <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
//                 <MDBCardHeader color="success-color">Stock Management</MDBCardHeader>
//                 <MDBCardBody>
//                 <MDBCardText><h6><strong>Please Select the Stock</strong></h6></MDBCardText>
                
            
//             <select  onChange={this.handleChange}>
            
//                 <option selected >select company</option>
//                 {this.state.listdata.map((list) => <option key={list._id} value={0}>{list.symbol[0]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={1}>{list.symbol[1]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={2}>{list.symbol[2]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={3}>{list.symbol[3]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={4}>{list.symbol[4]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={5}>{list.symbol[5]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={6}>{list.symbol[6]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={7}>{list.symbol[7]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={8}>{list.symbol[8]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={9}>{list.symbol[9]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={10}>{list.symbol[10]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={11}>{list.symbol[11]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={12}>{list.symbol[12]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={13}>{list.symbol[13]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={14}>{list.symbol[14]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={15}>{list.symbol[15]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={16}>{list.symbol[16]}</option>)}
//                 <br></br>
//                 {this.state.listdata.map((list) => <option key={list._id} value={17}>{list.symbol[17]}</option>)}

//             </select>
//             <br></br>

//             <br></br>
//             {/* {isAuthenticated().user &&
//                             isAuthenticated().user._id === user._id && (
//                                 <MDBBtn href = {`/user/${user._id}/stockmanage`} color="success" size="md">
//                                     OK
//                                 </MDBBtn>
                                
//                             )} */}
//              <MDBBtn onClick = {this.handlePrint} color="success" size="md">
//                                     OK
//                                 </MDBBtn>
          
//             </MDBCardBody>
            
//             </MDBCard>
            
//             </MDBContainer>
//             <br></br>
//            <br></br>
//             </div>
           
//         )







//         //     <div className="container">
//         //         <h2 className="mt-5 mb-5">Profile</h2>
//         //         <div className="row">
//         //             {/* <div className="col-md-6">
//         //                 <img
//         //                     className="card-img-top"
//         //                     src={DefaultProfile}
//         //                     style={{ height: "200px", width: "auto" }}
//         //                     className="img-thumbnail"
//         //                     src={photoUrl}
//         //                     onError={i => (i.target.src = `${DefaultProfile}`)}
//         //                     alt={user.name}
//         //                     style={{
//         //                         width: "100%",
//         //                         height: "15vw",
//         //                         objectFit: "cover"
//         //                     }}
//         //                 />
//         //             </div> */}

//         //             <div className="col-md-6">
//         //                 <div className="lead mt-2">
//         //                     <p>Name {user.name}</p>
//         //                     <p>Email: {user.email}</p>
//         //                     <p>{`Joined ${new Date(
//         //                         user.created
//         //                     ).toDateString()}`}</p>
//         //                 </div>
//         //                 {isAuthenticated().user &&
//         //                     isAuthenticated().user._id === user._id && (
//         //                         <div className="d-inline-block">
//         //                             <Link
//         //                                 className="btn btn-raised btn-success mr-5"
//         //                                 to={`/user/edit/${user._id}`}
//         //                             >
//         //                                 Edit Profile
//         //                             </Link>
//         //                             <DeleteUser userId={user._id} />
//         //                         </div>
//         //                     )}
//         //             </div>
//         //         </div>
//         //     </div>
//         // );
//     }
// }
// export default addstock;

















// // import React, { Component } from "react";
// // import { isAuthenticated } from "../auth";
// // import { read } from "./apiUser";

// // class Profile extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //        user: "",
// //       redirectToSignin: false,
// //     //   following: false,
// //     //   posts: []
// //     error: "",
// //     };
// //   }


// //     init = userId => {
// //     const token = isAuthenticated().token;
// //     read(userId, token).then(data => {
// //       if (data.error) {
// //         this.setState({ redirectToSignin: true });
// //       } else {
// //         this.setState({ user: data });
// //       }
// //     });
// //   };


// //   componentDidMount() {
// //     const userId = this.props.match.params.userId;
// //     this.init(userId);
// //   }

// //   render() {
// //     return (
// //               <div className="container">
// //                 <h2 className="mt-5 mb-5">Profile</h2>
// //                   <p>{isAuthenticated().user.name}</p>
// //                   <p>{isAuthenticated().user.email}</p>
// //                   <p>{`Joined ${new Date(this.state.user.created).toDateString()}`}</p>
// //                   </div>
// //     )
// //   }
// // }

// // export default Profile;










// // import React, { Component } from "react";
// // import { isAuthenticated } from "../auth";
// // import { Redirect, Link } from "react-router-dom";
// // import { read } from "./apiUser";
// // import DefaultProfile from "../images/raja.jpg";
// // import DeleteUser from "./DeleteUser";
// // // import FollowProfileButton from "./FollowProfileButton";
// // // import ProfileTabs from "./ProfileTabs";
// // // import { listByUser } from "../post/apiPost";

// // class Profile extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //        user: "",
// //       redirectToSignin: false,
// //     //   following: false,
// //       error: "",
// //     //   posts: []
// //     };
// //   }

// //   // check follow
// // //   checkFollow = user => {
// // //     const jwt = isAuthenticated();
// // //     const match = user.followers.find(follower => {
// // //       // one id has many other ids (followers) and vice versa
// // //       return follower._id === jwt.user._id;
// // //     });
// // //     return match;
// // //   };

// //   clickFollowButton = callApi => {
// //     const userId = isAuthenticated().user._id;
// //     const token = isAuthenticated().token;

// //     callApi(userId, token, this.state.user._id).then(data => {
// //       if (data.error) {
// //         this.setState({ error: data.error });
// //       } else {
// //         this.setState({ user: data });
// //       }
// //     });
// //   };

// //   init = userId => {
// //     const token = isAuthenticated().token;
// //     read(userId, token).then(data => {
// //       if (data.error) {
// //         this.setState({ redirectToSignin: true });
// //       } else {
// //         this.setState({ user: data });
// //       }
// //     });
// //   };

// // //   loadPosts = userId => {
// // //     const token = isAuthenticated().token;
// // //     listByUser(userId, token).then(data => {
// // //       if (data.error) {
// // //         console.log(data.error);
// // //       } else {
// // //         this.setState({ posts: data });
// // //       }
// // //     });
// // //   };

// //   componentDidMount() {
// //     const userId = this.props.match.params.userId;
// //     this.init(userId);
// //   }

// //   componentWillReceiveProps(props) {
// //     const userId = props.match.params.userId;
// //     this.init(userId);
// //   }

// //   render() {
// //     const { redirectToSignin, user} = this.state;
// //     if (redirectToSignin) return <Redirect to="/login" />;

// //     const photoUrl = user._id
// //       ? `${process.env.REACT_APP_API_URL}/user/photo/${
// //           user._id
// //         }?${new Date().getTime()}`
// //       : DefaultProfile;

// //     return (
// //       <div className="container">
// //         <h2 className="mt-5 mb-5">Profile</h2>
// //         <div className="row">
// //           <div className="col-md-4">
// //             <img
// //               style={{ height: "200px", width: "auto" }}
// //               className="img-thumbnail"
// //               src={photoUrl}
// //               onError={i => (i.target.src = `${DefaultProfile}`)}
// //               alt={user.name}
// //             />
// //           </div>

// //           <div className="col-md-8">
// //             <div className="lead mt-2">
// //               <p>Hello {user.name}</p>
// //               <p>Email: {user.email}</p>
// //               {/* <p>{`Joined ${new Date(user.created).toDateString()}`}</p> */}
// //             </div>

// //             {isAuthenticated().user &&
// //             isAuthenticated().user._id === user._id  (
// //               <div className="d-inline-block">
// //                 {/* <Link
// //                   className="btn btn-raised btn-info mr-5"
// //                   to={`/post/create`}
// //                 >
// //                   Create Post
// //                 </Link> */}

// //                 <Link
// //                   className="btn btn-raised btn-success mr-5"
// //                   to={`/user/edit/${user._id}`}
// //                 >
// //                   Edit Profile
// //                 </Link>
// //                 <DeleteUser userId={user._id} />
// //               </div>
// //             ) 
// //             // : (
// //             //   <FollowProfileButton
// //             //     following={this.state.following}
// //             //     onButtonClick={this.clickFollowButton}
// //             //   />
// //             // )
// //             }

            
// //           </div>
// //         </div>
// //         <div className="row">
// //           <div className="col md-12 mt-5 mb-5">
// //             <hr />
// //             <p className="lead">{user.about}</p>
// //             <hr />

// //             {/* <ProfileTabs
// //               followers={user.followers}
// //               following={user.following}
// //               posts={posts}
// //             /> */}
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default Profile;






























































// // import React, { Component } from "react";
// // import { MDBDataTable } from 'mdbreact';
// // import { isAuthenticated } from "../auth";
// // import { Redirect, Link } from "react-router-dom";
// // import { findlist} from "./apiUser";
// // // import Select from 'react-select';
// // import { MDBCard, MDBCardBody, MDBCardTitle, MDBBadge, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer } from
// // "mdbreact";


// // class addstock extends Component {
// //     constructor() {
// //         super();
// //         this.state = {
// //             listdata: [],
// //             redirectToSignin: false
// //         };
// //     }
// //     init = userId => {
// //         const token = isAuthenticated().token;
// //         findlist(userId, token).then(data => {
// //             if (data.error) {
// //                 this.setState({ redirectToSignin: true });
// //             } else {
// //                 this.setState({ listdata: data });
// //             }
// //         });
// //     };
// //     componentDidMount() {
// //         const userId = this.props.match.params.userId;
// //         this.init(userId);
// //     }
// //     componentWillReceiveProps(props) {
// //         const userId = this.props.match.params.userId;
// //         this.init(userId);
// //     }
    
    
  

// //     render() {
// //         const { redirectToSignin, listdata } = this.state;
// //         const symbol =[];
        
// //         function alpha(){
// //         for (let i=0; i<=299; i++){
// //           symbol[i] = listdata.map(listdata => <div>{listdata.symbol[i]}</div>)
            
// //         }
// //         return symbol;
// //     }

   

        
    
         
// //         if (redirectToSignin) return <Redirect to="/signin" />;

        

// //         return (
// //             <div>
// //                 <br></br>
// //            <br></br>
           
// //             <MDBContainer>
// //             <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
// //                 <MDBCardHeader color="success-color">Profile</MDBCardHeader>
// //                 <MDBCardBody>
// //                 <MDBCardText><h6><strong>Please Select the Stock</strong></h6></MDBCardText>
                
            
// //             <select >
// //                 <option selected >select company</option>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[0]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[1]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[2]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[3]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[4]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[5]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[6]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[7]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[8]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[9]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[10]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[11]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[12]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[13]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[14]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[15]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[16]}</option>)}
// //                 <br></br>
// //                 {this.state.listdata.map((list) => <option key={list._id} value={list.symbol}>{list.symbol[17]}</option>)}

// //             </select>
// //             <br></br>
// //             <p>{listdata.map(listdata => <div>{listdata._id}</div>)}</p>
// //             <br></br>
            
// //             <MDBBtn href = {`/user/${listdata._id}/stockmanage`} color="success" size="md">
// //                                     Ok
// //                                 </MDBBtn>
// //             </MDBCardBody>
            
// //             </MDBCard>
            
// //             </MDBContainer>
// //             <br></br>
// //            <br></br>
// //             </div>
           
// //         )







       
// //     }
// // }
// // export default addstock;
