import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';
import CardActions from '@mui/material/CardActions';
import { Autocomplete, Button, Card, TextField, Typography } from '@mui/material';
import { useState } from 'react';

      // --Column / data headers for Collector Assignment
        const columns: GridColDef[] = [ 
          { field: 'id', headerName: 'Order Transaction ID#', width: 200 },
          {
            field: 'dealerName',
            headerName: 'Dealer Name',
            width: 250,
            editable: false,
          
          },
          {
            field: 'dateDue',
            headerName: 'Payment Due Date',
            width: 200,
            editable: false,
          },
          
          {
            field: 'amountDue',
            headerName: 'Amount Due',
            width: 200,
            editable: false,
          },
          {
            field:'collectorStatus',
            headerName:'Collector Status',
            width: 250,
            editable:false
          },
        
          {
            field: 'collectorName',
            headerName: 'Collector Name',
            sortable: true,
            width: 250,
            // valueGetter: (params: GridValueGetterParams) =>
            //  `${params.row.firstName || ''} ${params.row.lastName || ''}`,
          },
        ];

            // --Temporary Records for Collector Assignment
                const initialRows = [
                  { id: 1, 
                    dealerName:'John Doe', 
                    dateDue: '18/03/2023',
                    amountDue: "Php 55,000.00", 
                    collectorStatus:'Assigned', 
                    collectorName:'Jose Reyes' 
                  },

                  { id: 2, 
                    dealerName:'Jane Doe',
                    dateDue: '18/03/2023',
                    amountDue: "Php 65,000.00",
                      collectorStatus:'Assigned', 
                      collectorName:'Jose Reyes' },

                  { id: 3, 
                    dealerName:'Jane Doe',
                    dateDue: '18/03/2023',
                    amountDue: "Php 65,000.00", 
                    collectorStatus:'Assigned', 
                    collectorName:'Jose Reyes' },

                  { id: 4,
                    dealerName:'Jane Doe', 
                    dateDue: '18/03/2023',
                    amountDue: "Php 65,000.00", 
                    collectorStatus:'Assigned', 
                    collectorName:'Jose Reyes' },
                ];
        
        
      //Auto Completion or combo box for Assigning a collector    
          const collectorName=[
              { label: 'Cherry Gil', id: 1 },
              { label: 'Gardo Versoza', id: 2 },
              { label: 'Jose Legazpi', id: 3 },
              { label: 'Maria Gomez', id: 4 }
          ];


