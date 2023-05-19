import React from "react";
import { Link } from "react-router-dom";

const NotifiTemp = () => {
    return (
        <div className="app-content content">
            <div className="content-overlay"></div>
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-md-6 col-12 mb-1">
                        <div className="row breadcrumbs-top">
                            <div className="breadcrumb-wrapper col-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="index.php">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Notification Setting
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-body">
                    <section>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="card-title">
                                            Notification Setting
                                        </h2>
                                    </div>

                                    <div className="card-body">
                                        <div className="table-responsive table-responsive1">
                                            <table className="table table-hover table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Event</th>
                                                        <th>Option</th>
                                                        <th>Template Id</th>
                                                        <th>
                                                            Sample Message
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="w-25">
                                                            Candidate Registration
                                                        </td>

                                                        <td className="w-25">
                                                            <div className="form-check-inline">
                                                                <label className="form-check-label">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        value=""
                                                                    />
                                                                    Email
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline">
                                                                <label className="form-check-label">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        value=""
                                                                    />
                                                                    SMS
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline">
                                                                <label className="form-check-label">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        value=""
                                                                    />
                                                                    Mobile App
                                                                </label>
                                                            </div>
                                                        </td>

                                                        <td></td>

                                                        <td>
                                                            Dear {`{{ candidate_name }}`} your Registration at In Jobs is successful on date {`{{ appointment_date }}`} with Patient Id {`{{ candidate_id }}`} and REG No {`{{ JobNo }}`}
                                                            <Link href="#" data-toggle="modal" data-target="#edit-message">
                                                                <i className="fa fa-edit"></i>
                                                            </Link>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="w-25">
                                                            Company Registration
                                                        </td>

                                                        <td className="w-25">
                                                            <div className="form-check-inline">
                                                                <label className="form-check-label">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        value=""
                                                                    />
                                                                    Email
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline">
                                                                <label className="form-check-label">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        value=""
                                                                    />
                                                                    SMS
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline">
                                                                <label className="form-check-label">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        value=""
                                                                    />
                                                                    Mobile App
                                                                </label>
                                                            </div>
                                                        </td>

                                                        <td></td>

                                                        <td>
                                                            Dear {`{{ company_name }}`} your Registration at In Jobs Site is successful on date {`{{ appointment_date }}`} with Patient Id {`{{ company_id }}`} and REG No {`{{ JobNo }}`}
                                                            <Link href="#" data-toggle="modal" data-target="#edit-message">
                                                                <i className="fa fa-edit"></i>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default NotifiTemp;
