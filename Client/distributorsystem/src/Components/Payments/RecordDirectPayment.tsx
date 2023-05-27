import { Button, Divider, Input, Paper, Stack, Table, TableRow, TableBody, TableCell, TableContainer, TextField, styled, TableHead } from "@mui/material";
import NavBar from "../../Global Components/NavBar";


export default function RecordDirectPayment() {
    var test;

    const StyledTextField = styled(TextField)({
        backgroundColor: "#ffffff",
        borderRadius: "22px",
        width: "250px",

    });

    const StyledButton = styled(Button)({
        borderRadius: "22px",
        backgroundColor: '#AFD3E2',
        fontSize: '18px',
        left: '700px',
        color: '#146C94',
        textTransform: "none",
        fontWeight: "bold",
        width: 'fit-content',
        marginTop: '300px',
        marginBottom: '30px',
        display: 'inherit',
        fontFamily: "Inter', sans-serif",
        '&:hover': {
            backgroundColor: '#AB8686',
        },
    });


    const StyledTableRow = styled(TableRow)({
        borderBottom: "2px #AFD3E2 solid",
    });

    const StyledTableRowTitle = styled(TableRow)({
        borderBottom: "5px #AFD3E2 solid",
    });


    const StyledTableCell = styled(TableCell)({
        borderRight: " 3px #AFD3E2 solid",
    });




    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
    ) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 45),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('panpan', 356, 16.0, 49, 3.9),
        createData('panpan', 356, 16.0, 49, 3.9),
        createData('panpan', 356, 16.0, 49, 3.9),
        createData('panpan', 356, 16.0, 49, 3.9),

    ];



    return (
        <div>
        
            <h1 className="MainLabels"> Record Direct Payment </h1>

                <div style={{ position: "relative", top: "70px" }}>
                    <div style={{ position: "absolute", left: "100px", top: "120px" }}>
                        <h3 className="TextFieldLabels">
                            Enter Order Transaction ID
                        </h3>
                        <StyledTextField InputProps={{ disableUnderline: true }} variant="standard"
                            inputRef={test}>

                        </StyledTextField>
                    </div>

                    <div style={{ width: 1000, display: 'flex', position: 'relative', left: '400px', marginBottom: '30px' }} >
                        <div style={{ width: 1100, position: 'absolute', left: '20px', marginBottom: '5px'}}>
                            <h2 className="TableNameLabel">
                                Payment Transactions
                            </h2>
                        </div>

                        <TableContainer component={Paper} sx={{ borderRadius: '22px', maxHeight: "300px", position: "relative", top: "45px" }}>
                            <Table >
                                <TableHead >
                                    <StyledTableRowTitle>
                                        <StyledTableCell align="center" >Payment Transaction ID</StyledTableCell>
                                        <StyledTableCell align="center">Payment Term</StyledTableCell>
                                        <StyledTableCell align="center">Payment Start Date</StyledTableCell>
                                        <StyledTableCell align="center">Payment End Date</StyledTableCell>
                                        <StyledTableCell align="center">Payment Amount Due</StyledTableCell>
                                        <TableCell align="center">Amount Paid? </TableCell>
                                    </StyledTableRowTitle>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow
                                            key={row.name}

                                        >
                                            <StyledTableCell component="th" scope="row" align="center">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                            <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                            <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                            <TableCell align="center">{row.carbs}</TableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </div>

                </div>

                <div style={{ position: "relative", top: "130px" }}>
                    <div style={{ position: "absolute", left: "100px" }}>
                        <h3 className="TextFieldLabels">
                            Payment Transaction ID
                        </h3>
                        <StyledTextField InputProps={{ disableUnderline: true }} variant="standard"
                            inputRef={test}>

                        </StyledTextField>
                    </div>

                    <div style={{ position: "absolute", left: "450px" }}>
                        <h3 className="TextFieldLabels">
                            Date Paid
                        </h3>
                        <StyledTextField InputProps={{ disableUnderline: true }} variant="standard"
                            inputRef={test}>

                        </StyledTextField>
                    </div>
                    <div style={{ position: "absolute", left: "800px" }}>
                        <h3 className="TextFieldLabels">
                            Amount Paid
                        </h3>
                        <StyledTextField InputProps={{ disableUnderline: true }} variant="standard"
                            inputRef={test}>
                        </StyledTextField>
                    </div>

                    <div style={{ position: "absolute", left: "1150px" }}>
                        <h3 className="TextFieldLabels">
                            Remarks
                        </h3>
                        <StyledTextField InputProps={{ disableUnderline: true }} variant="standard"
                            inputRef={test} multiline rows={3} sx={{ width: "300px" }}>
                        </StyledTextField>
                    </div>
                </div>

                <StyledButton variant="contained" >
                    Save Payment Record
                </StyledButton>

        </div >
    )

}