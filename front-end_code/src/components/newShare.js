import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { create } from "./apiShare";
import { Redirect } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBInput,
  MDBBtn
} from "mdbreact";


class NewShare extends Component {
    constructor() {
        super();
        this.state = {
            shareName: "",
            shareSymbol: "",
            shareValue: "",
            shareOpenPrice: "",
            error: "",
            user: {},
            loading: false,
            redirectToProfile: false
        };
    }

    componentDidMount() {
        this.shareData = new FormData();
        this.setState({ user: isAuthenticated().user });
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
            const userId = isAuthenticated().user._id;
            const token = isAuthenticated().token;

            create(userId, token, this.shareData).then(data => {
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

  
    newShareForm = (shareName, shareSymbol, shareValue, shareOpenPrice) => (
        <div >
       <br/>
       <br />  
      <MDBContainer >
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6">  
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header warm-flame-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Stock Management
                  </h3>
                </MDBCardHeader>
                <br/>
                <MDBInput className="form-control form-control-lg"
                  icon='user'
                  name='ShareName'
                  type='text'
                  id='materialFormRegisterNameEx'
                  label='Share Name'
                  outline
                  required
                  onChange={this.handleChange("shareName")}
                  value={shareName}
                ></MDBInput>
                <MDBInput className="form-control form-control-lg"
                  icon='key'
                  name='ShareSymbol'
                  type="text"
                  id='materialFormRegisterSymbol'
                  label='ShareSymbol'
                  outline
                  required
                  onChange={this.handleChange("shareSymbol")}
                  value={shareSymbol}
                ></MDBInput>
                <MDBInput className="form-control form-control-lg"
                  icon='phone'
                  name='shareValue'
                  type="number"
                  id='materialFormRegisterValue'
                  label='Share Value'
                  outline
                  required
                  onChange={this.handleChange("shareValue")}
                  value={shareValue}
                ></MDBInput>
                <MDBInput className="form-control form-control-lg"
                  icon='book'
                  name='shareOpenPrice'
                  type="number"
                  id='materialFormRegisterPrice'
                  label='Share Open Price'
                  outline
                  required
                  onChange={this.handleChange("shareOpenPrice")}
                  value={shareOpenPrice}
                ></MDBInput>
                <div className="text-center mt-4">
                  <MDBBtn color="deep-orange" className="mb-3" onClick={this.clickSubmit}>
                    Add Share
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <br/>
      </div>
    );

    render() {
        const {
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
            return <Redirect to={`/user/${user._id}`} />;
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

            {this.newShareForm(shareName, shareSymbol, shareValue, shareOpenPrice)}
            </div>
       
        );
    }
}

export default NewShare;
