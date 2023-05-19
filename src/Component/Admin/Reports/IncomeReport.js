import React, { useState } from "react";
import { DatePicker } from "antd";
import moment from 'moment';
import { Link } from "react-router-dom";
const { RangePicker } = DatePicker;

const IncomeReport = () => {

    const [dates, setDates] = useState([])
    console.log(dates);

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
                                        <li className="breadcrumb-item active">Income Reports
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!--Filter--> */}
                    <section>
                        <div className="content-body">
                            <div className="card">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card-header">
                                            <h2 className="card-title">Filter</h2>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="row mt-1">
                                        <div class="col-md-3 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label for="User">User: <span class="text-danger"></span></label>
                                                <select class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                    <option value="All">All</option>
                                                    <option value="Admin">Admin</option>
                                                    <option value="Mr Demo Cashier">Candidate</option>
                                                    <option value="Mr. Super Admin">Company</option>
                                                </select>
                                            </div>
                                        </div>



                                        <div class="col-md-3 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label for="shipping">Status: <span class="text-danger"></span></label>
                                                <select class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                    <option value="All">All</option>
                                                    <option value="Ordered">Active</option>
                                                    <option value="On Process">Inactive</option>
                                                    <option value="Packing Product">Free</option>
                                                    <option value="Assigned Delivery">Suscribed</option>
                                                    <option value="pickup">Pending</option>
                                                    <option value="Collected Package">Blocked</option>
                                                    <option value="Shipped Orders">Closed</option>
                                                    {/* <option value="Delviered Orders">Delviered Orders</option>
                                                    <option value="Cancelled Orders">Cancelled Orders</option>
                                                    <option value="Non Delivered Order">Non Delivered Order</option> */}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label for="currency">Payment Status: <span class="text-danger">*</span></label>
                                                <select class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                    <option value="all">All</option>
                                                    <option value="Paid">Paid</option>
                                                    <option value="Due">Due</option>
                                                    <option value="Partial">Partial</option>
                                                    <option value="Overdue">Overdue</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div className="col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="range">Date Range: <span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <RangePicker
                                                        className="form-control picker d-flex justify-content-center align-items-center"
                                                        onChange={(values) => {
                                                            const value1 = moment(values[0]).format('DD-MM-YYYY');
                                                            console.log(value1);
                                                            setDates(values.map(item => {
                                                                return moment(item).format('DD-MM-YYYY')
                                                            }))
                                                        }}
                                                    />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text"><span className="fa fa-calendar"></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row">

                                        <div class="col-md-3 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label for="currency">Location: <span class="text-danger"></span></label>
                                                <select class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                    <option value="All">All</option>
                                                    <option value="Awesome Shop">Onsite</option>
                                                    <option value="Awesome Shop">Work from Home</option>
                                                    <option value="Awesome Shop">Company Site</option>
                                                    <option value="Awesome Shop">Regional</option>
                                                </select>
                                            </div>
                                        </div>



                                        <div class="col-md-3 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label for="currency">Company : <span class="text-danger"></span></label>
                                                <select class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                    <option value="All">All</option>
                                                    <option value="Harry (CO0006)">- Suscriber</option>
                                                    <option value="Rohan (CO0006)">- Non Suscriber</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-xs-12">
                                            <div class="custom-control custom-checkbox mtop-2">
                                                <input type="checkbox" class="custom-control-input" id="customCheck" name="example1" />
                                                <label class="custom-control-label" for="customCheck">Premium Suscribers</label>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label for="range">Sources: <span class="text-danger">*</span></label>
                                                <select class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                    <option value="all">All</option>
                                                    <option value="Online">Online</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* <!--End Filter--> */}




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
                                                                        <th>ID</th>
                                                                        <th>Candidate Name</th>
                                                                        <th>Location</th>
                                                                        <th>Skills</th>
                                                                        <th>Experience</th>
                                                                        <th>Plan</th>
                                                                        <th>Income</th>
                                                                        <th>Location</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>Sameer</td>
                                                                        <td>
                                                                            Address - Area
                                                                            Postal code: 20220912-10085522 has been Delivered
                                                                            <br />
                                                                            <small>City Name</small>
                                                                        </td>
                                                                        <td>Mobile apps developement</td>
                                                                        <td>5 years</td>
                                                                        <td>$ 10 / mo</td>
                                                                        <td>$ 18000.00 / yr </td>
                                                                        <td>LA, Caleformia</td>

                                                                    </tr>


                                                                    <tr>
                                                                        <td>2</td>
                                                                        <td>Riya</td>
                                                                        <td>
                                                                            Address - Area
                                                                            Postal code: 20220912-10085522 has been Delivered
                                                                            <br />
                                                                            <small>City Name</small>
                                                                        </td>
                                                                        <td>Cenematograpy, Photography</td>
                                                                        <td>3 years</td>
                                                                        <td>$ 20 / mo</td>
                                                                        <td>$ 18000.00 / yr </td>
                                                                        <td>NY, Jersey</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>3</td>
                                                                        <td>Mohan</td>
                                                                        <td>
                                                                            Address - Area
                                                                            Postal code: 20220912-10085522 has been Delivered
                                                                            <br />
                                                                            <small>City Name</small>
                                                                        </td>
                                                                        <td>Coding, Designing</td>
                                                                        <td>1 years</td>
                                                                        <td>Free</td>
                                                                        <td>$ 18000.00 / yr </td>
                                                                        <td>Scotsland, UK</td>
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

export default IncomeReport;