import  React,{useState} from 'react';
import style from "../components/style.css";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { BsSpeedometer2 } from 'react-icons/bs';
import { RiAccountCircleFill } from 'react-icons/ri'
import { GoCommentDiscussion } from "react-icons/go";
import { MdComment } from "react-icons/md";
import { Button, Grid, Link, Stack } from '@mui/material';
import Card from "../components/Card";
import Card1 from "../components/Card1";
import EnhancedTable from "../components/EnhancedTable"


export default function Navbar() {

  const [searchTerm, setSearchTerm] = useState('');
  const [exportData,setExportData]=useState([]);
  const [postid,setPostid]=useState();
  const [selectedDateRange,setSelectedDateRange]=useState([]);

  console.log(searchTerm);
  console.log(exportData);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" className='appbar'>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, marginLeft: "26px" }}
          >
            <img src="https://www.equitybulls.com/equitybullsadmin/uploads/Krishna%20Institute%20of%20Medical%20Sciences%20Limited%20-%20KIMS%20Hospitals%20Logo%202.jpg" width={"100px"} marginLeft={"40%"} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <BsSpeedometer2 />
          <Typography mr={1} style={{ padding: "10px" }} >Dashboard</Typography>
          <GoCommentDiscussion style={{ padding: "5px" }} />
          <Link to="/counselling"> <Typography mr={1} style={{ padding: "10px" }}>Counselling</Typography></Link> 
          <MdComment />
          <Typography mr={1} style={{ padding: "10px" }}>Track Bills</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: "center" }}>
            <Typography >Abhishek Chowdhary</Typography>
            <IconButton size="large">
              <RiAccountCircleFill style={{ color: "white" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} sx={{ backgroundColor: "white", marginTop: "5px" }}>
        <Grid item style={{ paddingTop: "0px" }} >
          <Typography padding={"10px"} marginLeft={"46px"}>Dashboard</Typography>
        </Grid>
      </Grid>
      {/* <Card /> */}
      {/* <Card1  setSearchTerm={setSearchTerm} searchTerm={searchTerm} exportData={exportData} setExportData={setExportData} postid={postid} setPostid={setPostid} setSelectedDateRange={setSelectedDateRange}  selectedDateRang={selectedDateRange}/> */}
      {/* <EnhancedTable searchTerm={searchTerm} setExportData={setExportData} exportData={exportData}  postid={postid} setPostid={setPostid}  selectedDateRange={selectedDateRange}/> */}
    </Box>



  );
}