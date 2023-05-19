import React, { useState } from "react";
import { DatePicker } from "antd";
import moment from 'moment';
import { Link } from "react-router-dom";
// import '../../../../bootstrap.min.css'
// import '../../../../../node_modules/antd/dist/antd.css';
// import 'antd/dist/antd.css';
import './AllOrders.css';

// import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const { RangePicker } = DatePicker;

function AllOrders() {
  const [dates, setDates] = useState([])
  console.log(dates);

  return (
    <>
      {/* <!-- BEGIN: Content--> */}
      
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-6 col-12 mb-1">
              {/* <!--<h3 className="content-header-title">Master Menu</h3>--> */}
              <div className="row breadcrumbs-top">
                <div className="breadcrumb-wrapper col-12">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                    {/* </li> */}
                    <li className="breadcrumb-item active">All Order
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* <!--order section --> */}

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
                      <label for="currency">Business Location: <span class="text-danger"></span></label>
                      <select class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                        <option value="All">All</option>
                        <option value="Awesome Shop">Awesome Shop</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label for="shipping">Shipping Status: <span class="text-danger"></span></label>
                      <select class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                        <option value="All">All</option>
                        <option value="Ordered">Ordered</option>
                        <option value="On Process">On Process</option>
                        <option value="Packing Product">Packing Product</option>
                        <option value="Assigned Delivery">Assigned Delivery</option>
                        <option value="pickup">Ready to pickup</option>
                        <option value="Collected Package">Collected Package</option>
                        <option value="Shipped Orders">Shipped Orders</option>
                        <option value="Delviered Orders">Delviered Orders</option>
                        <option value="Cancelled Orders">Cancelled Orders</option>
                        <option value="Non Delivered Order">Non Delivered Order</option>
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
                          <label for="User">User: <span class="text-danger"></span></label>
                          <select class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                            <option value="All">All</option>
                            <option value="Admin">Admin</option>
                            <option value="Mr Demo Cashier">Mr Demo Cashier</option>
                            <option value="Mr. Super Admin">Mr. Super Admin</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="form-group">
                          <label for="currency">Customer : <span class="text-danger"></span></label>
                          <select class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                            <option value="All">All</option>
                            <option value="Harry (CO0006)">- Harry (CO0006)</option>
                            <option value="Rohan (CO0006)">- Rohan (CO0006)</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="custom-control custom-checkbox mtop-2">
                          <input type="checkbox" class="custom-control-input" id="customCheck" name="example1"/>
                          <label class="custom-control-label" for="customCheck">Subscriptions</label>
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

            {/* <!--End Filter--> */}

            <br />
            <div className="content-body">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h2 className="card-title">All Order</h2>
                    </div>

                    <div className="card-body">
                      <div className="table-responsive table-responsive1">
                        <table className="table table-hover table-bordered" id="dtBasicExample">
                          <thead>
                            <tr>
                              <th>
                              </th>
                              <th> Date </th>
                              <th>Order Details </th>
                              <th>Total Items </th>
                              <th>Customer Details </th>
                              <th>Amount </th>
                              <th>Discount</th>
                              <th>Shipping Status </th>
                              <th>Pay Status</th>
                              <th>Source</th>
                              <th>Agent</th>
                              <th>Is Return</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>

                            {/* <!--1st row--> */}
                            <tr>
                              <td data-toggle="collapse" data-target="#order" className="accordion-toggle">

                                <button className="btn btn-default btn-xs"><span className="fa fa-chevron-down"></span></button>
                              </td>
                              <td>
                                2/26/2023 <br />
                                1:20PM
                              </td>

                              <td>
                                <Link to="#"> 6900 </Link>
                                <p> TRA016275485</p>
                              </td>


                              <td>
                                3
                              </td>

                              <td>
                                <Link to="#" className="text-dark"> Rahul </Link>
                                <small>Rahul@gmail.com</small><br />
                                <small>+91 9918568401</small>
                              </td>

                              <td>
                                $123.3
                              </td>

                              <td>
                                <b>Coupon:</b> BIG034
                                <b>Discounted:</b> $34.00
                              </td>

                              <td>
                                <span className="badge-pill badge-success text-white">Success</span>
                              </td>
                              <td>
                                <span className="badge-pill badge-danger">Pending</span>
                              </td>

                              <td>
                                Admin
                              </td>

                              <td>
                                Mohit
                              </td>

                              <td>
                                NO
                              </td>

                              <td>
                                <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                  <Link className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></Link>
                                  <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <Link className="dropdown-item" to="edit-order.php"><i className="fa fa-edit"></i> Edit </Link>
                                    <Link className="dropdown-item" to="view-order.php"><i className="fa fa-eye"></i> View </Link>
                                    <Link className="dropdown-item" to="#"><i className="fa fa-bell"></i> Review Alert </Link>
                                    <Link className="dropdown-item" to="#"><i className="fa fa-trash"></i> Delete</Link>
                                    <Link className="dropdown-item" to="return-sales-order.php">
                                      <i className="fa fa-undo" aria-hidden="true"></i> Return Sales order </Link>
                                    <Link className="dropdown-item" data-toggle="modal" data-target="#stafnote"><i className="fa fa-sticky-note-o"></i> Staff Note</Link>
                                    <Link className="dropdown-item" to="#"><i className="fa fa-envelope-o"></i> Mail</Link>
                                    <Link className="dropdown-item" to="#"><i className="fa fa-print"></i> Print</Link>

                                  </div>
                                </div>
                              </td>
                            </tr>

                            {/* <!--collapse row--> */}

                            <tr>
                              <td colspan="12" className="hiddenRow pc-padding">
                                <div className="accordian-body collapse" id="order">
                                  <h4 className="sub-table-heading">Sales Order Items</h4>
                                  <div className="table-responsive">
                                    <table className="table table-striped">
                                      <thead>
                                        <tr className="info">
                                          <th>Inv. No.</th>
                                          <th>Product Name</th>
                                          <th>Unit</th>
                                          <th>Unit per price</th>
                                          <th>Qty</th>
                                          <th>Discount</th>
                                          <th>Tax</th>
                                          <th>Total Tax</th>
                                          <th>Total</th>
                                          <th>Shipping Details</th>
                                          <th>Warehouse</th>
                                          <th>Seller</th>

                                        </tr>
                                      </thead>

                                      <tbody>

                                        <tr>
                                          <td> <Link to="#">#234576</Link></td>
                                          <td>Ultimate Edge Control Kit: Contains 1 Edge Control RX Hold & Grow & 1 Edge Control</td>
                                          <td>Piece</td>
                                          <td> PKR5,000.00</td>
                                          <td> 1</td>
                                          <td> PKR0.00(0%)</td>
                                          <td> Excise Tax(8%)</td>
                                          <td> PKR0.00</td>
                                          <td> $55.00</td>
                                          <td> -- </td>
                                          <td> -- </td>
                                          <td> Mohit</td>

                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            {/* <!--end collapse row--> */}

                            {/* <!--end 1st row--> */}



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



      {/* <!--staf notes--> */}
      <div className="modal fade text-left" id="stafnote" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1"
        aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel1"> <b> Staf Note</b></h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">


              <form action="#">

                <div className="col-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label htmlFor=""> Note :
                      <span className="text-danger"></span></label>
                    <textarea className="form-control"></textarea>
                  </div>
                </div>

                <div className="col-12 col-md-12 col-sm-12 col-xs-12 text-center">
                  <button type="submit" className="btn btn-info">
                    Save
                  </button>
                </div>

              </form>

            </div>

          </div>
        </div>
      </div>

      {/* <!-- END: Content--> */}

    </>
  )
}

export default AllOrders;