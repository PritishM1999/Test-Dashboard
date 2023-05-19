import React from "react";
import { Link } from "react-router-dom";
// import './Hr.css';

const HrEmployees = () => {
    return (
        <>
            {/* BEGIN: Content */}

            {/* BEGIN: Content*/}
            {/* Horizontal menu */}
            {/* <div className="horizontal-menu">
                <div id="menu_area" className="menu-area">
                    <div className="row">
                        <nav className="navbar navbar-light navbar-expand-lg mainmenu">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="active"><Link to="#">Active <span className="sr-only">(current)</span></Link></li>
                                    <li><Link to="#">Inactive</Link></li>
                                    <li><Link to="#">Free</Link></li>
                                    <li><Link to="#">Suscribed</Link></li>
                                    <li><Link to="#">Pending</Link></li>
                                    <li><Link to="#">Blocked</Link></li>
                                    <li><Link to="#">Closed</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div> */}
            {/*END- Horizontal menu */}
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2">
                            {/* <h3 className="content-header-title">All Companies</h3> */}
                            <div className="row breadcrumbs-top">
                                <div className="breadcrumb-wrapper col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>

                                        <li className="breadcrumb-item active">All Human Resources</li>
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
                                                    <h4 className="card-title">All HR's</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-content">
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-bordered" id="dtBasicExample">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Name</th>
                                                                <th>Company</th>
                                                                <th>Email Address</th>
                                                                <th>Phone</th>
                                                                <th>Hiring for Position</th>
                                                                <th>Package</th>
                                                                <th>Wallet Balance</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Alon Mask</td>
                                                                <td>The Company</td>
                                                                <td>customer@example.com</td>
                                                                <td>+8801642954885</td>
                                                                <td>Senior Developer</td>
                                                                <td>$2,073.000</td>
                                                                <td>0</td>

                                                                <td>
                                                                    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                                        <a className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
                                                                            <a className="dropdown-item" href="edit-customer.php">
                                                                                <i className="fa fa-eye"></i> Edit
                                                                            </a>
                                                                            <a className="dropdown-item" href="#">
                                                                                <i className="fa fa-trash"></i> Delete
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>2</td>
                                                                <td>Alon Mask</td>
                                                                <td>The Company</td>
                                                                <td>customer@example.com</td>
                                                                <td>+8801642954885</td>
                                                                <td>Juniour Developer</td>
                                                                <td>$1,200.000</td>
                                                                <td>0</td>

                                                                <td>
                                                                    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                                        <a className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop2" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
                                                                            <a className="dropdown-item" href="edit-customer.php">
                                                                                <i className="fa fa-eye"></i> Edit
                                                                            </a>
                                                                            <a className="dropdown-item" href="#">
                                                                                <i className="fa fa-trash"></i> Delete
                                                                            </a>
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
            {/* END: Content*/}
        </>
    );

}

export default HrEmployees;