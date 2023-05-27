import React, { useEffect, useRef, useState } from 'react';
import { Typography, Grid, Card, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, Autocomplete, styled, TextField, SelectChangeEvent, TextFieldProps } from "@mui/material";
import axios from 'axios';
import { useRest, IOrderedProducts, IProduct } from '../../restCalls/orderUseRest';



function createData(
  quantity: number,
  unit: string,
  productName: string,
  unitPrice: number,
  commissionRate: number,
  amount: number
) {
  return { quantity, unit, productName, unitPrice, commissionRate, amount };
}

const rows = [
  createData(5, 'piece', 'Lotion (90 mL)', 500, 9, 2750),
  createData(5, 'box', 'Perfume (120 mL)', 500, 9, 2750),
  createData(5, 'piece', 'toothpaste (150 g tube)', 500, 9, 2750),
  createData(5, 'piece', 'Shampoo (20 mL)', 500, 9, 2750),
  createData(5, 'piece', 'Conditioner (20 mL)', 500, 9, 2750),
];

 
const StyledProductTextField = styled(TextField)({
  backgroundColor: "#AFD3E2", borderRadius: "22px", input: {
    padding: "10px", color: "black"
  },
  width: '200px',

});

const StyledTextField = styled(TextField)({
  backgroundColor: "#ffffff", borderRadius: "22px", input: {
    padding: "10px", color: "black"
  },
  width: '200px',

});

const StyledTyporaphy = styled(Typography)({
  position: 'relative',
  backgroundColor: '#146C94',
  textAlign: 'left',
  color: '#146C94',
  fontSize: '12px',
  right: '10px',
  top: '6px',
  fontFamily: 'Inter, sans - serif',
});


