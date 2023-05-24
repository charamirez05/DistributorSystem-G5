import * as React from 'react';
import { AppBar, Typography, Box, Toolbar, Button, IconButton, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from 'react';
import Dashboard from '../Components/Dashboard/Dashboard';
import PaymentList from '../Components/Payments/PaymentList';
import DealerRegistration from '../Components/Registration/DealerRegistration';
import ScheduleOrderTransaction from '../Components/Schedules/ScheduleOrderTransaction';
import AssignmentList from '../Components/Collector Assignment/AssignmentList';

type navProps = {
  moduleName: string;
}

export default function NavBar(props: navProps) {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#156D94" }}>
      <AppBar position="static" sx={{ bgcolor: "#156D94" }}>
        <Toolbar  >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontWeight: "bold" }}>
            {props.moduleName}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor='left' open={isOpen} onClose={() => setOpen(false)} >
        <Box sx={{ backgroundColor: "#146C94", width: '400px', display: 'flex', flexDirection: 'column', height: '100%' }} role='presentation'>
          <Box p={2} display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant='h6' component='div' sx={{ fontSize:'20px',fontWeight: "bold", color: "#FFFFFF",  marginLeft: 'auto' }}>
              {props.moduleName}
            </Typography>
            {/* <Box p={2} textAlign="center"> */}
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mx: 'auto', alignItems:'right' }}
              onClick={() => setOpen(false)}
            >
              <ArrowBackIcon sx={{color:'white'}}/>
            </IconButton>
          {/* </Box> */}
          </Box>
          <Box sx={{ flexGrow: 1,  flexDirection: 'column', justifyContent: 'center' }}>
          <Link to="/dashboard"><Button sx={{backgroundColor: 'rgba(19, 71, 95, 0.1)' ,fontWeight:'bold',color:'#FFFFFF', height:'80px',width:'100%','&:hover': { backgroundColor: '#13475F' }}}>Dashboard</Button></Link>
          <Link to="/dealerRegistration"><Button sx={{ backgroundColor: 'rgba(19, 71, 95, 0.1)' ,fontWeight:'bold',color:'#FFFFFF', height:'80px',width:'100%','&:hover': { backgroundColor: '#13475F' }}}>Dealer Registration</Button></Link>
          <Link to="/assignmentCollector"><Button sx={{backgroundColor: 'rgba(19, 71, 95, 0.1)' ,fontWeight:'bold',color:'#FFFFFF', height:'80px',width:'100%','&:hover': { backgroundColor: '#13475F' }}}>Assignment Collector</Button></Link>
          <Link to="/distributorOrderForm"><Button sx={{backgroundColor: 'rgba(19, 71, 95, 0.1)' ,fontWeight:'bold',color:'#FFFFFF', height:'80px',width:'100%','&:hover': { backgroundColor: '#13475F'  }}}>Distributor Order Form</Button></Link>
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}
