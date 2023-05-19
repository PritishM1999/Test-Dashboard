import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';



import Admin from './Layouts/Admin';
import Dashboard from './Component/Admin/Dashboard/Dashboard';
import Login from './Component/Admin/Login/Login';
import Category from './Component/Admin/Category/Category';
import AddCategory from './Component/Admin/Category/AddCategory';
import SalesPos from './Component/Admin/Sales/Sales-pos';
import AllOrders from './Component/Admin/Sales/All-sales/AllOrders';
import InvoiceList from './Component/Admin/Sales/Invoice/InvoiceList';
import WishList from './Component/Admin/Sales/wishlist/wishlist';
import SalesReturn from './Component/Admin/Sales/Sale/SalesReturn';
import SalesReturnRequest from './Component/Admin/Sales/Refund/SalesRefundRequest';
import AllRefund from './Component/Admin/Sales/Refund/AllRefund';
import RefundConfiguration from './Component/Admin/Sales/Refund/RefundConfig';
import StockTransfer from './Component/Admin/Product/Inventory/StockTransfer';
import ExpSoon from './Component/Admin/Product/Inventory/ExpSoon';
import Expired from './Component/Admin/Product/Inventory/Expired';
import StockOut from './Component/Admin/Product/Inventory/StockOut';
import Emergency from './Component/Admin/Product/Inventory/Emergency';
import AddNew from './Component/Admin/Product/ProductManager/AddNew';
import BarChart from './Component/Admin/Dashboard/Graphs/bargraph';
import PieChart from './Component/Admin/Dashboard/Graphs/piechart';
import AllCandidates from './Component/Admin/Candidates/AllCandidates';
import AllCompanies from './Component/Admin/Companies/AllCompanies';
import HrEmployees from './Component/Admin/HR/HrEmployees';
import StickyNotes from './Component/Admin/Miscellaneous/StickyNotes';
import MiscNotifications from './Component/Admin/Miscellaneous/Notification';
import Reminder from './Component/Admin/Miscellaneous/Reminder';
import CompanyReport from './Component/Admin/Reports/CompanyReport/CompanyReport';
import CandidateReport from './Component/Admin/Reports/CandidateReport/CandidateReport';
import IncomeReport from './Component/Admin/Reports/IncomeReport';
import Sliders from './Component/Admin/Administrative/WebsiteSetup/Sliders';
import NotifiTemp from './Component/Admin/Administrative/NotificationTemp';
import Roles from './Component/Admin/Administrative/Settings/Roles';
import Prefix from './Component/Admin/Administrative/Settings/Prefix';
import GeneralSettings from './Component/Admin/Administrative/Settings/GeneralSettings';

function App() {
  return (
    // <BrowserRouter>
    <>
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/addcategory" element={<AddCategory />} />

          <Route path="/SalesPos" element={<SalesPos />} />
          <Route path="/AllOrders" element={<AllOrders />} />
          <Route path="/InvoiceList" element={<InvoiceList />} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="/SalesReturn" element={<SalesReturn />} />
          <Route path="/SalesReturnRequest" element={<SalesReturnRequest />} />
          <Route path="/AllRefund" element={<AllRefund />} />
          <Route path="/RefConfig" element={<RefundConfiguration />} />
          <Route path="/StockTransfer" element={<StockTransfer />} />
          <Route path="/ExpSoon" element={<ExpSoon />} />
          <Route path="/Expired" element={<Expired />} />
          <Route path="/StockOut" element={<StockOut />} />
          <Route path="/Emergency" element={<Emergency />} />

          <Route path="/AddNew" element={<AddNew />} />
          <Route path="/Graph" element={<BarChart />} />
          <Route path="/piechart" element={<PieChart />} />
          <Route path="/allcandidates" element={<AllCandidates />} />
          <Route path="/allcompanies" element={<AllCompanies />} />

          <Route path="/hr-employees" element={<HrEmployees />} />
          <Route path="/sticky-notes" element={<StickyNotes />} />
          <Route path="/misc-notifications" element={<MiscNotifications />} />
          <Route path="/Reminder" element={<Reminder />} />

          <Route path="/company-report" element={<CompanyReport />} />
          <Route path="/candidate-report" element={<CandidateReport />} />
          <Route path="/income-report" element={<IncomeReport />} />

          <Route path="/sliders" element={<Sliders />} />
          <Route path="/notifi-temp" element={<NotifiTemp />} />

          <Route path="/Settings/Roles" element={<Roles />} />
          <Route path="/Settings/Prefix" element={<Prefix />} />
          <Route path="/Settings/general-settings" element={<GeneralSettings />} />
        </Route>
      </Routes>
      </>
    // </BrowserRouter>
    
  );
}

