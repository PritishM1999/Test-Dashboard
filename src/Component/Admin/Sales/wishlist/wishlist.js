import React from "react";
import { Link } from "react-router-dom";

function WishList() {
    return (
        <>
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2">
                            <h3 className="content-header-title"> All Wishlist Products</h3>
                            <div className="row breadcrumbs-top">
                                <div className="breadcrumb-wrapper col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            All Wishlist Products
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-body">
                        <section>
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-md-8 col-sm-12 col-xs-12">
                                                    <h4 className="card-title">Wishlist Products</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-content">
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-bordered" id="dtBasicExample">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Date</th>
                                                                <th>Product</th>
                                                                <th>Customer</th>
                                                                <th>Amount</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>08 February 2023</td>
                                                                <td>
                                                                    <Link to="https://drbrownslab.com/product-details/25-retinol-serum-with-vitamin-e-hyaluronic-acid/22" target="_blank" className="text-dark">
                                                                        <img src="https://drbrownslab.com/assets/upload/products/24e293078ae151a60ded.jpg" alt="product" className="" style={{ width: "40px", height: "40px" }} />

                                                                        2.5% Retinol Serum with Vitamin E &amp; Hyaluronic Acid
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    KIMBERLEY D. CLARKE <br />
                                                                    <small>KI@gmail.com</small>
                                                                </td>
                                                                <td>$50.00</td>
                                                                <td>
                                                                    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                                        <Link className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></Link>
                                                                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", transform: "translate3d(-58px, -142px, 0px)", top: "0px", left: "0px", willChange: "transform" }}>
                                                                            <Link className="dropdown-item"><i className="fa fa-pencil-square-o"></i> Edit</Link>
                                                                            <Link className="dropdown-item"><i className="fa fa-trash-o"></i> Delete</Link>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WishList;