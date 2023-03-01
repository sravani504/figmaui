import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {TableFooter} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {BiFirstPage} from "react-icons/bi";
import {MdOutlineKeyboardArrowLeft} from "react-icons/md"
import {MdKeyboardArrowRight} from "react-icons/md";
import {MdOutlineLastPage} from "react-icons/md";
import IconButton from '@mui/material/IconButton';
import TablePagination from '@mui/material/TablePagination';
import { useTheme } from '@emotion/react';
import { Stack,Box,Button } from '@mui/material';
import XLSX from "sheetjs-style";
import * as FileSaver from "file-saver";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#c7dbf2",
    padding: "6px",
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

// function createData(posiId,Id, PatientName, name, PatientGender, PhoneNumber,PayerType,DoctorName,LatestCounselledamount,CurrentApporoxBill, LastCounselledBy) {
//   return { posiId,Id, PatientName, name,PatientGender , PhoneNumber, PayerType,DoctorName,LatestCounselledamount,CurrentApporoxBill,LastCounselledBy };
// }

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <MdOutlineLastPage /> : <BiFirstPage />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <MdKeyboardArrowRight /> : <MdOutlineKeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <MdOutlineKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <BiFirstPage /> : <MdOutlineLastPage />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function EnhancedTables(props) {
   
  // const rows = [
  //   createData('1','ipl23445565','Jeeth singh', 29, 'Male', 9845667324,'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  //   createData('2','ipl23445565', 'Jeeth singh', 29,'Male', 9845667324, 'Cash', 'Dr.Priyathosh', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  //   createData('3','ipl23445565', 'Jeeth singh', 29, 'Male', 9845667324, 'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  //   createData('4','ipl23445565', 'Jeeth singh', 29, 'Male', 9845667324, 'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  //   createData('5','ipl23445565', 'Jeeth singh', 29, 'Male',9845667324, 'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  //   createData('6','ipl23445565', 'Jeeth singh', 29, 'Male', 9845667324, 'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  //   createData('7','ipl23445565', 'Jeeth singh', 29, 'Male', 9845667324, 'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  //   createData('8','ipl23445565', 'Jeeth singh', 29, 'Male', 9845667324, 'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  //   createData('9','ipl23445565', 'Jeeth singh', 29, 'Male', 9845667324, 'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'),
  
  // ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

// const repeateData= Array(repeat).fill(createData('1','ipl23445565','Jeeth singh', 29, 'Male', 9845667324,'Cash', 'Dr.Priyathosh ', 'Rs.1,25,000', 'Rs.1,00,000', 'Nithesh'));

    const [data,setData]=useState([]);

    const getData=()=>{
      fetch('https://jsonplaceholder.typicode.com/comments'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])


  return (
    <div className='container'>
      <TableContainer >
        <Table sx={{ minWidth: 700, background: "white" }} aria-label="customized table">

          <TableHead >
            <TableRow>
              <StyledTableCell>posiId</StyledTableCell>
              <StyledTableCell>Id:</StyledTableCell>
              <StyledTableCell >Name</StyledTableCell>
              <StyledTableCell >email</StyledTableCell>
              <StyledTableCell >body</StyledTableCell>
              {/* <StyledTableCell >Phone Number</StyledTableCell>
              <StyledTableCell>Payer Type</StyledTableCell>
              <StyledTableCell >Doctor's Name</StyledTableCell>
              <StyledTableCell>Latest Counselled amount</StyledTableCell>
              <StyledTableCell align='left'>Current Apporox Bill</StyledTableCell>
              <StyledTableCell align="left">Last Counselled By</StyledTableCell>
              */}
             
            </TableRow>
          </TableHead>
          <TableBody >
          {/* data && data.length>0 && data.map((item)=><p>{item.about}</p>) */}
          {/* const rows = repeatData.flatMap((item, index) => { */}
            {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row) => (
              <StyledTableRow key={row.postId}>
                <StyledTableCell component="th" scope="row">
                  {row.postId}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="left" fontWeight="bold">{row.name}</StyledTableCell>
                <StyledTableCell align="left" fontWeight="bold">{row.email}</StyledTableCell>
                <StyledTableCell align="left">{row.body}</StyledTableCell>
                {/* <StyledTableCell align="left">{row.PhoneNumber}</StyledTableCell>
                <StyledTableCell align="left">{row.PayerType}</StyledTableCell>
                <StyledTableCell align="left">{row.DoctorName}</StyledTableCell>
                <StyledTableCell align="left">{row.LatestCounselledamount}</StyledTableCell>
                <StyledTableCell align="left">{row.CurrentApporoxBill}</StyledTableCell>
                <StyledTableCell align="left">{row.LastCounselledBy}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }} data-testid="view-data-model-pagination">
      <TablePagination
              rowsPerPageOptions={[5, 10, 20, { label: 'All', value: -1 }]}
              // colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
      </Box>

    </div>
  );
}