import React from "react";
import { Link } from "react-router-dom";

const GeneralSettings = () => {
    return (
        <>
            {/* <!-- BEGIN: Content--> */}
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 mb-2">
                            <h3 className="content-header-title">General Settings
                            </h3>
                            <div className="row breadcrumbs-top">
                                <div className="breadcrumb-wrapper col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/admin">Home</Link>
                                        </li>

                                        <li className="breadcrumb-item active">General Settings

                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <!--add Carrier--> */}

                    <section>
                        <div className="content-body">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    {/* <!-- Carrier--> */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">
                                                General Settings
                                            </h4>
                                        </div>

                                        <div className="card-body">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label for="systemname"> System Name
                                                                : <span className="text-danger">*</span></label>
                                                            <input className="form-control" type="text" placeholder="System Name" />

                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label for="logo"> System Logo - White: <span className="text-danger">*</span></label>
                                                            <div className="custom-file">
                                                                <input type="file" className="custom-file-input" id="customFile" name="filename" />
                                                                <label className="custom-file-label" for="customFile">Choose file</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">

                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label for="logo"> System Logo - Black: <span className="text-danger">*</span></label>
                                                            <div className="custom-file">
                                                                <input type="file" className="custom-file-input" id="customFile" name="filename" />
                                                                <label className="custom-file-label" for="customFile">Choose file</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label for="systemtimezone"> System Timezone : <span className="text-danger">*</span></label>
                                                            <select className="form-control">

                                                                <option value="">
                                                                    --Select Country--
                                                                </option>

                                                                <option value="(GMT) Lisbon">
                                                                    (GMT) Lisbon
                                                                </option>
                                                                <option value="(GMT) London">
                                                                    (GMT) London
                                                                </option>
                                                                <option value="(GMT+01:00) Amsterdam">
                                                                    (GMT+01:00) Amsterdam
                                                                </option>
                                                                <option value="(GMT+01:00) Rome">
                                                                    (GMT+01:00) Rome
                                                                </option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">

                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label for="logo"> Admin login page background: <span className="text-danger">*</span></label>
                                                            <div className="custom-file">
                                                                <input type="file" className="custom-file-input" id="customFile" name="filename" />
                                                                <label className="custom-file-label" for="customFile">Choose file</label>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
                                                        <button type="submit" className="btn btn-info">
                                                            Add
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                    {/* <!--end  Carrier--> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--end  product--> */}
                </div>
            </div>

            {/* <!-- END: Content--> */}


        </>
    );
};

export default GeneralSettings;
