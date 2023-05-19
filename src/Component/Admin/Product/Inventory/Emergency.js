import React from "react";
import { Link } from "react-router-dom";

function Emergency() {
    return (
        <>
            {/* <!-- BEGIN: Content--> */}
            <div class="app-content content">
              <div class="content-wrapper">
                <div class="content-header row">
                  <div class="content-header-left col-md-6 col-12 mb-1">
                    {/* <!--<h3 class="content-header-title">Master Menu</h3>--> */}
                    <div class="row breadcrumbs-top">
                      <div class="breadcrumb-wrapper col-12">
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item"><Link to="/admin">Home</Link>
                          </li>
                          {/* </li> */}
                          <li class="breadcrumb-item active"> Emergency Stock</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                
                <section>
                    <div class="content-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <div class="row">
                                              <div class="col-md-6">
                                                  <h4 class="card-title">
                                                     Emergency Stock
                                                  </h4>
                                              </div>
                                              <div class="col-md-6">
                                              </div>
                                          </div>
                                     </div>

                                    <div class="card-body">
                                        <div class="table-responsive table-responsive1">
                                              <table class="table table-hover table-bordered" id="dtBasicExample">
                                                <thead>
                                                  <tr>
                                                    <th>   
                                                      <label class="form-check-label form-check-label1">
                                                        <input type="checkbox" class="form-check-input" value=""/>
                                                      </label>
                                                    </th>
                                                    
                                                    <th>Name</th>
                                                    <th>Brand</th>
                                                    <th>Quantity</th>
                                                    <th>Buy Price</th>
                                                    <th>Exc. Tax</th>
                                        			<th>Inc. Tax</th>
                                        			<th>x Margin(%) </th>
                                        			<th>Default Selling Price</th>
                                                    <th>Action</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                         <label class="form-check-label form-check-label1">
                                                            <input type="checkbox" class="form-check-input" value=""/>
                                                         </label>
                                                      </td>
                                                    <td>
                                                     ASTA107A
                                                    </td>
                                                    
                                                    <td>
                                                       Well Care Pharmacy
                                                    </td>
                                                    
                                                     <td>
                                                      30
                                                     </td>
                                                     
                                                     <td>$345.01</td>
                                                     <td>5%</td>
                                                     <td>6%</td>
                                                     <td>$15</td>
                                                     <td>$360.01</td>
                                                     
                                                    <td>
                                                     <div class="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                      <Link class="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></Link>
                                                      <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                      <Link class="dropdown-item" to="#"><i class="fa fa-trash"></i> Delete</Link></div>
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

export default Emergency;