import React from 'react';
import '../Category/Category.css';
import {Link} from "react-router-dom";


function Category() {
  return (
    <>

           {/* <!-- BEGIN: Content--> */}
    <div className="app-content content">
      <div className="content-wrapper">
        <div className="content-header row">
          <div className="content-header-left col-md-6 col-12 mb-1">
            <div className="row breadcrumbs-top">
              <div className="breadcrumb-wrapper col-12">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/index.php">Home</Link>
                  </li>
                  
                  <li className="breadcrumb-item active">All Categories
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
                                             All Categories
                                          </h4>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="btn-group float-md-right">
                                            <Link className="btn btn-info text-white"  to="../addcategory"> Add New </Link>
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
                                            <th>Category Name</th>
                                            <th>Category Code / HSN Code</th>
                                            <th>Meta Title</th>
                                            <th>Meta Keyword</th>
                                            <th>Meta Desc</th>
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
                                              Women
                                            </td>
                                            
                                            <td>
                                               --
                                            </td>
                                            
                                             <td>
                                              Best Pendent
                                             </td>
                                             
                                             <td>
                                               Pendent
                                             </td>
                                             
                                             <td>
                                               A suitable pendant elevates the appearance of necklaces and chains
                                             </td>

                                            <td>
                                             <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                              <Link className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></Link>
                                              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                              <Link className="dropdown-item"  onclick="openNavedit()" type="button"><i className="fa fa-edit"></i> Edit</Link>
                                              <Link className="dropdown-item" to="/#"><i className="fa fa-trash"></i> Delete</Link></div>
                                              </div></td>
                                            </tr>
                                            
                                          <tr>
                                            <td>
                                                 <label className="form-check-label form-check-label1">
                                                    <input type="checkbox" className="form-check-input" value=""/>
                                                 </label>
                                              </td>
                                            <td>
                                              --Accessories
                                            </td>
                                            
                                            <td>
                                               --
                                            </td>
                                            
                                             <td>
                                              Best Gold Earrings
                                             </td>
                                             
                                             <td>
                                               Earrings
                                             </td>
                                             
                                             <td>
                                               Best Gold Earrings
                                             </td>

                                            <td>
                                             <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                              <Link className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></Link>
                                              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                               <Link className="dropdown-item"  onclick="openNavedit()" type="button"><i className="fa fa-edit"></i> Edit</Link>
                                              <Link className="dropdown-item" to="/#"><i className="fa fa-trash"></i> Delete</Link></div>
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
 
      
    </>
  )
}

export default Category;
