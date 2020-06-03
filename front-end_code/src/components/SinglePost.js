import React, { Component } from 'react';
import { singlePost, remove, like, unlike } from './apiPost';

import { Link, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBadge, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer } from
"mdbreact";

class SinglePost extends Component {
    state = {
        post: '',
        redirectToHome: false,
        redirectToSignin: false,
    };


    componentDidMount = () => {
        const postId = this.props.match.params.postId;
        singlePost(postId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({
                    post: data,
                });
            }
        });
    };

  
  

    deletePost = () => {
        const postId = this.props.match.params.postId;
        const token = isAuthenticated().token;
        remove(postId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ redirectToHome: true });
            }
        });
    };

    deleteConfirmed = () => {
        let answer = window.confirm('Are you sure you want to delete your post?');
        if (answer) {
            this.deletePost();
        }
    };

    renderPost = post => {
        const posterId = post.postedBy ? `/user/${post.postedBy._id}` : '';
        const posterName = post.postedBy ? post.postedBy.name : ' Unknown';


        return (
            <div>
            <br/>
                <br/>
            <MDBContainer>
            <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
                <MDBCardHeader color="success-color">Posts Details</MDBCardHeader>
                <MDBCardBody>
                {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
                <MDBCardText><h6><strong>Post Title : </strong>{post.title}</h6></MDBCardText>
                <MDBCardText><h6><strong>Post Body : </strong>{post.body}</h6></MDBCardText>
               
                <div className="d-inline-block">
                            <MDBBtn href = {`/posts`} color="success" size="sm">
                                 Back to Posts
                             </MDBBtn>
               
                {isAuthenticated().user && isAuthenticated().user._id === post.postedBy._id && (
                        <div >
                                <MDBBtn href = {`/post/edit/${post._id}`} color="success" size="sm">
                                    Edit Post
                                </MDBBtn>
                                <MDBBtn onClick={this.deleteConfirmed} color="danger" size="sm">
                                    Delete Post
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
                Posted by <Link to={`${posterId}`}>{posterName} </Link>
                    on {new Date(post.created).toDateString()}
                </MDBCardFooter>
            </MDBCard>
            </MDBContainer>
            <br/>
            <br/>
            </div>
           

             
        );
    };

    render() {
        const { post, redirectToHome, redirectToSignin } = this.state;

        if (redirectToHome) {
            return <Redirect to={`/`} />;
        } else if (redirectToSignin) {
            return <Redirect to={`/login`} />;
        }

        return (
            <div className="container">
                <h2 className="display-2 mt-5 mb-5">{post.title}</h2>

                {!post ? (
                    <div className="jumbotron text-center">
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    this.renderPost(post)
                )}

                {/* <Comment postId={post._id} comments={comments.reverse()} updateComments={this.updateComments} /> */}
            </div>
        );
    }
}

export default SinglePost;
