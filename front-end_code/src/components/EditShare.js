import React, { Component } from "react";
import { singleShare, update } from "./apiShare";
import { isAuthenticated } from "../auth";
import { Redirect } from "react-router-dom";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBadge, MDBCardText, MDBCardHeader, MDBCardFooter,  MDBContainer } from
"mdbreact";



class EditShare extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            shareName: "",
            shareSymbol: "",
            shareValue: "",
            shareOpenPrice: "",
            redirectToProfile: false,
            error: "",
            loading: false
        };
    }

    init = shareId => {
        singleShare(shareId).then(data => {
            if (data.error) {
                this.setState({ redirectToProfile: true });
            } else {
                this.setState({
                    id: data.postedBy._id,
                    shareName: data.shareName,
                    shareSymbol: data.shareSymbol,
                    shareValue: data.shareValue,
                    shareOpenPrice: data.shareOpenPrice,
                    error: ""
                });
            }
        });
    };

    componentDidMount() {
        this.shareData = new FormData();
        const shareId = this.props.match.params.shareId;
        this.init(shareId);
    }

    isValid = () => {
        const { shareName, shareSymbol, shareValue, shareOpenPrice} = this.state;
        
        if (shareName.length === 0 || shareSymbol.length === 0 || shareValue.length === 0 || shareOpenPrice.length === 0) {
            this.setState({ error: "All fields are required", loading: false });
            return false;
        }
        return true;
    };

    handleChange = name => event => {
        this.setState({ error: "" });
         const value = event.target.value;

        // const fileSize = name === "photo" ? event.target.files[0].size : 0;
        this.shareData.set(name,value);
        this.setState({ [name]: value });
    };

    clickSubmit = event => {
        event.preventDefault();
        this.setState({ loading: true });

        if (this.isValid()) {
            const shareId = this.props.match.params.shareId;
            const token = isAuthenticated().token;

            update(shareId, token, this.shareData).then(data => {
                if (data.error) this.setState({ error: data.error });
                else {
                    this.setState({
                        loading: false,
                        shareName: "", 
                        shareSymbol: "",
                        shareValue: "",
                         shareOpenPrice: "",
                        redirectToProfile: true
                    });
                }
            });
        }
    };

    editShareForm = (shareName, shareSymbol, shareValue, shareOpenPrice) => (
            <div>
            <br/>
              <br/>
            <MDBContainer>
          <MDBCard style={{ width: "50rem", marginTop: "1rem" }} className="text-center">
              <MDBCardHeader color="success-color"> Edit Profile</MDBCardHeader>
              <MDBCardBody>
          <form
          //   className="needs-validation"
          //   onSubmit={this.submitHandler}
          //   noValidate
          >
            <MDBRow>
              <MDBCol md="4">
              <MDBInput className="form-control form-control-lg"
                  
                  name='ShareName'
                  type='text'
                  id='materialFormRegisterNameEx'
                  label='Share Name'
                  outline
                  required
                  onChange={this.handleChange("shareName")}
                  value={shareName}
                ></MDBInput>
                </MDBCol>
                <MDBCol md="4">
                <MDBInput className="form-control form-control-lg"
                  
                  name='ShareSymbol'
                  type="text"
                  id='materialFormRegisterSymbol'
                  label='ShareSymbol'
                  outline
                  required
                  onChange={this.handleChange("shareSymbol")}
                  value={shareSymbol}
                ></MDBInput>
                </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="4">
                <MDBInput className="form-control form-control-lg"
                  
                  name='shareValue'
                  type="number"
                  id='materialFormRegisterValue'
                  label='Share Value'
                  outline
                  required
                  onChange={this.handleChange("shareValue")}
                  value={shareValue}
                ></MDBInput>
                </MDBCol>
                <MDBCol md="4">
                <MDBInput className="form-control form-control-lg"
                  
                  name='shareOpenPrice'
                  type="number"
                  id='materialFormRegisterPrice'
                  label='Share Open Price'
                  outline
                  required
                  onChange={this.handleChange("shareOpenPrice")}
                  value={shareOpenPrice}
                ></MDBInput>
                </MDBCol>
                </MDBRow>
                <div className="text-center mt-4">
                  <MDBBtn color="deep-orange" className="mb-3" onClick={this.clickSubmit}>
                    Update Share
                  </MDBBtn>
                  </div>
                </form>
          </MDBCardBody>
          </MDBCard>
          </MDBContainer>
          <br/>
              <br/>
        </div>
            );

            render() {
                const {
                    id,
                    shareName , 
                    shareSymbol ,
                    shareValue ,
                    shareOpenPrice ,
                    user,
                    error,
                    open,
                    redirectToProfile
                } = this.state;
        
                if (redirectToProfile) {
                    return <Redirect to={`/user/${isAuthenticated().user._id}`} />;
                }
        
                return (
                    <div className="container">
                    <div
                        className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}
                    >
                        {error}
                    </div>
                  
        
                    <div
                        className="alert alert-info"
                        style={{ display: open ? "" : "none" }}
                    >
                        {/* <Link to="/login">Sign In</Link>. */}
                    </div>
                    {isAuthenticated().user._id === id &&
                    this.editShareForm(shareName, shareSymbol, shareValue, shareOpenPrice)}
                    </div>
               
                );
            }
        }

   
       

export default EditShare;
