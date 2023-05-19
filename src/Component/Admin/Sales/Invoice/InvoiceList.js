import React from "react";
// import { DatePicker } from "antd";
// import moment from 'moment';
// import { Link } from "react-router-dom";
// import '../../../../bootstrap.min.css'
// import '../../../../../node_modules/antd/dist/antd.css';
// import 'antd/dist/antd.css';
// import './AllOrders.css';

// import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const { RangePicker } = DatePicker;

function InvoiceList() {
//   const [dates, setDates] = useState([])
//   console.log(dates);

  return (
    <>
    <div className="app-content content">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-12 mb-2">
                <h3 className="content-header-title">Invoice List</h3>

                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.php">Home</a>
                      </li>
                      <li className="breadcrumb-item"><a href="#">Invoice</a>
                      </li>
                      <li className="breadcrumb-item active">Invoice List
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

            </div>
            <div className="content-body">

            <section>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="col-md-6 col-sm12 col-xs-12">
                          <h4 className="card-title">Invoice List</h4>
                      </div>

                    </div>
                    <div className="card-content collapse show">
                      <div className="card-body card-dashboard">
                        <div className="table-responsive">
                          <table className="table table-hover table-bordered" id="dtBasicExample">
                            <thead>
                              <tr>
                                <th> #</th>
                                <th>Date</th>
                                <th>Invoice </th>
                                <th>Order No</th>
                                <th>Customer Name</th>
                                <th>Amount</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1. </td>
                                <td> 12/11/2017 </td>
                                <td className="align-middle text-bold-600 text-blue">
                                  <a href="#">INV-001001</a>
                                </td>
                                <td>
                                    PO-005201
                                </td>
                                <td>Elizabeth Washington </td>
                                
                                <td>$ 1200.00  </td>
                                <td>
                                 <div className="fontsize" role="group" aria-label="Button group with nested dropdown">

                                  <a className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                  <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">


                                  <a className="dropdown-item" href="#"><i className="fa fa-edit"></i> View</a>
                                  
                                  <a className="dropdown-item" href="#"><i className="fa fa-trash"></i> Delete</a></div>
                                  </div></td>
                                </tr>

                               <tr>
                                <td>2. </td>
                                <td> 12/11/2017 </td>
                                <td className="align-middle text-bold-600 text-blue">
                                   <a href="#">INV-001002</a>
                                </td>
                                <td>
                                    PO-005201
                                </td>
                                <td>Elizabeth Washington </td>
                                <td>$ 1200.00  </td>
                                <td>
                                 <div className="fontsize" role="group" aria-label="Button group with nested dropdown">

                                  <a className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                  <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">


                                  <a className="dropdown-item" href="#"><i className="fa fa-edit"></i> View</a>
                                  
                                  <a className="dropdown-item" href="#"><i className="fa fa-trash"></i> Delete</a></div>
                                  </div></td>
                                </tr>

                               <tr>
                                <td>3. </td>
                                <td> 12/11/2017 </td>
                                <td className="align-middle text-bold-600 text-blue">
                                  <a href="#">INV-001003</a>
                                </td>
                                <td>
                                    PO-005201
                                </td>
                                <td>Elizabeth Washington </td>
                                <td>$ 1200.00  </td>
                             
                                <td>
                                 <div className="fontsize" role="group" aria-label="Button group with nested dropdown">

                                  <a className="dropdown-menu-right  px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                  <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">

                                  <a className="dropdown-item" href="#"><i className="fa fa-edit"></i> View</a>
                                  <a className="dropdown-item" href="#"><i className="fa fa-trash"></i> Delete</a></div>
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
            </section>

            </div>
          </div>
        </div>
      
    </>
  )
}

export default InvoiceList;