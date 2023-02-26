import * as React from 'react';
import style from "../components/style.css";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Link} from "react"
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { BsSpeedometer2} from 'react-icons/bs';
import {RiAccountCircleFill} from 'react-icons/ri'
import {GoCommentDiscussion} from "react-icons/go";
import {MdComment} from "react-icons/md";
import { Button, Grid,Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { color } from '@mui/system';
import Card from "../components/Card";
import Card1 from "../components/Card1";
import EnhancedTable from "../components/EnhancedTable"


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" className='appbar'>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2,marginLeft:"2px"}}
          >
            <img src="https://www.equitybulls.com/equitybullsadmin/uploads/Krishna%20Institute%20of%20Medical%20Sciences%20Limited%20-%20KIMS%20Hospitals%20Logo%202.jpg" width={"100px"} marginLeft={"20%"}  />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <BsSpeedometer2  />
          <Typography mr={1} style={{padding:"10px"}} >Dashboard</Typography>
          <GoCommentDiscussion  style={{padding:"5px"}}/>
          <Typography mr={1} style={{padding:"10px"}}>Counselling</Typography>
          <MdComment/>
          <Typography mr={1} style={{padding:"10px"}}>Track Bills</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display:'flex', alignItems: "center"}}>
            <Typography >Abhishek Chowdhary</Typography>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <RiAccountCircleFill style={{float:"left", color:"white"}}/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} style={{backgroundColor:"white", marginTop:"5px",alignItems:"center"}} > 
        <Grid item xs={1} alignItems={"center"} justifyContent={"center"} style={{paddingTop: "0px"}} >
          <Typography padding={"10px"} marginLeft={"46px"}>Dashboard</Typography>
        </Grid>
      </Grid>
      <Card/> 
      <Card1/>
          <EnhancedTable/>
    </Box>


  
  );
}