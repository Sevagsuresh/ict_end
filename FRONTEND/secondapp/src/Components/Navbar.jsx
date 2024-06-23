import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
        <Toolbar>
            <Typography variant='h6'> Employee</Typography>&nbsp; &nbsp;
            <Button variant="contained" color='success'>
                <Link to="/add" >Add </Link> </Button>&nbsp; &nbsp;
                <Button variant="contained" color='error'>
                <Link to="/vi" >View </Link> </Button>&nbsp;&nbsp;
              
                </Toolbar>

            
            
</AppBar>
</div>
)}


export default Navbar