export default function DistributorOrderForm() {

  const [newOrder, order, ] = useRest();

  const [products, setProducts] = useState<IProduct[]>([]);

  const [orderedProducts, setOrderedProducts] = useState<IOrderedProducts[]>([]);

  const [chosenProduct, setChosenProduct] = useState<IProduct>();

  const [paymentTerm, setPaymentTerm] = useState(0);

  const quantityRef = useRef<TextFieldProps>(null)
  const distributionDateRef = useRef<TextFieldProps>(null)
  const penaltyRateRef = useRef<TextFieldProps>(null)

  function createOrderedProduct(productId: number, quantity: number): IOrderedProducts {
    return {
      productID: productId,
      quantity: quantity,
    };
  }

  useEffect(() => {
    getAllProducts();
    console.log(chosenProduct)
  }, []);

  function getAllProducts() {
    axios.get<IProduct[]>('http://localhost:3000/products/getAllProducts')
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving products:', error);
        alert("Error retrieving products. Please try again.");
      });
  }


  return (
    <>
      <div>
        <div style={{ marginLeft: "50px", marginTop: "20px", marginRight: "50px", marginBottom: "20px" }}>
          <h1 style={{ color: "White", fontFamily: "Verdana" }}>Product Distribution Form</h1>
          <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item>
              <Typography sx={{ color: "white" }}>Dealer ID</Typography>
              <StyledTextField id="standard-basic" variant="standard" InputProps={{ disableUnderline: true }} />
            </Grid>
            <Grid item>
              <Typography sx={{ color: "white" }}>Distribution Date</Typography>
              <StyledTextField id="standard-basic" variant="standard" InputProps={{ disableUnderline: true }} inputRef={distributionDateRef} />
            </Grid>
            <Grid item>
              <Typography sx={{ color: "white" }}>Penalty Rate</Typography>
              <StyledTextField id="standard-basic" variant="standard" InputProps={{ disableUnderline: true }} inputRef={penaltyRateRef} />
            </Grid>

            <Grid item>
              <Typography sx={{ color: "white" }}>Payment Terms</Typography>
              <Select
                sx={{
                  background: "white", borderRadius: 20, width: 210, height: 45, input: {
                    padding: "10px", color: "#156D94"
                  }
                }}
                value={paymentTerm}
                onChange={(event) => setPaymentTerm(Number(event.target.value))}>
                <MenuItem value={1}>Cash</MenuItem>
                <MenuItem value={2}>2-Gives</MenuItem>
                <MenuItem value={3}>4-Gives</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Box sx={{ m: 5 }} />
          <div style={{ marginLeft: "300px", marginTop: "40px", marginRight: "300px", marginBottom: "40px" }}>
            <Card sx={{ padding: 3, display: "flex", justifyContent: "center", alignSelf: "center" }}>
              <Grid container spacing={3} sx={{ display: "flex", justifyContent: "center" }}>
                <Grid item>


                  <Typography sx={{ color: "#146C94" }}>Product Name</Typography>


                  <Autocomplete disablePortal id="flat-demo" options={products}
                    getOptionLabel={(option) => option.productName}
                    value={chosenProduct}
                    onChange={(event, newValue) => setChosenProduct(newValue!)}
                    renderInput={(params) => (<StyledProductTextField {...params} variant='standard' InputProps={{
                      ...params.InputProps, disableUnderline: true
                    }}

                    />)}


                  />
                </Grid>


                <Grid item>
                  <Typography sx={{ color: "#146C94" }}>Quantity</Typography>
                  <StyledProductTextField id="standard-basic" variant="standard" InputProps={{ disableUnderline: true }} inputRef={quantityRef} />
                </Grid>
                <Grid item>
                  <Button variant='contained' style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px', borderRadius: 20, background: "#2A9221" }} onClick={() => setOrderedProducts([...orderedProducts, createOrderedProduct(chosenProduct!.productID, Number(quantityRef.current?.value))])}>Add to Cart</Button>


                  <Box sx={{ m: 3 }} />
                  <Button variant='contained' style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px', borderRadius: 20, background: "#E77D7D" }}
                    onClick={() => { console.log(orderedProducts); console.log(paymentTerm) }}>Remove Item</Button>
                </Grid>
              </Grid>
            </Card>
          </div>
          <div style={{ marginLeft: "200px", marginTop: "40px", marginRight: "200px", marginBottom: "40px" }}>
            <Box sx={{ m: 5 }} />
            <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
              <Table sx={{ minWidth: 650, color: "#156D94" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align='center' sx={{ color: "#156D94", fontWeight: "bold", borderRight: "3px #AFD3E2 solid" }}>Quantity</TableCell>
                    <TableCell align='center' sx={{ color: "#156D94", fontWeight: "bold", borderRight: "3px #AFD3E2 solid" }}>Unit</TableCell>
                    <TableCell align='center' sx={{ color: "#156D94", fontWeight: "bold", borderRight: "3px #AFD3E2 solid" }}>Product Name</TableCell>
                    <TableCell align='center' sx={{ color: "#156D94", fontWeight: "bold", borderRight: "3px #AFD3E2 solid" }}>Unit Price</TableCell>
                    <TableCell align='center' sx={{ color: "#156D94", fontWeight: "bold", borderRight: "3px #AFD3E2 solid" }}>Commission Rate</TableCell>
                    <TableCell align='center' sx={{ color: "#156D94", fontWeight: "bold", borderRight: "3px #AFD3E2 solid" }}>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow

                    >
                      <TableCell align='center' sx={{ color: "#156D94", borderRight: "3px #AFD3E2 solid" }} >{row.quantity}</TableCell>
                      <TableCell align='center' sx={{ color: "#156D94", borderRight: "3px #AFD3E2 solid" }}>{row.unit}</TableCell>
                      <TableCell align='center' sx={{ color: "#156D94", borderRight: "3px #AFD3E2 solid" }}>{row.productName}</TableCell>
                      <TableCell align='center' sx={{ color: "#156D94", borderRight: "3px #AFD3E2 solid" }}>{row.unitPrice}</TableCell>
                      <TableCell align='center' sx={{ color: "#156D94", borderRight: "3px #AFD3E2 solid" }}>{row.commissionRate}</TableCell>
                      <TableCell align='center' sx={{ color: "#156D94", borderRight: "3px #AFD3E2 solid" }}>{row.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ m: 0.5 }} />
            <Grid container spacing={2} sx={{ justifyContent: "right" }}>
              <Grid item>
                <Typography align='center' sx={{ color: "white", fontWeight: "bold", padding: 0.5 }}>Total Amount: </Typography>
              </Grid>
              <Grid item>
                <Typography align='center' sx={{ color: "#156D94", background: "white", width: 75, padding: 0.3, borderRadius: 1 }}>20,210</Typography>
              </Grid>
            </Grid>
          </div>
          <Box sx={{ m: 3 }} />
          <Box textAlign='center'>
            <Button variant='contained' sx={{ background: "#AFD3E2", color: "#146C94", fontSize: 20, paddingLeft: 6, paddingRight: 6, fontWeight: 'bold', borderRadius: 5 }}
            onClick={() => {
              newOrder(
                { 
                  distributionDate: distributionDateRef.current?.value+"", orderDate: "asdfghh", 
                  penaltyRate: Number(penaltyRateRef.current?.value), 
                  paymentTerms: paymentTerm+"", 
                  collectorStatus: "", 
                  orderedProducts: orderedProducts
                }
              )}}>Save</Button>
        </Box>
      </div>
    </div >
    </>
  );

}