export default App;



// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Admin from './Layouts/Admin';
// import Dashboard from './Component/Admin/Dashboard/Dashboard';
// import Login from './Component/Admin/Login/Login';
// import Category from './Component/Admin/Category/Category';
// import AddCategory from './Component/Admin/Category/AddCategory';
// import SalesPos from './Component/Admin/Sales/Sales-pos';
// import AllOrders from './Component/Admin/Sales/All-sales/AllOrders';
// import InvoiceList from './Component/Admin/Sales/Invoice/InvoiceList';
// import WishList from './Component/Admin/Sales/wishlist/wishlist';
// import SalesReturn from './Component/Admin/Sales/Sale/SalesReturn';
// import SalesReturnRequest from './Component/Admin/Sales/Refund/SalesRefundRequest';
// import AllRefund from './Component/Admin/Sales/Refund/AllRefund';
// import RefundConfiguration from './Component/Admin/Sales/Refund/RefundConfig';
// import StockTransfer from './Component/Admin/Product/Inventory/StockTransfer';
// import ExpSoon from './Component/Admin/Product/Inventory/ExpSoon';
// import Expired from './Component/Admin/Product/Inventory/Expired';
// import StockOut from './Component/Admin/Product/Inventory/StockOut';
// import Emergency from './Component/Admin/Product/Inventory/Emergency';
// import AddNew from './Component/Admin/Product/ProductManager/AddNew';
// import BarChart from './Component/Admin/Dashboard/Graphs/bargraph';
// import PieChart from './Component/Admin/Dashboard/Graphs/piechart';
// import AllCandidates from './Component/Admin/Candidates/AllCandidates';
// import AllCompanies from './Component/Admin/Companies/AllCompanies';
// import HrEmployees from './Component/Admin/HR/HrEmployees';
// import StickyNotes from './Component/Admin/Miscellaneous/StickyNotes';
// import MiscNotifications from './Component/Admin/Miscellaneous/Notification';
// import Reminder from './Component/Admin/Miscellaneous/Reminder';
// import CompanyReport from './Component/Admin/Reports/CompanyReport/CompanyReport';
// import CandidateReport from './Component/Admin/Reports/CandidateReport/CandidateReport';
// import IncomeReport from './Component/Admin/Reports/IncomeReport';
// import Sliders from './Component/Admin/Administrative/WebsiteSetup/Sliders';
// import NotifiTemp from './Component/Admin/Administrative/NotificationTemp';
// import Roles from './Component/Admin/Administrative/Settings/Roles';
// import Prefix from './Component/Admin/Administrative/Settings/Prefix';
// import GeneralSettings from './Component/Admin/Administrative/Settings/GeneralSettings';

// function App() {
//   return (
//     <>
//     {/* <BrowserRouter> */}
//     <Routes>
//       {/* <Route path="/admin" element={<Admin />} /> */}
      
//       <Route path="/" element={<Admin />}>
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/category" element={<Category />} />
//         <Route path="/addcategory" element={<AddCategory />} /> 

