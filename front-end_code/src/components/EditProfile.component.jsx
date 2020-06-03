import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { read, update } from "./apiUser";
import { Redirect } from "react-router-dom";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { MDBIcon,MDBCard, MDBCardBody, MDBCardTitle, MDBBadge, MDBCardText, MDBCardHeader, MDBCardFooter,  MDBContainer } from
"mdbreact";
// import './v1.css';

class EditProfile extends React.Component {
    constructor() {
        super();
    this.state = {
        id: "",
        name: "",
        email: "",
        password: "",
        phone: "",
        NTN: "",
        city: "",
        address: "",
        about: "",
        redirectToProfile: false,
        error: "",
        loading: false
      }
    };
      init = userId => {
        const token = isAuthenticated().token;
        read(userId, token).then(data => {
            if (data.error) {
                this.setState({ redirectToProfile: true });
            } else {
                this.setState({
                    id: data._id,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    NTN: data.NTN,
                    city: data.city,
                    address: data.address,
                    about: data.about,
                    error: ""
                });
            }
        });
    };
    componentDidMount() {
        this.userData = new FormData();
        const userId = this.props.match.params.userId;
        this.init(userId);
    }
    

    //   changeHandler = event => {
    //     this.setState({ [event.target.name]: event.target.value });
    //   };

    
      isValid = () => {
        const { name, email, password, phone, NTN, city, address,about  } = this.state;
        if (name.length === 0) {
            this.setState({ error: "Name is required" });
            return false;
        }
        // email@domain.com
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            this.setState({ error: "A valid Email is required" });
            return false;
        }
        if (password.length >= 1 && password.length <= 5) {
            this.setState({
                error: "Password must be at least 6 characters long"
            });
            return false;
        }               
        if (phone.length === 0) {
            this.setState({ error: "Name is required" });
            return false;
        }
        if (NTN.length === 0) {
            this.setState({ error: "Name is required" });
            return false;
        }
        if (city.length === 0) {
            this.setState({ error: "Name is required" });
            return false;
        }
        if (address.length === 0) {
            this.setState({ error: "Name is required" });
            return false;
        }
        if (about.length <=50) {
          this.setState({ error: "minium 50 characters are required" });
          return false;
      }
        return true;
    };

      clickSubmit = event => {
        event.preventDefault();
        this.setState({ loading: true });
        if (this.isValid()) {
            const userId = this.props.match.params.userId;
            const token = isAuthenticated().token;
            update(userId, token, this.userData).then(data => {
                if (data.error) this.setState({ error: data.error });
                else
                    this.setState({
                        redirectToProfile: true
                    });
            });
        }
    };
    handleChange = name => event => {
        this.setState({ error: "" });
        const value =event.target.value;
        this.userData.set(name, value);
        this.setState({ [name]: value });
    };

      signupForm = (name, email, password, phone, NTN, city, address,about) => ( 
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
                        Edit Profile -{' '}
                        <span className='text-muted'>Complete your profile</span>
                      </h5>
                    </div>
                  </div>

                  <MDBCardBody>
      <MDBRow>
        <MDBCol md="4">
          <MDBInput
            value={name}
            name="name"
            onChange={this.handleChange("name")}
            type="text"
            id="materialFormRegisterNameEx"
            label="Name"
            required
          >
            {/* <div className="valid-tooltip">Looks good!</div> */}
          </MDBInput>
        </MDBCol>
        <MDBCol md="4">
          <MDBInput
            value={email}
            onChange={this.handleChange("email")}
            type="email"
            id="materialFormRegisterConfirmEx3"
            name="email"
            label="Your Email address"
          >
          </MDBInput>
        </MDBCol>
        <MDBCol md="4">
          <MDBInput
            value={password}
            name="password"
            onChange={this.handleChange("password")}
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
          <MDBInput
            value={phone}
            onChange={this.handleChange("phone")}
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
          <MDBInput
            value={NTN}
            onChange={this.handleChange("NTN")}
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
          <MDBInput
            value={city}
            onChange={this.handleChange("city")}
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
      <MDBInput
            value={address}
            onChange={this.handleChange("address")}
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
      <MDBBtn color="success" onClick={this.clickSubmit}>
        Update
      </MDBBtn>
      </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='4' className='mb-r'>
                <MDBCard className='profile-card'>
                  <MDBAvatar
                    tag='img'
                    alt='Anna Deynah'
                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg'
                    className='z-depth-1-half mb-4'
                  />
                  <MDBCardBody className='pt-0 mt-0'>
                    <h3 className='mb-3 font-bold'>
                      <strong>About Profile</strong>
                    </h3>
                    {/* <h6 className='font-bold cyan-text mb-4'>Web Designer</h6> */}
                    <p className='mt-4 text-muted'>
                    <MDBInput
            value={about}
            onChange={this.handleChange("about")}
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
      );
    
      render() {
        const {
            id,
            name,
            email,
            password,
            phone,
            NTN,
            city,
            address,
            about,
            redirectToProfile,
            error,
            loading
        } = this.state;
        if (redirectToProfile) {
            return <Redirect to={`/user/${id}`} />;
        }

        return (
          <div>
            <div className="container">
                <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                    {error}
                </div>
                {loading ? (
                    <div className="jumbotron text-center">
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    ""
                )}
                </div>

                {this.signupForm(name, email, password,phone,NTN,city,address,about)}
            </div>
            );
        }
    }
