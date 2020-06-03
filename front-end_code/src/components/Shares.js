import React, { Component } from "react";
import { list } from "./apiShare";
import { Link } from "react-router-dom";

import { MDBBtn,MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


   
     
       
     

class Shares extends Component {
    constructor() {
        super();
        this.state = {
            shares: [],
            page: 1
        };
    }

    loadShares = page => {
        list(page).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ shares: data });
            }
        });
    };

    componentDidMount() {
        this.loadShares(this.state.page);
    }

    loadMore = number => {
        this.setState({ page: this.state.page + number });
        this.loadShares(this.state.page + number);
    };

    loadLess = number => {
        this.setState({ page: this.state.page - number });
        this.loadShares(this.state.page - number);
    };

    renderShares = shares => {
        return (
            <div >
                <MDBTable>
                 <MDBTableHead color="primary-color" textWhite>
                                <tr>
                                {/* <th>#</th> */}
                                <th>Name</th>
                                <th>Symbol</th>
                                <th>Value</th>
                                <th>Open Price</th>
                                <th>Read More</th>
                                </tr>
                            </MDBTableHead>
                {shares.map((share, i) => {
                    const sharerId = share.postedBy
                        ? `/user/${share.postedBy._id}`
                        : "";
                    const sharerName = share.postedBy
                        ? share.postedBy.name
                        : " Unknown";

                    return (

                        
                        
                           
                            
                            <MDBTableBody key={i}>
                            <tr>
                            <td>{share.shareName}</td>
                            <td>{share.shareSymbol}</td>
                            <td>{share.shareValue}</td>
                            <td>{share.shareOpenPrice}</td>
                            <td><MDBBtn href = {`/share/${share._id}`}color="purple" size="sm">Read More</MDBBtn>
                            </td>
                            {/* <td>{<Link to={`/share/${share._id}`}>
                                    Read More
                                    </Link>}</td> */}
                            </tr>
                            {/* <div className="card-body">
                                <p className="card-text">
                                    {share.shareSymbol}
                                </p>
                                <br />
                                <p className="font-italic mark">
                                    Posted by{" "}
                                    <Link to={`${sharerId}`}>
                                        {sharerName}{" "}
                                    </Link>
                                    on {new Date(share.created).toDateString()}
                                </p>
                                <Link
                                    to={`/share/${share._id}`}
                                    className="btn btn-raised btn-primary btn-sm"
                                >
                                    Read more
                                </Link>
                            </div> */}
                         </MDBTableBody>
                                                
                        
                        
                        
                        
                    );
                   
                    
                })}
                 </MDBTable>   
            </div>
        );
    };

    render() {
        const { shares, page } = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">
                    {!shares.length ? "No more shares!" : "Recent Shares"}
                </h2>

                {this.renderShares(shares)}

                {page > 1 ? (
                    <button
                        className="btn btn-raised btn-warning mr-5 mt-5 mb-5"
                        onClick={() => this.loadLess(1)}
                    >
                        Previous ({this.state.page - 1})
                    </button>
                ) : (
                    ""
                )}

                {shares.length ? (
                    <button
                        className="btn btn-raised btn-success mt-5 mb-5"
                        onClick={() => this.loadMore(1)}
                    >
                        Next ({page + 1})
                    </button>
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default Shares;
