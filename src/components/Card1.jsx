import React from 'react';
import { Button } from '@mui/material';
import { Grid, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { IoIosSearch } from "react-icons/io";


const Card1 = () => {
  const names = [
    { label: 'john', },
    { label: 'peter' },
    { label: 'Nick' },
    { label: 'Rayon' },
    { label: 'Niveth' },
  ];

  return (
    <div className='container'>
      <Grid container style={{ backgroundColor: "#687574 ", marginTop: "25px", alignItems: "center", borderRadius: "5px" }} display={"flex"} justifyContent={"space-between"} padding={"5px"}>
        <Grid item alignItems={"center"} justifyContent={"center"} marginTop={"1px"} fontSize="20px" color={"white"}>
          Bill Tracking
        </Grid>
        <Grid item marginTop={"1px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} fontSize="20px" color={"white"}>
          <Grid item>
            <Typography>Filter By:</Typography>
          </Grid>
          <Grid item pl={2}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={names}
              sx={{ backgroundColor: "white", border: "none", borderRadius: "5px", width: "170px", height: "40px", "& .MuiOutlinedInput-root": { padding: "0px" }, alignItems: "center", "& .MuiInputLabel-root": { lineHeight: 1 }, "& .MuiAutocomplete-endAdornment": { background: "#251d6e", borderRadius: "5px", marginRight: "px" } }}
              renderInput={(params) => <TextField  {...params} label="consellor Name" />}
            />
          </Grid>
        </Grid>
        <Grid item marginTop={"1px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} fontSize="20px" color={"white"}>
          <Grid item>
            <Typography>IP or UMR No:</Typography>
          </Grid>
          <Grid item pl={2}>
            {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={names}
            sx={{ backgroundColor:"white",border:"none", borderRadius:"5px", width: "154px", height: "40px", "& .MuiOutlinedInput-root":{padding: "0px"}, alignItems: "center", "& .MuiInputLabel-root":{lineHeight: 1}, "& .MuiAutocomplete-endAdornment":{background: "#251d6e",borderRadius:"5px", "& .MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator":{background:"none"}}}}
            renderInput={(params) => <TextField  {...params} label="Room Name" />}
          /> */}
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '20ch', backgroundColor: "white", borderRadius: "5px", border: "none" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="UMR12349857" variant="outlined" />
            </Box>
            {/* <IoIosSearch /> */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Card1;
