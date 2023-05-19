import React from "react";
import { Link } from "react-router-dom";

function RefundConfiguration() {
    return (
        <>
            {/* BEGIN: Content */}
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2">
                            <h3 className="content-header-title mb-0">Refund Configuration</h3>
                            <div className="row breadcrumbs-top d-inline-block">
                                <div className="breadcrumb-wrapper col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            All Refund Configuration
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-body">
                        <section>
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Set Refund Time</h4>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <label htmlFor="settime">
                                                            Set Time for sending Refund Request:{" "}
                                                            <span className="text-danger">*</span>
                                                        </label>
                                                    </div>

                                                    <div className="col-md-3 col-sm-8 col-xs-8">
                                                        <div className="form-group">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                placeholder="No. of days"
                                                                defaultValue="6"
                                                            />
                                                            <span className="focus-border"></span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-3 col-sm-4 col-xs-4">
                                                        <div className="form-group">
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                defaultValue="Days"
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="text-right">
                                                            <button type="submit" className="btn btn-info">
                                                                Save
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Set Refund Sticker</h4>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-12 col-xs-12">
                                                        <label htmlFor="sticker">
                                                            Sticker: <span className="text-danger">*</span>
                                                        </label>
                                                    </div>

                                                    <div className="col-md-9 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <div className="custom-file">
                                                                <input
                                                                    type="file"
                                                                    className="custom-file-input"
                                                                    id="customFile"
                                                                    name="filename"
                                                                />
                                                                <label
                                                                    className="custom-file-label"
                                                                    htmlFor="customFile"
                                                                >
                                                                    Choose file
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="text-right">
                                                            <button type="submit" className="btn btn-info">
                                                                Save
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            {/* END: Content */}
        </>

    );
}

export default RefundConfiguration;
