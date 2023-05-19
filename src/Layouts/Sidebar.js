import React from 'react';
import { Link } from "react-router-dom";

function Sidebar() {
  return (

    <>
      <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
        <div className="main-menu-content">
          <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">

            {/* 
            <!-- DASHBOARD --> */}

            <li className="active mbottom-5">
              <Link to="/dashboard">
                <i className="fa fa-tachometer icon-show-collapse" aria-hidden="true"></i>
                <span className="menu-title" data-i18n="PEOPLE">Dashboard</span>
              </Link>
              <ul className="menu-content"></ul>
            </li>
            {/* Other menu items */}
            {/* <li className="nav-item active" style={{ marginBottom: '5px' }}>
              <a href="#">
                <i className="fa fa-tachometer icon-show-collapse" aria-hidden="true"></i>
                <span className="menu-title title-dropdown" data-i18n="Dashboard">DASHBOARD</span>
              </a>
              <ul className="menu-content">
                <li><a className="menu-item" href="#"><span>Private Dashboard</span></a></li>
                <li><a className="menu-item" href="#"><span>Advanced Dashboard</span></a></li>
              </ul>
            </li> */}

            {/*  Dashboard*/}



            {/* <li className="active mbottom-5" ><Link to="/dashboard"><span className="menu-title " data-i18n="PEOPLE">Dashboard</span></Link>
              <ul className="menu-content"></ul>
            </li>
            <li class="nav-item active" style="margin-bottom:5px"><a href="#"><i class="fa fa-tachometer icon-show-collapse" aria-hidden="true"></i><span class="menu-title title-dropdown" data-i18n="Dashboard">DASHBOARD</span></a></li> */}
            {/* <li className="nav-item has-sub" ><Link to="/" target="_blank"><span className="menu-title" data-i18n="Vendor">All Candidate</span></Link>
                  <ul className="menu-content">
                    <li><Link className="menu-item" to="/"><span>Active</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Inactive</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Pending</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Closed</span></Link>
                    </li>
                  </ul>
                </li> */}
            {/* </ul> */}


            {/* <ul className="menu-content">
                <li className="nav-item has-sub" ><Link to="/" target="_blank"><span className="menu-title" data-i18n="Vendor">All Companies</span></Link>
                  <ul className="menu-content">
                    <li><Link className="menu-item" to="/"><span>Active</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Inactive</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Pending</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Closed</span></Link>
                    </li>
                  </ul>
                </li>
              </ul>  */}

            {/* <ul className="menu-content">
                <li className="nav-item has-sub" ><Link to="/" target="_blank"><span className="menu-title" data-i18n="Vendor">Suscribed</span></Link>
                  <ul className="menu-content">
                    <li><Link className="menu-item" to="/"><span>Free</span></Link>
                        <ul className='menu-content'>
                            <li><Link className="menu-item" to="/"><span>Numbers</span></Link>
                            </li>
                            <li><Link className="menu-item" to="/"><span>Bar Charts</span></Link>
                            </li>
                        </ul>
                    </li>
                  </ul>
                </li>
              </ul> */}

            {/* 
              <ul className="menu-content">
                <li className="nav-item has-sub" ><Link to=""><span className="menu-title" data-i18n="Vendor">Total Income</span></Link>
                  <ul className="menu-content">
                    <li><Link className="menu-item" to="/"><span>Month</span></Link>
                        <ul className='menu-content'>
                            <li><Link className="menu-item" to="/"><span>Numbers</span></Link>
                            </li>
                            <li><Link className="menu-item" to="/"><span>Bar Charts</span></Link>
                            </li>
                        </ul>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Day</span></Link>
                        <ul className='menu-content'>
                            <li><Link className="menu-item" to="/"><span>Numbers</span></Link>
                            </li>
                            <li><Link className="menu-item" to="/"><span>Bar Charts</span></Link>
                            </li>
                        </ul>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Year</span></Link>
                        <ul className='menu-content'>
                            <li><Link className="menu-item" to="/"><span>Numbers</span></Link>
                            </li>
                            <li><Link className="menu-item" to="/"><span>Bar Charts</span></Link>
                            </li>
                        </ul>
                    </li>
                  </ul>
                </li>
              </ul> */}
            {/* </li> */}

            {/* End Dashboard */}

            {/* Candidates */}

            <li className="active mbottom-5" ><Link to="/allcandidates"><i className="fa fa-user icon-show-collapse" aria-hidden="true"></i><span className="menu-title title-dropdown">Candidates</span></Link>
              <ul className="menu-content">
                {/* <li><Link className="menu-item" to="/allcandidates"><span>All </span></Link>
                </li> */}
                {/* <li><Link className="menu-item" to="/"><span>Active</span></Link>
                </li>
                <li><Link className="menu-item" to="/"><span>Inactive</span></Link>
                </li>
                <li><Link className="menu-item" to="/"><span>Pending</span></Link>
                </li>
                <li><Link className="menu-item" to="/"><span>Blocked</span></Link>
                </li>
                <li><Link className="menu-item" to="/"><span>Closed</span></Link>
                </li> */}
              </ul>
            </li>
            {/* End Candidates */}

            {/* Companies */}

            <li className="active mbottom-5" ><Link to="/allcompanies"> <i className="fa fa-building-o icon-show-collapse" aria-hidden="true"></i> <span className="menu-title title-dropdown" data-i18n="PEOPLE">Companies</span></Link>
              <ul className="menu-content">
                {/* <li><Link className="menu-item" to="/allcompanies"><span>All </span></Link>
                </li> */}
                {/* <li><Link className="menu-item" to="/"><span>Active</span></Link>
                </li>
                <li><Link className="menu-item" to="/"><span>Free</span></Link>
                </li>
                <li><Link className="menu-item" to="/"><span>Suscribed</span></Link>
                </li>
                <li><Link className="menu-item" to="/"><span>Inactive</span></Link>
                </li>
                <li><Link className="menu-item" to="/"><span>Pending</span></Link>
                </li>
                <li><Link className="menu-item" to="/"><span>Blocked</span></Link>
                </li>
                <li><Link className="menu-item" to="/"><span>Closed</span></Link>
                </li> */}
              </ul>
            </li>
            {/* End Companies */}

            {/* <!-- start Human Resurces -->  */}
            <li className="active has-sub mbottom-5" ><Link to="/"> <i className="fa fa-user-o icon-show-collapse" aria-hidden="true"></i> <span className="menu-title title-dropdown" data-i18n="">HR</span></Link>
              <ul className="menu-content">
                <li><Link className="menu-item" to="/hr-employees"><span>Employee</span></Link>
                </li>
                <li><Link className="menu-item" to="/"><span>Permissions</span></Link>
                </li>
              </ul>
            </li>

            {/* <!-- End People -->

            
            
            {/* <!-- End Human Resources --> */}



            {/* <!-- Start Misc -->  */}
            <li className="active has-sub mbottom-5" ><Link to="/"> <i className="fa fa-th-large icon-show-collapse" aria-hidden="true"></i> <span className="menu-title title-dropdown" data-i18n="MISCELLANEOUS">MISCELLANEOUS </span></Link>
              <ul className="menu-content">
                <li><Link className="menu-item" to="/sticky-notes"><span data-i18n="TODO">Sticky Notes</span></Link>
                </li>
                <li><Link className="menu-item" to="/misc-notifications"><span data-i18n="Notifications">Notifications</span></Link>
                </li>
                <li><Link className="menu-item" to="/Reminder"><span data-i18n="Reminder">Reminder</span></Link>
                </li>
                {/* <li><Link className="menu-item" to="/Notification"><span data-i18n="Notification">Download Center</span></Link>
                </li>
                <li><Link className="menu-item" to="/Reminder"><span data-i18n="Reminder">Events</span></Link>
                </li> */}
                <li><Link className="menu-item" to="/"><span data-i18n="Product Quntity Alerts">Knowledge Base</span></Link>
                </li>
              </ul>
            </li>

            {/* <!-- End Misc --> */}

            {/* <!-- Start IT & Help Desk --> */}
            {/* <li className="active has-sub mbottom-5" ><Link to="/"><span className="menu-title title-dropdown" data-i18n="MISCELLANEOUS">IT & HELPDESK </span></Link>
              <ul className="menu-content">
                <li><Link className="menu-item" to="/"><span data-i18n="Notification">Dashboard</span></Link>
                </li>
                <li className=" nav-item"><Link to="/"><span className="menu-title" data-i18n="Vaidation">Vaidation Token</span></Link>
                </li>
                <li><Link className="menu-item" to="/"><span data-i18n="Notification">Users</span></Link>
                </li>
                <li className="has-sub"><Link className="menu-item" to="/"><span data-i18n="Notification">Global Tickets</span></Link>
                  <ul className="menu-content">
                    <li><Link className="menu-item" to="/"><span>Add Ticket</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>All Tickets</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Recent Tickets</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>active  Tickets</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Closed Tickets</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>On-Hold Tickets</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Overdue Tickets</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Assigned Tickets</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Suspended Tickets</span></Link>
                    </li>
                  </ul>
                </li>
                <li className="has-sub"><Link className="menu-item" to="/"><span data-i18n="Notification">Self Assigned Tickets</span></Link>
                  <ul className="menu-content">
                    <li><Link className="menu-item" to="/"><span>Self Assigned Tickets</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>My Assigned Tickets</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Suspend Tickets</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Closed Tickets</span></Link>
                    </li>
                  </ul>
                </li>
                <li><Link className="menu-item" to="/Reminder"><span data-i18n="Reminder">Trashed Tickets</span></Link>
                </li>
                <li><Link className="menu-item" to="/Reminder"><span data-i18n="Reminder">Chat</span></Link>
                </li>
                <li><Link className="menu-item" to="/Reminder"><span data-i18n="Reminder">Call Support</span></Link>
                </li>
                <li><Link className="menu-item" to="/Notification"><span data-i18n="Notification">License Checker</span></Link>
                </li>
                <li><Link className="menu-item" to="/Notification"><span data-i18n="Notification">Notification</span></Link>
                </li>
                <li><Link className="menu-item" to="/Notification"><span data-i18n="Notification">Emails</span></Link>
                </li>
                <li><Link className="menu-item" to="/Notification"><span data-i18n="Notification">Announcement</span></Link>
                </li>
                <li className="has-sub"><Link className="menu-item" to="/Notification"><span data-i18n="Notification">Settings</span></Link>
                  <ul className="menu-content">
                    <li><Link className="menu-item" to="/"><span>Canned Response</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Categories</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Departments</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Support Hours</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Ticket Form</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Call Support Form</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Email Setting</span></Link>
                    </li>
                    <li><Link className="menu-item" to="/"><span>Email Notification Setting</span></Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}

            {/* <!-- End IT & Help Desk --> */}

            {/* Reporsts */}

            <li className="active has-sub mbottom-5"><Link to="/"> <i className="fa fa-file-o icon-show-collapse" aria-hidden="true"></i> <span className="menu-title">REPORTS</span></Link>
              <ul className="menu-content">
                <ul className="menu-content">
                  <li className="menu-item" ><Link to="/candidate-report" ><span className="menu-title" data-i18n="Vendor">Candidates report</span></Link>
                  </li>
                  {/* <li className="nav-item has-sub" ><Link to="/" target="_blank"><span className="menu-title" data-i18n="Vendor">Candidates report</span></Link>
                    <ul className="menu-content">
                      <li><Link className="menu-item" to="/"><span>Location</span></Link></li>
                      <li><Link className="menu-item" to="/"><span>Skill</span></Link></li>
                      <li><Link className="menu-item" to="/"><span>Experience</span></Link></li>

                    </ul>
                  </li> */}
                  <li className="menu-item" ><Link to="/company-report"  ><span className="menu-title" data-i18n="Vendor">Company report</span></Link>
                  </li>
                  <li><Link className="menu-item" to="/income-report"><span>Income report</span></Link></li>

                  {/* <li className="nav-item has-sub" ><Link to="/" target="_blank"><span className="menu-title" data-i18n="Vendor">Company report</span></Link>
                    <ul className="menu-content">
                      <li><Link className="menu-item" to="/"><span>Location</span></Link></li>
                      <li><Link className="menu-item" to="/"><span>Functions</span></Link></li>
                      <li><Link className="menu-item" to="/"><span>Active</span></Link></li>
                      <li><Link className="menu-item" to="/"><span>Inactive</span></Link></li>
                    </ul>
                  </li> */}
                </ul>
              </ul>
            </li>
            {/* End Reports */}

            {/* <!-- Start Administrative --> */}
            <li className="active has-sub mbottom-5"><Link to="/"> <i className="fa fa-user-circle icon-show-collapse" aria-hidden="true"></i> <span className="menu-title">ADMINISTRATIVE</span></Link>
              <ul className="menu-content">
                <ul className="menu-content">

                  <li className="nav-item has-sub" ><Link to="/"><span className="menu-title" data-i18n="Vendor">Setup & Configuration</span></Link>
                    <ul className="menu-content">
                      <li className="nav-item has-sub" ><Link to="/"><span className="menu-title">Packages</span></Link>
                        <ul className="menu-content">
                          <li><Link className="menu-item" to="/"><span>Add</span></Link></li>
                          <li><Link className="menu-item" to="/"><span>Edit, Delete</span></Link></li>
                        </ul>
                      </li>
                    </ul>

                    <ul className="menu-content">
                      <li><Link className="menu-item" to="/"><span>Currencies</span></Link>
                      </li>
                    </ul>

                  </li>
                </ul>

                <ul className="menu-content">
                  <li className="nav-item" ><Link to="/notifi-temp"><span className="menu-title" data-i18n="Vendor">Notification Templates</span></Link>
                    <ul className="menu-content">
                      {/* <li><Link className="menu-item" to="/"><span>Free</span></Link>
                          <ul className='menu-content'>
                              <li><Link className="menu-item" to="/"><span>Numbers</span></Link>
                              </li>
                              <li><Link className="menu-item" to="/"><span>Bar Charts</span></Link>
                              </li>
                          </ul>
                      </li> */}
                    </ul>
                  </li>
                </ul>

                <ul className="menu-content">
                  <li className="nav-item has-sub" ><Link to="/"><span className="menu-title">Newsletter Suscriptions</span></Link>
                    <ul className="menu-content">
                      <li><Link className="menu-item" to="/"><span>View</span></Link></li>
                      <li><Link className="menu-item" to="/"><span>Delete</span></Link></li>
                    </ul>
                  </li>
                </ul>




              </ul>

              <ul className="menu-content">
                <li className="nav-item has-sub" ><Link to="/"><span className="menu-title" data-i18n="Vendor">Settings</span></Link>
                  <ul className="menu-content">
                    <li><Link className="menu-item" to="/settings/general-settings"><span>General Setting</span></Link></li>
                    <li><Link className="menu-item" to="/"><span>Skills</span></Link></li>
                    <li><Link className="menu-item" to="/settings/roles"><span>Roles</span></Link></li>
                    <li><Link className="menu-item" to="/Settings/Prefix"><span>Prefix</span></Link></li>
                    {/* <li><Link className="menu-item" to="/"><span>Payment Methods</span></Link></li> */}
                    {/* <li><Link className="menu-item" to="/"><span>Notification Settings</span></Link></li> */}
                    <li><Link className="menu-item" to="/"><span>GDPR Settings</span></Link></li>
                  </ul>
                </li>
              </ul>

              <ul className="menu-content">
                <li className="nav-item has-sub" ><Link to="/"><span className="menu-title" data-i18n="Vendor">Website Setup</span></Link>
                  <ul className="menu-content">
                    <li><Link className="menu-item" to="/"><span>Header</span></Link></li>
                    <li><Link className="menu-item" to="/"><span>Footer</span></Link></li>
                    <li><Link className="menu-item" to="/"><span>Pages</span></Link></li>
                    {/* <li><Link className="menu-item" to="/"><span>Pages</span></Link></li> */}
                    {/* <li><Link className="menu-item" to="/"><span>Appearence</span></Link></li> */}
                    <li><Link className="menu-item" to="/sliders"><span>Sliders</span></Link></li>
                    <li><Link className="menu-item" to="/"><span>Profile</span></Link></li>

                  </ul>
                </li>
              </ul>
            </li>
            {/* <!-- end administrative -->   */}


          </ul>
        </div>
      </div>

    </>

  )
}

export default Sidebar;
