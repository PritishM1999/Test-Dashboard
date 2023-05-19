import React from "react";
import { Link } from "react-router-dom";
import './Reminder.css';

const Reminder = () => {
    return (
        <>
            {/* <!-- BEGIN: Content --> */}
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-1">
                            {/* <h3 className="content-header-title">Sticky Notes </h3> */}
                            <div className="row breadcrumbs-top">
                                <div className="breadcrumb-wrapper col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/admin">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">Add New Tasks
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-body">
                        <section>
                            <div className="icon-tabs">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12 mx-auto">
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="row mx-auto">
                                                    <div className="col-md-3 col-sm-12 col-xs-12">
                                                        <div className="m-0">
                                                            <label className="font-weight-bold" htmlFor=""> Add Task</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                                        {/* <!-- start add-new-task --> */}
                                                        <div className="add-new-task">
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <div className="white-box">
                                                                        <div className="row">
                                                                            <div className="col-lg-2 col-md-3">
                                                                                <div className="form-group">
                                                                                    <input type="date" name="task-name" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-2 col-md-3">
                                                                                <div className="form-group">
                                                                                    <input type="text" name="task-description" placeholder="To" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-2 col-md-3">
                                                                                <div className="form-group">
                                                                                    <input type="text" name="task-deadline" placeholder="From" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-2 col-md-3">
                                                                                <div className="form-group">
                                                                                    <input type="text" name="task-name" placeholder="Task Name" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-2 col-md-3">
                                                                                <div className="form-group">
                                                                                    <input type="text" name="task-description" placeholder="Task Description" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-2 col-md-2">
                                                                                <div className="form-action">
                                                                                    <button className="btn btn-info btn-block">Add Task</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- end add-new-task --> */}
                                                        <hr />
                                                        <div className="task-bar">
                                                            <ul>
                                                                <li>
                                                                    <h3>Tasks</h3>
                                                                    <div className="connectedSortable" id="tasks">
                                                                        {/* <!-- start column --> */}
                                                                        <div className="column ui-state-default">
                                                                            <div className="heading">
                                                                                <h4>Create Website 1</h4>
                                                                                <p>Use HTML5, CSS3, jQuery, and Bootstrap 3</p>
                                                                            </div>
                                                                            <div className="status">
                                                                                <div className="progress shadow-style">
                                                                                    <div className="progress-bar l-bg-purple width-per-40" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                                                </div>
                                                                                <p>Task Status</p>
                                                                            </div>
                                                                            <div className="images">
                                                                                <div className="imgb"><img src="https://www.shopnmac.com/assets/admin/images/portrait/small/avatar-s-19.png" width="30" height="30" alt="user2" /></div>
                                                                                <div className="imgb"><img src="https://www.shopnmac.com/assets/admin/images/portrait/small/avatar-s-19.png" width="30" height="30" alt="user2" /></div>
                                                                                <div className="imgb"><img src="https://www.shopnmac.com/assets/admin/images/portrait/small/avatar-s-19.png" width="30" height="30" alt="user2" /></div>
                                                                            </div>
                                                                            <div className="deadline">
                                                                                <p><strong>Deadline:</strong> September 20, 2015</p>
                                                                            </div>
                                                                        </div>
                                                                        {/* <!-- end column --> */}
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h3>Process</h3>
                                                                    <div className="connectedSortable" id="process">
                                                                        {/* <!-- start column --> */}
                                                                        <div className="column ui-state-default">
                                                                            <div className="heading">
                                                                                <h4>Create Website 2</h4>
                                                                                <p>Use HTML5, CSS3, jQuery, and Bootstrap 3</p>
                                                                            </div>
                                                                            <div className="status">
                                                                                <div className="progress shadow-style">
                                                                                    <div className="progress-bar l-bg-purple width-per-40" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                                                </div>
                                                                                <p>Task Status</p>
                                                                            </div>
                                                                            <div className="images">
                                                                                <div className="imgb"><img src="https://www.shopnmac.com/assets/admin/images/portrait/small/avatar-s-19.png" width="30" height="30" alt="user2" /></div>
                                                                                <div className="imgb"><img src="https://www.shopnmac.com/assets/admin/images/portrait/small/avatar-s-19.png" width="30" height="30" alt="user2" /></div>
                                                                                <div className="imgb"><img src="https://www.shopnmac.com/assets/admin/images/portrait/small/avatar-s-19.png" width="30" height="30" alt="user2" /></div>
                                                                            </div>
                                                                            <div className="deadline">
                                                                                <p><strong>Deadline:</strong> September 20, 2015</p>
                                                                            </div>
                                                                        </div>
                                                                        {/* <!-- end column --> */}
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h3>Review</h3>
                                                                    <div className="connectedSortable" id="review">
                                                                        {/* <!-- start column --> */}
                                                                        <div className="column ui-state-default">
                                                                            <div className="heading">
                                                                                <h4>Create Website 3</h4>
                                                                                <p>Use HTML5, CSS3, jQuery, and Bootstrap 3</p>
                                                                            </div>
                                                                            <div className="status">
                                                                                <div className="progress shadow-style">
                                                                                    <div className="progress-bar l-bg-purple width-per-40" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                                                </div>
                                                                                <p>Task Status</p>
                                                                            </div>
                                                                            <div className="images">
                                                                                <div className="imgb"><img src="https://www.shopnmac.com/assets/admin/images/portrait/small/avatar-s-19.png" width="30" height="30" alt="user2" /></div>
                                                                                <div className="imgb"><img src="https://www.shopnmac.com/assets/admin/images/portrait/small/avatar-s-19.png" width="30" height="30" alt="user2" /></div>
                                                                                <div className="imgb"><img src="https://www.shopnmac.com/assets/admin/images/portrait/small/avatar-s-19.png" width="30" height="30" alt="user2" /></div>
                                                                            </div>
                                                                            <div className="deadline">
                                                                                <p><strong>Deadline:</strong> September 20, 2015</p>
                                                                            </div>
                                                                        </div>
                                                                        {/* <!-- end column --> */}
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <h3>Completed</h3>
                                                                    <div className="connectedSortable disabled" id="completed">
                                                                        {/* <!-- start column --> */}
                                                                        <div className="column ui-state-default">
                                                                            <div className="heading">
                                                                                <h4>Create Website 4</h4>
                                                                                <p>Use HTML5, CSS3, jQuery, and Bootstrap 3</p>
                                                                            </div>
                                                                            <div className="status">
                                                                                <div className="progress shadow-style">
                                                                                    <div className="progress-bar l-bg-purple width-per-40" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                                                </div>
                                                                                <p>Task Status</p>
                                                                            </div>
                                                                            <div className="images">
                                                                                <div className="imgb"><img src="https://www.shopnmac.com/assets/admin/images/portrait/small/avatar-s-19.png" width="30" height="30" alt="user2" /></div>
                                                                                <div className="imgb"><img src="https://www.shopnmac.com/assets/admin/images/portrait/small/avatar-s-19.png" width="30" height="30" alt="user2" /></div>
                                                                                <div className="imgb"><img src="https://www.shopnmac.com/assets/admin/images/portrait/small/avatar-s-19.png" width="30" height="30" alt="user2" /></div>
                                                                            </div>
                                                                            <div className="deadline">
                                                                                <p><strong>Deadline:</strong> September 20, 2015</p>
                                                                            </div>
                                                                        </div>
                                                                        {/* <!-- end column --> */}
                                                                    </div>
                                                                </li>
                                                            </ul>
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
            </div>


            {/* <!-- END: Content--> */}

        </>
    );
};

export default Reminder;
