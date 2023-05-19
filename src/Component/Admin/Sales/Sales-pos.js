import React from 'react';
import './Sales-pos.css';
import {Link} from "react-router-dom";

import CardImageCap from '../../../assets/images/products/product.jpg';
import absolutecenter from '../../../assets/images/plus.png';

function SalesPos() {
  return (
    <>
      {/* <!-- BEGIN: Content--> */}
      <div className="app-content content">
          <div className="content-wrapper">
              <div className="content-detached row">
                  <div className="col-lg-7 col-md-12">
                      <div className="content-body">
                          <div className="product-shop">
                              <div className="card">
                                  <div className="card-header">
                                      <div className="row">
                                          <div className="col-lg-6 col-md-6">
                                              <div className="">
                                                  <input type="text" className="form-control" placeholder="Search by Product Name/Barcode" />
                                              </div>
                                          </div>
                                          
                                          <div className="col-lg-3 col-md-6">
                                              <div className="">
                                                  <select className="form-control" id="shortby">
                                                      <option value="Sort by newest">
                                                          All Categories
                                                      </option>
                                                      <option value="Women Clothing & Fashion">
                                                          Women Clothing & Fashion
                                                      </option>
                                                      <option value="Computer & Accessories">
                                                          Computer & Accessories
                                                      </option>
                                                  </select>
                                              </div>
                                                 
                                          </div>
                                          
                                           <div className="col-lg-3 col-md-6">
                                              <div className="">
                                                  <select className="form-control" id="shortby">
                                                      <option value="Sort by newest">
                                                          All Brand
                                                      </option>
                                                      <option value="Women Clothing & Fashion">
                                                          W
                                                      </option>
                                                      <option value="Computer & Accessories">
                                                          Zara
                                                      </option>
                                                      <option value="Computer & Accessories">
                                                          Libas
                                                      </option>
                                                  </select>

                                              </div>
                                          </div>
                                           
                                      </div>
                                  </div>

                                  <div className="card-body">
                                      <div className="scrollbar-1" id="style-3">
                                           <div className="force-overflow-1">
                                            <div className="row mb-20">
                                                  <div className="col-lg-3 col-md-4 gallery1">
                                                      <div className="gallery-box">
                                                          <div className="gallery">
                                                              <div className="card-body1">
                                                                  <Link to="#">
                                                                      <div className="product-img d-flex align-items-center">
                                                                          <img className="img-fluid mb-1" src={CardImageCap} alt="Card image cap"/>
                                                                          <div className="overlay">
                                                                              <img src={absolutecenter} className="absolute-center"/>
                                                                          </div>
                                                                          <div className="stock-menu">
                                                                              <span>In Stock</span>
                                                                          </div>
                                                                      </div>
                                                                      <h4 className="product-name ">Timberland Men's Classic Leather Jean Belt </h4><del className="mr-2 ml-0 text-gray font-10">$50.000</del> &nbsp;<span className="text-gray font-10">$30.000</span>
                                                                  </Link>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
          
                                                  <div className="col-lg-3 col-md-4 gallery1">
                                                      <div className="gallery-box">
                                                          <div className="gallery">
                                                              <div className="card-body1">
                                                                  <Link to="#">
          
                                                                      <div className="product-img d-flex align-items-center">
                                                                          <img className="img-fluid mb-1" src={CardImageCap} alt="Card image cap"/>
                                                                          <div className="overlay">
                                                                              <img src={absolutecenter} className="absolute-center"/>
                                                                          </div>
                                                                          <div className="stock-menu">
                                                                              <span>In Stock</span>
                                                                          </div>
                                                                      </div>
                                                                      <h4 className="product-name ">Timberland Men's Classic Leather Jean Belt </h4><del className="mr-2 ml-0 text-gray font-10">$50.000</del> &nbsp;<span className="text-gray font-10">$30.000</span>
                                                                  </Link>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
          
                                                  <div className="col-lg-3 col-md-4 gallery1">
                                                      <div className="gallery-box">
                                                          <div className="gallery">
                                                              <div className="card-body1">
                                                                  <Link to="#">
                                                                      <div className="product-img d-flex align-items-center">
                                                                          <img className="img-fluid mb-1" src={CardImageCap} alt="Card image cap"/>
                                                                          <div className="overlay">
                                                                              <img src={absolutecenter} className="absolute-center"/>
                                                                          </div>
                                                                          <div className="out-stock-menu">
                                                                              <span>Out Of Stock</span>
                                                                          </div>
                                                                      </div>
                                                                      <h4 className="product-name ">Timberland Men's Classic Leather Jean Belt </h4><del className="mr-2 ml-0 text-gray font-10">$50.000</del> &nbsp;<span className="text-gray font-10">$30.000</span>
                                                                  </Link>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
          
                                                  <div className="col-lg-3 col-md-4 gallery1">
                                                      <div className="gallery-box">
                                                          <div className="gallery">
                                                              <div className="card-body1">
                                                                  <Link to="#">
                                                                      <div className="product-img d-flex align-items-center">
                                                                          <img className="img-fluid mb-1" src={CardImageCap} alt="Card image cap"/>
                                                                          <div className="overlay">
                                                                              <img src={absolutecenter} className="absolute-center"/>
                                                                          </div>
                                                                          <div className="out-stock-menu">
                                                                              <span>Out Of Stock</span>
                                                                          </div>
                                                                      </div>
                                                                      <h4 className="product-name ">Timberland Men's Classic Leather Jean Belt </h4><del className="mr-2 ml-0 text-gray font-10">$50.000</del> &nbsp;<span className="text-gray font-10">$30.000</span>
                                                                  </Link>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
          
          
                                                  <div className="col-lg-3 col-md-4 gallery1">
                                                      <div className="gallery-box">
                                                          <div className="gallery">
                                                              <div className="card-body1">
                                                                  <Link to="#">
          
                                                                      <div className="product-img d-flex align-items-center">
                                                                          <img className="img-fluid mb-1" src={CardImageCap} alt="Card image cap"/>
                                                                          <div className="overlay">
                                                                              <img src={absolutecenter} className="absolute-center"/>
                                                                          </div>
                                                                          <div className="out-stock-menu">
                                                                              <span>Out Of Stock</span>
                                                                          </div>
                                                                      </div>
                                                                      <h4 className="product-name ">Timberland Men's Classic Leather Jean Belt </h4><del className="mr-2 ml-0 text-gray font-10">$50.000</del> &nbsp;<span className="text-gray font-10">$30.000</span>
                                                                  </Link>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
          
                                                  <div className="col-lg-3 col-md-4 gallery1">
                                                      <div className="gallery-box">
                                                          <div className="gallery">
                                                              <div className="card-body1">
                                                                  <Link to="#">
          
                                                                      <div className="product-img d-flex align-items-center">
                                                                          <img className="img-fluid mb-1" src={CardImageCap} alt="Card image cap"/>
                                                                          <div className="overlay">
                                                                              <img src={absolutecenter} className="absolute-center"/>
                                                                          </div>
                                                                          <div className="stock-menu">
                                                                              <span>In Stock</span>
                                                                          </div>
                                                                      </div>
                                                                      <h4 className="product-name ">Timberland Men's Classic Leather Jean Belt </h4><del className="mr-2 ml-0 text-gray font-10">$50.000</del> &nbsp;<span className="text-gray font-10">$30.000</span>
                                                                  </Link>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
          
                                                  <div className="col-lg-3 col-md-4 gallery1">
                                                      <div className="gallery-box">
                                                          <div className="gallery">
                                                              <div className="card-body1">
                                                                  <Link to="#">
          
                                                                      <div className="product-img d-flex align-items-center">
                                                                          <img className="img-fluid mb-1" src={CardImageCap} alt="Card image cap"/>
                                                                          <div className="overlay">
                                                                              <img src={absolutecenter} className="absolute-center"/>
                                                                          </div>
                                                                          <div className="stock-menu">
                                                                              <span>In Stock</span>
                                                                          </div>
                                                                      </div>
                                                                      <h4 className="product-name ">Timberland Men's Classic Leather Jean Belt </h4><del className="mr-2 ml-0 text-gray font-10">$50.000</del> &nbsp;<span className="text-gray font-10">$30.000</span>
                                                                  </Link>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
          
                                                  <div className="col-lg-3 col-md-4 gallery1">
                                                      <div className="gallery-box">
                                                          <div className="gallery">
                                                              <div className="card-body1">
                                                                  <Link to="#">
          
                                                                      <div className="product-img d-flex align-items-center">
                                                                          <img className="img-fluid mb-1" src={CardImageCap} alt="Card image cap"/>
          
                                                                          <div className="overlay">
                                                                              <img src={absolutecenter} className="absolute-center"/>
                                                                          </div>
                                                                          <div className="stock-menu">
                                                                              <span>In Stock</span>
                                                                          </div>
                                                                      </div>
                                                                      <h4 className="product-name ">Timberland Men's Classic Leather Jean Belt </h4><del className="mr-2 ml-0 text-gray font-10">$50.000</del> &nbsp;<span className="text-gray font-10">$30.000</span>
                                                                  </Link>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  
                                                   <div className="col-lg-3 col-md-4 gallery1">
                                                      <div className="gallery-box">
                                                          <div className="gallery">
                                                              <div className="card-body1">
                                                                  <Link to="#">
          
                                                                      <div className="product-img d-flex align-items-center">
                                                                          <img className="img-fluid mb-1" src={CardImageCap} alt="Card image cap"/>
          
                                                                          <div className="overlay">
                                                                              <img src={absolutecenter} className="absolute-center"/>
                                                                          </div>
                                                                          <div className="stock-menu">
                                                                              <span>In Stock</span>
                                                                          </div>
                                                                      </div>
                                                                      <h4 className="product-name ">Timberland Men's Classic Leather Jean Belt </h4><del className="mr-2 ml-0 text-gray font-10">$50.000</del> &nbsp;<span className="text-gray font-10">$30.000</span>
                                                                  </Link>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  
                                                   <div className="col-lg-3 col-md-4 gallery1">
                                                      <div className="gallery-box">
                                                          <div className="gallery">
                                                              <div className="card-body1">
                                                                  <Link to="#">
          
                                                                      <div className="product-img d-flex align-items-center">
                                                                          <img className="img-fluid mb-1" src={CardImageCap} alt="Card image cap"/>
          
                                                                          <div className="overlay">
                                                                              <img src={absolutecenter} className="absolute-center"/>
                                                                          </div>
                                                                          <div className="stock-menu">
                                                                              <span>In Stock</span>
                                                                          </div>
                                                                      </div>
                                                                      <h4 className="product-name ">Timberland Men's Classic Leather Jean Belt </h4><del className="mr-2 ml-0 text-gray font-10">$50.000</del> &nbsp;<span className="text-gray font-10">$30.000</span>
                                                                  </Link>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  
                                                   <div className="col-lg-3 col-md-4 gallery1">
                                                      <div className="gallery-box">
                                                          <div className="gallery">
                                                              <div className="card-body1">
                                                                  <Link to="#">
          
                                                                      <div className="product-img d-flex align-items-center">
                                                                          <img className="img-fluid mb-1" src={CardImageCap} alt="Card image cap"/>
          
                                                                          <div className="overlay">
                                                                              <img src={absolutecenter} className="absolute-center"/>
                                                                          </div>
                                                                          <div className="stock-menu">
                                                                              <span>In Stock</span>
                                                                          </div>
                                                                      </div>
                                                                      <h4 className="product-name ">Timberland Men's Classic Leather Jean Belt </h4><del className="mr-2 ml-0 text-gray font-10">$50.000</del> &nbsp;<span className="text-gray font-10">$30.000</span>
                                                                  </Link>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  
                                                   <div className="col-lg-3 col-md-4 gallery1">
                                                      <div className="gallery-box">
                                                          <div className="gallery">
                                                              <div className="card-body1">
                                                                  <Link to="#">
          
                                                                      <div className="product-img d-flex align-items-center">
                                                                          <img className="img-fluid mb-1" src={CardImageCap} alt="Card image cap"/>
          
                                                                          <div className="overlay">
                                                                              <img src={absolutecenter} className="absolute-center"/>
                                                                          </div>
                                                                          <div className="stock-menu">
                                                                              <span>In Stock</span>
                                                                          </div>
                                                                      </div>
                                                                      <h4 className="product-name ">Timberland Men's Classic Leather Jean Belt </h4><del className="mr-2 ml-0 text-gray font-10">$50.000</del> &nbsp;<span className="text-gray font-10">$30.000</span>
                                                                  </Link>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  
                                                  
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-5 col-md-12">
                      <div className="card">
                          <div className="card-body">

                              <div className="row">
                                  <div className="col-md-10 col-sm-8 col-xs-8">
                                      <select className="form-control">
                                          <option>Walk In Customer</option>
                                          <option>Arnulfo T. Lucky</option>
                                          <option>Alon Mask</option>
                                      </select>
                                  </div>
                                  <div className="col-md-2 col-sm-4 col-xs-4">
                                      <Link to="#" className="btn btn-secondary mt-mob-1 float-right" data-toggle="modal" data-target="#new-customer"><i className="fa fa-truck truck" aria-hidden="true"></i></Link>
                                  </div>
                              </div>

                              <hr/>
                              <br/>
                              <div className="row">
                                  <div className="col-md-12">
                                      <div className="scrollbar" id="style-3">
                                          <div className="force-overflow">
                                              <div className="table-responsive overflow-vertical">
                                                  <table>
                                                      <tr style={{ borderBottom: '1px solid #dcdcdc' }}>
                                                        <td style={{ width: '10%' }}>
                                                          <div className="input-group1">
                                                            <input type="button" value="-" className="button-minus icon-shape icon-sm" data-field="quantity"/>
                                                            <input type="number" step="1" max="10" value="1" name="quantity" className="quantity-field border-0 text-center w-100"/>
                                                            <input type="button" value="+" className="button-plus icon-shape icon-sm" data-field="quantity"/>
                                                          </div>
                                                        </td>
                                                        <td style={{ width: '50%' }}>
                                                          <p className="pro-name">Rb3030 Outdoorsman I Aviator Sunglasses</p>
                                                        </td>
                                                        <td style={{ width: '30%' }}>
                                                          <small>$4.200 x 43</small>
                                                          <p className="pro-price"> $570.000 </p>
                                                        </td>
                                                        <td style={{ width: '10%' }}>
                                                          <i className="fa fa-trash trash" aria-hidden="true"></i>
                                                        </td>
                                                      </tr>
                                                      <tr style={{ borderBottom: '1px solid #dcdcdc' }}>
                                                      <td style={{ width: '10%' }}>
                                                        <div className="input-group1">
                                                          <input type="button" value="-" className="button-minus icon-shape icon-sm" data-field="quantity" />
                                                          <input type="number" step="1" max="10" value="1" name="quantity" className="quantity-field border-0 text-center w-100" />
                                                          <input type="button" value="+" className="button-plus icon-shape icon-sm" data-field="quantity" />
                                                        </div>
                                                      </td>
                                                      <td style={{ width: '50%' }}>
                                                        <p className="pro-name">Rb3030 Outdoorsman I Aviator Sunglasses</p>
                                                      </td>
                                                      <td style={{ width: '30%' }}>
                                                        <small>$4.200 x 43</small>
                                                        <p className="pro-price">$570.000</p>
                                                      </td>
                                                      <td style={{ width: '10%' }}>
                                                        <i className="fa fa-trash trash" aria-hidden="true"></i>
                                                      </td>
                                                    </tr>    
                                                  </table>
                                              </div>
                                          </div>
                                         
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-12 mt-3 p-0">
                                  <div className="row">
                                    <div className="table-responsive">
                                          <table className="table w-100">
                                              <tr>
                                                  <td>
                                                  <div className="blc-info">
                                                      <p> Sub Total </p>
                                                      <p> Tax </p>
                                                      <p> Shipping </p>
                                                      <p> Discount </p>
                                                  </div>

                                                  </td>
                                                  <td>
                                                      <div className="blc">
                                                          <p>$5,304.600</p>
                                                          <p>$0.000</p>
                                                          <p>$0.000</p>
                                                          <p>$0.000</p>
                                                      </div>
                                                  </td>
                                              </tr>

                                          </table>
                                      </div>
                                  </div>

                                  <br/>

                                  <div className="row">
                                      <div className="col-6 col-md-6 col-sm-6 col-xs-6">
                                          <p className="blc-tot text-left"><b>Total</b></p>
                                      </div>

                                      <div className="col-6 col-md-6 col-sm-6 col-xs-6">
                                          <p className="blc-tot text-right"><b>$5,304.600</b></p>
                                      </div>
                                  </div>
                                  
                                  <div className="">
                                      <div className="shipp-option">
                                          
                                          <div className="">
                                             <lable> Discount Type</lable>
                                                  <select className="form-control">
                                                      <option>Fixed</option>
                                                       <option>Percentage(%)</option>
                                                  </select>
                                           </div>
                                          
                                           <div className="dropup">
                                              <lable>Discount</lable>
                                              <div className="">
                                                  <div className="input-group  w-100">
                                                      <input type="text" className="form-control" placeholder="Enter discount"/>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                           <div className="">
                                             <lable> Coupons</lable>
                                                  <select className="form-control">
                                                      <option>BIGSELL10%</option>
                                                       <option>GIFT40%</option>
                                                  </select>
                                           </div>
                                          
                                           <div className="">
                                               <lable>Transport Cost</lable>
                                              <div className="input-group  w-100">
                                                  <input type="text" className="form-control" placeholder="Transport Cost"/>
                                              </div>
                                          </div>

                                          <div className="">
                                             <lable> Discount Type</lable>
                                                  <select className="form-control">
                                                      <option>VAT@0</option>
                                                       <option>5</option>
                                                  </select>
                                           </div>
                                           
                                              <div className="dropup drop-top">
                                              <button type="button" className="btn btn-outline-dark dropdown-toggle w-100" data-toggle="dropdown">
                                                  Shipping
                                              </button>
                                              <div className="dropdown-menu dropdown-menu-lg">
                                                  <div className="input-group  w-100">
                                                      <input type="text" className="form-control" placeholder="Your Email"/>
                                                      <div className="input-group-append">
                                                          <span className="input-group-text">Flat</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                      </div>
                                      
                                  </div>

                                  <div className="mt-2">
                                      <div className="flex-btn">

                                          <div className="dropup">
                                               <button type="submit" className="btn btn-info w-sm-100 btn-pad" data-toggle="modal" data-target="#order-preview">
                                                  Place Order
                                              </button>
                                          </div>
                                          
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </div>
    
      {/* <!-- END: Content--> */}

      {/* <!-- new customer --> */}

      {/* <!-- The Modal --> */}
      <div className="modal fade" id="new-customer">
          <div className="modal-dialog">
              <div className="modal-content">

                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                      <h4 className="modal-title text-capitalize">Shipping address
                      </h4>
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                      <div className="d-flex flex-container">
                          <div className="flex-item">
                              <input type="radio" name="address_id" value="9" checked="" required=""/>
                          </div>

                          <div className="flex-item">
                              <span className="d-flex">
                                  <span className="flex-grow-1 pl-2 pad-lft">
                                      <p>
                                          <span className="alpha-6">Address:</span>
                                          <span className="strong-600">3060 Langtown Road
                                              Muscatine, IA 52761</span>
                                      </p>
                                      <p>
                                          <span className="alpha-6">Postal Code:</span>
                                          <span className="strong-600">3060</span>
                                      </p>
                                      <p>
                                          <span className="alpha-6">City:</span>
                                          <span className="strong-600">Acton</span>
                                      </p>
                                      <p>
                                          <span className="alpha-6">State:</span>
                                          <span className="strong-600">Massachusetts</span>
                                      </p>
                                      <p>
                                          <span className="alpha-6">Country:</span>
                                          <span className="strong-600">United States</span>
                                      </p>
                                      <p>
                                          <span className="alpha-6">Phone:</span>
                                          <span className="strong-600">563-999-2754</span>
                                      </p>
                                  </span>
                              </span>
                          </div>
                          {/* </label> */}
                      </div>

                      <div className="mt-2">

                          <Link to="javascript:void(0)" className="text-decoration-none text-black" data-toggle="modal" data-target="#add-address" data-dismiss="modal">
                              <div className="border-addres rounded text-center">
                                  <i className="fa fa-plus text-dark"></i>
                                  <br/>
                                  Add New Address
                              </div>
                          </Link>
                      </div>

                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-info">Confirm</button>
                  </div>

              </div>
          </div>
      </div>


      {/* <!-- add address --> */}

      {/* <!-- The Modal --> */}
      <div className="modal fade" id="add-address">
          <div className="modal-dialog">
              <div className="modal-content">

                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                      <h4 className="modal-title">Shipping address</h4>
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                      <div className="form-group">
                          <div className=" row">
                              <label className="col-sm-2 control-label" for="address">Address</label>
                              <div className="col-sm-10">
                                  <textarea placeholder="Address" id="address" name="address" className="form-control" required=""></textarea>
                              </div>
                          </div>
                      </div>


                      <div className="form-group">
                          <div className=" row">
                              <label className="col-sm-2 control-label">Country</label>
                              <div className="col-sm-10">
                                  <select className="form-control" data-placeholder="Select your country">
                                      <option value="">Select your country</option>
                                      <option value="1">Afghanistan</option>
                                      <option value="2">Albania</option>
                                      <option value="3">Algeria</option>
                                      <option value="4">American Samoa</option>
                                      <option value="5">Andorra</option>
                                  </select>
                              </div>
                          </div>
                      </div>

                      <div className="form-group">
                          <div className=" row">
                              <label className="col-sm-2 control-label">State</label>
                              <div className="col-sm-10">
                                  <select className="form-control" data-placeholder="Select your state">
                                      <option value="">Select your country</option>
                                      <option value="1">Afghanistan</option>
                                      <option value="2">Albania</option>
                                      <option value="3">Algeria</option>
                                  </select>
                              </div>
                          </div>
                      </div>

                      <div className="form-group">
                          <div className=" row">
                              <label className="col-sm-2 control-label">City</label>
                              <div className="col-sm-10">
                                  <select className="form-control" data-placeholder="Select your city">
                                      <option value="">Select your country</option>
                                      <option value="1">Afghanistan</option>
                                      <option value="2">Albania</option>
                                      <option value="3">Algeria</option>
                                  </select>
                              </div>
                          </div>
                      </div>

                      <div className="form-group">
                          <div className=" row">
                              <label className="col-sm-2 control-label" for="postal_code">Postal Code</label>
                              <div className="col-sm-10">
                                  <input type="number" min="0" placeholder="Postal Code" id="postal_code" name="postal_code" className="form-control" required=""/>
                              </div>
                          </div>
                      </div>

                      <div className="form-group">
                          <div className=" row">
                              <label className="col-sm-2 control-label" for="phone">Phone</label>
                              <div className="col-sm-10">
                                  <input type="number" min="0" placeholder="Phone" id="phone" name="phone" className="form-control" required=""/>
                              </div>
                          </div>
                      </div>
                      <hr/>
                      {/* <!-- Modal footer --> */}
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-info">Confirm</button>
                      </div>

                  </div>
              </div>
          </div>
      </div>


  {/* <!--order-preview model--> */}

  {/* <!-- The Modal --> */}
    <div className="modal fade" id="order-preview">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
        
          {/* <!-- Modal Header --> */}
          <div className="modal-header">
            <h4 className="modal-title">Order Summary</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          
          {/* <!-- Modal body --> */}
          <div className="modal-body">
            <div className="row">
                <div className="col-md-6">
                    
                    <div className="prod-section">
                       <div className="item-pro">
                          <img src={CardImageCap}/> 
                          
                          <p className="prod line-clamp-prod">Corsair K60 RGB Pro Mechanical Gaming Keyboard - CHERRY Mechanical Keyswitches - Durable</p>
                       </div>
                       <div className="prod-price">
                           <p><b>$55.000</b></p>
                           <p>Qty: 3</p>
                       </div>
                       
                    </div>
                    
                   <div className="prod-section">
                       <div className="item-pro">
                          <img src={CardImageCap}/> 
                          
                          <p className="prod line-clamp-prod">Corsair K60 RGB Pro Mechanical Gaming Keyboard - CHERRY Mechanical Keyswitches - Durable</p>
                       </div>
                       <div className="prod-price">
                            <p><b>$55.000</b></p>
                           <p>Qty: 3</p>
                       </div>
                       
                    </div>
                    
                   
                </div>
                
                <div className="col-md-6">
                   <div className="customer-info">
                      <div className="cust-inner">
                          <div className="cust-headeing">
                            <h3>Customer Info</h3>
                          </div>
                          <div className="cust-details">
                              <p><b>Name :</b> Ajay</p>
                              <p><b>Phone :</b> 0019867593</p>
                              <p><b>Addres :</b> sejal appartment</p>
                              <p><b>Shipping :</b>  sejal appartment</p>
                          </div>
                         
                      </div>
                   </div>
                   
                   <br/>
                   
                  <div className="row">
                  <div className="table-responsive" style={{margin: "0 15px"}}>
                    <table className="table w-100">
                      <tr>
                        <td style={{borderTop: "1px solid #ffffff", paddingLeft: 0}}>
                          <div className="blc-info">
                            <p>Sub Total</p>
                            <p>Tax</p>
                            <p>Shipping</p>
                            <p>Discount</p>
                          </div>
                        </td>
                        <td style={{borderTop: "1px solid #ffffff", paddingLeft: 0}}>
                          <div className="blc">
                            <p>$567</p>
                            <p>$0.000</p>
                            <p>$0.000</p>
                            <p>$0.000</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>

                  </div>

                  <br/>

                  <div className="row">
                      <div className="col-6 col-md-6 col-sm-6 col-xs-6">
                          <p className="blc-tot text-left"><b>Total</b></p>
                      </div>

                      <div className="col-6 col-md-6 col-sm-6 col-xs-6">
                          <p className="blc-tot text-right"><b>$5,304.600</b></p>
                      </div>
                  </div>
                </div>
            </div>
          </div>
          
          {/* <!-- Modal footer --> */}
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button> <button type="button" className="btn btn-warning text-white" data-toggle="modal" data-target="#offline-payment">Offline payment</button> <button type="button" className="btn btn-info">Confirm with COD</button> <button type="button" className="btn btn-success text-white">Confirm with Cash</button> 
          </div>
          
        </div>
      </div>
  </div>

  {/* <!--offline-payment--> */}

   <div className="modal fade" id="offline-payment">
      <div className="modal-dialog">
        <div className="modal-content">
        
          {/* <!-- Modal Header --> */}
          <div className="modal-header">
            <h4 className="modal-title"> Offline Payment Info</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          
          {/* <!-- Modal body --> */}
            <form method="post" action="">
              <div className="modal-body">
                      <div className="form-group">
                          <div className=" row">
                              <label className="col-sm-4 control-label" for="Payment method">Payment method</label>
                              <div className="col-sm-8">
                                  <input type="text" placeholder="Payment method" className="form-control" required=""/>
                              </div>
                          </div>
                      </div>
                      
                      <div className="form-group">
                          <div className=" row">
                              <label className="col-sm-4 control-label" for="Amount">Amount</label>
                              <div className="col-sm-8">
                                  <input type="text" placeholder="Amount"  className="form-control" required=""/>
                              </div>
                          </div>
                      </div>
                      
                      <div className="form-group">
                          <div className=" row">
                              <label className="col-sm-4 control-label" for="Transaction ID">Transaction ID</label>
                              <div className="col-sm-8">
                                  <input type="text"  placeholder="Transaction ID" className="form-control" required=""/>
                              </div>
                          </div>
                      </div>
                      
                      <div className="form-group">
                          <div className=" row">
                              <label className="col-sm-4 control-label" for="Transaction ID">Payment Proof</label>
                              <div className="col-sm-8">
                                 <input className="form-control" type="file" id="image" name="image" required=""/>
                              </div>
                          </div>
                      </div>
                      
                    
              
          </div>
          
          {/* <!-- Modal footer --> */}
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success">Confirm</button>
          </div>
          
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default SalesPos;



