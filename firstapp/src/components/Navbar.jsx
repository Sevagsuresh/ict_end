import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
        <Toolbar>
            <Typography variant='h6'> HOME </Typography>&nbsp; &nbsp;
            <Button variant="contained" color='warning'>
                <Link to="/sin" >Sign up </Link> </Button>&nbsp; &nbsp;
                <Button variant="contained" color='secondary'>
                <Link to="/" >Login </Link> </Button>&nbsp;&nbsp;
                <Button variant="contained" >
                <Link to="/sb" >STATE </Link> </Button>&nbsp; &nbsp;
                <Button variant='contained' color='primary'><Link to="/co">Counter</Link></Button>
                <Button variant="contained" color='success'>
                <Link to="/li" >Listmap </Link> </Button>&nbsp;&nbsp;
                <Button variant="contained" color='error'>
                <Link to="/ap" >Api </Link> </Button>&nbsp;&nbsp;
                <Button variant="contained" color='secondary'>
                <Link to="/si" >Sample </Link> </Button>&nbsp;&nbsp;
                <Button variant="contained" color='error'>
                <Link to="/ca" >Card </Link> </Button>&nbsp;&nbsp;
        </Toolbar>

            
            
        </AppBar>
    </div>
  )
}

export default Navbar