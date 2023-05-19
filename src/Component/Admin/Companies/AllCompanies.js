import React, { useState } from "react";
import { Link } from "react-router-dom";
import './AllCompanies.css';

const AllCandidates = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    // Sample data for demonstration
    const candidatesData = [
        {
            id: 1,
            company_name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",
            position: "Junior Developer",
            package: "$1,200.000",
            balance: "0",
            status: "Active/Inactive"
        },
        {
            id: 2,
            company_name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",

            position: "Senior Developer",
            package: "$1,200.000",
            balance: "0",
            status: "Active/Inactive"
        },
        {
            id: 3,
            company_name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",

            position: "Junior Developer",
            package: "$1,200.000",
            balance: "0",
            status: "Active/Inactive"
        },
        {
            id: 4,
            company_name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",

            position: "Senior Developer",
            package: "$1,200.000",
            balance: "0",
            status: "Active/Inactive"
        },
        {
            id: 5,
            company_name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",

            position: "Junior Developer",
            package: "$1,200.000",
            balance: "0",
            status: "Active/Inactive"
        },
        {
            id: 6,
            company_name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",

            position: "Senior Developer",
            package: "$1,200.000",
            balance: "0",
            status: "Active/Inactive"
        },
        {
            id: 7,
            company_name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",

            position: "Junior Developer",
            package: "$1,200.000",
            balance: "0",
            status: "Active/Inactive"
        },
        {
            id: 8,
            company_name: "Alon Mask",
            email: "customer@example.com",
            phone: "+8801642954885",
            education: "Masters in Finance",
            experience: "9 years",
            position: "Senior Developer",
            package: "$1,200.000",
            balance: "0",
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
                                            <li className="breadcrumb-item active">Companies</li>
                                        </ol>
                                    </div>
                                    <div className="col-auto ml-auto">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Companies" />
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
                                        <li className="active"><Link to="#">All Companies <span className="sr-only">(current)</span></Link></li>
                                        <li><Link to="#">Active</Link></li>
                                        <li><Link to="#">Inactive</Link></li>
                                        <li><Link to="#">Free</Link></li>
                                        <li><Link to="#">Suscribed</Link></li>
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
                                                                <th>Company Name</th>
                                                                <th>Email Address</th>
                                                                <th>Phone</th>
                                                                <th>Position</th>
                                                                <th>Package</th>
                                                                <th>Statuse</th>
                                                                <th>Wallet Balance</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {currentRecords.map((company) => (
                                                                <tr key={company.id}>
                                                                    <td>{company.id}</td>
                                                                    <td>{company.company_name}</td>
                                                                    <td>{company.email}</td>
                                                                    <td>{company.phone}</td>
                                                                    {/* <td>{company.education}</td> */}
                                                                    {/* <td>{company.experience}</td> */}
                                                                    {/* <td>{company.company}</td> */}
                                                                    <td>{company.position}</td>
                                                                    <td>{company.package}</td>
                                                                    <td>{company.status}</td>
                                                                    <td>{company.balance}</td>
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
                            {/* company Records */}
                            {/* <div className="company-records">
                                {currentRecords.map(company => (
                                    <div className="company-card" key={company.id}>
                                        <h4>{company.name}</h4>
                                        <p>Email: {company.email}</p>
                                        <p>Phone: {company.phone}</p>

                                    </div>
                                ))}
                            </div> */}
                            {/* END: company Records */}

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
// import './AllCompanies.css'

// function AllCompanies() {
//     return (
//         <>
        //     {/* BEGIN: Content*/}
        //     {/* Horizontal menu */}
        //     <div className="horizontal-menu">
        //         <div id="menu_area" className="menu-area">
        //             <div className="row">
        //                 <nav className="navbar navbar-light navbar-expand-lg mainmenu">
        //                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                         <span className="navbar-toggler-icon"></span>
        //                     </button>

        //                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                         <ul className="navbar-nav mr-auto">
        //                             <li className="active"><Link to="#">Active <span className="sr-only">(current)</span></Link></li>
        //                             <li><Link to="#">Inactive</Link></li>
        //                             <li><Link to="#">Free</Link></li>
        //                             <li><Link to="#">Suscribed</Link></li>
        //                             <li><Link to="#">Pending</Link></li>
        //                             <li><Link to="#">Blocked</Link></li>
        //                             <li><Link to="#">Closed</Link></li>
        //                         </ul>
        //                     </div>
        //                 </nav>
        //             </div>
        //         </div>
        //     </div>
        //     {/*END- Horizontal menu */}
        //     <div className="app-content content">
        //         <div className="content-wrapper">
        //             {/* <div className="content-header row">
        //                 <div className="content-header-left col-md-6 col-12 mb-2">
        //                     <h3 className="content-header-title">All Companies</h3>
        //                     <div className="row breadcrumbs-top">
        //                         <div className="breadcrumb-wrapper col-12">
        //                             <ol className="breadcrumb">
        //                                 <li className="breadcrumb-item">
        //                                     <Link to="/">Home</Link>
        //                                 </li>

        //                                 <li className="breadcrumb-item active">All Companies</li>
        //                             </ol>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div> */}

        //             <div className="content-body">
        //                 <section>
        //                     <div className="row">
        //                         <div className="col-md-12 col-sm-12 col-xs-12">
        //                             <div className="card">
        //                                 <div className="card-header">
        //                                     <div className="row">
        //                                         <div className="col-md-8 col-sm-12 col-xs-12">
        //                                             <h4 className="card-title">All Companies</h4>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                                 <div className="card-content">
        //                                     <div className="card-body">
        //                                         <div className="table-responsive">
        //                                             <table className="table table-hover table-bordered" id="dtBasicExample">
        //                                                 <thead>
        //                                                     <tr>
        //                                                         <th>ID</th>
        //                                                         <th>Company Name</th>
        //                                                         <th>Email Address</th>
        //                                                         <th>Phone</th>
        //                                                         <th>Position</th>
        //                                                         <th>Package</th>
        //                                                         <th>Wallet Balance</th>
        //                                                         <th>Action</th>
        //                                                     </tr>
        //                                                 </thead>
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>1</td>
        //                                                         <td>Alon Mask</td>
        //                                                         <td>customer@example.com</td>
        //                                                         <td>+8801642954885</td>
        //                                                         <td>Senior Developer</td>
        //                                                         <td>$2,073.000</td>
        //                                                         <td>0</td>

        //                                                         <td>
        //                                                             <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        //                                                                 <a className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                                                                     <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        //                                                                 </a>
        //                                                                 <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
        //                                                                     <a className="dropdown-item" href="edit-customer.php">
        //                                                                         <i className="fa fa-eye"></i> Edit
        //                                                                     </a>
        //                                                                     <a className="dropdown-item" href="#">
        //                                                                         <i className="fa fa-trash"></i> Delete
        //                                                                     </a>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>

        //                                                     <tr>
        //                                                         <td>2</td>
        //                                                         <td>Alon Mask</td>
        //                                                         <td>customer@example.com</td>
        //                                                         <td>+8801642954885</td>
        //                                                         <td>Juniour Developer</td>
        //                                                         <td>$1,200.000</td>
        //                                                         <td>0</td>

        //                                                         <td>
        //                                                             <div className="fontsize" role="group" aria-label="Button group with nested dropdown">
        //                                                                 <a className="dropdown-menu-right px-2 mb-1" id="btnGroupDrop2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                                                                     <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        //                                                                 </a>
        //                                                                 <div className="dropdown-menu" aria-labelledby="btnGroupDrop2" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(883px, 98px, 0px)" }}>
        //                                                                     <a className="dropdown-item" href="edit-customer.php">
        //                                                                         <i className="fa fa-eye"></i> Edit
        //                                                                     </a>
        //                                                                     <a className="dropdown-item" href="#">
        //                                                                         <i className="fa fa-trash"></i> Delete
        //                                                                     </a>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </section>
        //             </div>
        //         </div>
        //     </div>
        //     {/* END: Content*/}
        // </>

//     );
// }

// export default AllCompanies;
