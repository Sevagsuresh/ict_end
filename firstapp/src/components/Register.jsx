import { Button, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <h1>LOGIN HERE</h1>
        <TextField  label="Username" variant="outlined" /><br/><br/>
    <TextField  label="password" id='password' type='password' variant="outlined" /><br/><br/>
    <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Register