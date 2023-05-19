import React from "react";
import { Link } from "react-router-dom";

const MiscNotifications = () => {
    return (
        <>
            {/* <!-- BEGIN: Content --> */}
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-1">
                            {/* <h3 className="content-header-title">Sticky Notes </h3> */}
                            <div className="row breadcrumbs-top">
                                <div className="breadcrumb-wrapper col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/admin">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">All Notifications
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-body">
                        <section>
                            <div className="icon-tabs">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12 mx-auto">
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="row mx-auto">
                                                    <div className="col-md-3 col-sm-12 col-xs-12">
                                                        <div className="m-0">
                                                            <label htmlFor="" className="font-weight-bold">Notifications</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                                        <div className="table-responsive">
                                                            <table className="table table-hover table-bordered" id="dtBasicExample">
                                                                <thead>
                                                                    <tr>
                                                                        <th>ID</th>
                                                                        <th>Customer</th>
                                                                        <th>Details</th>
                                                                        <th>Notification</th>
                                                                        <th>Delivered</th>
                                                                        <th>Date</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>Riya</td>
                                                                        <td>
                                                                            Order code: 20220912-10085522 has been Delivered
                                                                            <br />
                                                                            <small>September 12, 2022, 12:09 am</small>
                                                                        </td>
                                                                        <td>Message 1 Notice</td>
                                                                        <td>Yes</td>
                                                                        <td>25/03/2023</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>2</td>
                                                                        <td>Mohan</td>
                                                                        <td>
                                                                            Order code: 20220912-10085522 has been Paid
                                                                            <br />
                                                                            <small>September 12, 2022, 12:09 am</small>
                                                                        </td>
                                                                        <td>Message 2 Notice</td>
                                                                        <td>No</td>
                                                                        <td>25/03/2023</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
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
            {/* <!-- END: Content --> */}
        </>
    );
};

export default MiscNotifications;
