import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import NavBar from './NavBar';


export default function Content() {
  const location = useLocation();
  const getNavPage = () => {
    const path=location.pathname;
    const navPageMapping: Record<string,string>={
        '/dashboard':'Dashboard',
        '/assignmentCollector':'Assignment Collector',
        '/dealerRegistration':'Dealer Registration',
        '/schedules':'Payment Transaction Schedule',
        '/distributorOrderForm': 'Product Distribution Form',
        '/orderTransactionDetails': 'Order Transaction Details',
        '/paymentList': 'Payment List',
        '/recordDirectPayment': 'Record Direct Payment'
    };
    const navpage=navPageMapping[path] || 'Unknown';
    return navpage;
  };
   
    return (
      <div>
        <NavBar moduleName={getNavPage()} /> 
        <Outlet />
      </div>
    );
  }