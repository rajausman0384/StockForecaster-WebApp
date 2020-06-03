import React, { Component } from "react";
import { MDBDataTable } from 'mdbreact';
import { isAuthenticated } from "../auth";
import { Redirect, Link } from "react-router-dom";
import { findcurrency } from "./apiUser";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBadge, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer } from
"mdbreact";


class Currencyscrap extends Component {
    constructor() {
        super();
        this.state = {
            currencydata: [],
            redirectToSignin: false
        };
    }
    init = userId => {
        const token = isAuthenticated().token;
        findcurrency(userId, token).then(data => {
            if (data.error) {
                this.setState({ redirectToSignin: true });
            } else {
                this.setState({ currencydata: data });
            }
        });
    };
    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.init(userId);
    }
    componentWillReceiveProps(props) {
        const userId = this.props.match.params.userId;
        this.init(userId);
    }
    render() {
        const { redirectToSignin, currencydata } = this.state;
        const symbol =[];
        const currency =[];
        const buying = [];
        const selling =[];
        for (let i=0; i<=22; i++){
            currency[i] = currencydata.map(currencydata => <div>{currencydata.currency[i]}</div>)  
        }
        for (let i=0; i<=22; i++){
            symbol[i] = currencydata.map(currencydata => <div>{currencydata.symbol[i]}</div>)  
        }
        for (let i=0; i<=22; i++){
            selling[i] = currencydata.map(currencydata => <div>{currencydata.selling[i]}</div>)  
        }
        for (let i=0; i<=22; i++){
            buying[i] = currencydata.map(currencydata => <div>{currencydata.buying[i]}</div>)  
        }
        const data = {
            columns: [
              {
                label: 'Curreny',
                field: 'currency',
                sort: 'asc',
                width: 50,
              },
              {
                label: 'Symbol',
                field: 'symbol',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Buying',
                field: 'buying',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Selling',
                field: 'selling',
                sort: 'asc',
                width: 100
              }
            ],
            rows: [
              {
                currency: currency[0],
                symbol:   symbol[0],
                buying:   buying[0],
                selling:  selling[0],
              },
              {
                currency: currency[1],
                symbol:   symbol[1],
                buying:   buying[1],
                selling:  selling[1],
              },
              {
                currency: currency[2],
                symbol:   symbol[2],
                buying:   buying[2],
                selling:  selling[2],
              },
              {
                currency: currency[3],
                symbol:   symbol[3],
                buying:   buying[3],
                selling:  selling[3],
              },
              {
                currency: currency[4],
                symbol:   symbol[4],
                buying:   buying[4],
                selling:  selling[4],
              },
              {
                currency: currency[5],
                symbol:   symbol[5],
                buying:   buying[5],
                selling:  selling[5],
              },
              {
                currency: currency[6],
                symbol:   symbol[6],
                buying:   buying[6],
                selling:  selling[6],
              },
              {
                currency: currency[7],
                symbol:   symbol[7],
                buying:   buying[7],
                selling:  selling[7],
              },
              {
                currency: currency[8],
                symbol:   symbol[8],
                buying:   buying[8],
                selling:  selling[8],
              },
              {
                currency: currency[9],
                symbol:   symbol[9],
                buying:   buying[9],
                selling:  selling[9],
              },
              {
                currency: currency[10],
                symbol:   symbol[10],
                buying:   buying[10],
                selling:  selling[10],
              },
              {
                currency: currency[0],
                symbol:   symbol[0],
                buying:   buying[0],
                selling:  selling[0],
              },
              {
                currency: currency[0],
                symbol:   symbol[0],
                buying:   buying[0],
                selling:  selling[0],
              },
              {
                currency: currency[0],
                symbol:   symbol[0],
                buying:   buying[0],
                selling:  selling[0],
              },
              {
                currency: currency[0],
                symbol:   symbol[0],
                buying:   buying[0],
                selling:  selling[0],
              },
              {
                currency: currency[0],
                symbol:   symbol[0],
                buying:   buying[0],
                selling:  selling[0],
              },
              {
                currency: currency[0],
                symbol:   symbol[0],
                buying:   buying[0],
                selling:  selling[0],
              },
              {
                currency: currency[0],
                symbol:   symbol[0],
                buying:   buying[0],
                selling:  selling[0],
              },
              {
                currency: currency[0],
                symbol:   symbol[0],
                buying:   buying[0],
                selling:  selling[0],
              },
              {
                currency: currency[0],
                symbol:   symbol[0],
                buying:   buying[0],
                selling:  selling[0],
              },
              {
                currency: currency[0],
                symbol:   symbol[0],
                buying:   buying[0],
                selling:  selling[0],
              }
            ]
          };
        if (redirectToSignin) return <Redirect to="/signin" />;

        // const photoUrl = user._id
        //     ? `${process.env.REACT_APP_API_URL}/user/photo/${
        //           user._id
        //       }?${new Date().getTime()}`
        //     : DefaultProfile;

        return (
            <div>
                <br/>
                <br/>

    <MDBContainer>
      <MDBCard>
        <MDBCardBody>
          <MDBDataTable striped bordered hover data={data} />
        </MDBCardBody>
      </MDBCard>
      {/* <LinkCard docs='https://mdbootstrap.com/docs/react/tables/datatables/' /> */}
    </MDBContainer>
    <br/>
    <br/>
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
export default Currencyscrap;
