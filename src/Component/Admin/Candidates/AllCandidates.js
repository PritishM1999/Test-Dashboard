import React, { useState } from "react";
import { Link } from "react-router-dom";
import './AllCandidates.css';

const AllCandidates = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    // Sample data for demonstration
    const candidatesData = [
        {
            id: 1,
            name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",
            company: "The Company",
            position: "Manager",
            package: "$1,200.000",
            status: "Active/Inactive"
        },
        {
            id: 2,
            name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",
            company: "The Company",
            position: "Manager",
            package: "$1,200.000",
            status: "Active/Inactive"
        },
        {
            id: 3,
            name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",
            company: "The Company",
            position: "Manager",
            package: "$1,200.000",
            status: "Active/Inactive"
        },
        {
            id: 4,
            name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",
            company: "The Company",
            position: "Manager",
            package: "$1,200.000",
            status: "Active/Inactive"
        },
        {
            id: 5,
            name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",
            company: "The Company",
            position: "Manager",
            package: "$1,200.000",
            status: "Active/Inactive"
        },
        {
            id: 6,
            name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",
            company: "The Company",
            position: "Manager",
            package: "$1,200.000",
            status: "Active/Inactive"
        },
        {
            id: 7,
            name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",
            company: "The Company",
            position: "Manager",
            package: "$1,200.000",
            status: "Active/Inactive"
        },
        {
            id: 8,
            name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",
            company: "The Company",
            position: "Manager",
            package: "$1,200.000",
            status: "Active/Inactive"
        },

    ];

    // Calculate pagination variables
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = candidatesData.slice(indexOfFirstRecord, indexOfLastRecord);

    // Handle pagination page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Handle previous page click
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Handle next page click
    const handleNextPage = () => {
        const totalPages = Math.ceil(candidatesData.length / recordsPerPage);
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            {/* BEGIN: Content */}

            <div className="container-fluid">
                <div className="app-content content">
                    <div className="content-wrapper">
                        <div className="content-header row">
                            <div className="content-header-left col-md-12 col-12 mb-1">
                                {/* <!--<h3 className="content-header-title">Master Menu</h3>--> */}
                                <div className="row breadcrumbs-top align-items-center">
                                    <div className="breadcrumb-wrapper col-auto">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                                            <li className="breadcrumb-item active">Candidates</li>
                                        </ol>
                                    </div>
                                    <div className="col-auto ml-auto">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Candidates" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Horizontal menu */}

                <div className="horizontal-menu">
                    <div id="menu_area" className="menu-area">
                        <div className="row">
                            <nav className="navbar navbar-light navbar-expand-lg mainmenu">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto font-weight-bold">
                                        <li className="active"><Link to="#">All candidates<span className="sr-only">(current)</span></Link></li>
                                        <li><Link to="#">Active</Link></li>
                                        <li><Link to="#">Inactive</Link></li>
                                        <li><Link to="#">Pending</Link></li>
                                        <li><Link to="#">Blocked</Link></li>
                                        <li><Link to="#">Closed</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Horizontal menu End */}

                {/* BEGIN - Manual table */}
                <div className="app-content content">
                    <div className="content-wrapper">
                        <div className="content-body">
                            <section>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Candidate</th>
                                                                <th>Education</th>
                                                                <th>Experience</th>
                                                                <th>Current Company</th>
                                                                <th>Position</th>
                                                                <th>Package</th>
                                                                <th>Status</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {currentRecords.map((candidate) => (
                                                                <tr key={candidate.id}>
                                                                    <td>{candidate.id}</td>
                                                                    <td>
                                                                        {candidate.name} <br />
                                                                        <b>{candidate.email}</b><br />
                                                                        {candidate.phone}
                                                                    </td>
                                                                    <td>{candidate.education}</td>
                                                                    <td>{candidate.experience}</td>
                                                                    <td>{candidate.company}</td>
                                                                    <td>{candidate.position}</td>
                                                                    <td>{candidate.package}</td>
                                                                    <td>{candidate.status}</td>
                                                                    <td>
                                                                        <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                                            <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                            </Link>
                                                                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop2" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
                                                                                <Link className="dropdown-item" to="edit-customer.php">
                                                                                    <i className="fa fa-eye"></i> Edit
                                                                                </Link>
                                                                                <Link className="dropdown-item" to="#">
                                                                                    <i className="fa fa-trash"></i> Delete
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* END - Manual table */}
                            {/* Candidate Records */}
                            {/* <div className="candidate-records">
                                {currentRecords.map(candidate => (
                                    <div className="candidate-card" key={candidate.id}>
                                        <h4>{candidate.name}</h4>
                                        <p>Email: {candidate.email}</p>
                                        <p>Phone: {candidate.phone}</p>

                                    </div>
                                ))}
                            </div> */}
                            {/* END: Candidate Records */}

                            {/* Pagination */}
                            <div className="pagination-container d-flex justify-content-center">
                                <ul className="pagination">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={handlePreviousPage}>
                                            Previous
                                        </button>
                                    </li>
                                    {Array.from({ length: Math.ceil(candidatesData.length / recordsPerPage) }, (_, index) => (
                                        <li className={`page-item ${index + 1 === currentPage ? 'active' : ''}`} key={index}>
                                            <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === Math.ceil(candidatesData.length / recordsPerPage) ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={handleNextPage}>
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            {/* END: Pagination */}
                        </div>
                        {/* END: Content */}

                    </div>
                </div>
            </div>
        </>
    );
};

export default AllCandidates;



// import React from "react";
// import { Link } from "react-router-dom";
// import './AllCandidates.css';

// const AllCandidates = () => {
//     return (
//         <>
//             {/* BEGIN: Content */}

//             <div className="container-fluid">

//                 <div className="app-content content">
//                     <div className="content-wrapper">
//                         <div className="content-header row">
//                             <div className="content-header-left col-md-12 col-12 mb-1">
//                                 {/* <!--<h3 className="content-header-title">Master Menu</h3>--> */}
//                                 <div className="row breadcrumbs-top align-items-center">
//                                     <div className="breadcrumb-wrapper col-auto">
//                                         <ol className="breadcrumb">
//                                             <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
//                                             <li className="breadcrumb-item active">All Candidates</li>
//                                         </ol>
//                                     </div>
//                                     <div className="col-auto ml-auto">
//                                         <div className="input-group">
//                                             <input type="text" className="form-control" placeholder="Search Candidates" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>



//                 {/* Horizontal menu */}
//                 <div className="horizontal-menu">
//                     <div id="menu_area" className="menu-area">
//                         <div className="row">
//                             <nav className="navbar navbar-light navbar-expand-lg mainmenu">
//                                 <button
//                                     className="navbar-toggler"
//                                     type="button"
//                                     data-toggle="collapse"
//                                     data-target="#navbarSupportedContent"
//                                     aria-controls="navbarSupportedContent"
//                                     aria-expanded="false"
//                                     aria-label="Toggle navigation"
//                                 >
//                                     <span className="navbar-toggler-icon"></span>
//                                 </button>

//                                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                                     <ul className="navbar-nav mr-auto">
//                                         <li className="nav-item active">
//                                             <Link className="nav-link" to="#">Active <span className="sr-only">(current)</span></Link>
//                                         </li>
//                                         <li className="nav-item"><Link className="nav-link" to="#">Inactive</Link></li>
//                                         <li className="nav-item"><Link className="nav-link" to="#">Pending</Link></li>
//                                         <li className="nav-item"><Link className="nav-link" to="#">Blocked</Link></li>
//                                         <li className="nav-item"><Link className="nav-link" to="#">Closed</Link></li>
//                                     </ul>
//                                 </div>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//                 {/* END: Horizontal menu */}

//                 {/* BEGIN - Manual table */}
//                 <div className="app-content content">
//                     <div className="content-wrapper">
//                         <div className="content-body">
//                             <section>
//                                 <div className="row">
//                                     <div className="col-md-12 col-sm-12 col-xs-12">
//                                         <div className="card">
//                                             {/* <div className="card-header">
//                                                 <div className="row">
//                                                     <div className="col-md-8 col-sm-12 col-xs-12">
//                                                         <h4 className="card-title">All Candidates</h4>
//                                                     </div>
//                                                 </div>
//                                             </div> */}

//                                             <div className="card-body">
//                                                 <div className="table-responsive">
//                                                     <table className="table table-bordered">
//                                                         <thead>
//                                                             <tr>
//                                                                 <th>ID</th>
//                                                                 <th>All Candidates</th>
//                                                                 <th>Education</th>
//                                                                 <th>Experience</th>
//                                                                 <th>Current Company</th>
//                                                                 <th>Position</th>
//                                                                 <th>Package</th>
//                                                                 <th>Status</th>
//                                                                 <th>Action</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td>1</td>
//                                                                 <td>
//                                                                     Alon Mask <br />
//                                                                     <b>customer@example.com</b><br />
//                                                                     +8801642954885
//                                                                 </td>
//                                                                 <td>Masters in Finance</td>
//                                                                 <td>9 years</td>
//                                                                 <td>The Company</td>
//                                                                 <td>Manager</td>
//                                                                 <td>$1,200.000</td>
//                                                                 <td>Active/Inactive</td>
//                                                                 <td>
//                                                                     <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
//                                                                         <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                                                             <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
//                                                                         </Link>
//                                                                         <div className="dropdown-menu" aria-labelledby="btnGroupDrop2" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
//                                                                             <Link className="dropdown-item" to="edit-customer.php">
//                                                                                 <i className="fa fa-eye"></i> Edit
//                                                                             </Link>
//                                                                             <Link className="dropdown-item" to="#">
//                                                                                 <i className="fa fa-trash"></i> Delete
//                                                                             </Link>
//                                                                         </div>
//                                                                     </div>
//                                                                 </td>
//                                                             </tr>

//                                                             <tr>
//                                                                 <td>1</td>
//                                                                 <td>
//                                                                     Alon Mask <br />
//                                                                     <b>customer@example.com</b><br />
//                                                                     +8801642954885
//                                                                 </td>
//                                                                 <td>Masters in Finance</td>
//                                                                 <td>9 years</td>
//                                                                 <td>The Company</td>
//                                                                 <td>Manager</td>
//                                                                 <td>$1,200.000</td>
//                                                                 <td>Active/Inactive</td>
//                                                                 <td>
//                                                                     <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
//                                                                         <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                                                             <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
//                                                                         </Link>
//                                                                         <div className="dropdown-menu" aria-labelledby="btnGroupDrop2" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
//                                                                             <Link className="dropdown-item" to="edit-customer.php">
//                                                                                 <i className="fa fa-eye"></i> Edit
//                                                                             </Link>
//                                                                             <Link className="dropdown-item" to="#">
//                                                                                 <i className="fa fa-trash"></i> Delete
//                                                                             </Link>
//                                                                         </div>
//                                                                     </div>
//                                                                 </td>
//                                                             </tr>


//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </section>
//                         </div>
//                     </div>
//                 </div>
//                 {/* END - Manual table */}
//             </div >
//             {/* END: Content */}
//         </>
//     );

// }

// export default AllCandidates;







{/*Begin: Data table  */ }

{/* <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-body">
                        <section>
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-md-8 col-sm-12 col-xs-12">
                                                    <h4 className="card-title">All Candidates</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-bordered" id="dtBasicExample">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>All Candidates</th>
                                                                <th>Education</th>
                                                                <th>Experience</th>
                                                                <th>Current Company</th>
                                                                <th>Position</th>
                                                                <th>Package</th>
                                                                <th>Status</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    Alon Mask <br />
                                                                    <b>customer@example.com</b><br />
                                                                    +8801642954885
                                                                </td>
                                                                <td>Masters in Finance</td>
                                                                <td>9 years</td>
                                                                <td>The Company</td>
                                                                <td>Manager</td>
                                                                <td>$1,200.000</td>
                                                                <td>Active/Inactive</td>
                                                                <td>
                                                                    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                                        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                        </Link>
                                                                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
                                                                            <Link className="dropdown-item" to="edit-customer.php">
                                                                                <i className="fa fa-eye"></i> Edit
                                                                            </Link>
                                                                            <Link className="dropdown-item" to="#">
                                                                                <i className="fa fa-trash"></i> Delete
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>



                                                            <tr>
                                                                <td>2</td>
                                                                <td>
                                                                    Alon Mask <br />
                                                                    <b>customer@example.com</b><br />
                                                                    +8801642954885
                                                                </td>
                                                                <td>Masters in Finance</td>
                                                                <td>9 years</td>
                                                                <td>The Company</td>
                                                                <td>Manager</td>
                                                                <td>$1,200.000</td>
                                                                <td>Active/Inactive</td>
                                                                <td>
                                                                    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
                                                                        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                        </Link>
                                                                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop2" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
                                                                            <Link className="dropdown-item" to="edit-customer.php">
                                                                                <i className="fa fa-eye"></i> Edit
                                                                            </Link>
                                                                            <Link className="dropdown-item" to="#">
                                                                                <i className="fa fa-trash"></i> Delete
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
                    </div>
                </div>
            </div> */}
{/* END - Data table */ }



















// import React from "react";
// import {Link} from "react-router-dom";

// import './AllCandidates.css'

// function AllCandidates() {
//     return (
//         <>
//             <div className="horizontal-menu">
//                 <div id="menu_area" className="menu-area">
//                     <div className="row">
//                         <nav className="navbar navbar-light navbar-expand-lg mainmenu">
//                             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span className="navbar-toggler-icon"></span>
//                             </button>

//                             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                                 <ul className="navbar-nav mr-auto">
//                                     <li className="active"><Link to="#">Active <span className="sr-only">(current)</span></Link></li>
//                                     <li><Link to="#">Inactive</Link></li>
//                                     <li><Link to="#">Pending</Link></li>
//                                     <li><Link to="#">Blocked</Link></li>
//                                     <li><Link to="#">Closed</Link></li>
//                                 </ul>
//                             </div>
//                         </nav>
//                     </div>
//                 </div>
//             </div>

//             <div className="app-content content">
//                 <div className="content-wrapper">

//                     <div className="content-body">
//                         <section>
//                             <div className="row">
//                                 <div className="col-md-12 col-sm-12 col-xs-12">
//                                     <div className="card">

//                                         <div className="card-header">
//                                             <div className="row">
//                                                 <div className="col-md-8 col-sm-12 col-xs-12">
//                                                     <h4 className="card-title">All - Candidates</h4>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="card-content">
//                                             <div className="card-body">
//                                                 <div className="table-responsive">
//                                                     <table className="table table-hover table-bordered" id="dtBasicExample">
//                                                         <thead>
//                                                             <tr>
//                                                                 <th>ID</th>
//                                                                 <th>Candidate </th>
//                                                                 <th>Education</th>
//                                                                 <th>Experience</th>
//                                                                 <th>Current Company</th>
//                                                                 <th>Position</th>
//                                                                 <th>Package</th>
//                                                                 <th>Status</th>
//                                                                 <th>Action</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td>1</td>
//                                                                 <td>Alon Mask <br />
//                                                                     <b>customer@example.com</b><br />
//                                                                     +8801642954885</td>
//                                                                 <td>Mastrers in Finance</td>
//                                                                 <td>9 years</td>
//                                                                 <td>The Company</td>
//                                                                 <td>Manager</td>
//                                                                 <td>$1,200.000</td>
//                                                                 <td>Active/Inactive</td>

//                                                                 <td>
//                                                                     <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
//                                                                         <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                                                             <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
//                                                                         </Link>
//                                                                         <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
//                                                                             <Link className="dropdown-item" to="edit-customer.php">
//                                                                                 <i className="fa fa-eye"></i> Edit
//                                                                             </Link>
//                                                                             <Link className="dropdown-item" to="#">
//                                                                                 <i className="fa fa-trash"></i> Delete
//                                                                             </Link>
//                                                                         </div>
//                                                                     </div>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>2</td>
//                                                                 <td>Alon Mask <br />
//                                                                     <b>customer@example.com</b><br />
//                                                                     +8801642954885</td>

//                                                                 <td>9 years</td>
//                                                                 <td>The Company</td>
//                                                                 <td>Manager</td>
//                                                                 <td>$1,200.000</td>
//                                                                 <td>Active/Inactive</td>

//                                                                 <td>
//                                                                     <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
//                                                                         <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                                                             <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
//                                                                         </Link>
//                                                                         <div className="dropdown-menu" aria-labelledby="btnGroupDrop2" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
//                                                                             <Link className="dropdown-item" to="edit-customer.php">
//                                                                                 <i className="fa fa-eye"></i> Edit
//                                                                             </Link>
//                                                                             <Link className="dropdown-item" to="#">
//                                                                                 <i className="fa fa-trash"></i> Delete
//                                                                             </Link>
//                                                                         </div>
//                                                                     </div>
//                                                                 </td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default AllCandidates;




// import React from "react";
// import { Link } from "react-router-dom";

// function AllCandidates() {
//     return (
//         <>
//             {/* BEGIN: Content*/}
//             <div className="app-content content">
//                 <div className="content-wrapper">
//                     <div className="content-header row">
//                         <div className="content-header-left col-md-6 col-12 mb-2">
//                             {/* <h3 className="content-header-title">All Candidates</h3> */}
//                             <div className="row breadcrumbs-top">
//                                 <div className="breadcrumb-wrapper col-12">
//                                     <ol className="breadcrumb">
//                                         <li className="breadcrumb-item">
//                                             <Link to="/">Home</Link>
//                                         </li>

//                                         <li className="breadcrumb-item active">All Candidates</li>
//                                     </ol>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="content-body">
//                         <section>
//                             <div className="row">
//                                 <div className="col-md-12 col-sm-12 col-xs-12">
//                                     <div className="card">
//                                         <div className="card-header">
//                                             <div className="row">
//                                                 <div className="col-md-8 col-sm-12 col-xs-12">
//                                                     <h4 className="card-title">Candidates</h4>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="card-content">
//                                             <div className="card-body">
//                                                 <div className="table-responsive">
//                                                     <table className="table table-hover table-bordered" id="dtBasicExample">
//                                                         <thead>
//                                                             <tr>
//                                                                 <th>#</th>
//                                                                 <th>Name</th>
//                                                                 <th>Email Address</th>
//                                                                 <th>Phone</th>
//                                                                 <th>Package</th>
//                                                                 <th>Wallet Balance</th>
//                                                                 <th>Action</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td>1</td>
//                                                                 <td>Alon Mask</td>
//                                                                 <td>customer@example.com</td>
//                                                                 <td>+8801642954885</td>

//                                                                 <td>Package</td>
//                                                                 <td>$2,073.000</td>

//                                                                 <td>
//                                                                     <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
//                                                                         <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                                                             <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
//                                                                         </Link>
//                                                                         <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
//                                                                             <Link className="dropdown-item" to="edit-customer.php">
//                                                                                 <i className="fa fa-eye"></i> Edit
//                                                                             </Link>
//                                                                             <Link className="dropdown-item" to="#">
//                                                                                 <i className="fa fa-trash"></i> Delete
//                                                                             </Link>
//                                                                         </div>
//                                                                     </div>
//                                                                 </td>
//                                                             </tr>

//                                                             <tr>
//                                                                 <td>2</td>
//                                                                 <td>Alon Mask</td>
//                                                                 <td>customer@example.com</td>
//                                                                 <td>+8801642954885</td>
//                                                                 <td>Package</td>
//                                                                 <td>$1,200.000</td>

//                                                                 <td>
//                                                                     <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
//                                                                         <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                                                             <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
//                                                                         </Link>
//                                                                         <div className="dropdown-menu" aria-labelledby="btnGroupDrop2" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
//                                                                             <Link className="dropdown-item" to="edit-customer.php">
//                                                                                 <i className="fa fa-eye"></i> Edit
//                                                                             </Link>
//                                                                             <Link className="dropdown-item" to="#">
//                                                                                 <i className="fa fa-trash"></i> Delete
//                                                                             </Link>
//                                                                         </div>
//                                                                     </div>
//                                                                 </td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                     </div>
//                 </div>
//             </div>
//             {/* END: Content*/}
//         </>

//     );
// }

// export default AllCandidates;




{/* <tr>
<td>3</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr>

<tr>
<td>4</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr>

<tr>
<td>5</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr>

<tr>
<td>6</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr>

<tr>
<td>7</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr>

<tr>
<td>8</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr>


<tr>
<td>9</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr>



<tr>
<td>10</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr>





<tr>
<td>11</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr>

<tr>
<td>12</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr>


<tr>
<td>13</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr>



<tr>
<td>14</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr>


<tr>
<td>15</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr>

<tr>
<td>16</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr>

<tr>
<td>17</td>
<td>
    Alon Mask <br />
    <b>customer@example.com</b><br />
    +8801642954885
</td>
<td>Masters in Finance</td>
<td>9 years</td>
<td>The Company</td>
<td>Manager</td>
<td>$1,200.000</td>
<td>Active/Inactive</td>
<td>
    <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        <Link className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
            <Link className="dropdown-item" to="edit-customer.php">
                <i className="fa fa-eye"></i> Edit
            </Link>
            <Link className="dropdown-item" to="#">
                <i className="fa fa-trash"></i> Delete
            </Link>
        </div>
    </div>
</td>
</tr> */}