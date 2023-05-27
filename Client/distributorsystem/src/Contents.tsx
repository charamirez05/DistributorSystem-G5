]





import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import NavBar from './Global Components/NavBar';


export default function Content() {
  const location = useLocation();
  const getNavPage = () => {
    const path=location.pathname;
    const navPageMapping: Record<string,string>={
        '/dashboard':'Dashboard',
        '/assignmentCollector':'Assignment Collector',
        '/dealerRegistration':'Dealer Registration',
        '/schedules':'Payment Transaction Schedule',
        '/orderTransactionDetails': 'Order Transaction Details',
        '/paymentList': 'Payment Lists',
        '/recordDirectPayment': 'Record Direct Payment'

        '/assignmentCollector':'Collector Assignment',
        '/dealerRegistration':'Dealer Registration',


        '/distributorOrderForm':'Distribution Order Form',
        '/orderConfirmation': 'Order Confrimation',

        '/paymentList':'Payment List',
        '/paymentSummary':'Payment Summary',
        '/recordDirectPayment':'Record Direct Payment',
        
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