//DataGrid Function 
    export default function DataGridOrder() {
            const [selectedCollector, setSelectedCollector] = useState<any>(null); // State for the selected collector
            const [selectedCollectorId, setSelectedCollectorId] = useState<number | null>(null); // State for the selected collector ID
            const [selectedRows, setSelectedRows] = useState<number[]>([]); // State for selection of rows 
            const [rows, setRows] = React.useState(initialRows); // State for grouping order transaction
            const [groupByValue, setGroupByValue] = useState(''); // // State for the groupBy input value

                const headerClassName = "custom-header"; // For Header Columns and styling
            
            // Handler for data grid in row selection
                const handleRowSelection = (selectionModel: GridRowId[]) => {
                    const selectedRowIds = selectionModel.map((id) => Number(id));
                    setSelectedRows(selectedRowIds);
                };  

            // Handler for removing collector Button 
                const handleRemoveCollector = () => {
                      const updatedRows = rows.map((row) => {
                        if (selectedRows.includes(row.id)) {
                          return {
                            ...row,
                            collectorName: '',
                            collectorStatus: 'Not Assigned',
                          };
                        }
                        return row;
                      });
                    setRows(updatedRows);
                    setSelectedRows([]);
                };    

            // Handler for Assigning Collector Button 
                const handleAssignCollector = () => {
                  if (selectedCollectorId !== null) {
                      const updatedRows = rows.map((row) => {
                        if (selectedRows.includes(row.id)) {
                          return {
                            ...row,
                            collectorName: selectedCollector?.label || '',
                            collectorStatus: 'Assigned',
                          };
                        }
                        return row;
                      });
                    setRows(updatedRows);
                    setSelectedRows([]);
                  }
                };
            // Handler for Group Transaction Button 
                const handleGroupTransaction = () => {
                  const count = parseInt(groupByValue.trim(), 10);
                  const selectedRowIds = rows.slice(0, count).map((row) => row.id);
                  setSelectedRows(selectedRowIds);
                };

  // **Return Statement Here**
          return (
                  <Box sx={{ height: 400, width: '100%',color: '#146C94' }}>
                      <Card sx={{height:550, margin:"10px 0px 20px 0px", borderRadius:"25px"}}>
                          <div style={{display: "flex", flexDirection: "row"}}>
                              <div style={{ display: 'flex', alignItems: 'center', marginTop:'10px'}}> 
                                  {/* Typography-Group Transactions */}
                                    <Typography gutterBottom variant="h6" style={{ textAlign: 'left', fontWeight: 'bold', margin: '0px 0px 0px 30px', color:'#146C94',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <span style={{ textAlign: 'left', fontSize: '18px'}}>Group Transactions by</span>
                                          {/* TextField For Group Transaction */}
                                            <TextField  
                                                value={groupByValue} 
                                                onChange={(e) => setGroupByValue(e.target.value)} 
                                                id="standard-basic"
                                                variant="standard" 
                                                InputProps={{ disableUnderline: true }} 
                                                sx={{
                                                  margin: '0px 0px 0px 20px',
                                                  width:'100px',
                                                  background:"#E9E9E9", 
                                                  borderRadius: '5px', 
                                                  input:{ padding: "10px", color:'#146C94'}
                                                }}/>
                                    </Typography>

                                  {/* Button- Group Transcations */}
                                    <CardActions sx={{  alignItems: 'center', marginLeft: '10px' }}>
                                          <Button onClick={handleGroupTransaction} variant="contained" 
                                            sx={{ 
                                              height:'50px',
                                              borderRadius:'15px', 
                                              color: '#146C94',
                                              fontWeight:'bold', 
                                              backgroundColor: '#AFD3E2', 
                                              '&:hover': { backgroundColor: '#AFD3E2FF' } 
                                            }}>
                                              Group Transaction
                                            </Button>
                                    </CardActions>
                              </div> 

                              <div style={{ display: "flex", alignItems: "center",marginTop:'20px' }}> 
                                  {/* Typography- Assign Collector */}
                                  <Typography gutterBottom variant="h6" style={{ textAlign: 'left', fontWeight: 'bold', margin: '0px 0px 10px 20px', color:'#146C94',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                     <span style={{ textAlign: 'left', fontSize: '18px'}}>Assign to</span>
                                  </Typography>

                                  {/* Combo box- Assign Collector */}
                                  <CardActions sx={{  alignItems: 'center', marginLeft: '10px' }}>
                                      <Autocomplete
                                          disablePortal
                                          id="combo-box-demo"
                                          options={collectorName}
                                          size="small"
                                          value={selectedCollector}
                                          onChange={(event, newValue) => {
                                              setSelectedCollector(newValue); // update the selected collector
                                              setSelectedCollectorId(newValue?.id || null); // update the selected collector ID
                                          }}
                                          // ...
                                          sx={{ width: 150, maxHeight: '200px', fontSize: '30px', margin: '0px 0px 0px 0px' }}
                                          renderInput={
                                            (params) => 
                                            <TextField {...params}  
                                              InputProps={{ ...params.InputProps, disableUnderline: true, 
                                                style:{ fontSize: "15px", backgroundColor: "#E9E9E9",
                                                borderRadius: '5px', height:'50px', paddingLeft:'5px',margin: '0px 0px 10px 0px'}
                                              }} 
                                              variant="standard"
                                            />}
                                       />
                                      {/* Button- Assign Collector */}
                                      <Button variant="contained" onClick={handleAssignCollector} 
                                          sx={{ 
                                            marginLeft:'20px', 
                                            marginBottom:'11px',
                                            height:'50px',
                                            borderRadius:'15px',
                                            fontWeight:'bold', 
                                            color: '#146C94', 
                                            backgroundColor: '#AFD3E2', 
                                            '&:hover': { backgroundColor: '#AFD3E2FF' } 
                                            }}>Assign / Reassign Collector
                                      </Button>
                                  </CardActions>
                              </div>
                              {/* Button- Remove Collector */}
                              <CardActions sx={{  alignItems: 'center', marginLeft: '10px', marginTop:'20px',marginBottom:'11px' }}>
                                  <Button variant="contained"  
                                    onClick={handleRemoveCollector} 
                                    sx={{
                                       marginLeft:'20px',
                                       height:'50px',
                                       borderRadius:'15px',
                                       color: 'white',
                                       fontWeight:'bold', 
                                       backgroundColor: '#E77D7D', '&:hover': { backgroundColor: '#E77D7DFF' } 
                                    }}>
                                      Remove Collector
                                  </Button>
                              </CardActions>
                          </div>
                      {/* Box for DataGrid Table */}       
                      <Box sx={{ height: '100%', marginTop: '20px' }}>
                          <DataGrid
                              rows={rows}
                              sx={{textAlign:'center',color:'#146C94', height:'300px'}}
                              columns={columns.map((column) => ({
                                        ...column,
                                        headerClassName,
                                      }))
                              }
                              initialState={{
                                pagination: {
                                  paginationModel:{
                                    pageSize: 5,
                                  },
                                },
                              }}
                              pageSizeOptions={[5]}
                                      checkboxSelection
                                      onRowSelectionModelChange={(handleRowSelection)}
                                      rowSelectionModel={selectedRows}
                                      //disableRowSelectionOnClick
                          />
                      </Box>
                          <style>{`
                              .${headerClassName} {
                                background-color: #AFD3E2;
                                fontWeight: bold;
                              }
                          `}</style>
                     </Card>
                  </Box>
            );
          }