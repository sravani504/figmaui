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
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';  
// import SearchIcon from '@mui/icons-material/Search';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
import { IoSpeedometerOutline} from 'react-icons/io';
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


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='appbar'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <img src="https://www.equitybulls.com/equitybullsadmin/uploads/Krishna%20Institute%20of%20Medical%20Sciences%20Limited%20-%20KIMS%20Hospitals%20Logo%202.jpg" width={"10%"} backgroundColor={"green"} ></img>

          <BsSpeedometer2 style={{marginLeft:"20%"}} />
          <Typography style={{padding:"10px"}} >Dashboard</Typography>
          <GoCommentDiscussion  style={{padding:"5px"}}/>
          <Typography  style={{padding:"10px"}}>Counselling</Typography>
          <MdComment/>
          <Typography style={{padding:"10px"}}>Track Bills</Typography>
          <RiAccountCircleFill style={{float:"left", color:"white"}}/>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
            </IconButton>
          </Box>
  
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} style={{backgroundColor:"white", marginTop:"5px",alignItems:"center"}} > 
        <Grid item xs={1} alignItems={"center"}justifyContent={"center"} marginTop={"1px"}>
          Dashboard
        </Grid>
      </Grid>
      <Card/> 
      <Card1/>
          <EnhancedTable/>
    </Box>


  
  );
}