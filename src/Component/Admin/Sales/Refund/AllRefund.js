import React from "react";
import { Link } from "react-router-dom";
// import RefundConfiguration from "./RefundConfig";

function AllRefund() {
    return (
        <>
            {/* <!-- BEGIN: Content--> */}
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2 ">
                            <h3 className="content-header-title mb-0 ">All Refund
                            </h3>
                            <div className="row breadcrumbs-top">
                                <div className="breadcrumb-wrapper col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">All Refund

                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="content-body">
                        <section >
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="card-header">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <h4 className="card-title mt-1">
                                                            Refund
                                                        </h4>
                                                    </div>


                                                    <div className="col-md-9">
                                                        <div className="main-menu-tab">
                                                            <ul className="nav nav-pills">
                                                                <li className="nav-item">
                                                                    <a className="nav-link active" id="base-pill1" data-toggle="pill" href="#all" aria-expanded="true"> All
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link" id="base-pill1" data-toggle="pill" href="#ref-request" aria-expanded="true"> Request
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link" id="base-pill1" data-toggle="pill" href="#approve-ref" aria-expanded="true"> Approve
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link" id="base-pill1" data-toggle="pill" href="#reject-ref" aria-expanded="true"> Rejected
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link" href="/admin/RefConfig" aria-expanded="false">Refund Configuration</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link" id="base-pill1" data-toggle="pill" href="trash" aria-expanded="true">Trash</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  datatable start */}
                                            <div className="card-body card-body-p">

                                                <div className="tab-content">
                                                    {/*  all */}
                                                    <div role="tabpanel" className="tab-pane active" id="all" aria-expanded="true" aria-labelledby="base-pill1">
                                                        <div className="table-responsive">
                                                            <table className="table table-hover table-bordered" id="dtBasicExample">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Order Code </th>
                                                                        <th>Seller Name	 </th>
                                                                        <th>Product </th>
                                                                        <th>Price </th>
                                                                        <th>Seller Approval	 </th>
                                                                        <th>Refund Status</th>
                                                                        <th>Action </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td> 20210520-10560247 </td>
                                                                        <td>Filon Asset Store</td>
                                                                        <td>Melatonin CBD Sleep Time Gummies</td>
                                                                        <td>$56.00</td>
                                                                        <td> <span className="status badge badge-danger badge-pill badge-sm"> Pending</span> </td>
                                                                        <td> <span className="status badge badge-warning badge-pill badge-sm"> Non-Paid	</span> </td>
                                                                        <td>
                                                                            <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                                                <Link className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></Link>
                                                                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                                                    <Link className="dropdown-item" data-toggle="modal" data-target="#refundstatus"><i className="fa fa-refresh"></i> Status</Link>
                                                                                    <Link className="dropdown-item" to="#"><i className="fa fa-trash "></i> Delete</Link></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                    {/* <!-- refund request --> */}

                                                    <div role="tabpanel" className="tab-pane" id="ref-request" aria-expanded="true" aria-labelledby="base-pill1">
                                                        <div className="table-responsive">

                                                            <table className="table table-hover table-bordered" id="dtBasicExample1">
                                                                <thead>
                                                                    <tr>

                                                                        <th>Order Code </th>
                                                                        <th>Seller Name	 </th>
                                                                        <th>Product </th>
                                                                        <th>Price </th>
                                                                        <th>Seller Approval	 </th>
                                                                        <th>Refund Status</th>
                                                                        <th>Action </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td> 20210520-10560247 </td>
                                                                        <td>Filon Asset Store</td>
                                                                        <td>Melatonin CBD Sleep Time Gummies</td>
                                                                        <td>$56.00</td>
                                                                        <td> <span className="status badge badge-warning badge-pill badge-sm"> Processing</span> </td>
                                                                        <td> <span className="status badge badge-warning badge-pill badge-sm"> Non-Paid	</span> </td>
                                                                        <td>
                                                                            <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                                                <Link className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></Link>
                                                                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                                                    <Link className="dropdown-item" data-toggle="modal" data-target="#refundstatus"><i className="fa fa-refresh"></i> Status</Link>
                                                                                    <Link className="dropdown-item" to="#"><i className="fa fa-trash "></i> Delete</Link></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                    {/* <!--  approve refund --> */}

                                                    <div role="tabpanel" className="tab-pane" id="approve-ref" aria-expanded="true" aria-labelledby="base-pill1">
                                                        <div className="table-responsive">
                                                            <table className="table table-hover table-bordered" id="dtBasicExample2">
                                                                <thead>
                                                                    <tr>

                                                                        <th>Order Code </th>
                                                                        <th>Seller Name	 </th>
                                                                        <th>Product </th>
                                                                        <th>Price </th>
                                                                        <th>Seller Approval	 </th>
                                                                        <th>Refund Status</th>
                                                                        <th>Action </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td> 20210520-10560247 </td>
                                                                        <td>Filon Asset Store</td>
                                                                        <td>Melatonin CBD Sleep Time Gummies</td>
                                                                        <td>$56.00</td>
                                                                        <td> <span className="status badge badge-success badge-pill badge-sm"> Approved</span> </td>
                                                                        <td> <span className="status badge badge-success badge-pill badge-sm"> Paid	</span> </td>
                                                                        <td>
                                                                            <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                                                <Link className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></Link>
                                                                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                                                    <Link className="dropdown-item" data-toggle="modal" data-target="#refundstatus"><i className="fa fa-refresh"></i> Status</Link>
                                                                                    <Link className="dropdown-item" to="#"><i className="fa fa-trash "></i> Delete</Link></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>


                                                    {/* <!--  reject refund --> */}

                                                    <div role="tabpanel" className="tab-pane" id="reject-ref" aria-expanded="true" aria-labelledby="base-pill1">
                                                        <div className="table-responsive">
                                                            <table className="table table-hover table-bordered" id="dtBasicExample3">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Order Code </th>
                                                                        <th>Seller Name	 </th>
                                                                        <th>Product </th>
                                                                        <th>Price </th>
                                                                        <th>Seller Approval	 </th>
                                                                        <th>Refund Status</th>
                                                                        <th>Action </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td> 20210520-10560247 </td>
                                                                        <td>Filon Asset Store</td>
                                                                        <td>Melatonin CBD Sleep Time Gummies</td>
                                                                        <td>$56.00</td>
                                                                        <td> <span className="status badge badge-danger badge-pill badge-sm"> Rejected</span> </td>
                                                                        <td> <span className="status badge badge-warning badge-pill badge-sm"> Non-Paid	</span> </td>
                                                                        <td>
                                                                            <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                                                <Link className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></Link>
                                                                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                                                    <Link className="dropdown-item" data-toggle="modal" data-target="#refundstatus"><i className="fa fa-refresh"></i> Status</Link>
                                                                                    <Link className="dropdown-item" to="#"><i className="fa fa-trash "></i> Delete</Link></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>


                                                    {/* <!--  Trash --> */}

                                                    <div role="tabpanel" className="tab-pane" id="trash" aria-expanded="true" aria-labelledby="base-pill1">
                                                        <div className="table-responsive">
                                                            <table className="table table-hover table-bordered" id="dtBasicExample4">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Order Code </th>
                                                                        <th>Seller Name	 </th>
                                                                        <th>Product </th>
                                                                        <th>Price </th>
                                                                        <th>Seller Approval	 </th>
                                                                        <th>Refund Status</th>
                                                                        <th>Action </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td> 20210520-10560247 </td>
                                                                        <td>Filon Asset Store</td>
                                                                        <td>Melatonin CBD Sleep Time Gummies</td>
                                                                        <td>$56.00</td>
                                                                        <td> <span className="status badge badge-danger badge-pill badge-sm"> Pending</span> </td>
                                                                        <td> <span className="status badge badge-warning badge-pill badge-sm"> Non-Paid	</span> </td>
                                                                        <td>
                                                                            <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                                                <Link className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></Link>
                                                                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                                                    <Link className="dropdown-item" data-toggle="modal" data-target="#refundstatus"><i className="fa fa-refresh"></i> Status</Link>
                                                                                    <Link className="dropdown-item" to="#"><i className="fa fa-trash "></i> Delete</Link></div>
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
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>


            {/* <!-- member status --> */}

            <div className="modal fade text-left" id="refundstatus" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel1"> <b> Refund</b></h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <p><b>Order Code : </b> 20210520-10560247</p>
                            </div>

                            <br />
                            <form action="#">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="">
                                        <label for="status"> Change Status
                                            : <span className="text-danger">*</span></label>

                                        <select className="form-control">
                                            <option>Please Select</option>
                                            <option value="Approve">Approve</option>
                                            <option value="Reject">Reject </option>
                                        </select>
                                    </div>
                                </div>

                                <br />
                                <div className="col-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                    <button type="submit" className="btn btn-info">
                                        Update Now
                                    </button>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </div>


            {/* <!-- END: Content--> */}

        </>
    );
}

export default AllRefund;
