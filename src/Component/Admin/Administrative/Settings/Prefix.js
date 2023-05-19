import React from "react";
import { Link } from "react-router-dom";

const Prefix = () => {
    return (
        <>

            {/* <!-- BEGIN: Content--> */}
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2">
                            {/* <!--<h3  className="content-header-title">Add Master Menu</h3>--> */}
                            <div className="row breadcrumbs-top">
                                <div className="breadcrumb-wrapper col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="index.php">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Prefix
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Perfix section--> */}

                    <div className="content-body">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <form>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Purchase : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="PO" placeholder="" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Purchase Return : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="" placeholder="PPurchase Return" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Purchase Requisition : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="" placeholder="Purchase Requisition" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Purchase Order : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="" placeholder="Purchase Order" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Stock Transfer : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="ST" placeholder="Stock Transfer" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Stock Adjustment : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="SA" placeholder="Stock Adjustment" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Sell Return : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="SN" placeholder="Sell Return" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Expenses : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="EP" placeholder="Expenses" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Contacts : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="CO" placeholder="Contacts" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Purchase Payment : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="PP" placeholder="Purchase Payment" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Sell Payment : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="SP" placeholder="Sell Payment" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Expense Payment : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="EP" placeholder="Expense Payment" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Business Location : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="BL" placeholder="Business Location" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Username : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="" placeholder="Username" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Subscription No : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="" placeholder="Subscription No" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Draft : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="" placeholder="Draft" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="prefix">Sales Order : <span className="text-danger"></span></label>
                                                            <input type="text" className="form-control" Value="" placeholder="Sales Order" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="card-footer ml-auto">
                                                <button type="submit" className="btn btn-info btn-min-width  mr-1 mb-1">Save & Update</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    {/* <!--end  Perfix section--> */}
                </div>
            </div>

            {/* <!-- END: Content--> */}


        </>
    );
};

export default Prefix;
