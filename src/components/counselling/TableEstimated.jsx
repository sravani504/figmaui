import React from 'react';
import { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Stack,Box,Button } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {TableFooter} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TableEstimated = () => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: "#687574",
          padding: "6px",
          color: "white",
          fontWeight: "bold"
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
          color: "white",
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
  return (
    <div className='container' style={{marginBottom: "0px"}}>
    <TableContainer sx={{maxHeight:"calc(100vh - 380px)"}}  >
      <Table  aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell>S.No</StyledTableCell>
            <StyledTableCell>Service Groups</StyledTableCell>
            <StyledTableCell >Specification</StyledTableCell>
            <StyledTableCell >Approx Amount</StyledTableCell>
            <StyledTableCell >body</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
        
         
        </TableBody>
      </Table>
    </TableContainer>
    
  </div>
  );
}

export default TableEstimated;
