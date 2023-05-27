import NavBar from "../../Global Components/NavBar";
import Typography  from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Card, TextField, InputAdornment, TableContainer, Table, TableHead, Paper, TableRow, TableCell, TableBody, Box} from '@mui/material';
import styled from "@emotion/styled";

const StyledButton = styled(Button)({
        position: "relative",
        padding: 5,
        minHeight: 0,
        minWidth: 100,
        borderRadius: "22px",
        backgroundColor: '#AFD3E2',
        fontSize: '14px',
        color: '#146C94',
        textTransform: "none",
        fontWeight: "bold",
        width: 'fit-content',
        fontFamily: "Inter', sans-serif",
        display: 'inline-block',
});

const StyledBottomButton = styled(Button)({
        position: "absolute",
        padding: 5,
        minHeight: 0,
        minWidth: 200,
        borderRadius: "22px",
        backgroundColor: '#AFD3E2',
        fontSize: '14px',
        color: '#146C94',
        textTransform: "none",
        fontWeight: "bold",
        width: 'fit-content',
        fontFamily: "Inter', sans-serif",
        display: 'inline-block',
        marginLeft: "80px",
});

const StyledTextField = styled(TextField)(() => ({
    '& fieldset': {
      borderRadius: '25px',
    },
    fontSize: 10,
    marginLeft: "260px",
    marginTop: "1px",
    marginRight: "10px",
    marginBottom: "-10px"
  }
));

const StyledCard = styled(Card)({
    borderRadius: "20px",
    padding: 1,
    width: 700,
    position: "relative",
    marginLeft: "350px",
    marginTop: "25px"
});

const StyledOrderTransactionCard = styled(Card)({
    borderRadius: "20px",
    padding: 1,
    width: 1000,
    height: 150,
    position: "relative",
    marginLeft: "200px",
    marginTop: "10px"
});

const StyledPaymentTransactionCard = styled(Card)({
    borderRadius: "20px",
    padding: 1,
    width: 1000,
    height: 300,
    position: "relative",
    marginLeft: "200px",
    marginTop: "10px"
});

const StyledTypography = styled(Typography)({
    fontSize: 15,
    color: "#146C94",
    fontWeight: "bold"
});

const StyledOrderTypography = styled(Typography)({
    fontSize: 12,
    color: "#146C94",
    fontWeight: "bold"
});

const StyledTableHead = styled(TableHead)({
    backgroundColor: '#AFD3E2'
});

const TableHeaderCell = styled(TableCell)({
    fontSize: 15,
    color: "#146C94",
    fontWeight: "bold"
});

export default function Schedules(){
    return( 
        <div>

            <StyledCard>
                <CardContent>
                    <StyledTypography sx={{marginTop: "15px", marginBottom: "-40px", marginLeft: "-400px"}}>
                        Search Order Transaction ID
                    </StyledTypography>
                    <StyledTextField InputProps={{
                        startAdornment: (
                            <InputAdornment position = "start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}>
                    </StyledTextField>
                    <StyledButton sx = {{marginTop: "10px", marginLeft: "20px", '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#000000'
                }}} variant = "contained">Search</StyledButton>
                </CardContent>
            </StyledCard>

            <StyledOrderTransactionCard>
                <CardContent>
                    <StyledTypography align="center" sx = {{marginBottom: '1px'}}>Order Transaction Details</StyledTypography>
                    <TableContainer>
                        <Table aria-label = 'simple table'>
                            <TableHead>
                                <TableRow>
                                    <TableHeaderCell align="center">Order Transaction ID</TableHeaderCell>
                                    <TableHeaderCell align="center">Dealer Name</TableHeaderCell>
                                    <TableHeaderCell align="center">Distribution Date</TableHeaderCell>
                                    <TableHeaderCell align="center">Payment Terms</TableHeaderCell>
                                    <TableHeaderCell align="center">Total Ordered Amount</TableHeaderCell>
                                    <TableHeaderCell align="center">Penalty Rate</TableHeaderCell>
                                </TableRow>
                            </TableHead>                            
                            <TableBody>
                                <TableRow>
                                    <TableCell align = 'center'>67CjBj</TableCell>
                                    <TableCell align = 'center'>Installment (1st give)</TableCell>
                                    <TableCell align = 'center'>18/03/2023</TableCell>
                                    <TableCell align = 'center'>02/04/2023</TableCell>
                                    <TableCell align = 'center'>Php 5,000.00</TableCell>
                                    <TableCell align = 'center'>asdasjdksaj</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </StyledOrderTransactionCard>
            <StyledPaymentTransactionCard>
                <CardContent>
                    <TableContainer component = {Paper} sx = {{ maxHeight: '300px'}}>
                        <Table aria-label = 'simple table' stickyHeader>
                            <StyledTableHead>
                                <TableRow>
                                    <TableHeaderCell align="center">Payment Transaction ID</TableHeaderCell>
                                    <TableHeaderCell align="center">Payment Terms</TableHeaderCell>
                                    <TableHeaderCell align="center">Starting Date</TableHeaderCell>
                                    <TableHeaderCell align="center">Ending Date</TableHeaderCell>
                                    <TableHeaderCell align="center">Amount Due</TableHeaderCell>
                                </TableRow>
                            </StyledTableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align = 'center'>67CjBj</TableCell>
                                    <TableCell align = 'center'>Installment (1st give)</TableCell>
                                    <TableCell align = 'center'>18/03/2023</TableCell>
                                    <TableCell align = 'center'>02/04/2023</TableCell>
                                    <TableCell align = 'center'>Php 5,000.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </StyledPaymentTransactionCard>
            <Box sx = {{marginTop: "10px", marginRight: "150px"}} textAlign = 'center'>
                <StyledBottomButton sx = {{'&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#000000'
                }}} 
                onClick = {() => {
                    
                }}>Edit</StyledBottomButton>
            </Box>
        </div>
    );
}