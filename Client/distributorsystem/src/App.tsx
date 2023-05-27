import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScheduleOrderTransaction from './Components/Schedules/ScheduleOrderTransaction';
import PaymentSummary from './Components/Payments/PaymentSummary';
import PaymentTransactionDetails from './Components/Payments/PaymentTransactionDetails';
import Content from './Contents';
import MainRoutes from './Global Components/Routes';

function App() {
  return (
    <div className="App">
      <MainRoutes/>
    </div>
  );
}

export default App;
