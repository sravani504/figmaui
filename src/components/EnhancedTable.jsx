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
    backgroundColor: " #e8f0f0b4",
    padding: "11px",
    color: "#3131bd",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    color: "#291952",
    border: "1px solid #80edeb"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({

  '&:last-child td, &:last-child th': {
    border: 1,
    border: "1px solid #80edeb"
  },
}));

function createData(name, calories, fat, carbs, protein, patient, namep, dp, cb, lc) {
  return { name, calories, fat, carbs, protein, patient, namep, dp, cb, lc };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 4, 5, 6, 6, 7, 8),
  createData('Ice cream', 237, 9.0, 37, 4.3, 4, 5, 6, 6, 7,),
  createData('Eclair', 262, 16.0, 24, 6.0, 4, 5, 6, 6, 7,),
  createData('Cupcake', 305, 3.7, 67, 4.3, 4, 5, 6, 6, 7,),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 4, 5, 6, 6, 7,),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 4, 5, 6, 6, 7,),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 4, 5, 6, 6, 7,),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 4, 5, 6, 6, 7,),
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

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