export default EditProfile;























// import React, { Component } from "react";
// import { isAuthenticated } from "../auth";
// import { read, update } from "./apiUser";
// import { Redirect } from "react-router-dom";
// import DefaultProfile from "../images/raja.jpg";
// class EditProfile extends Component {
//     constructor() {
//         super();
//         this.state = {
//             id: "",
//             name: "",
//             email: "",
//             password: "",
//             redirectToProfile: false,
//             error: "",
//             fileSize: 0,
//             loading: false
//         };
//     }
//     init = userId => {
//         const token = isAuthenticated().token;
//         read(userId, token).then(data => {
//             if (data.error) {
//                 this.setState({ redirectToProfile: true });
//             } else {
//                 this.setState({
//                     id: data._id,
//                     name: data.name,
//                     email: data.email,
//                     error: ""
//                 });
//             }
//         });
//     };
//     componentDidMount() {
//         this.userData = new FormData();
//         const userId = this.props.match.params.userId;
//         this.init(userId);
//     }
//     isValid = () => {
//         const { name, email, password, fileSize } = this.state;
//         if (fileSize > 100000) {
//             this.setState({ error: "File size should be less than 100kb" });
//             return false;
//         }
//         if (name.length === 0) {
//             this.setState({ error: "Name is required" });
//             return false;
//         }
//         // email@domain.com
//         if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//             this.setState({ error: "A valid Email is required" });
//             return false;
//         }
//         if (password.length >= 1 && password.length <= 5) {
//             this.setState({
//                 error: "Password must be at least 6 characters long"
//             });
//             return false;
//         }
//         return true;
//     };
//     handleChange = name => event => {
//         this.setState({ error: "" });
//         const value =event.target.value;
//         this.userData.set(name, value);
//         this.setState({ [name]: value });
//     };
//     clickSubmit = event => {
//         event.preventDefault();
//         this.setState({ loading: true });
//         if (this.isValid()) {
//             const userId = this.props.match.params.userId;
//             const token = isAuthenticated().token;
//             update(userId, token, this.userData).then(data => {
//                 if (data.error) this.setState({ error: data.error });
//                 else
//                     this.setState({
//                         redirectToProfile: true
//                     });
//             });
//         }
//     };
//     signupForm = (name, email, password) => (
//         <form>
//             <div className="form-group">
//                 <label className="text-muted">Profile Photo</label>
//                 <input
//                     onChange={this.handleChange("photo")}
//                     type="file"
//                     accept="image/*"
//                     className="form-control"
//                 />
//             </div>
//             <div className="form-group">
//                 <label className="text-muted">Name</label>
//                 <input
//                     onChange={this.handleChange("name")}
//                     type="text"
//                     className="form-control"
//                     value={name}
//                 />
//             </div>
//             <div className="form-group">
//                 <label className="text-muted">Email</label>
//                 <input
//                     onChange={this.handleChange("email")}
//                     type="email"
//                     className="form-control"
//                     value={email}
//                 />
//             </div>
//             <div className="form-group">
//                 <label className="text-muted">Password</label>
//                 <input
//                     onChange={this.handleChange("password")}
//                     type="password"
//                     className="form-control"
//                     value={password}
//                 />
//             </div>
//             <button
//                 onClick={this.clickSubmit}
//                 className="btn btn-raised btn-primary"
//             >
//                 Update
//             </button>
//         </form>
//     );
//     render() {
//         const {
//             id,
//             name,
//             email,
//             password,
//             redirectToProfile,
//             error,
//             loading
//         } = this.state;
//         if (redirectToProfile) {
//             return <Redirect to={`/user/${id}`} />;
//         }

//             const photoUrl = id
//         ? `${
//             process.env.REACT_APP_API_URL
//             }/user/photo/${id}?${new Date().getTime()}`
//         : DefaultProfile;

//         return (
//             <div className="container">
//                 <h2 className="mt-5 mb-5">Edit Profile</h2>
//                 <div
//                     className="alert alert-danger"
//                     style={{ display: error ? "" : "none" }}
//                 >
//                     {error}
//                 </div>
//                 {loading ? (
//                     <div className="jumbotron text-center">
//                         <h2>Loading...</h2>
//                     </div>
//                 ) : (
//                     ""
//                 )}

//                 <img src={photoUrl} alt={name} />
//                 <img
//                     style={{ height: "200px", width: "auto" }}
//                     className="img-thumbnail"
//                     src={photoUrl}
//                     onError={i => (i.target.src = `${DefaultProfile}`)}
//                     alt={name}
//                 />

//                 {this.signupForm(name, email, password)}
//             </div>
//             );
//         }
//     }
//     export default EditProfile;