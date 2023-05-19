import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Graph from './Graphs/bargraph';
import PieChart from './Graphs/piechart';


function Dashboard() {
  return (
    <>
      {/* <!-- BEGIN: Content--> */}

      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-header row">
          </div>
          <div className="content-body">

            {/* <!--Today Summary --> */}
            <div className="summary">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">All Candidates </h4>
                  <div className="heading-elements">
                    <ul className="list-inline mb-0">
                      <li><Link data-action="collapse"><i className="ft-minus"></i></Link></li>
                      <li><Link data-action="reload"><i className="ft-rotate-cw"></i></Link></li>
                      <li><Link data-action="expand"><i className="ft-maximize"></i></Link></li>
                      <li><Link data-action="close"><i className="ft-x"></i></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="card-content collapse show">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                        <div className="card m-bottom pull-up">
                          <div className="card-content border-box">
                            <div className="card-body">
                              <div className="media d-flex">
                                <div className="media-body text-left">
                                  <h5 className="text-muted text-bold-500">Active</h5>
                                  <h3 className="text-bold-600">122k</h3>
                                </div>
                                <div className="align-self-center">
                                  <i className="fa fa-money font-large-2 success" aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                        <div className="card m-bottom pull-up">
                          <div className="card-content border-box">
                            <div className="card-body">
                              <div className="media d-flex">

                                <div className="media-body text-left">
                                  <h5 className="text-muted text-bold-500">Inactive</h5>
                                  <h3 className="text-bold-600">344k</h3>
                                </div>

                                <div className="align-self-center">
                                  <i className="fa fa-money font-large-2 warning" aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                        <div className="card m-bottom pull-up">
                          <div className="card-content border-box">
                            <div className="card-body">
                              <div className="media d-flex">
                                <div className="media-body text-left">
                                  <h5 className="text-muted text-bold-500">Pending</h5>
                                  <h3 className="text-bold-600">33.5K</h3>
                                </div>
                                <div className="align-self-center">
                                  <i className="fa fa-calculator font-large-2 info" aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                        <div className="card m-bottom pull-up">
                          <div className="card-content border-box">
                            <div className="card-body">
                              <div className="media d-flex">

                                <div className="media-body text-left">
                                  <h5 className="text-muted text-bold-500">Closed</h5>
                                  <h3 className="text-bold-600">4000k</h3>
                                </div>
                                <div className="align-self-center">
                                  <i className="fa fa-exchange font-large-2 danger" aria-hidden="true"></i>
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


            {/* All companies */}

            <div className="summary">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">All Companies </h4>
                  <div className="heading-elements">
                    <ul className="list-inline mb-0">
                      <li><Link data-action="collapse"><i className="ft-minus"></i></Link></li>
                      <li><Link data-action="reload"><i className="ft-rotate-cw"></i></Link></li>
                      <li><Link data-action="expand"><i className="ft-maximize"></i></Link></li>
                      <li><Link data-action="close"><i className="ft-x"></i></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="card-content collapse show">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                        <div className="card m-bottom pull-up">
                          <div className="card-content border-box">
                            <div className="card-body">
                              <div className="media d-flex">
                                <div className="media-body text-left">
                                  <h5 className="text-muted text-bold-500">Active</h5>
                                  <h3 className="text-bold-600">12k</h3>
                                </div>
                                <div className="align-self-center">
                                  <i className="fa fa-money font-large-2 success" aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                        <div className="card m-bottom pull-up">
                          <div className="card-content border-box">
                            <div className="card-body">
                              <div className="media d-flex">

                                <div className="media-body text-left">
                                  <h5 className="text-muted text-bold-500">Inactive</h5>
                                  <h3 className="text-bold-600">34k</h3>
                                </div>

                                <div className="align-self-center">
                                  <i className="fa fa-money font-large-2 warning" aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                        <div className="card m-bottom pull-up">
                          <div className="card-content border-box">
                            <div className="card-body">
                              <div className="media d-flex">
                                <div className="media-body text-left">
                                  <h5 className="text-muted text-bold-500">Pending</h5>
                                  <h3 className="text-bold-600">3.5K</h3>
                                </div>
                                <div className="align-self-center">
                                  <i className="fa fa-calculator font-large-2 info" aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                        <div className="card m-bottom pull-up">
                          <div className="card-content border-box">
                            <div className="card-body">
                              <div className="media d-flex">

                                <div className="media-body text-left">
                                  <h5 className="text-muted text-bold-500">Closed</h5>
                                  <h3 className="text-bold-600">400k</h3>
                                </div>
                                <div className="align-self-center">
                                  <i className="fa fa-exchange font-large-2 danger" aria-hidden="true"></i>
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
            {/* <!--end Today Summary --> */}



            {/* <!-- Modern POS--> */}
            {/* <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Recent Purchase Order Expected Delivery </h4>
                    <div className="heading-elements">
                      <ul className="list-inline mb-0">
                        <li><Link data-action="collapse"><i className="ft-minus"></i></Link></li>
                        <li><Link data-action="reload"><i className="ft-rotate-cw"></i></Link></li>
                        <li><Link data-action="expand"><i className="ft-maximize"></i></Link></li>
                        <li><Link data-action="close"><i className="ft-x"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content collapse show">
                    <div className="card-body dashboard-branch-target scroll-bar">
                      <canvas id="canvas"></canvas>
                    </div>
                  </div>
                </div>
              </div> */}


            <div className="row">
              <div className="col-md">
                <Graph />
              </div>
              <div className="col-md">
                <PieChart />
              </div>
            </div>






            {/* <!--Modern POS--> */}


          </div>
          {/* <!--end 2nd row--> */}



          {/* <!-- 3rd row--> */}
          <div className='row'>

            {/* <!--Notifications--> */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Notifications </h4>

                  <div className="heading-elements">
                    <ul className="list-inline mb-0">
                      <li><Link data-action="collapse"><i className="ft-minus"></i></Link></li>
                      <li><Link data-action="reload"><i className="ft-rotate-cw"></i></Link></li>
                      <li><Link data-action="expand"><i className="ft-maximize"></i></Link></li>
                      <li><Link data-action="close"><i className="ft-x"></i></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="card-content collapse show">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-sm table-bordered w-100 text-center table-text">
                        <thead>
                          <tr className="bg-secondary text-white bg-dark-secondary">
                            <th scope="col">SL</th>
                            <th scope="col">Message</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td className="text-left">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td className="text-left">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td className="text-left">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td className="text-left">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td className="text-left">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td className="text-left">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* <!--End Notifications--> */}

            {/* <!--Profit / Loss of Last 10 Days--> */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Profit / Loss of Last 10 Days</h4>
                  <div className="heading-elements">
                    <ul className="list-inline mb-0">
                      <li><Link data-action="collapse"><i className="ft-minus"></i></Link></li>
                      <li><Link data-action="reload"><i className="ft-rotate-cw"></i></Link></li>
                      <li><Link data-action="expand"><i className="ft-maximize"></i></Link></li>
                      <li><Link data-action="close"><i className="ft-x"></i></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="card-content collapse show">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-sm table-bordered w-100 text-center table-text">
                        <thead>
                          <tr className="bg-secondary text-white bg-dark-secondary">
                            <th scope="col">SL</th>
                            <th scope="col">Date</th>
                            <th scope="col">Income</th>
                            <th scope="col">Expense</th>
                            <th scope="col">Profit/Loss</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>2023 February, 05</td>
                            <td>10,944.80</td>
                            <td>0.00</td>
                            <td>10,944.80</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>2023 February, 06</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>2023 February, 07</td>
                            <td>24,500,014,384.55</td>
                            <td>0.00</td>
                            <td>24,500,014,384.55</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>2023 February, 08</td>
                            <td>1,788.00</td>
                            <td>0.00</td>
                            <td>1,788.00</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>2023 February, 09</td>
                            <td>24,500,000,290.25</td>
                            <td>0.00</td>
                            <td>24,500,000,290.25</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>2023 February, 10</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>2023 February, 11</td>
                            <td>120.00</td>
                            <td>0.00</td>
                            <td>120.00</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>2023 February, 12</td>
                            <td>24,500,007,189.85</td>
                            <td>0.00</td>
                            <td>24,500,007,189.85</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-right">
                      <Link to="#" className="btn btn-sm btn-secondary">View All</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End Profit / Loss of Last 10 Days--> */}

          </div>
          {/* <!--end 3rd row--> */}

          {/* <!-- 8th row--> */}



          {/* <!--Recent Sales Order Expected Shipment--> */}


          {/* <!--Recent Purchase Order Expected Delivery-->*/}

          {/* <!--end 8th row--> */}





          {/* <!--9th row --> */}
          {/* <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Recent Purchase Order Expected Delivery </h4>
                    <div className="heading-elements">
                      <ul className="list-inline mb-0">
                        <li><Link data-action="collapse"><i className="ft-minus"></i></Link></li>
                        <li><Link data-action="reload"><i className="ft-rotate-cw"></i></Link></li>
                        <li><Link data-action="expand"><i className="ft-maximize"></i></Link></li>
                        <li><Link data-action="close"><i className="ft-x"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content collapse show">
                    <div className="card-body dashboard-branch-target scroll-bar">
                      <canvas id="canvas"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          {/* <!--end 9th row --> */}
        </div>

        {/* <!--  Branches Target (This Month)--> */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Branches Target (This Month) </h4>
              <div className="heading-elements">
                <ul className="list-inline mb-0">
                  <li><Link data-action="collapse"><i className="ft-minus"></i></Link></li>
                  <li><Link data-action="reload"><i className="ft-rotate-cw"></i></Link></li>
                  <li><Link data-action="expand"><i className="ft-maximize"></i></Link></li>
                  <li><Link data-action="close"><i className="ft-x"></i></Link></li>
                </ul>
              </div>
            </div>
            <div className="card-content collapse show">
              <div className="card-body dashboard-branch-target scroll-bar">
                <h4 className="small font-weight-bold">Main Branch <span className="float-right">8,166,673.26%</span></h4>
                <div className="progress mb-2">
                  <div role="progressbar" aria-valuenow="8166673.26285" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-striped bg-info dwp-8166673">8,166,673.26% Complete</div>
                </div>
                <h4 className="small font-weight-bold">Branch Two <span className="float-right">0.00%</span></h4>
                <div className="progress mb-2">
                  <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-striped bg-danger w10p">0.00% Complete</div>
                </div>
                <h4 className="small font-weight-bold">Branch Three <span className="float-right">0.00%</span></h4>
                <div className="progress mb-2">
                  <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-striped bg-danger w10p">0.00% Complete</div>
                </div>
                <h4 className="small font-weight-bold">BGF <span className="float-right">0.00%</span></h4>
                <div className="progress mb-2">
                  <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-striped bg-danger w10p">0.00% Complete</div>
                </div>
                <h4 className="small font-weight-bold">Conteen <span className="float-right">0.00%</span></h4>
                <div className="progress mb-2">
                  <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-striped bg-danger w10p">0.00% Complete</div>
                </div>
                <h4 className="small font-weight-bold">Cnriya <span className="float-right">0.00%</span></h4>
                <div className="progress mb-2">
                  <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-striped bg-danger w10p">0.00% Complete</div>
                </div>
                <h4 className="small font-weight-bold">SuperMart-Gurgaon <span className="float-right">0.00%</span></h4>
                <div className="progress mb-2">
                  <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-striped bg-danger w10p">0.00% Complete</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--End Branches Target (This Month)--> */}
      </div>
      {/* </div > */}
      {/* <!-- END: Content--> */}


    </>
  )
}

export default Dashboard;
