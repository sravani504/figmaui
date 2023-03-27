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
import content from "../../src/content.json";
import moment from "moment";
import dayjs from 'dayjs';

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

export default function EnhancedTables({searchTerm,setExportData,postid,selectedDateRange}) {
// console.log(exportData);
console.log(postid);
console.log(selectedDateRange);
  console.log(content);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [defaultData,setDefaultData]=useState(content);
  const [data,setData]=useState(content);
  console.log(data);



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  
   

    // const getData=()=>{
    //   fetch('https://jsonplaceholder.typicode.com/comments'
    //   ,{
    //     headers : { 
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //      }
    //   }
    //   )
    //     .then(function(response){
    //       return response.json();
    //     })
    //     .then(function(myJson) {
    //       console.log(myJson);
    //       setData(myJson)
    //       setDefaultData(myJson)
    //     });
    // }

    // useEffect(()=>{
    //   getData();
    // },[])

    // const getStaticData=()=>
    // { 
    //   console.log(content);
    //   setData(content);
    //   setDefaultData(content);
    // }
    // useEffect(()=>{
    //   getStaticData();
    // },[])

    useEffect(()=>
    {
     const filterData = defaultData.filter((item) => {
        const itemDate = new Date(item.date); 
        const changedDate = dayjs(itemDate).format("YYYY-MM-DD");
        console.log(dayjs(selectedDateRange[0]).format('YYYY-MM-DD'),dayjs(selectedDateRange[1]).format('YYYY-MM-DD'));
        return dayjs(selectedDateRange[0]).format("YYYY-MM-DD") <= changedDate && changedDate <= dayjs(selectedDateRange[1]).format("YYYY-MM-DD")
      });
      setData(filterData);
      setExportData(filterData);
    },[selectedDateRange]);

    console.log(data);
     
     useEffect(()=>
     {
      if(searchTerm === "" )
      {
         setData(defaultData)
         setExportData(defaultData);
      }else{
        const filteredData=defaultData.filter((item)=>{
          return item.email.toLowerCase().includes(searchTerm.toLowerCase());
         })
         setData(filteredData);
         setExportData(filteredData);
      }    
     },[searchTerm]);

     console.log(postid);
     useEffect(()=>
     {
      if(postid?.length=== 0)
      {
        if(searchTerm === "")
        {
          setData(defaultData);
          console.log(defaultData);
          setExportData(defaultData)    
        }else
        {
          const filteredData=defaultData.filter((item)=>{
            return item.email.toLowerCase().includes(searchTerm.toLowerCase());
           })
          console.log(filteredData);
          setData(filteredData);
          setExportData(filteredData)    
        }
        setData(defaultData);
        setExportData(defaultData);
      }else if(postid?.length > 0){
        // const updatedpostData=defaultData.filter((item)=>{
        //   return item.postId == postid
        // }) 
        const intersection = defaultData.filter(obj1 => postid.some(obj2 => obj1.postId === obj2.value));
        if(searchTerm === "")
        {
          setData(intersection);
          console.log(intersection);
          setExportData(intersection)    
        }else
        {
          const filteredData=intersection.filter((item)=>{
            return item.email.toLowerCase().includes(searchTerm.toLowerCase());
           })
          console.log(filteredData);
          setData(filteredData);
          setExportData(filteredData)    
        }
      }
     },[postid,searchTerm]);


  
console.log(data);
  return (
    <div className='container' style={{marginBottom: "0px"}}>
      <TableContainer sx={{maxHeight:"calc(100vh - 380px)"}} >
        <Table sx={{ minWidth: 100, background: "white" }} aria-label="customized table">
          <TableHead >
            <TableRow>
              <StyledTableCell>postId</StyledTableCell>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell >Name</StyledTableCell>
              <StyledTableCell >email</StyledTableCell>
              <StyledTableCell >body</StyledTableCell>
              <StyledTableCell >Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody >

            {( data &&  rowsPerPage > 0 && 
                data.slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage)
                  ).map((row,index) => (
              <StyledTableRow key={index}>
                <StyledTableCell >{row.postId}</StyledTableCell>
                <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                <StyledTableCell align="left" fontWeight="bold">{row.name}</StyledTableCell>
                <StyledTableCell align="left" fontWeight="bold">{row.email}</StyledTableCell>
                <StyledTableCell align="left">{row.body}</StyledTableCell>
                <StyledTableCell align="left">{row.date}</StyledTableCell>

                {/* {(content.map((content,index)=> (
                    <StyledTableRow key={index}>
                      <StyledTableCell align="left" fontWeight="bold">{content.date}</StyledTableCell>
                      <StyledTableCell align="left" fontWeight="bold">{content.id}</StyledTableCell>
                      <StyledTableCell align="left" fontWeight="bold">{content.date}</StyledTableCell>
                    </StyledTableRow>
                   )))} */}
              </StyledTableRow>
            ))}
           
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }} data-testid="view-data-model-pagination">
      <TablePagination
              rowsPerPageOptions={[20, { label: 'All', value: data?.length }]} 
              count={data?.length}
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