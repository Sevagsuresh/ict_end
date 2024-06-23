import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname,setfname]=useState("SEVAG")
    var[val,setval]=useState()

        const submithandler=()=>{
            setfname(val)
    }
    const handleInput=(e)=>{
       console.log(e.target.value)
       setval(e.target.value)

    
    }
  return (
    <div>
        <Typography variant='h4'><br/> <b> WELCOME {fname}</b></Typography>&nbsp;&nbsp;
        <TextField variant="outlined" label="Type your name" onChange={handleInput} variant="outlined"/>&nbsp;&nbsp;
        <Button variant='contained' onClick={submithandler}>submit</Button>

    </div>
  )
}

export default StateBasics