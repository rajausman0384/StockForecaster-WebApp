import React, { Component } from 'react';
import { singleShare,remove } from './apiShare';
import { Link, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBadge, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer } from
"mdbreact";

class SingleShare extends Component {
    state = {
        share: '',
        redirectToHome: false,
        redirectToSignin: false,
        
    };

   

    componentDidMount = () => {
        const shareId = this.props.match.params.shareId;
        singleShare(shareId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({
                    share: data,
                });
            }
        });
    };

  

    deleteShare = () => {
        const shareId = this.props.match.params.shareId;
        const token = isAuthenticated().token;
        remove(shareId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ redirectToHome: true });
            }
        });
    };

    deleteConfirmed = () => {
        let answer = window.confirm('Are you sure you want to delete your Share?');
        if (answer) {
            this.deleteShare();
        }
    };

    renderShare = share => {
        const shareId = share.postedBy ? `/user/${share.postedBy._id}` : '';
        const sharerName = share.postedBy ? share.postedBy.name : ' Unknown';


        return (
            <div>
            <br/>
                <br/>
            <MDBContainer>
            <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
                <MDBCardHeader color="success-color">Share Details</MDBCardHeader>
                <MDBCardBody>
                {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
                <MDBCardText><h6><strong>Share Name : </strong>{share.shareName}</h6></MDBCardText>
                <MDBCardText><h6><strong>Share Symbol : </strong>{share.shareSymbol}</h6></MDBCardText>
                <MDBCardText><h6><strong>Share Value : </strong>{share.shareValue}</h6></MDBCardText>
                <MDBCardText><h6><strong>Share OpenPrice : </strong>{share.shareOpenPrice}</h6></MDBCardText>
                
                <div className="d-inline-block">
                            <MDBBtn href = {`/shares`} color="success" size="sm">
                                 Back to Shares
                             </MDBBtn>
               
                {isAuthenticated().user && isAuthenticated().user._id === share.postedBy._id && (
                        <div >
                                <MDBBtn href = {`/share/edit/${share._id}`} color="success" size="sm">
                                    Edit Share
                                </MDBBtn>
                                <MDBBtn onClick={this.deleteConfirmed} color="danger" size="sm">
                                    Delete Share
                                </MDBBtn>
                                </div>    
                            )}
                            </div>
                {/* {isAuthenticated().user && isAuthenticated().user._id === share.postedBy._id &&(
                                <MDBBtn onClick={this.deleteConfirmed} color="danger" size="sm">
                                    Delete Share
                                </MDBBtn>
                                
                            )} */}
                
                
                </MDBCardBody>
                <MDBCardFooter color="success-color">
                Posted by <Link to={`${shareId}`}>{sharerName} </Link>
                    on {new Date(share.created).toDateString()}
                </MDBCardFooter>
            </MDBCard>
            </MDBContainer>
            <br/>
            <br/>
            </div>
           

             
        );
    };

    render() {
        const { share, redirectToHome, redirectToSignin } = this.state;

        if (redirectToHome) {
            return <Redirect to={`/shares`} />;
        } else if (redirectToSignin) {
            return <Redirect to={`/login`} />;
        }

        return (
            <div className="container">
                <h2 className="display-2 mt-5 mb-5">{share.sharerName}</h2>

                {!share ? (
                    <div className="jumbotron text-center">
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    this.renderShare(share)
                )}

                
            </div>
        );
    }
}

export default SingleShare;
