import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Sample = () => {
    var [data,setdata]=useState("Welcome to")


    const submitreact = () =>{
        setdata("Hello React")
    
    }


    const submitangular = () =>{
        setdata("Hello Angular")
    }


    const submitview = () =>{
        setdata("Hello View")
    }
    useEffect(()=>{
        submitangular();
    })
  return (
    <div>
        <Typography variant="h6">{data}</Typography>
<Button variant="contained"  color='success' onClick={submitreact}>REACT</Button>&nbsp;&nbsp;
<Button variant="contained" color='error' onClick={submitangular}>ANGULAR</Button>&nbsp;&nbsp;
<Button variant="contained" color='secondary' onClick={submitview}>VIEW</Button>&nbsp;&nbsp;

    </div>
  )
}

export default Sample