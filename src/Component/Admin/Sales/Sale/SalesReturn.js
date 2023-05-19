import React from "react";
import { Link } from "react-router-dom";

function SalesReturn() {
    return (
        <>
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-md-6 col-12 mb-1">
                        <h3 className="content-header-title"> Sales Returns</h3>
                           <div className="row breadcrumbs-top">
                               <div className="breadcrumb-wrapper col-12">
                                   <ol className="breadcrumb">
                                       <li className="breadcrumb-item"><Link to="index.php">Home</Link>
                                       </li>
                                       <li className="breadcrumb-item active"> Sales Returns</li>                                  
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
                               
                               <div className="col-12">
                                   <div className="row mt-1">
                                     
                                      
                                      <div className="col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                         <label for="Product">Product: <span className="text-danger"></span></label>
                                            <select className="selectpicker" data-show-subtext="true" data-live-search="true">
                                               <option value="">
                                               175/70R13 TRIANGLE 
                                               </option>
               
                                               <option value="">
                                                 1763-L32BWA 
                                               </option>
                                         </select>
                                        </div>
                                      </div>

                                      
                                      <div className="col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                         <label for="Branch">All Branch: <span className="text-danger"></span></label>
                                            <select className="selectpicker" data-show-subtext="true" data-live-search="true">
                                               <option value="All">
                                                Main Branch
                                               </option>
               
                                               <option value="W">
                                                 Branch Two
                                               </option>
                                         </select>
                                        </div>
                                      </div>
                                      
                                      <div className="col-md-2 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                             <label for="Product Type">Start Date: <span className="text-danger"></span></label>
                                             <input type="date" className="form-control" name=""/>
                                        </div>
                                      </div>
                                      
                                      <div className="col-md-2 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                             <label for="Product Type">End  Date: <span className="text-danger"></span></label>
                                             <input type="date" className="form-control" name=""/>
                                        </div>
                                      </div>

                                      <div className="col-md-2 col-sm-6 col-xs-12 d-flex align-items-center">
                                            <button type="submit" className="btn btn-info">Search</button>
                                      </div>
                                      
                                  </div>
                               </div>
                           </div>
                       </div>
                       
                       {/* <!--end Filter--> */}
                   
                       <br/>
                       <div className="content-body">
                           <div className="row">
                               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                   <div className="card">
                                       <div className="card-header">
                                                <div className="row">
                                               <div className="col-md-6 col-sm-12 col-xs-12">
                                                    <h2 className="card-title">Sales Returns</h2>  
                                               </div>
                                           
                                           </div>
                                       </div>                                     
                                   <div className="card-body">
                                          <div className="table-responsive">
                                                <table className="table table-hover table-bordered" id="dtBasicExample">
                                                   <thead>
                                                 <tr>
                                                   <th>
                                                       <label className="form-check-label form-check-label1">
                                                         <input type="checkbox" className="form-check-input" value=""/>
                                                       </label> 
                                                    </th>
                                                   <th>Product Name	</th>
                                                   <th>Invoice Id</th>
                                                   <th>Branch</th>
                                                   <th>Sales Date</th>
                                                   <th>Sub Total</th>
                                                   <th>Discount</th>
                                                   <th>Grand Total</th>
                                                   <th>Paid Amount </th>
                                                 </tr>
                                               </thead>
                                               <tbody>                                                                                                  
                                                 <tr>
                                                   <td>
                                                       <label className="form-check-label form-check-label1">
                                                         <input type="checkbox" className="form-check-input" value=""/>
                                                       </label> 
                                                   </td>                                                  
                                                   <td className="align-middle">
                                                     Men's Machine Stainless Steel Quartz Chronograph Watch
                                                   </td>
                                                   <td className="align-middle">
                                                     <Link to="#">S-003986</Link>
                                                   </td>                                                  
                                                   <td className="align-middle">
                                                       Main Branch
                                                   </td>
                                                   <td className="align-middle">
                                                     2023 March, 14  
                                                   </td>                                                   
                                                    <td className="align-middle">XOF2,009.30</td>                                                    
                                                   <td className="align-middle">
                                                      XOF0.00
                                                   </td>
                                                   <td className="align-middle"> 
                                                     XOF2,009.30                                                  
                                                   </td>                                                                                              
                                                     <td className="align-middle">
                                                          XOF2,009.30
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

            {/* <!--function--> */}
            <div className="modal fade text-left" id="function" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1"
            aria-hidden="true">
             <div className="modal-dialog modal-sm" role="document">
               <div className="modal-content">
                 <div className="modal-header">
                   <h4 className="modal-title" id="myModalLabel1"> <b> Function</b></h4>
                   <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                   </button>
                 </div>
                 <div className="modal-body">
                  
                    
                   <form action="#">
                    
                   <div className="col-12 col-md-12 col-sm-12 col-xs-12 p-0">
                       <div className="row">
                       <div className="col-md-6">
                         <div className="form-style display-inline">
                             <label for="deal"> Todays Deal :
                              <span className="text-danger"></span></label>
                         </div>
                         </div>
                         <div className="col-md-6">
                              <label className="switch">
                               <input type="checkbox"/>
                               <span className="slider round"></span>
                             </label>
                          </div>
                       </div>
                   </div>
                   <div className="col-12 col-md-12 col-sm-12 col-xs-12 p-0">
                       <div className="row">
                       <div className="col-md-6">
                         <div className="form-style display-inline">
                             <label for="deal"> Published :
                              <span className="text-danger"></span></label>
                         </div>
                         </div>
                         <div className="col-md-6">
                              <label className="switch">
                               <input type="checkbox"/>
                               <span className="slider round"></span>
                             </label>
                          </div>
                       </div>
                   </div>
                   
                   <div className="col-12 col-md-12 col-sm-12 col-xs-12 p-0">
                       <div className="row">
                       <div className="col-md-6">
                         <div className="form-style display-inline">
                             <label for="deal"> Featured :
                              <span className="text-danger"></span></label>
                         </div>
                         </div>
                         <div className="col-md-6">
                              <label className="switch">
                               <input type="checkbox"/>
                               <span className="slider round"></span>
                             </label>
                          </div>
                       </div>
                   </div>

                  </form>
                   
                </div>
               
               </div>
            </div>
        </div>

        </>
    );
}

export default SalesReturn;
