import React from 'react';
import Navbar from '../Navbar';
import { Box } from '@mui/system';
import { Typography, Grid, TextField } from '@mui/material';
import InputAdornment from "@mui/material/InputAdornment";
import { IoIosSearch } from "react-icons/io";
import Autocomplete from '@mui/material/Autocomplete';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker, Space } from 'antd';
import TableEstimated from "./TableEstimated"




const Counselling = () => {


  const doctors = [
    { label: 'Dr.Priyatosh Tiwari' },
    { label: 'room-2' },
    { label: 'room-3' },
    { label: 'room-4' },
    { label: 'room-5 ' },
  ];
  const rooms = [
    { label: 'room-1' },
    { label: 'room-2' },
    { label: 'room-3' },
    { label: 'room-4' },
    { label: 'room-5 ' },
  ]
  const speciality = [
    { label: 'speciality' },
    { label: 'room-2' },
    { label: 'room-3' },
    { label: 'room-4' },
    { label: 'room-5 ' },
  ]
  return (
    <>
      <Navbar />
      <div className='container' style={{ background: "white", height: "570px", marginTop: "40px" }}>
        <Typography fontSize={"24px"} mb={6} >Financial Counselling</Typography>

        <Grid container m={2}  direction={"row"} justifyContent={"space-evenly"}>
          <Grid item  >
            <Typography sx={{color:"#8c6631"}} mb={1} >Date of Counselling</Typography>
            <Space direction="vertical" >
              <DatePicker 
              
               sx={{"& .ant-picker-suffix":{padding:"5px",border:"1px solid green", background:"pink"}}}
                dateRender={(current) => {
                  const style = {};
                  if (current.date() === 1) {
                    style.border = '1px solid #1890ff';
                    style.borderRadius = '50%';

                  }
                  return (
                    <div className="ant-picker-cell-inner" style={style} sx={{"& .ant-picker-suffix":{padding:"5px",border:"1px solid green", background:"pink"}}} >
                      {current.date()}
                    </div>
                  );
                }}
              />
            </Space>

          </Grid>
          <Grid item xs={3}  >
            <Typography sx={{color:"#8c6631"}}  mb={1}  >Estimated Date Of Admission</Typography>
            <Space direction="vertical" size={8}>
              <DatePicker
                dateRender={(current) => {
                  const style = {};
                  if (current.date() === 1) {
                    style.border = '1px solid #1890ff';
                    style.borderRadius = '50%';

                  }
                  return (
                    <div className="ant-picker-cell-inner" style={style} >
                      {current.date()}
                    </div>
                  );
                }}
              />
            </Space>

          </Grid>
          <Grid item  xs={3} >
            <Typography sx={{color:"#8c6631"}}  mb={1} >UMR Number</Typography>
            <Box mb={3}
              component="form"
              sx={{
                '& > :not(style)': { width: '25ch', alignItems: "center", justifyContent: "space-between", backgroundColor: "#e6f5ee", borderRadius: "5px", height: "35px", '& .MuiInputBase-input': { padding: "0px" } },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" sx={{ '& . MuiOutlinedInput-input': { padding: "0px" }, '& .MuiInputBase-input': { height: "35px" }, '& .MuiFormLabel-root': { justifyContent: "space-between", alignItems: "center", lineHeight: "13px" }, '& .MuiInputAdornment-root': { background: "#251d6e", width: "34px", height: "33px", borderRadius: "5px", padding: "1px", color: "white" }, "& .MuiOutlinedInput-root": { paddingRight: "0px" }, ' & .MuiInputBase-input': { marginLeft: "20px" } }}

              />
            </Box>
          </Grid>
          <Grid item xs={3} >
            <Typography sx={{color:"#8c6631"}}  mb={1} >Token Number</Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '25ch', alignItems: "center", justifyContent: "space-between", backgroundColor: "#e6f5ee", borderRadius: "5px", height: "35px", '& .MuiInputBase-input': { padding: "0px" } },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" sx={{ '& . MuiOutlinedInput-input': { padding: "0px" }, '& .MuiInputBase-input': { height: "35px" }, '& .MuiFormLabel-root': { justifyContent: "space-between", alignItems: "center", lineHeight: "13px" }, '& .MuiInputAdornment-root': { background: "#251d6e", width: "34px", height: "33px", borderRadius: "5px", padding: "1px", color: "white" }, "& .MuiOutlinedInput-root": { paddingRight: "0px" }, ' & .MuiInputBase-input': { marginLeft: "20px" } }}

              />
            </Box>
          </Grid>
          </Grid>
          <Grid container direction={"row"} justifyContent={"space-evenly"}>
          <Grid item xs={3}>
            <Typography sx={{color:"#8c6631"}} mb={1} >Patient Name</Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '25ch', alignItems: "center", justifyContent: "space-between", backgroundColor: "#e6f5ee", borderRadius: "5px", height: "35px", '& .MuiInputBase-input': { padding: "0px" } },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" sx={{ '& . MuiOutlinedInput-input': { padding: "0px" }, '& .MuiInputBase-input': { height: "35px" }, '& .MuiFormLabel-root': { justifyContent: "space-between", alignItems: "center", lineHeight: "13px" }, '& .MuiInputAdornment-root': { background: "#251d6e", width: "34px", height: "33px", borderRadius: "5px", padding: "1px", color: "white" }, "& .MuiOutlinedInput-root": { paddingRight: "0px" }, ' & .MuiInputBase-input': { marginLeft: "20px" } }}

              />
            </Box>
          </Grid>
          <Grid item  xs={3} >
            <Typography sx={{color:"#8c6631"}} mb={1}  >Patient Phone Number</Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '25ch', alignItems: "center", justifyContent: "space-between", backgroundColor: "#e6f5ee", borderRadius: "5px", height: "35px", '& .MuiInputBase-input': { padding: "0px" } },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" sx={{ '& . MuiOutlinedInput-input': { padding: "0px" }, '& .MuiInputBase-input': { height: "35px" }, '& .MuiFormLabel-root': { justifyContent: "space-between", alignItems: "center", lineHeight: "13px" }, '& .MuiInputAdornment-root': { background: "#251d6e", width: "34px", height: "33px", borderRadius: "5px", padding: "1px", color: "white" }, "& .MuiOutlinedInput-root": { paddingRight: "0px" }, ' & .MuiInputBase-input': { marginLeft: "20px" } }}

              />
            </Box>

          </Grid>
          <Grid item  xs={3} >
            <Typography sx={{color:"#8c6631"}} mb={1}  >Doctor Name</Typography>
            <Grid item pl={1} >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={doctors}
                sx={{ backgroundColor: "#e6f5ee", alignItems: "center", border: "none", borderRadius: "5px", width: "220px", "& .MuiOutlinedInput-root": { padding: "0px" }, "& .MuiInputLabel-root": { lineHeight: "14px" }, "& .MuiAutocomplete-endAdornment": { background: "#251d6e", borderRadius: "5px", right: "0px !important", height: "36px !important", top: "calc(50% - 18px)" }, "& .MuiButtonBase-root": { color: "white", marginRight: "0px !important" }, "& .MuiAutocomplete-input": { textAlign: "center" }, " & .MuiOutlinedInput-root": { Right: "0px" }, " & .MuiAutocomplete-root": { right: "80px" }, "& .MuiSvgIcon-root": { height: "31px !important" }, " & .MuiAutocomplete-popper": { justifyContent: "flex-start !important" }, " & .MuiPopper-root": { justifyContent: "center" } }}
                renderInput={(params) => <TextField textAlign={"center"} {...params} label="Doctor Name" />}
              />
            </Grid>

          </Grid>
          <Grid item   xs={3}>
            <Typography sx={{color:"#8c6631"}} mb={1}  >Speciality</Typography>
            <Grid item pl={1} >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={speciality}
                sx={{ backgroundColor: "#e6f5ee", alignItems: "center", border: "none", borderRadius: "5px", width: "220px", "& .MuiOutlinedInput-root": { padding: "0px" }, "& .MuiInputLabel-root": { lineHeight: "14px" }, "& .MuiAutocomplete-endAdornment": { background: "#251d6e", borderRadius: "5px", right: "0px !important", height: "36px !important", top: "calc(50% - 18px)" }, "& .MuiButtonBase-root": { color: "white", marginRight: "0px !important" }, "& .MuiAutocomplete-input": { textAlign: "center" }, " & .MuiOutlinedInput-root": { Right: "0px" }, " & .MuiAutocomplete-root": { right: "80px" }, "& .MuiSvgIcon-root": { height: "31px !important" }, " & .MuiAutocomplete-popper": { justifyContent: "flex-start !important" }, " & .MuiPopper-root": { justifyContent: "center" } }}
                renderInput={(params) => <TextField textAlign={"center"} {...params} label="Speciality" />}
              />
            </Grid>

          </Grid>
          </Grid>
          <Grid container direction={"row"} justifyContent={"space-evenly"}>
          <Grid item  xs={3} >
            <Typography  sx={{color:"#8c6631"}}  mb={1} >Date of surgery</Typography>
            <Space direction="vertical" size={8}>
              <DatePicker
                dateRender={(current) => {
                  const style = {};
                  if (current.date() === 1) {
                    style.border = '1px solid #1890ff';
                    style.borderRadius = '50%';

                  }
                  return (
                    <div className="ant-picker-cell-inner" style={style} >
                      {current.date()}
                    </div>
                  );
                }}
              />
            </Space>

          </Grid>

          <Grid item  xs={3} >
            <Typography sx={{color:"#8c6631"}} mb={1}  >Surgery/Procedure Name</Typography>
            <Grid item pl={1} >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={doctors}
                sx={{ backgroundColor: "#e6f5ee", alignItems: "center", border: "none", borderRadius: "5px", width: "220px", "& .MuiOutlinedInput-root": { padding: "0px" }, "& .MuiInputLabel-root": { lineHeight: "14px" }, "& .MuiAutocomplete-endAdornment": { background: "#251d6e", borderRadius: "5px", right: "0px !important", height: "36px !important", top: "calc(50% - 18px)" }, "& .MuiButtonBase-root": { color: "white", marginRight: "0px !important" }, "& .MuiAutocomplete-input": { textAlign: "center" }, " & .MuiOutlinedInput-root": { Right: "0px" }, " & .MuiAutocomplete-root": { right: "80px" }, "& .MuiSvgIcon-root": { height: "31px !important" }, " & .MuiAutocomplete-popper": { justifyContent: "flex-start !important" }, " & .MuiPopper-root": { justifyContent: "center" } }}
                renderInput={(params) => <TextField textAlign={"center"} {...params} label="Procedure Name" />}
              />
            </Grid>

          </Grid>
          <Grid item  xs={3}>
            <Typography sx={{color:"#8c6631"}}  mb={1}  >Length of Stay (Approx)</Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '25ch', alignItems: "center", justifyContent: "space-between", backgroundColor: "#e6f5ee", borderRadius: "5px", height: "35px", '& .MuiInputBase-input': { padding: "0px" } },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" sx={{ '& . MuiOutlinedInput-input': { padding: "0px" }, '& .MuiInputBase-input': { height: "35px" }, '& .MuiFormLabel-root': { justifyContent: "space-between", alignItems: "center", lineHeight: "13px" }, '& .MuiInputAdornment-root': { background: "#251d6e", width: "34px", height: "33px", borderRadius: "5px", padding: "1px", color: "white" }, "& .MuiOutlinedInput-root": { paddingRight: "0px" }, ' & .MuiInputBase-input': { marginLeft: "20px" } }}

              />
            </Box>
          </Grid>
          <Grid item  xs={3} >
            <Typography sx={{color:"#8c6631"}}  mb={1} >Room Eligibility</Typography>
            <Grid item pl={1} >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={rooms}
                sx={{ backgroundColor: "#e6f5ee", alignItems: "center", border: "none", borderRadius: "5px", width: "220px", "& .MuiOutlinedInput-root": { padding: "0px" }, "& .MuiInputLabel-root": { lineHeight: "14px" }, "& .MuiAutocomplete-endAdornment": { background: "#251d6e", borderRadius: "5px", right: "0px !important", height: "36px !important", top: "calc(50% - 18px)" }, "& .MuiButtonBase-root": { color: "white", marginRight: "0px !important" }, "& .MuiAutocomplete-input": { textAlign: "center" }, " & .MuiOutlinedInput-root": { Right: "0px" }, " & .MuiAutocomplete-root": { right: "80px" }, "& .MuiSvgIcon-root": { height: "31px !important" }, " & .MuiAutocomplete-popper": { justifyContent: "flex-start !important" }, " & .MuiPopper-root": { justifyContent: "center" } }}
                renderInput={(params) => <TextField textAlign={"center"} {...params} label="Room Name" />}
              />
            </Grid>

          </Grid>
          <Grid container direction={"row"} justifyContent={"space-evenly"}> 
          <Grid item  xs={3}  >
            <Typography sx={{color:"#8c6631"}}   mb={1} >Room Opted</Typography>
            <Grid item pl={1} >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={rooms}
                sx={{ backgroundColor: "#e6f5ee", alignItems: "center", border: "none", borderRadius: "5px", width: "220px", "& .MuiOutlinedInput-root": { padding: "0px" }, "& .MuiInputLabel-root": { lineHeight: "14px" }, "& .MuiAutocomplete-endAdornment": { background: "#251d6e", borderRadius: "5px", right: "0px !important", height: "36px !important", top: "calc(50% - 18px)" }, "& .MuiButtonBase-root": { color: "white", marginRight: "0px !important" }, "& .MuiAutocomplete-input": { textAlign: "center" }, " & .MuiOutlinedInput-root": { Right: "0px" }, " & .MuiAutocomplete-root": { right: "80px" }, "& .MuiSvgIcon-root": { height: "31px !important" }, " & .MuiAutocomplete-popper": { justifyContent: "flex-start !important" }, " & .MuiPopper-root": { justifyContent: "center" } }}
                renderInput={(params) => <TextField textAlign={"center"} {...params} label="Room Name" />}
              />
            </Grid>

          </Grid>
         
          <Grid item  xs={3} >
            <Typography sx={{color:"#8c6631"}}  mb={1} > Tariff ofRoom Opted</Typography>
            <Grid item pl={1} >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={rooms}
                sx={{ backgroundColor: "#e6f5ee", alignItems: "center", border: "none", borderRadius: "5px", width: "220px", "& .MuiOutlinedInput-root": { padding: "0px" }, "& .MuiInputLabel-root": { lineHeight: "14px" }, "& .MuiAutocomplete-endAdornment": { background: "#251d6e", borderRadius: "5px", right: "0px !important", height: "36px !important", top: "calc(50% - 18px)" }, "& .MuiButtonBase-root": { color: "white", marginRight: "0px !important" }, "& .MuiAutocomplete-input": { textAlign: "center" }, " & .MuiOutlinedInput-root": { Right: "0px" }, " & .MuiAutocomplete-root": { right: "80px" }, "& .MuiSvgIcon-root": { height: "31px !important" }, " & .MuiAutocomplete-popper": { justifyContent: "flex-start !important" }, " & .MuiPopper-root": { justifyContent: "center" } }}
                renderInput={(params) => <TextField textAlign={"center"} {...params} label="Room Name" />}
              />
            </Grid>

          </Grid>
          <Grid item   xs={3}>
            <Typography sx={{color:"#8c6631"}} mb={1}  >Made of Payment</Typography>
            <Grid item pl={1} >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={rooms}
                sx={{ backgroundColor: "#e6f5ee", alignItems: "center", border: "none", borderRadius: "5px", width: "220px", "& .MuiOutlinedInput-root": { padding: "0px" }, "& .MuiInputLabel-root": { lineHeight: "14px" }, "& .MuiAutocomplete-endAdornment": { background: "#251d6e", borderRadius: "5px", right: "0px !important", height: "36px !important", top: "calc(50% - 18px)" }, "& .MuiButtonBase-root": { color: "white", marginRight: "0px !important" }, "& .MuiAutocomplete-input": { textAlign: "center" }, " & .MuiOutlinedInput-root": { Right: "0px" }, " & .MuiAutocomplete-root": { right: "80px" }, "& .MuiSvgIcon-root": { height: "31px !important" }, " & .MuiAutocomplete-popper": { justifyContent: "flex-start !important" }, " & .MuiPopper-root": { justifyContent: "center" } }}
                renderInput={(params) => <TextField textAlign={"center"} {...params} label="Room Name" />}
              />
            </Grid>
            </Grid>
          </Grid>
          </Grid>
        {/* </Grid> */}
        <Grid container mt={5} spacing={2}  direction={"row"} justifyContent={"space-evenly"} display={"flex"}>
          <Grid item   >
            <FormGroup >
              <FormControlLabel sx={{color:"#8c6631","& .MuiSvgIcon-root":{color:"#e6f5ee"}}}  control={<Checkbox/>} label="Medical management" />
            </FormGroup>
          </Grid>
          <Grid item xs={3}>
          <FormControlLabel sx={{color:"#8c6631","& .MuiSvgIcon-root":{color:"#e6f5ee"}}} control={<Checkbox />} label="Surgical management" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel sx={{color:"#8c6631","& .MuiSvgIcon-root":{color:"#e6f5ee"}}} control={<Checkbox />} label="Insurance" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel sx={{color:"#8c6631","& .MuiSvgIcon-root":{color:"#e6f5ee"}}} control={<Checkbox />} label="Corporate" />
          </Grid>
         <Grid item xs={2}>
            <FormControlLabel sx={{color:"#8c6631","& .MuiSvgIcon-root":{color:"#e6f5ee"}}} control={<Checkbox />} label="Room Upgrade" />
          </Grid>
          <Grid item >
          <FormControlLabel sx={{color:"#8c6631","& .MuiSvgIcon-root":{color:"#e6f5ee"}}} control={<Checkbox />} label="Complementary Upgrade" />
          </Grid>
          <Grid item>
          <FormControlLabel sx={{color:"#8c6631","& .MuiSvgIcon-root":{color:"#e6f5ee"}}} control={<Checkbox />} label="Excess charge Payyable" />
          </Grid>
          <Grid item>
          <FormControlLabel sx={{color:"#8c6631","& .MuiSvgIcon-root":{color:"#e6f5ee"}}} control={<Checkbox />} label="Initial counselling" />
          </Grid>
          <Grid item>
          </Grid> 
          <Grid item>
          <FormControlLabel sx={{color:"#8c6631","& .MuiSvgIcon-root":{color:"#e6f5ee"}}} control={<Checkbox />} label="Re-Counselling" />
          </Grid>
          <Grid item>
             <FormControlLabel sx={{color:"#8c6631","& .MuiSvgIcon-root":{color:"#e6f5ee"}}} control={<Checkbox />} label="On Bed Counsellig" /> 
          </Grid>

        </Grid>        
      </div>
      <div className='container' style={{ background: "white", height: "570px", marginTop: "40px" }}>
      <Typography fontSize={"25px"} display={"flex"} alignItems={"flex-start"} padding={"30px"} fontFamily={"inherit"}>Total Estimated Amount</Typography>
      <TableEstimated/>
          </div>

          

    </>
  );
}

export default Counselling;
