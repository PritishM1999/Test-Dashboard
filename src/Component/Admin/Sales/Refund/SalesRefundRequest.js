import React from "react";
import { Link } from "react-router-dom";

function SalesReturnRequest() {
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
                          <li className="breadcrumb-item"><Link href="index.php">Home</Link>
                          </li>
                          <li className="breadcrumb-item active"> Sales Return Request

                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                
                <section>
                    <div className="content-body">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                              <div className="col-md-6">
                                                  <h4 className="card-title ">
                                                     Sales Return Request
                                                  </h4>
                                              </div>      
                                          </div>
                                     </div>

                                    <div className="card-body">
                                        <div className="table-responsive table-responsive1">
                                              <table className="table table-hover table-bordered" id="dtBasicExample">
                                                <thead>
                                                  <tr>
                                                    <th>   
                                                      <label className="form-check-label form-check-label1">
                                                        <input type="checkbox" className="form-check-input" value=""/>
                                                      </label>
                                                      </th>
                                                    <th>Date</th>
                                                    <th>Order Number</th>
                                                    <th>Delivery Date </th>
                                                    <th>Customer Name</th>
                                                    <th>Total Discount</th>
                                                    <th>Total Tax</th>
                                                    <th>Total Amount</th>
                                                    <th>Total Paid Amount</th>
                                                    <th>Payment Status</th>
                                                    <th>Action</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                         <label className="form-check-label form-check-label1">
                                                            <input type="checkbox" className="form-check-input" value=""/>
                                                         </label>
                                                      </td>
                                                    <td>
                                                      3/4/2023
                                                    </td>
                                                    
                                                    <td>
                                                       <Link href="#">6940</Link>
                                                    </td>
                                                    
                                                     <td>
                                                       3/4/2023
                                                     </td>
                                                     
                                                     <td>
                                                     ANAND NAHAR
                                                     </td>
                                                     
                                                     <td>
                                                      IRR0
                                                     </td>
                                                     
                                                     <td>
                                                       IRR0
                                                     </td>
                                                     
                                                     <td>
                                                      $ 1,111.00
                                                     </td>
                                                     <td>IRR58,999	</td>
                                                     <td> <span className="badge badge-success">Paid</span></td>
                                                    <td>
                                                     <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                      <Link className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></Link>
                                                      <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                          <Link className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</Link>
                                                          <Link className="dropdown-item" href="#"><i className="fa fa-print"></i> Print</Link>
                                                          <Link className="dropdown-item" href="#"><i className="fa fa-trash"></i> Delete</Link></div>
                                                      </div></td>
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
            {/* <!-- END: Content--> */}
        </>
    );
}

export default SalesReturnRequest;
