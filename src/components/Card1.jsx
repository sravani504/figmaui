import React from 'react';
import { Button } from '@mui/material';
import { Grid, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import { IoIosSearch } from "react-icons/io";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import XLSX from "sheetjs-style";
import * as FileSaver from "file-saver";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';


import { DatePicker, Radio } from 'antd';
const { RangePicker } = DatePicker;


// import { DateRangePicker } from '@mui/x-date-pickers-pro';

const names = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '10', value: 10 },
];


const Card1 = ({ setSearchTerm, searchTerm, exportData, setExportData, postid, setPostid,setSelectedDateRange,selectedDateRange }) => {


  const [data, setData] = useState([]);
  // const [value, setValue] = React.useState(names[0].value);

  console.log(postid);
  console.log(searchTerm);
  console.log(selectedDateRange);

  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
  const fileExtension = ".xlsx";  


  const exportToExcel = async () => {

    const ws = XLSX.utils.json_to_sheet(exportData);

    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const content = new Blob([excelBuffer], { type: fileType });

    FileSaver.saveAs(content, "tableData" + fileExtension);
  }
  console.log(exportData);



  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])
  console.log(postid);

  const handleDateRangeChange = (dateRange) => {
    setSelectedDateRange(dateRange);
   console.log(dateRange);
  };

  
  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  return (
    <div className='container mb-0' style={{ marginBottom: "0px" }}>
      <Grid container style={{ backgroundColor: "#687574 ", marginTop: "2px", alignItems: "center", borderRadius: "5px" }} display={"flex"} justifyContent={"space-around"} padding={"5px"}>
        <Grid item  alignItems={"center"} justifyContent={"center"} marginTop={"1px"} fontSize="20px" color={"white"}>
          Bill Tracking
        </Grid>
        <Grid item marginTop={"1px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} fontSize="20px" color={"white"}>
          <Grid item  >
            <Typography >Filter By:</Typography>
          </Grid>
          <Grid item ml={1} >
           
            <Grid item ml={3}>
              <Autocomplete
                multiple

                options={names}

                value={postid}
                onChange={(event, newValue) => {
                  setPostid(newValue);
                }}
                sx={{ backgroundColor: "white", color: "black", border: "none", borderRadius: "10,px", width: "200px", "& .MuiOutlinedInput-root": { padding: "0px" }, "& .MuiInputLabel-root": { lineHeight: "13px" }, "& .MuiAutocomplete-endAdornment": { background: "#251d6e", borderRadius: "5px", right: "0px !important", top: "calc(50% - 18px)" }, "& .MuiButtonBase-root": { color: "white", marginRight: "0px !important" }, "& .MuiAutocomplete-input": { textAlign: "center" }, " & .MuiOutlinedInput-root": { right: "0px" }, " & .MuiAutocomplete-root": { right: "80px" }, "& .MuiSvgIcon-root": { height: "31px !important" }, "& .MuiOutlinedInput-input": { alignItems: "center", justifyContent: "center" }, "& .MuiAutocomplete-popper": { justifyContent: "center" }, "& .MuiChip-label": { color: "black" }, "& .MuiButtonBase-root": { backgroundColor: "rgba(7, 7, 8, 0.20)!important", color: "white" } }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Post Id"
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid item mr={3} pl={4} >
            <Typography>IP or UMR No:</Typography>
          </Grid>
          <Grid item pl={1} mr={3} padding={"0px"}>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '17ch', alignItems: "center", justifyContent: "space-between", backgroundColor: "white", borderRadius: "5px", height: "35px", '& .MuiInputBase-input': { padding: "0px" } },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Enter email" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} alignItems="center" variant="outlined" sx={{ '& . MuiOutlinedInput-input': { padding: "0px" }, '& .MuiInputBase-input': { height: "35px" }, '& .MuiFormLabel-root': { justifyContent: "space-between", alignItems: "center", lineHeight: "13px" }, '& .MuiInputAdornment-root': { background: "#251d6e", width: "34px", height: "33px", borderRadius: "5px", padding: "1px", color: "white" }, "& .MuiOutlinedInput-root": { paddingRight: "0px" }, ' & .MuiInputBase-input': { marginLeft: "20px" } }}
                InputProps={{
                  endAdornment: <InputAdornment position="end"><IoIosSearch size={25} style={{ paddingLeft: "2px" }} alignmentBaseline={"central"} /></InputAdornment>
                }}
              />
            </Box>
          </Grid>
{/*      
     <Box mr={3} sx={{width:"320px",padding:"1px",backgroundColor:"white"}}>
     <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DateRangePicker']}  >
        <DateRangePicker onChange={handleDateRangeChange} height={"2px"} sx={{borderRadius:"1opx",height:"25px !important",border:"none !important","& .MuiFormControl-root":{marginLeft:"0px !important"},}} localeText={{ start: 'Start', end: 'End' }} />
      </DemoContainer>
    </LocalizationProvider>
     </Box> */}

     <>
      <Radio.Group  mr={3} value={selectedDateRange} onChange={handleDateRangeChange}>      
      </Radio.Group>    
      <RangePicker  selectedDateRange={selectedDateRange} />
    </> 

     {/* <Box m={1} ml={0}>
          <Button variant='contained' sx={{ marginLeft:"5px",'& > :not(style)':{width:"0px!important"," & .MuiButtonBase-root ":{lineHeight:"80px",padding:"5px 10px"}}}}>Go</Button>
          </Box> */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", marginLeft:"17px" }} >
            <Button variant='contained' onClick={exportToExcel} >Export to Excel</Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Card1;