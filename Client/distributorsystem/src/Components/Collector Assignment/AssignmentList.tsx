import * as React from 'react';
import { AppBar, Typography, Box, Toolbar, Button, IconButton, CardActions,Card, CardContent, TextField } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DataGridOrder from './DateGridOrder';
import NavBar from '../../Global Components/NavBar';
import { useEffect } from 'react';


//     moduleName: string;
// }
    interface AutocompleteOption {
      label: string;
    } 
    // For Combo box or Autocompletion Styling
      const ComboContainer = styled('div')({
          '& .MuiOutlinedInput-root': {
            height: '20px',
          },

          '& .MuiAutocomplete-inputRoot': {
            height: '40%',

          },

          '& .MuiAutocomplete-popup': {
            maxHeight: '40px',
          },
      });

      const theme = createTheme();

          //** Function Here*/  
          export default function AssignmentList(){

            //Temporary list of dealer name for Autocompletion of Dealer Name
                const dealerName = [
                    { label: 'Ariel Rivera', id: 1 },
                    { label: 'Kim Possible', id: 2 },
                    { label: 'Charmaine Ramirez', id: 3 },
                    { label: 'Ephraim Perez', id: 4 }
                ];

            //Temporary list of collector name for Autocompletion of Dealer Name
                const collectorName=[
                  { label: 'Cherry Gil', id: 1 },
                  { label: 'Gardo Versoza', id: 2 },
                  { label: 'Jose Legazpi', id: 3 },
                  { label: 'Maria Gomez', id: 4 }
                ];
                  //** Return Statement*/  
                  return( 
                  <div>        
                      {/* <NavBar moduleName={'Assignment Collector'}/> */}
                      <div className='container' style={{display: 'flex', justifyContent: 'center' }}>
                          <div className='cardContainer' style={{ width: '95%' }}>

                          {/* Card For Number of Transaction Records */}
                                  <Card sx={{ margin:"40px 0px 0px 0px", borderRadius:"15px",  display:"flex"}}>
                                      <div className='numDiv'>
                                              <Typography gutterBottom variant="h6" style={{ textAlign: 'left', fontWeight: 'bold', margin: '10px 0px 0px 20px', color:'#146C94',display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                                <span style={{ textAlign: 'left', fontSize: '18px'}}>Number of Order Transaction Records</span>
                                                <span style={{ textAlign: 'right', fontSize:'15px', color: '#2A9221'}}>Assigned: </span>
                                                <span style={{ textAlign: 'right', fontSize:'15px', color: '#E77D7D'}}>Not Assigned: </span>
                                                <span style={{ textAlign: 'right', fontSize:'15px'}}>Total:  </span>
                                              </Typography>
                                      </div>  
                                  </Card>

                          {/* Card For Filters */}
                          <ThemeProvider theme={theme}>
                                  <Card sx={{borderRadius:'22px', height:'550px', marginTop:'10px'}}>
                                     <div style={{marginTop:'15px', }}>
                                         <DataGridOrder/>
                                    </div>   
                                  </Card>          
                          </ThemeProvider>
                            </div>
                        </div>
                    </div>

                  )
          }
