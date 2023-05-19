import React from "react";
import { Link } from "react-router-dom";

const CompanyReport = () => {
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
                                        <li className="breadcrumb-item"><a href="/admin">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">All Companies Reports
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
                                                            <label className="font-weight-bold" htmlFor="">Companies Reports</label>
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
                                                                        <th>Company Name</th>
                                                                        <th>Functions</th>
                                                                        <th>Status</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>The Company</td>
                                                                        <td>
                                                                            IT and Services
                                                                        </td>
                                                                        <td>Active/Inactive</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>2</td>
                                                                        <td>The Company</td>
                                                                        <td>
                                                                            Import Exports
                                                                        </td>
                                                                        <td>Active/Inactive</td>
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

export default CompanyReport;
