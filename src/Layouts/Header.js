import React, { useState } from 'react';
import './Header.css';
import TodoList from './Todo';

function Header() {
  const [showTodo, setShowTodo] = useState(false);

  const openTodo = () => {
    setShowTodo(true);
  };

  return (
    <>
      <nav className="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light  navbar-shadow" style={{ backgroundColor: '#f7f6f7', borderBottom: '5px solid #e5e5e5 !important' }}>
        <div className="navbar-wrapper">
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mobile-menu d-md-none mr-auto"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i className="ft-menu font-large-1" style={{ color: 'black' }}></i></a></li>

              <li className="nav-item logo-center">
                <div className="logo">
                  <a className="navbar-brand" href="">

                    <img className="brand-logo" alt="Designdot  logo" src="/assets/images/logo/retail-logo.png" />
                    <img className="brand-logo-small" alt="Designdot  logo" src="/assets/images/logo/logo-1.png" />
                  </a>
                </div>
              </li>

              <li className="nav-item d-md-none"><a className="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i className="fa fa-ellipsis-v" style={{ color: 'black' }}></i></a></li>
            </ul>
          </div>
          <div className="navbar-container content">
            <div className="collapse navbar-collapse mob-collapse" id="navbar-mobile">
              <ul className="nav navbar-nav mr-auto float-left">
                <li className="nav-item d-none d-md-block"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i className="fa fa-bars" style={{ color: 'black' }}></i></a></li>
                <li className="nav-item d-none d-lg-block"><a className="nav-link nav-link-expand" href="#"><i className="ficon fa fa-expand" style={{ color: 'black' }}></i></a></li>


                <li className="nav-item nav-search"><a className="nav-link nav-link-search" href="#"><i className="ficon fa fa-search" style={{ color: 'black' }}></i></a>
                  <div className="search-input">
                    <input className="input" type="text" placeholder="Search by Patient Name..." tabindex="0" data-search="template-list" />
                    <div className="search-input-close"><i className="ft-x" style={{ color: 'black' }}></i></div>
                    <ul className="search-list"></ul>
                  </div>
                </li>

              </ul>

              <ul className="nav navbar-nav float-right">

                {/* <li className="nav-item"><a className="nav-link nav-link-label emergency-text" href="#" ><i className="fa fa-commenting-o icon-bg-circle-1 mr-0" style={{ color: 'black' }}></i></a>
                </li> */}



                <li className="dropdown dropdown-notification nav-item"><a className="nav-link nav-link-label" href="#" data-toggle="dropdown"><i className="ficon fa fa-bell" style={{ color: 'black' }}></i><span className="badge badge-pill badge-danger badge-up badge-glow">5</span></a>

                  <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                    <li className="dropdown-menu-header" >
                      <h6 className="dropdown-header m-0"><span className="grey darken-2">Notifications</span></h6><span className="notification-tag badge bg-gray float-right m-0">5 New</span>
                    </li>
                    <li className="scrollable-container media-list w-100"><a href="javascript:void(0)">
                      <div className="media">
                        <div className="media-left align-self-center"><i className="ft-plus-square icon-bg-circle bg-cyan mr-0"></i></div>
                        <div className="media-body">
                          <h6 className="media-heading">You have new order!</h6>
                          <p className="notification-text font-small-3 text-muted">Lorem ipsum dolor sit amet, consectetuer elit.</p><small>
                            <time className="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">30 minutes ago</time></small>
                        </div>
                      </div></a><a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center"><i className="ft-download-cloud icon-bg-circle bg-red bg-darken-1 mr-0"></i></div>
                          <div className="media-body">
                            <h6 className="media-heading red darken-1">99% Server load</h6>
                            <p className="notification-text font-small-3 text-muted">Aliquam tincidunt mauris eu risus.</p><small>
                              <time className="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Five hour ago</time></small>
                          </div>
                        </div></a><a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center"><i className="ft-alert-triangle icon-bg-circle bg-yellow bg-darken-3 mr-0"></i></div>
                          <div className="media-body">
                            <h6 className="media-heading yellow darken-3">Warning notifixation</h6>
                            <p className="notification-text font-small-3 text-muted">Vestibulum auctor dapibus neque.</p><small>
                              <time className="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Today</time></small>
                          </div>
                        </div></a><a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center"><i className="ft-check-circle icon-bg-circle bg-cyan mr-0"></i></div>
                          <div className="media-body">
                            <h6 className="media-heading">Complete the task</h6><small>
                              <time className="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Last week</time></small>
                          </div>
                        </div></a><a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center"><i className="ft-file icon-bg-circle bg-teal mr-0"></i></div>
                          <div className="media-body">
                            <h6 className="media-heading">Generate monthly report</h6><small>
                              <time className="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Last month</time></small>
                          </div>
                        </div></a></li>
                    <li className="dropdown-menu-footer"><a className="dropdown-item text-muted text-center" href="javascript:void(0)">Read all notifications</a></li>
                  </ul>
                </li>
                <li className="dropdown dropdown-notification nav-item"><a className="nav-link nav-link-label" href="#" data-toggle="dropdown"><i className="ficon fa fa-envelope-o" style={{ color: 'black' }}></i></a>
                  <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                    <li className="dropdown-menu-header">
                      <h6 className="dropdown-header m-0"><span className="grey darken-2">Messages</span></h6><span className="notification-tag badge badge-warning float-right m-0">4 New</span>
                    </li>
                    <li className="scrollable-container media-list w-100"><a href="javascript:void(0)">
                      <div className="media">
                        <div className="media-left"><span className="avatar avatar-sm avatar-online rounded-circle">
                          <img src="/assets/images/portrait/small/avatar-s-19.png" alt="avatar" /><i></i></span></div>
                        <div className="media-body">
                          <h6 className="media-heading">Margaret Govan</h6>
                          <p className="notification-text font-small-3 text-muted">I like your portfolio, let's start.</p><small>
                            <time className="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Today</time></small>
                        </div>
                      </div></a><a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left"><span className="avatar avatar-sm avatar-busy rounded-circle">
                            <img src="../assets/images/portrait/small/avatar-s-2.png" alt="avatar" /><i></i></span></div>
                          <div className="media-body">
                            <h6 className="media-heading">Bret Lezama</h6>
                            <p className="notification-text font-small-3 text-muted">I have seen your work, there is</p><small>
                              <time className="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Tuesday</time></small>
                          </div>
                        </div></a><a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left"><span className="avatar avatar-sm avatar-online rounded-circle">
                            <img src="/assets/images/portrait/small/avatar-s-3.png" alt="avatar" /><i></i></span></div>
                          <div className="media-body">
                            <h6 className="media-heading">Carie Berra</h6>
                            <p className="notification-text font-small-3 text-muted">Can we have call in this week ?</p><small>
                              <time className="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Friday</time></small>
                          </div>
                        </div></a><a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left"><span className="avatar avatar-sm avatar-away rounded-circle">
                            <img src="/assets/images/portrait/small/avatar-s-6.png" alt="avatar" /><i></i></span></div>
                          <div className="media-body">
                            <h6 className="media-heading">Eric Alsobrook</h6>
                            <p className="notification-text font-small-3 text-muted">We have project party this saturday.</p><small>
                              <time className="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">last month</time></small>
                          </div>
                        </div></a></li>
                    <li className="dropdown-menu-footer"><a className="dropdown-item text-muted text-center" href="javascript:void(0)">Read all messages</a></li>
                  </ul>
                </li>


                {/* <!--todo note Icon--> */}

                {/* <!--todo note Icon--> */}
                <li className="nav-item">
                  <a className="nav-link nav-link-label" href="#" onClick={openTodo}>
                    <i className="fa fa-th-list custom-icon-size" style={{ color: 'black' }}></i>
                  </a>
                </li>
                {/* <!--End: todo note Icon--> */}

                {/* Render the TodoList component */}
                {showTodo && <TodoList />}




                {/* <!--End: todo note Icon--> */}






                <li className="dropdown dropdown-user nav-item"><a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown"><span className="mr-1 user-name text-bold-700" style={{ color: 'black' }}>John Doe</span><span className="avatar avatar-online">
                  <img src="/assets/images/portrait/small/avatar-s-19.png" alt="avatar" /><i></i></span></a>
                  <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item" href="#"><i className="ft-user"></i> Edit Profile</a><a className="dropdown-item" href="#"><i className="ft-mail"></i> My Inbox</a><a className="dropdown-item" href="#"><i className="ft-check-square"></i> Task</a>

                    <div className="dropdown-divider"></div><a className="dropdown-item" href="login-with-bg-image.html"><i className="ft-power"></i> Logout</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav >
    </>
  )
}

export default Header;