//         <Route path="/SalesPos" element={<SalesPos />} /> 
//         <Route path="/AllOrders" element={<AllOrders />} /> 
//         <Route path="/InvoiceList" element={<InvoiceList />} />
//         <Route path="/WishList" element={<WishList />} />
//         <Route path="/SalesReturn" element={<SalesReturn />} />   
//         <Route path="/SalesReturnRequest" element={<SalesReturnRequest />} /> 
//         <Route path="/AllRefund" element={<AllRefund />} /> 
//         <Route path="/RefConfig" element={<RefundConfiguration />} /> 
//         <Route path="/StockTransfer" element={<StockTransfer />} />
//         <Route path="/ExpSoon" element={<ExpSoon />} />
//         <Route path="/Expired" element={<Expired />} />
//         <Route path="/StockOut" element={<StockOut />} />
//         <Route path="/Emergency" element={<Emergency />} />

//         <Route path="/AddNew" element={<AddNew />} />
//         <Route path="/Graph" element={<BarChart />} />
//         <Route path="/piechart" element={<PieChart />} />
//         <Route path="/allcandidates" element={<AllCandidates />} />
//         <Route path="/allcompanies" element={<AllCompanies />} />
          
//         <Route path="/hr-employees" element={<HrEmployees />} />
//         <Route path="/sticky-notes" element={<StickyNotes />} />
//         <Route path="/misc-notifications" element={<MiscNotifications />} />
//         <Route path="/Reminder" element={<Reminder />} />

//         <Route path="/company-report" element={<CompanyReport />} />
//         <Route path="/candidate-report" element={<CandidateReport />} />
//         <Route path="/income-report" element={<IncomeReport />} />

//         <Route path="/sliders" element={<Sliders />} />          
//         <Route path="/notifi-temp" element={<NotifiTemp />} />

//         <Route path="/Settings/Roles" element={<Roles />} />
//         <Route path="/Settings/Prefix" element={<Prefix />} />
//         <Route path="/Settings/general-settings" element={<GeneralSettings />} />
//       </Route>
//     </Routes>
    
//     {/* </BrowserRouter> */}

//     </>
//   );
// }

// export default App;


// import React from 'react';
// import {Routes, Route } from "react-router-dom";

// // import Header from './Component/Header';
// // import Sidebar from './Component/Sidebar';
// import Dashboard from './Component/Admin/Dashboard/Dashboard';
// import Login from './Component/Admin/Login/Login';
// import Admin from './Layouts/Admin';
// import Category from './Component/Admin/Category/Category';
// import AddCategory from './Component/Admin/Category/AddCategory';

// import SalesPos from './Component/Admin/Sales/Sales-pos';
// import AllOrders from './Component/Admin/Sales/All-sales/AllOrders';
// import InvoiceList from './Component/Admin/Sales/Invoice/InvoiceList';
// import WishList from './Component/Admin/Sales/wishlist/wishlist';
// import SalesReturn from './Component/Admin/Sales/Sale/SalesReturn';
// import SalesReturnRequest from './Component/Admin/Sales/Refund/SalesRefundRequest';
// import AllRefund from './Component/Admin/Sales/Refund/AllRefund';
// import RefundConfiguration from './Component/Admin/Sales/Refund/RefundConfig';
// import StockTransfer from './Component/Admin/Product/Inventory/StockTransfer';
// import ExpSoon from './Component/Admin/Product/Inventory/ExpSoon';
// import Expired from './Component/Admin/Product/Inventory/Expired';
// import StockOut from './Component/Admin/Product/Inventory/StockOut';
// import Emergency from './Component/Admin/Product/Inventory/Emergency';
// import AddNew from './Component/Admin/Product/ProductManager/AddNew';
// import BarChart from './Component/Admin/Dashboard/Graphs/bargraph'
// import PieChart from './Component/Admin/Dashboard/Graphs/piechart';
// import AllCandidates from './Component/Admin/Candidates/AllCandidates';

