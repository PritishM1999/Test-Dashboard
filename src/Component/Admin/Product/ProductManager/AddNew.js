import React from "react";
import { Link } from "react-router-dom";

function AddNew() {
  return (
    <>
      {/* <!-- BEGIN: Content--> */}
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-6 mb-2">
              <h3 className="content-header-title">Add Product </h3>
              <div className="row breadcrumbs-top">
                <div className="breadcrumb-wrapper col-12">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admin">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="products.php">Product </Link>
                    </li>
                    <li className="breadcrumb-item active">Add Product</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* <!--add product--> */}

          <section>
            <div className="content-body">
              <form action="#">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    {/* <!--Product Information--> */}

                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Product Information</h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="brand">
                                Brand: <span className="text-danger">*</span>
                              </label>
                              <select className="form-control" id="brand">
                                <option value="">Select Brand</option>
                                <option value="Biba">Biba</option>
                                <option value="aurelia">Aurelia</option>
                                <option value="w">W</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="brand">
                                Supplier :{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <select className="form-control">
                                <option value="">Select supplier</option>
                                <option value="Mohit">Mohit</option>
                                <option value="Rahul">Rahul</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="category">
                                Category: <span className="text-danger">*</span>
                              </label>
                              <select
                                className="single-select-box selectivity-input form-control"
                                id="single-select-box"
                                name="category[]"
                                multiple
                              >
                                <option value="Mens" selected>
                                  Mens
                                </option>
                                <option value=" Women">Women</option>
                                <option value="Kids">Kids</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="category">
                                Sub Category:{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <select
                                className="single-select-box selectivity-input form-control"
                                id="single-select-box"
                                name="sub-category[]"
                                multiple
                              >
                                <option value="">Select Category</option>
                                <option value=" Beauty & Health">
                                  Beauty & Health
                                </option>
                                <option value=" Women shoe">Women shoe</option>
                                <option value=" Women shoe">Jackets</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="category">
                                Sub Sub Category:{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <select
                                className="single-select-box selectivity-input form-control"
                                id="single-select-box"
                                name="sub-sub-category[]"
                                multiple
                              >
                                <option value="">Select Category</option>
                                <option value=" Beauty & Health">
                                  Beauty & Health
                                </option>
                                <option value=" Women shoe">Women shoe</option>
                                <option value=" Women shoe">Jackets</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="productname">
                                Product Name :{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Product Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="Shelf">
                                {" "}
                                Floor : <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Floor"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="Shelf">
                                {" "}
                                Shelf : <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Shelf"
                              />
                            </div>
                          </div>

                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group display-inline mt-35">
                              <label for="refundable">
                                {" "}
                                Refundable &nbsp; :{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!--end Product Information--> */}

                    <br />

                    {/* <!-- Product price + stock --> */}

                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Product price + stock</h4>
                      </div>

                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="unit">
                                {" "}
                                Unit : <span className="text-danger">*</span>
                              </label>

                              <select className="form-control">
                                <option value="">Select unit</option>
                                <option value="Pieces">Pieces (Pc(s))</option>
                                <option value="Grams">Grams (g)</option>

                                <option value="Kg">Kg</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="Weight">
                                {" "}
                                Weight : <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Weight"
                              />
                            </div>
                          </div>

                          <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="Expiry Date">
                                {" "}
                                Tax : <span className="text-danger">*</span>
                              </label>
                              <select className="form-control w-200">
                                <option> Please Select </option>
                                <option>VAT@7%</option>
                                <option>CGST@10%</option>
                                <option>SGST@8%</option>
                                <option>None</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="Expiry Date">
                                {" "}
                                Tax Type :{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <select className="form-control w-200">
                                <option> Please Select Type </option>
                                <option>Inclusive</option>
                                <option>Exclusive</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <hr className="border-blue" />

                        <div className="row">
                          <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="sku">
                                {" "}
                                SKU / Product Code :{" "}
                                <span className="text-danger"> * </span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="SKU / Product Code"
                              />
                            </div>
                          </div>

                          <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="quantity">
                                {" "}
                                Quantity :{" "}
                                <span className="text-danger"> * </span>
                              </label>
                              <input
                                className="form-control"
                                type="number"
                                min="0"
                                placeholder="Quantity"
                                value="0"
                              />
                            </div>
                          </div>

                          <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="Expiry Date">
                                {" "}
                                Expiry Date :{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="date"
                                placeholder="Expiry Date"
                              />
                            </div>
                          </div>

                          <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="Exc. tax">
                                {" "}
                                Exc. tax :{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Exc. tax"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="Inc. tax">
                                {" "}
                                Inc. tax :{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Inc. tax"
                              />
                            </div>
                          </div>

                          <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="Margin">
                                {" "}
                                Margin(%) :{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Margin(%)"
                              />
                            </div>
                          </div>

                          <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="Selling Price">
                                {" "}
                                Selling Price :{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Selling Price"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!--End Product price + stock --> */}

                    <br />

                    {/* <!--product image upload--> */}
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Product Images</h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="banner">
                                {" "}
                                Gallary Image:{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  id="customFile"
                                  name="filename"
                                />
                                <label
                                  className="custom-file-label"
                                  for="customFile"
                                >
                                  Choose file
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="thumbnail-images">
                                {" "}
                                Thumbnail Image :{" "}
                                <span className="text-danger">*</span>
                              </label>

                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  id="customFile"
                                  name="filename"
                                />
                                <label
                                  className="custom-file-label"
                                  for="customFile"
                                >
                                  Choose file
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--end product image upload--> */}

                    <br />

                    {/* <!--product Video--> */}
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Product Video</h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="thumbnail-images">
                                Video Thumbnail Image :{" "}
                                <span className="text-danger">*</span>
                              </label>

                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  id="customFile"
                                  name="filename"
                                />
                                <label
                                  className="custom-file-label"
                                  for="customFile"
                                >
                                  Choose file
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="banner">
                                {" "}
                                Video Link :{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="video_link"
                                placeholder="Video Link"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--end product Video--> */}

                    <br />
                    {/* <!--Product description--> */}

                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Description</h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="">
                                {" "}
                                Product Description :{" "}
                                <span className="text-danger"> </span>
                              </label>
                              <textarea
                                name=""
                                id="editor1"
                                className="form-control"
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="">
                                {" "}
                                Other Description :{" "}
                                <span className="text-danger"> </span>
                              </label>
                              <textarea
                                name=""
                                id="editor2"
                                className="form-control"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="">
                                {" "}
                                PDF Specification :{" "}
                                <span className="text-danger"> </span>
                              </label>
                              <div className="custom-file mb-3">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  id="customFile"
                                  name="filename"
                                />
                                <label
                                  className="custom-file-label"
                                  for="customFile"
                                >
                                  Choose file
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!--end product description--> */}

                    <br />

                    {/* <!-- Low Stock Quantity Warning / Estimate Shipping Time --> */}
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">
                          Low Stock Quantity Warning / Estimate Shipping Time
                        </h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="thumbnail-images">
                                Low Stock Quantity &nbsp; :{" "}
                                <span className="text-danger">*</span>
                              </label>

                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                              </label>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="form-group">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck"
                                  name="example1"
                                />
                                <label
                                  className="custom-control-label"
                                  for="customCheck"
                                >
                                  {" "}
                                  Website
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="form-group">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck"
                                  name="example1"
                                />
                                <label
                                  className="custom-control-label"
                                  for="customCheck"
                                >
                                  {" "}
                                  Internal Sell{" "}
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="form-group">
                              <div className="custom-control custom-checkbox form-group">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck"
                                  name="example1"
                                />
                                <label
                                  className="custom-control-label"
                                  for="customCheck"
                                >
                                  {" "}
                                  Not for Sale
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Low Stock Quantity Warning / Estimate Shipping Time --> */}

                    <br />

                    {/* <!--SEO Meta Tags --> */}
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">SEO Meta Tags</h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="Meta Title">
                                {" "}
                                Meta Title :{" "}
                                <span className="text-danger"> * </span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Meta Title"
                              />
                            </div>
                          </div>

                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="Meta Title">
                                {" "}
                                Meta Keyword :{" "}
                                <span className="text-danger"> * </span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Meta Keyword"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="description">
                                {" "}
                                Description :{" "}
                                <span className="text-danger"> * </span>
                              </label>
                              <textarea
                                name="meta-description"
                                rows="8"
                                className="form-control"
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label for="thumbnail-images">
                                {" "}
                                Meta Image :{" "}
                                <span className="text-danger">*</span>
                              </label>

                              <div className="custom-file mb-3">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  id="customFile"
                                  name="filename"
                                />
                                <label
                                  className="custom-file-label"
                                  for="customFile"
                                >
                                  Choose file
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-right">
                    <button type="submit" className="btn btn-info">
                      Save
                    </button>
                  </div>
                </div>
                <br />
                <br />
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AddNew;
