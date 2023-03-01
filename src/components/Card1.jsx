import React from 'react';
import { Button } from '@mui/material';
import { Grid, Box } from '@mui/material';
import { useState,useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { IoIosSearch } from "react-icons/io";
import InputAdornment from "@mui/material/InputAdornment";
import XLSX from "sheetjs-style";
import * as FileSaver from "file-saver";



const Card1 = () => {
  const names = [
    { label: 'john', },
    { label: 'peter' },
    { label: 'Nick' },
    { label: 'Rayon' },
    { label: 'Niveth' },
  ];

  const fileType='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8'; 
  const fileExtension = ".xlsx";
 

  const exportToExcel = async () => {

    const ws = XLSX.utils.json_to_sheet (data);
    
    const wb= { Sheets: { 'data': ws }, SheetNames: ['data'] };
    
    const excelBuffer =XLSX.write(wb, {bookType: 'xlsx', type: 'array' });
     const content = new Blob([excelBuffer], { type: fileType });
    
    FileSaver.saveAs (content, "tableData" + fileExtension);
    
    }


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
    <div className='container mb-0' style={{marginBottom: "0px"}}>
      <Grid container style={{ backgroundColor: "#687574 ", marginTop: "2px", alignItems: "center", borderRadius: "5px" }} display={"flex"} justifyContent={"space-between"} padding={"5px"}>
        <Grid item alignItems={"center"} justifyContent={"center"} marginTop={"1px"} fontSize="20px" color={"white"} paddingLeft={"20px"}>
          Bill Tracking
        </Grid>
        <Grid item marginTop={"1px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} fontSize="20px" color={"white"}>
          <Grid item>
            <Typography>Filter By:</Typography>
          </Grid>
          <Grid item ml={1}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={names}
              sx={{ backgroundColor: "white", border: "none", borderRadius: "5px", width: "170px", "& .MuiOutlinedInput-root": { padding: "0px" }, "& .MuiInputLabel-root": {lineHeight:"13px" }, "& .MuiAutocomplete-endAdornment": { background: "#251d6e", borderRadius: "5px", right: "0px !important", top: "calc(50% - 18px)"  }, "& .MuiButtonBase-root":{color:"white", marginRight: "0px !important"}, "& .MuiAutocomplete-input": {textAlign: "center"}, " & .MuiOutlinedInput-root":{right:"0px"}," & .MuiAutocomplete-root":{right:"80px"},"& .MuiSvgIcon-root":{height: "31px !important"}, "& .MuiOutlinedInput-input":{alignItems:"center",justifyContent:"center"},"& .MuiAutocomplete-popper":{justifyContent:"center"}}}
              renderInput={(params) => <TextField  {...params} label="Consellor Name" />}
            />
          </Grid>
          <Grid item mr={1} pl={2}>
            <Typography>IP or UMR No:</Typography>
          </Grid>
          <Grid item pl={1} mr={1} padding={"0px"}>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '17ch', alignItems:"center", justifyContent:"space-between",backgroundColor: "white", borderRadius: "5px",height:"35px",'& .MuiInputBase-input':{padding:"0px"}},
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="UMR12349857" alignItems="center" variant="outlined" sx={{'& . MuiOutlinedInput-input':{padding:"0px"},'& .MuiInputBase-input':{height:"35px"},'& .MuiFormLabel-root':{justifyContent:"space-between", alignItems:"center",lineHeight: 1}, '& .MuiInputAdornment-root':{background:"#251d6e",width:"34px",height:"33px",borderRadius:"5px",padding:"1px",color:"white"},"& .MuiOutlinedInput-root":{paddingRight: "0px"}}}
                InputProps={{   
                  endAdornment: <InputAdornment position="end"><IoIosSearch size={25} style={{paddingLeft: "2px"}} alignmentBaseline={"central"} /></InputAdornment>
                }}
              />
            </Box>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }} data-testid="view-data-model-pagination">
      <Button variant='contained'  onClick={exportToExcel}>Export to Excel</Button>
      </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Card1;