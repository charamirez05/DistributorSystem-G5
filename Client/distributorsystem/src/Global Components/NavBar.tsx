import * as React from 'react';
import { AppBar, Typography, Box, Toolbar, Button, IconButton, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import {Link, useLocation, useNavigate} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useEffect, useState} from 'react';
import Dashboard from '../Components/Dashboard/Dashboard';
import PaymentList from '../Components/Payments/PaymentList';
import DealerRegistration from '../Components/Registration/DealerRegistration';
import ScheduleOrderTransaction from '../Components/Schedules/ScheduleOrderTransaction';
import AssignmentList from '../Components/Collector Assignment/AssignmentList';

type navProps = { moduleName: string;
}
export default function NavBar(props: navProps) {
    const[isOpen, setOpen]=useState(false)
    const location=useLocation()
    const navigate = useNavigate();
    useEffect(()=>{
        setOpen(false);
        // navigate(location.pathname);

    },[location]);
    
    return (
        <Box sx={{ flexGrow: 1, bgcolor: "#156D94" }}>
            <AppBar position="static" sx={{ bgcolor: "#156D94" }}>
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={()=>setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontWeight: "bold" }}>
                        {props.moduleName}
                    </Typography>
                    <Drawer anchor='left' open={isOpen} onClose={()=> setOpen(false)}>
                        <Box p={2} width='400px' textAlign={'center'} role='presentation' display="flex" alignItems="center">
                            <Typography variant='h6' component={'div'} flexGrow={1} fontWeight="bold">
                                {props.moduleName}
                            </Typography>
                            <IconButton
                             size="large"
                             edge="start"
                             color="inherit"
                             aria-label="menu"
                             sx={{ mr: 2 }}
                             onClick={()=>setOpen(false)}
                            >
                               <ArrowBackIcon/>
                            </IconButton>
                        </Box>
                 
                        {/* <List>
                            {[
                            'Dashboard',
                            'Registration',
                            'Profiles',
                            'Product Distribution',
                            'Collector Assignment',
                            'Schedules',
                            'Payments'
                            ].map((text,index)=>(
                                  <ListItemButton key={text} sx={{height:'80px'}}>
                                    <ListItemText primary={text}/>
                                  </ListItemButton>  

                            ))}
                        </List> */}
                        <Link to="/dashboard"><Button sx={{fontWeight:'bold',color:'#146C94', height:'80px',width:'100%','&:hover': { backgroundColor: '#EEEEEE' }}}>Dashboard</Button></Link>
                        <Link to="/dealerRegistration"><Button sx={{fontWeight:'bold',color:'#146C94', height:'80px',width:'100%','&:hover': { backgroundColor: '#EEEEEE' }}}>Dealer Registration</Button></Link>
                        <Link to="/assignmentCollector"><Button sx={{fontWeight:'bold',color:'#146C94', height:'80px',width:'100%','&:hover': { backgroundColor: '#EEEEEE' }}}>Assignment Collector</Button></Link>
                        <Link to="/schedules"><Button sx={{fontWeight:'bold',color:'#146C94', height:'80px',width:'100%','&:hover': { backgroundColor: '#EEEEEE' }}}>Payment Transaction Schedules</Button></Link>
                        <Link to="/orderTransactionDetails"><Button sx={{fontWeight:'bold',color:'#146C94', height:'80px',width:'100%','&:hover': { backgroundColor: '#EEEEEE' }}}>Order Transaction Details</Button></Link>
                        <Link to="/paymentList"><Button sx={{fontWeight:'bold',color:'#146C94', height:'80px',width:'100%','&:hover': { backgroundColor: '#EEEEEE' }}}>Payment List</Button></Link>
                        <Link to="/recordDirectPayment"><Button sx={{fontWeight:'bold',color:'#146C94', height:'80px',width:'100%','&:hover': { backgroundColor: '#EEEEEE' }}}>Record Direct Payment</Button></Link>
                        <Link to="/distributorOrderForm"><Button sx={{fontWeight:'bold',color:'#146C94', height:'80px',width:'100%','&:hover': { backgroundColor: '#EEEEEE' }}}>Product Distribution Form - Distributor </Button></Link>
                    
                    </Drawer>

                </Toolbar>
            </AppBar>

        </Box>

                )
}
