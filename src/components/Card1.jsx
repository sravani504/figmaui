import React from 'react';
import { Button } from '@mui/material';
import { Grid, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { IoIosSearch } from "react-icons/io";
import InputAdornment from "@mui/material/InputAdornment";

const Card1 = () => {
  const names = [
    { label: 'john', },
    { label: 'peter' },
    { label: 'Nick' },
    { label: 'Rayon' },
    { label: 'Niveth' },
  ];

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
              sx={{ backgroundColor: "white", border: "none", borderRadius: "5px", width: "170px", "& .MuiOutlinedInput-root": { padding: "0px" }, "& .MuiInputLabel-root": { lineHeight: 1 }, "& .MuiAutocomplete-endAdornment": { background: "#251d6e", borderRadius: "5px", marginRight: "px" }, "& .MuiButtonBase-root":{color:"white"} }}
              renderInput={(params) => <TextField  {...params} label="consellor Name" />}
            />
          </Grid>
          <Grid item mr={1} pl={1}>
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
              <TextField id="outlined-basic" label="UMR12349857" alignItems="center" variant="outlined" sx={{'& . MuiOutlinedInput-input':{padding:"0px"},'& .MuiInputBase-input':{height:"37px"},'& .MuiFormLabel-root':{justifyContent:"space-between", alignItems:"center",lineHeight: 1}, '& .MuiInputAdornment-root':{background:"#251d6e",width:"30px",height:"26px",borderRadius:"5px",padding:"1px",color:"white"}}}
                InputProps={{   
                  endAdornment: <InputAdornment position="end"><IoIosSearch size={18} alignmentBaseline={"central"} /></InputAdornment>
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Card1;