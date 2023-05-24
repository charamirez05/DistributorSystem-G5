import NavBar from '../../Global Components/NavBar';
import React, { useState } from 'react';
import {TextField, Typography, Grid, Card, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, Autocomplete} from "@mui/material";

interface Product{
  id: number;
  name: string;
}

interface createData{
    id: number;
    quantity: number;
    unit: string;
    product: Product | null;
    unitPrice: number;
    commissionRate: number;
    amount:number;
  }

  

 

const products: Product[] = [
  { id: 1, name: 'Product A' },
  { id: 2, name: 'Product B' },
  { id: 3, name: 'Product C' },
];
  

export default function DistributorOrderForm(){
  const [tableData, setTableData] = useState<createData[]>([]);

  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState('')
  const [unitPrice, setUnitPrice] = useState(0);
  const [commissionRate, setCommissionRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

   const handleUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUnit(event.target.value);
    };
    
   const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuantity(Number(event.target.value));
    };
     const handleUnitPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUnitPrice(Number(event.target.value));
    };
    const handleProductChange = (event: React.ChangeEvent<{}>, value: Product | null) => {
      setSelectedProduct(value);
    };
     const handleComissionRate = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCommissionRate(Number(event.target.value));
    };
     const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(Number(event.target.value));
    };

    const handleAddRow = () => {
      const newRow: createData = {
        id: tableData.length +1,
        quantity: quantity,
        unit: unit,
        product: selectedProduct,
        unitPrice: unitPrice,
        commissionRate: commissionRate,
        amount: amount,

      };

      setTableData([...tableData, newRow]);
      setSelectedProduct(null);
      setQuantity(0);
      setUnit('');
      setUnitPrice(0);
      setCommissionRate(0);
      setAmount(0);
      
    }




    return( 
        <>
        <h1 style={{color:"White", fontFamily:"Verdana", textAlign: "left", marginLeft: "20px"}}>Product Distribution Form</h1>
        <div>
        
         <div style={{marginLeft:"50px", marginTop:"20px",marginRight:"50px", marginBottom:"20px"}}>
         
         <Grid container spacing = {4} sx={{display:"flex", justifyContent: "center"}}>
            <Grid item>
        <Typography sx={{color:"white"}}>Dealer ID</Typography>
      <TextField id="standard-basic" variant="standard" InputProps={{ disableUnderline: true }} sx={{background:"white", borderRadius: 20, input:{
        padding: "10px", color:"#156D94"}}} />
        </Grid>
        <Grid item>
        <Typography sx={{color:"white"}}>Distribution Date</Typography>
      <TextField id="standard-basic" variant="standard" InputProps={{ disableUnderline: true }} sx={{background:"white", borderRadius: 20, input:{
        padding: "10px", color:"#156D94"}}} />
        </Grid>
        <Grid item>
        <Typography sx={{color:"white"}}>Penalty Rate</Typography>
      <TextField id="standard-basic" variant="standard" InputProps={{ disableUnderline: true }} sx={{background:"white", borderRadius: 20, input:{
        padding: "10px", color:"#156D94"}}} />
        </Grid>
        <Grid item>
        <Typography sx={{color:"white"}}>Payment Terms</Typography>
        <Select
        sx={{background:"white", borderRadius: 20, width: 210, height: 45, input:{
        padding: "10px", color:"#156D94"}}}
      >
        <MenuItem value={1}>Cash</MenuItem>
        <MenuItem value={2}>2-Gives</MenuItem>
        <MenuItem value={3}>4-Gives</MenuItem>
      </Select>
        </Grid>
        </Grid>
        <Box sx={{ m: 5 }} /> 
        <div style={{marginLeft:"300px", marginTop:"40px",marginRight:"300px", marginBottom:"40px"}}>
        <Card sx={{padding: 3, display: "flex", justifyContent: "center", alignSelf: "center"}}>
        <Grid container spacing = {3} sx={{display:"flex", justifyContent: "center"}}>
        <Grid item>
        <Typography sx={{color:"#146C94"}}>Product Name</Typography>
        <Autocomplete disablePortal id="flat-demo" options={products} getOptionLabel={(option) => option.name} value={selectedProduct}
        onChange={handleProductChange} sx={{ background:"#AFD3E2", borderRadius: 20, width: 210, height: 40, input:{ color:"#156D94"} }} renderInput={(params) => <TextField {...params} variant='standard' InputProps={{
                            ...params.InputProps, disableUnderline: true}} sx={{ paddingLeft:"5px",paddingTop:"5px",input:{padding:"10px", color:"white"}}} />}/>
        </Grid>
        <Grid item>
        <Typography sx={{color:"#146C94"}}>Quantity</Typography>
      <TextField id="standard-basic" variant="standard"  value={quantity} onChange={handleQuantityChange} InputProps={{ disableUnderline: true }} sx={{background:"#AFD3E2", borderRadius: 20, input:{
        padding: "10px", color:"white"}}} />
        </Grid>
        <Grid item>
        <Button variant='contained' onClick={handleAddRow} style={{maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px', borderRadius: 20, background: "#2A9221"}}>Add to Cart</Button>
        <Box sx={{ m: 3 }} /> 
        <Button variant='contained' style={{maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px', borderRadius: 20, background: "#E77D7D"}}>Remove Item</Button>
        </Grid>
            </Grid>
        </Card>
        </div>
        <div style={{marginLeft:"200px", marginTop:"40px",marginRight:"200px", marginBottom:"40px"}}>
        <Box sx={{ m: 5 }} /> 
        <TableContainer component={Paper} sx={{borderRadius:2}}>
      <Table sx={{ minWidth: 650, color:"#156D94"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center' sx={{color:"#156D94", fontWeight:"bold",borderRight: "3px #AFD3E2 solid"}}>Quantity</TableCell>
            <TableCell align='center' sx={{color:"#156D94", fontWeight:"bold",borderRight: "3px #AFD3E2 solid"}}>Unit</TableCell>
            <TableCell align='center' sx={{color:"#156D94", fontWeight:"bold",borderRight: "3px #AFD3E2 solid"}}>Product Name</TableCell>
            <TableCell align='center' sx={{color:"#156D94", fontWeight:"bold",borderRight: "3px #AFD3E2 solid"}}>Unit Price</TableCell>
            <TableCell align='center' sx={{color:"#156D94", fontWeight:"bold",borderRight: "3px #AFD3E2 solid"}}>Commission Rate</TableCell>
            <TableCell align='center' sx={{color:"#156D94", fontWeight:"bold",borderRight: "3px #AFD3E2 solid"}}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
         
            >
              <TableCell align='center' sx={{color:"#156D94",borderRight: "3px #AFD3E2 solid"}} >{row.quantity}</TableCell>
              <TableCell align='center' sx={{color:"#156D94",borderRight: "3px #AFD3E2 solid"}}>{row.unit}</TableCell>
              <TableCell align='center' sx={{color:"#156D94",borderRight: "3px #AFD3E2 solid"}}>{row.product?.name}</TableCell>
              <TableCell align='center' sx={{color:"#156D94",borderRight: "3px #AFD3E2 solid"}}>{row.unitPrice}</TableCell>
              <TableCell align='center' sx={{color:"#156D94",borderRight: "3px #AFD3E2 solid"}}>{row.commissionRate}</TableCell>
              <TableCell align='center' sx={{color:"#156D94",borderRight: "3px #AFD3E2 solid"}}>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Box sx={{ m: 0.5 }} /> 
    <Grid container spacing = {2} sx={{justifyContent:"right"}}>
    <Grid item>
    <Typography align='center' sx={{color:"white", fontWeight:"bold", padding: 0.5}}>Total Amount: </Typography>
    </Grid>
    <Grid item>
    <Typography align='center' sx={{color:"#156D94", background: "white", width: 75, padding: 0.3, borderRadius: 1}}>20,210</Typography>
    </Grid>
    </Grid>
    </div>
    <Box sx={{ m: 3 }} />
    <Box textAlign='center'>
    <Button variant='contained' sx={{background:"#AFD3E2", color:"#146C94", fontSize: 20, paddingLeft:6,paddingRight:6, fontWeight: 'bold', borderRadius:5}}>Save</Button>
    </Box> 
      </div>
        </div>
        </>
);
}



