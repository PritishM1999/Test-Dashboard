import React, { useState } from "react";
import { Link } from "react-router-dom";

const StickyNotes = () => {
    const [isAddNavOpen, setAddNavOpen] = useState(false);
    const [isEditNavOpen, setEditNavOpen] = useState(false);

    const handleAddNavOpen = () => {
        setAddNavOpen(true);
    };

    const handleEditNavOpen = () => {
        setEditNavOpen(true);
    };

    const handleAddNavClose = () => {
        setAddNavOpen(false);
    };

    const handleEditNavClose = () => {
        setEditNavOpen(false);
    };

    const handleAddNote = () => {
        const noteInput = document.querySelector("#addNoteTextarea");
        const note = noteInput.value;

        if (note.trim() === "") {
            return;
        }

        noteInput.value = "";

        handleAddNavClose();
    };

    const handleEditNote = () => {
        const noteInput = document.querySelector("#editNoteTextarea");
        const note = noteInput.value;

        if (note.trim() === "") {
            return;
        }

        handleEditNavClose();
    };

    return (
        <>
            {/* BEGIN: Content */}
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-1">
                            <div className="row breadcrumbs-top">
                                <div className="breadcrumb-wrapper col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/admin">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">All Sticky Notes</li>
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
                                                    <h4 className="card-title mt-1">Sticky Notes</h4>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="btn-group float-md-right">
                                                        <button
                                                            className="btn btn-info text-white"
                                                            onClick={handleAddNavOpen}
                                                            type="button"
                                                        >
                                                            Add Sticky Notes
                                                        </button>
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
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        value=""
                                                                    />
                                                                </label>
                                                            </th>
                                                            <th>Note</th>
                                                            <th>Create At</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <label className="form-check-label form-check-label1">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        value=""
                                                                    />
                                                                </label>
                                                            </td>
                                                            <td>
                                                                Generate Lorem Ipsum placeholder text for use in your graphic, print
                                                                and web layouts, and discover plugins for your favorite writing,
                                                                design and blogging tools. Explore the origins, history and meaning
                                                            </td>
                                                            <td>13/10/2023</td>
                                                            <td>
                                                                <div
                                                                    className="fontsize"
                                                                    role="group"
                                                                    aria-label="Button group with nested dropdown"
                                                                >
                                                                    <button
                                                                        className="dropdown-menu-right  px-2 mb-1 btn btn-link"
                                                                        id="btnGroupDrop1"
                                                                        type="button"
                                                                        data-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="fa fa-cog" aria-hidden="true"></i>
                                                                    </button>
                                                                    <div
                                                                        className="dropdown-menu"
                                                                        aria-labelledby="btnGroupDrop1"
                                                                        style={{ willChange: "transform" }}
                                                                    >
                                                                        <Link className="dropdown-item" to="#" onClick={handleEditNavOpen}>
                                                                            <i className="fa fa-pencil" aria-hidden="true"></i> Edit
                                                                        </Link>
                                                                        <Link className="dropdown-item" to="#">
                                                                            <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
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

                    {/* END: Content */}

                    {/* Add Note */}
                    <div id="categoryadd" className={`pageside ${isAddNavOpen ? "show" : ""}`}>
                        <div className="close-side">
                            <Link to="#" className="closebtn" onClick={handleAddNavClose}>
                                &times;
                            </Link>
                        </div>
                        <div className="container-fluid">
                            <div className="form-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title">Add Sticky Note</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Note</label>
                                                            <textarea className="form-control" rows="5" placeholder="Enter Note"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-primary" onClick={handleAddNote}>
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Edit Note */}
                    <div id="categoryedit" className={`pageside ${isEditNavOpen ? "show" : ""}`}>
                        <div className="close-side">
                            <Link to="#" className="closebtn" onClick={handleEditNavClose}>
                                &times;
                            </Link>
                        </div>
                        <div className="container-fluid">
                            <div className="form-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title">Edit Sticky Note</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Note</label>
                                                            <textarea className="form-control" rows="5" placeholder="Enter Note"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-primary" onClick={handleEditNote}>
                                                    Update
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
        </>
    );
};

export default StickyNotes;
