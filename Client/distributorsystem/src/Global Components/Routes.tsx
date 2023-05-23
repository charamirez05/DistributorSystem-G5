import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import Dashboard from "../Components/Dashboard/Dashboard";
import AssignmentList from "../Components/Collector Assignment/AssignmentList";
import PaymentSummary from "../Components/Payments/PaymentSummary";
import PaymentList from "../Components/Payments/PaymentList";
// import DealerProfileList from "./Components/Profiles/DealerProfiles/DealerProfileList";
// import EmployeeProfileDetails from "./Components/Profiles/EmployeeProfiles/EmployeeProfileDetails";
// import EmployeeProfileList from "./Components/Profiles/EmployeeProfiles/EmployeeProfileList";
import DealerRegistration from "../Components/Registration/DealerRegistration";
import EmployeeRegistration from "../Components/Registration/EmployeeRegistration";
import ScheduleOrderTransaction from "../Components/Schedules/ScheduleOrderTransaction";
import Content from "../Contents";
import DistributorOrderForm from "../Components/Product Distribution/DistributorOrderForm";
import DealerOrderForm from "../Components/Product Distribution/DealerOrderForm";
import DealaerProfile from "../Components/Profiles/DealerProfile";
import SignIn from "../Components/Sign-in/SignInScreen";
export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Content/>}>
                <Route path="/" element={<Navigate replace to="dashboard"/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/assignmentCollector" element={<AssignmentList/>}/>
                <Route path="/paymentList" element={<PaymentList/>}/>
                <Route path="/dealearOrderForm" element={<DealerOrderForm/>}/>
                <Route path="/distributorOrderForm" element={<DistributorOrderForm/>}/>
                {/* <Route path="/orderConfirmation" element={<orderConfirmation/>}/> */}
                {/* <Route path="/dealerTransactionDetails" element={<DealerTransactionDetails/>}/> */}
                {/* <Route path="/productDistributionList" element={<ProductDistributionList/>}/> */}
                <Route path="/dealerProfileDetails" element={<DealaerProfile/>}/>
                {/* <Route path="/dealerProfileList" element={<DealerProfileList/>}/> */}
                {/* <Route path="/employeeProfileDetails" element={<EmployeeProfileDetails/>}/>
                <Route path="/employeeProfileList" element={<EmployeeProfileList/>}/> */}
                <Route path="/dealerRegistration" element={<DealerRegistration/>}/>
                <Route path="/employeeRegistrationn" element={<EmployeeRegistration/>}/>
                <Route path="/scheduleOrderTransaction" element={<ScheduleOrderTransaction/>}/>
                <Route path="/signin" element={<SignIn/>}/>
            </Route>
         </Routes>  
   );
}