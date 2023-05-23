import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

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
    // description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 250,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, dealerName:'John Doe', dateDue: '18/03/2023',amountDue: "Php 55,000.00", collectorStatus:'Assigned', collectorName:'Jose Reyes' },
  { id: 2, dealerName:'Jane Doe', dateDue: '18/03/2023',amountDue: "Php 65,000.00", collectorStatus:'Assigned', collectorName:'Jose Reyes' },

];

export default function DataGridOrder() {
  const headerClassName = "custom-header";
  return (
    <Box sx={{ height: 400, width: '100%',color: '#146C94' }}>
      <DataGrid
        rows={rows}
        sx={{textAlign:'center',color:'#146C94'}}
        columns={columns.map((column) => ({
          ...column,
          headerClassName,
        }))}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      <style>{`
        .${headerClassName} {
          background-color: #AFD3E2;
          fontWeight: bold;
        }
      `}</style>
    </Box>
  );
}