// import AllCompanies from './Component/Admin/Companies/AllCompanies';
// import HrEmployees from './Component/Admin/HR/HrEmployees';
// import StickyNotes from './Component/Admin/Miscellaneous/StickyNotes';
// import MiscNotifications from './Component/Admin/Miscellaneous/Notification';
// import Reminder from './Component/Admin/Miscellaneous/Reminder';
// import CompanyReport from './Component/Admin/Reports/CompanyReport/CompanyReport';
// import CandidateReport from './Component/Admin/Reports/CandidateReport/CandidateReport';
// import IncomeReport from './Component/Admin/Reports/IncomeReport';

// import Sliders from './Component/Admin/Administrative/WebsiteSetup/Sliders';

// import NotifiTemp from './Component/Admin/Administrative/NotificationTemp';
// import Roles from './Component/Admin/Administrative/Settings/Roles';
// import Prefix from './Component/Admin/Administrative/Settings/Prefix';
// import GeneralSettings from './Component/Admin/Administrative/Settings/GeneralSettings';
// function App() {
//   return (
//       <>
//       <Routes>
//           <Route path="//" element={<Admin />} />
//           <Route path="//login" element={<Login />} /> 
        
//           <Route path="//admin" element={<Admin />} >  
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/category" element={<Category />} />
//           <Route path="/addcategory" element={<AddCategory />} /> 

//           <Route path="/SalesPos" element={<SalesPos />} /> 
//           <Route path="/AllOrders" element={<AllOrders />} /> 
//           <Route path="/InvoiceList" element={<InvoiceList />} />
//           <Route path="/WishList" element={<WishList />} />
//           <Route path="/SalesReturn" element={<SalesReturn />} />   
//           <Route path="/SalesReturnRequest" element={<SalesReturnRequest />} /> 
//           <Route path="/AllRefund" element={<AllRefund />} /> 
//           <Route path="/RefConfig" element={<RefundConfiguration />} /> 
//           <Route path="/StockTransfer" element={<StockTransfer />} />
//           <Route path="/ExpSoon" element={<ExpSoon />} />
//           <Route path="/Expired" element={<Expired />} />
//           <Route path="/StockOut" element={<StockOut />} />
//           <Route path="/Emergency" element={<Emergency />} />

//           <Route path="/AddNew" element={<AddNew />} />
//           <Route path="/Graph" element={<BarChart />} />
//           <Route path="/piechart" element={<PieChart />} />
//           <Route path="/allcandidates" element={<AllCandidates />} />
//           <Route path="/allcompanies" element={<AllCompanies />} />
          
//           <Route path="/hr-employees" element={<HrEmployees />} />
//           <Route path="/sticky-notes" element={<StickyNotes />} />
//           <Route path="/misc-notifications" element={<MiscNotifications />} />
//           <Route path="/Reminder" element={<Reminder />} />

//           <Route path="/company-report" element={<CompanyReport />} />
//           <Route path="/candidate-report" element={<CandidateReport />} />
//           <Route path="/income-report" element={<IncomeReport />} />

//           <Route path="/sliders" element={<Sliders />} />          
//           <Route path="/notifi-temp" element={<NotifiTemp />} />

//           <Route path="/Settings/Roles" element={<Roles />} />
//           <Route path="/Settings/Prefix" element={<Prefix />} />
//           <Route path="/Settings/general-settings" element={<GeneralSettings />} />


             

//         </Route>
//       </Routes>
//       </>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';
// import Header from "./components/header/header";
// import SideBar from "./components/sidebar/sidebar";
// import Homepage from "./components/home/Home";

// function App() {
//   return (
//     <div className="App">
//       {/* <Header/> */}
//       <SideBar/>
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       {/* <SideBar/> */}
//       {/* <Homepage/> */}
      
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="//" element={<Login />} />
//         <Route path="//register" element={<Register />} />
//         <Route path="//index" element={<Index />} />
//         <Route path="//forgot" element={<ForgotPassword />} />
//         <Route path="//slot" element={<SlotList />} />
//       </Routes>
//     </Router>
//   );
// }


// export default App;
