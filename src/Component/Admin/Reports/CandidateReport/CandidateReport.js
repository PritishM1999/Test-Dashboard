import React from "react";
import { Link } from "react-router-dom";

const CandidateReport = () => {
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
                                        <li className="breadcrumb-item"><Link to="/admin">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Candidate Reports
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
                                                        <div className="m-0 content-header">
                                                            <label className="font-weight-bold" htmlFor="">All Reports</label>
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
                                                                        <th>#</th>
                                                                        <th>Candidate</th>
                                                                        <th>Details</th>
                                                                        <th>Income</th>
                                                                        <th>Last Active Date</th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>Riya</td>
                                                                        <td>
                                                                            Job code: 20220912-10085522 has been Applied
                                                                            <br />
                                                                            <small>September 12, 2022, 12:09 am</small>
                                                                        </td>
                                                                        <td>$ 1,800 / mo</td>
                                                                        <td>25/03/2023</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>2</td>
                                                                        <td>Mohan</td>
                                                                        <td>
                                                                            Job code: 20220912-10085522 has been Applied
                                                                            <br />
                                                                            <small>September 12, 2022, 12:09 am</small>
                                                                        </td>
                                                                        <td>$ 8500 / mo</td>
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

export default CandidateReport;
