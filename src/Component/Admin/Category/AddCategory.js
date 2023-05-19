import React from 'react';
import '../Category/Addcategory.css';
import {Link} from "react-router-dom";



function AddCategory() {

  return (
    
    <>
      <div className="app-content content">
           <div className="content-wrapper">
               <div className="content-header row">
                   <div className="content-header-left col-md-6 col-12 mb-2">
                       <h3 className="content-header-title">Add Categories </h3>
                       <div className="row breadcrumbs-top">
                           <div className="breadcrumb-wrapper col-12">
                               <ol className="breadcrumb">
                                   <li className="breadcrumb-item"><Link to="/index.php">Home</Link>
                                   </li>
                                   <li className="breadcrumb-item"><Link to="/category">Categories </Link>
                                   </li>
                                   <li className="breadcrumb-item active">Add Categories 
                                   </li>
                               </ol>
                           </div>
                       </div>
                   </div>

               </div>
               
               <section>
                  <div className="content-body">
                   <div className="row">
                       
                    <div className="col-lg-12 col-md-12">
                       <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">
                                 Add Categories
                                </h4>
                              </div>
                             <div className="card-body">
                                  <form>
                                   
                                       <div className="row">
                                           <div className="col-md-6">
                                              <div className="form-group">
                                                   <label htmlFor="category-name">Category name : <span className="text-danger"></span></label>
                                                   <input type="text" className="form-control" id="" name="Category Name"/>
                                               </div>
                                           </div>
                                           
                                           <div className="col-md-6">
                                              <div className="form-group">
                                                   <label htmlFor="categorycode">Category Code : <span className="text-danger"></span></label>
                                                   <input type="text" className="form-control" id="" name="Category Name"/>
                                                   <small>Category code is same as HSN code</small>
                                               </div>
                                           </div>
                                         </div>
                                           
                                           <div className="row">
                                               <div className="col-md-6">
                                                    <div className="form-group">
                                                       <label htmlFor="chekcategory" className="d-flex align-items-center">
                                                            <input type="checkbox" id="chekcategory"  className="form-control checkboxstyle"/>
                                                              Add as sub taxonomy
                                                        </label>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-6">
                                                  <div id="parentcategory" class="pcate" >
                                                    <div className="form-group">
                                                         <label htmlFor="meta">Select parent category : <span className="text-danger"></span></label>
                                                        
                                                            <select className="form-control" id="txtPassportNumber">
                                                                <option>Men's</option>
                                                                 <option>Women's</option>
                                                                 <option>Sports</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                           </div>
                                                    
                                         <div className="row">
                                            <div className="col-md-6">
                                              <div className="form-group">
                                                   <label htmlFor="meta">Meta Title : <span className="text-danger"></span></label>
                                                  <input type="text" className="form-control" id="" name="Meta Title"/>
                                               </div>
                                            </div>
                                            
                                            <div className="col-md-6">
                                              <div className="form-group">
                                                   <label htmlFor="keywords">Meta Keywords: <span className="text-danger"></span></label>
                                                  <input type="text" className="form-control" id="" name="Meta Keyword"/>
                                               </div>
                                            </div>
                                         </div>
                                        
                                          <div className="row">
                                            <div className="col-md-12">
                                              <div className="form-group">
                                                   <label htmlFor="description">Meta Description : <span className="text-danger"></span></label>
                                                   <textarea className="form-control" rows="5"></textarea>
                                               </div>
                                            </div>
                                         </div>

                                       <div className="row">
                                           <div className="col-md-12">
                                   
                                               <div className="mr-auto text-right">
                                                   <button type="submit" className="btn btn-info btn-min-width  mr-1 mb-1">Save</button>
                                               </div>
                                            </div>
                                    </div>
                               </form>
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

export default AddCategory;
