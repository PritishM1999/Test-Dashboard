import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
function Admin() {
  return (
      <>
       <Header/>
       <Sidebar/>
       <Outlet />
      </>
  );
}

export default Admin;
