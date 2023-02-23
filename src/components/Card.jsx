
import React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Card = () => {


  const rooms = [
    { label: 'room-1'},
    { label: 'room-2'},
    { label: 'room-3' },
    { label: 'room-4'},
    { label: 'room-5 '},
  ];
  return (
    <div className='container'>
      <Grid container display={"flex"} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"} sx={{backgroundColor:"#8c6631", marginTop:"5px", height: "80px",borderRadius:"5px"}} > 
        <Grid item alignItems={"center"}justifyContent={"center"} marginTop={"1px"} fontSize="40px" color={"white"}>
         48
        </Grid>
        <Grid item alignItems={"center"}justifyContent={"center"} marginTop={"1px"} fontSize="40px" color={"white"}>
        Patients Are In Queue
        </Grid>
        <Grid item marginTop={"1px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} fontSize="20px" color={"white"}>
          <Grid item>
            <Typography>Room:</Typography>  
          </Grid> 
          <Grid item pl={2}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rooms}
              sx={{ backgroundColor:"white",border:"none", borderRadius:"5px", width: "154px", height: "40px", "& .MuiOutlinedInput-root":{padding: "0px"}, alignItems: "center", "& .MuiInputLabel-root":{lineHeight: 1}, "& .MuiAutocomplete-endAdornment":{background: "#251d6e",borderRadius:"5px"}}}
              renderInput={(params) => <TextField  {...params} label="Room Name" />}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" style={{backgroundColor:"white", color:"#8c6631", padding:"7px",display:"flex",float:"left",flexDirection:"row"}}  className="btn">START COUNSELLING</Button> 
        </Grid>
      </Grid>
    </div>
  );
}

export default Card;