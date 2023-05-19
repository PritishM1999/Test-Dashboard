import React from "react";
import { Link } from "react-router-dom";

function StockOut() {
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
                      <li className="breadcrumb-item"><Link href="/admin">Home</Link>
                      </li><li className="breadcrumb-item active">All Stock Out Product</li>
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
                                              <h4 className="card-title">
                                                All Stock Out Product
                                              </h4>
                                          </div>
                                          <div className="col-md-6">
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
                                                <th>Name</th>
                                                <th>Manufacturers</th>
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
                                                 ASTA107A
                                                </td>
                                                     <td>
                                                       Well Care Pharmacy
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
            </section>
          </div>
        </div>
        {/* <!-- END: Content--> */}
        </>
    );
}

export default StockOut;