import React from "react";
import { Link } from "react-router-dom";

function StockTransfer() {
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
                          <li className="breadcrumb-item"><Link to="/admin">Home</Link>
                          </li>
                          {/* </li> */}
                          <li className="breadcrumb-item active"> All Stock Transfers

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
                                                  <h4 className="card-title mt-1">
                                                     Stock Transfers
                                                  </h4>
                                              </div>
                                              <div className="col-md-6">
                                                  <div className="btn-group float-md-right">
                                                    <Link to="add-stock-transfers.php" className="btn btn-info text-white"> Add Stock Transfers </Link>
                                                  </div>
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
                                                    <th>Reference No</th>
                                                    <th>Location (From)</th>
                                                     <th>Location (To)</th>
                                                    <th>Status</th>
                                                    <th>Shipping Charges</th>
                                                    <th>Total Amount</th>
                                                    <th>Additional Notes</th>
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
                                                      03/07/2023 19:49
                                                    </td>
                                                    
                                                    <td>
                                                       ST2023/0001
                                                    </td>
                                                    
                                                     <td>
                                                       Pratik pharmacy
                                                     </td>
                                                     
                                                     <td>
                                                      Mohit pharmacy
                                                     </td>
                                                     
                                                     <td>
                                                       <span className="badge badge-success">Completed</span>
                                                     </td>
                                                     
                                                     <td>
                                                       $ 0.00
                                                     </td>
                                                     
                                                     <td>
                                                      $ 1,111.00
                                                     </td>
                                                     <td>---</td>

                                                    <td>
                                                     <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                      <Link className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></Link>
                                                      <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                          <Link className="dropdown-item" to="edit-categories.php"><i className="fa fa-eye"></i> View</Link>
                                                          <Link className="dropdown-item" to="#"><i className="fa fa-print"></i> Print</Link>
                                                          <Link className="dropdown-item" to="#"><i className="fa fa-trash"></i> Delete</Link></div>
                                                      </div>
                                                      </td>
                                                    </tr>
                                                    
                                                  <tr>
                                                    <td>
                                                         <label className="form-check-label form-check-label1">
                                                            <input type="checkbox" className="form-check-input" value=""/>
                                                         </label>
                                                      </td>
                                                    <td>
                                                      03/07/2023 19:49
                                                    </td>
                                                    
                                                    <td>
                                                       ST2023/0001
                                                    </td>
                                                    
                                                     <td>
                                                       Pratik pharmacy
                                                     </td>
                                                     
                                                     <td>
                                                      Mohit pharmacy
                                                     </td>
                                                     
                                                     <td>
                                                       <span className="badge badge-warning">Pending</span>
                                                     </td>
                                                     
                                                     <td>
                                                       $ 0.00
                                                     </td>
                                                     
                                                     <td>
                                                      $ 1,111.00
                                                     </td>
                                                     <td>---</td>

                                                    <td>
                                                     <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                      <Link className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></Link>
                                                      <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                          <Link className="dropdown-item" to="edit-categories.php"><i className="fa fa-eye"></i> View</Link>
                                                          <Link className="dropdown-item" to="#"><i className="fa fa-print"></i> Print</Link>
                                                          <Link className="dropdown-item" to="edit-stock-transfers.php"><i className="fa fa-edit"></i> Edit</Link>
                                                          <Link className="dropdown-item" to="#"><i className="fa fa-trash"></i> Delete</Link></div>
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

export default StockTransfer;