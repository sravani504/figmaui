import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#c7dbf2",
    padding: "11px",
    color: "#0b0b87",
    fontWeight: "bold"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#291952",
    border: "1px solid #80edeb",
   padding:"9px",
   
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({

  '&:last-child td, &:last-child th': {
    border: 1,
    border: "1px solid #80edeb"
  },
}));

function createData(name, calories, fat, carbs, protein, patient, namep, dp, cb, lc,la) {
  return { name, calories, fat, carbs, protein, patient, namep, dp, cb, lc,la };
}

const rows = [
  createData('ipl23445565','Jeeth singh', 29, 'Male', 9845667324,'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  createData('ipl23445565', 'Jeeth singh', 29,'Male', 9845667324, 'Cash', 'Dr.Priyathosh', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  createData('ipl23445565', 'Jeeth singh', 29, 'Male', 9845667324, 'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  createData('ipl23445565', 'Jeeth singh', 29, 'Male', 9845667324, 'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  createData('ipl23445565', 'Jeeth singh', 29, 'Male',9845667324, 'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  createData('ipl23445565', 'Jeeth singh', 29, 'Male', 9845667324, 'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  createData('ipl23445565', 'Jeeth singh', 29, 'Male', 9845667324, 'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  createData('ipl23445565', 'Jeeth singh', 29, 'Male', 9845667324, 'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  createData('ipl23445565', 'Jeeth singh', 29, 'Male', 9845667324, 'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),

];

export default function EnhancedTables() {
  return (
    <div className='container'>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 700, background: "white" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>In Patient Number</StyledTableCell>
              <StyledTableCell align="right">Patient Name</StyledTableCell>
              <StyledTableCell align="right">Patient Age</StyledTableCell>
              <StyledTableCell align="right">Patient's Gender</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">Payer Type</StyledTableCell>
              <StyledTableCell align="right">Doctor's Name</StyledTableCell>
              <StyledTableCell align="right">Latest Counselled amount</StyledTableCell>
              <StyledTableCell align="right">Current Apporox Bill</StyledTableCell>
              <StyledTableCell align="right">Last counselled By</StyledTableCell>
              <StyledTableCell align="right">Last counselled </StyledTableCell>
             
             
            </TableRow>
          </TableHead>
          <TableBody >
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">{row.patient}</StyledTableCell>
                <StyledTableCell align="right">{row.namep}</StyledTableCell>
                <StyledTableCell align="right">{row.dp}</StyledTableCell>
                <StyledTableCell align="right">{row.cb}</StyledTableCell>
                <StyledTableCell align="right">{row.lc}</StyledTableCell>
                <StyledTableCell align="right">{row.la}</StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}