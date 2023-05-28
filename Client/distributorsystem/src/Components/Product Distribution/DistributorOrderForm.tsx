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


export default function DistributorOrderForm() {

  const [tableData, setTableData] = useState<{ quantity:number; productName: string; productPrice: number; productUnit: string; productCommissionRate: number; productAmount: number; }[]>([]);

  const [newOrder, order,] = useRest();

  const [products, setProducts] = useState<IProduct[]>([]);

  const [orderedProducts, setOrderedProducts] = useState<IOrderedProducts[]>([]);

  const [chosenProduct, setChosenProduct] = useState<IProduct>();

  const [paymentTerm, setPaymentTerm] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);



  const quantityRef = useRef<TextFieldProps>(null)
  const distributionDateRef = useRef<TextFieldProps>(null)
  const penaltyRateRef = useRef<TextFieldProps>(null)
  const dealerIDRef = useRef<TextFieldProps>(null)

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


  const handleAddProduct = () => {
    const value = quantityRef.current?.value;
   
    if (chosenProduct) {
      const quantity = parseInt(value as string);
      const productAmount = quantity * chosenProduct.productPrice;
      const newTableData = [...tableData, {
        quantity: parseInt(value as string),
        productName: chosenProduct.productName,
        productPrice: chosenProduct.productPrice,
        productUnit: chosenProduct.productUnit,
        productCommissionRate: chosenProduct.commissionRate,
        productAmount: productAmount
      }];
      const updatedTotalAmount = newTableData.reduce((sum, product) => sum + product.productAmount, 0);
      setTotalAmount(updatedTotalAmount);

      setTableData(newTableData);
    }
  };

  const handleRemoveLastProduct = () => {
    const lastProduct = tableData[tableData.length - 1];
    const lastProductAmount = lastProduct.productAmount;

    setTableData(tableData.slice(0, -1));
    setTotalAmount(totalAmount - lastProductAmount);

    setOrderedProducts(orderedProducts.slice(0, -1));
  };


  return (
    <>
      <div>
        <div style={{ marginLeft: "50px", marginTop: "20px", marginRight: "50px", marginBottom: "20px" }}>
          <h1 style={{ color: "White", fontFamily: "Verdana" }}>Product Distribution Form</h1>
          <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item>
              <Typography sx={{ color: "white" }}>Dealer ID</Typography>
              <StyledTextField id="standard-basic" variant="standard" InputProps={{ disableUnderline: true }} inputRef={dealerIDRef} />
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
                  <Button variant='contained' style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px', borderRadius: 20, background: "#2A9221" }} onClick={() => {handleAddProduct(); setOrderedProducts([...orderedProducts, createOrderedProduct(chosenProduct!.productID, Number(quantityRef.current?.value))]);}}>Add to Cart</Button>


                  <Box sx={{ m: 3 }} />
                  <Button variant='contained' style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px', borderRadius: 20, background: "#E77D7D" }}
                    onClick={() => { handleRemoveLastProduct(); }}>Remove Item</Button>
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
                  {tableData.map((row) => (
                    <TableRow

                    >
                      <TableCell align='center' sx={{ color: "#156D94", borderRight: "3px #AFD3E2 solid" }} >{row.quantity}</TableCell>
                      <TableCell align='center' sx={{ color: "#156D94", borderRight: "3px #AFD3E2 solid" }}>{row.productUnit}</TableCell>
                      <TableCell align='center' sx={{ color: "#156D94", borderRight: "3px #AFD3E2 solid" }}>{row.productName}</TableCell>
                      <TableCell align='center' sx={{ color: "#156D94", borderRight: "3px #AFD3E2 solid" }}>{row.productPrice}</TableCell>
                      <TableCell align='center' sx={{ color: "#156D94", borderRight: "3px #AFD3E2 solid" }}>{row.productCommissionRate}</TableCell>
                      <TableCell align='center' sx={{ color: "#156D94", borderRight: "3px #AFD3E2 solid" }}>{row.productAmount}</TableCell>
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
                <Typography align='center' sx={{ color: "#156D94", background: "white", width: 75, padding: 0.3, borderRadius: 1 }}>{totalAmount}</Typography>
              </Grid>
            </Grid>
          </div>
          <Box sx={{ m: 3 }} />
          <Box textAlign='center'>
            <Button variant='contained' sx={{ background: "#AFD3E2", color: "#146C94", fontSize: 20, paddingLeft: 6, paddingRight: 6, fontWeight: 'bold', borderRadius: 5 }}
              onClick={() => {
                newOrder(
                  {
                    orderID: -1,
                    distributionDate: distributionDateRef.current?.value + "",
                    orderDate: "asdfghh",
                    penaltyRate: Number(penaltyRateRef.current?.value),
                    paymentTerms: paymentTerm + "",
                    orderAmount: 0,
                    collectorID: -1,
                    dealerID: Number(dealerIDRef.current?.value),
                    orderedProducts: orderedProducts,
                    
                  }
                )
              }}>Save</Button>
          </Box>
        </div>
      </div >
    </>
  );

}

