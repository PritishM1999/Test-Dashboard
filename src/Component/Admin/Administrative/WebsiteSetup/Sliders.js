import React from "react";
import { Link } from "react-router-dom";

const Sliders = () => {
    return (
        <>
            {/* // <!-- BEGIN: Content--> */}
            <div class="app-content content">
                <div class="content-wrapper">
                    <div class="content-header row">
                        <div class="content-header-left col-md-6 col-12 mb-2">
                            <h3 class="content-header-title">All Slider</h3>

                            <div class="row breadcrumbs-top">
                                <div class="breadcrumb-wrapper col-12">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.php">Home</a>
                                        </li>
                                        <li class="breadcrumb-item"><a href="add-slider.php">Add Slider</a>
                                        </li>
                                        <li class="breadcrumb-item active"> All Slider
                                        </li>
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
                                                <div class="col-md-6 col-sm-12 col-xs-12">
                                                    <h4 class="card-title">All Slider</h4>
                                                </div>

                                                <div class="col-md-6 col-sm-12 col-xs-12">
                                                    <div class="main-menu-tab">
                                                        <ul class="nav nav-pills">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" id="base-pill1" data-toggle="pill" href="#all" aria-expanded="true"> All
                                                                </a>
                                                            </li>

                                                            <li class="nav-item">
                                                                <a class="nav-link" href="add-slider.php" aria-expanded="true"> Add Slider
                                                                </a>
                                                            </li>

                                                            <li class="nav-item">
                                                                <a class="nav-link" id="base-pill1" data-toggle="pill" href="#trash" aria-expanded="true"> Trash
                                                                </a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="tab-content">
                                                    {/* <!-- all --> */}
                                                    <div role="tabpanel" class="tab-pane active" id="all" aria-expanded="true" aria-labelledby="base-pill1">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover table-bordered" id="dtBasicExample">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Sr. No</th>
                                                                        <th>Title</th>
                                                                        <th>Image</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    <tr>
                                                                        <td>1. </td>
                                                                        <td> Slider 1 </td>
                                                                        <td>
                                                                            <img src="assets/images/products/product.jpg" alt="Banner" class="h-50px img-mrg-mob" /></td>
                                                                        <td>
                                                                            <div class="fontsize" role="group" aria-label="Button group with nested dropdown">

                                                                                <a class="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                                                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">


                                                                                    <a class="dropdown-item" href="edit-slider.php"><i class="fa fa-edit"></i> Edit</a>
                                                                                    <a class="dropdown-item" href="#"><i class="fa fa-trash"></i> Delete</a></div>
                                                                            </div></td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                    {/* <!-- trash --> */}
                                                    <div role="tabpanel" class="tab-pane" id="trash" aria-expanded="true" aria-labelledby="base-pill1">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover table-bordered" id="dtBasicExample1">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Sr. No</th>
                                                                        <th>Title</th>
                                                                        <th>Image</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    <tr>
                                                                        <td>1. </td>
                                                                        <td> SLider 2 </td>
                                                                        <td>
                                                                            <img src="assets/images/products/product.jpg" alt="Banner" class="h-50px img-mrg-mob" /></td>
                                                                        <td>
                                                                            <div class="fontsize" role="group" aria-label="Button group with nested dropdown">

                                                                                <a class="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                                                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">


                                                                                    <a class="dropdown-item" href="edit-slider.php"><i class="fa fa-edit"></i> Edit</a>
                                                                                    <a class="dropdown-item" href="#"><i class="fa fa-trash"></i> Delete</a></div>
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
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* // </div> */}
            {/* // <!-- END: Content--> */}

        </>
    );
};

export default Sliders;






