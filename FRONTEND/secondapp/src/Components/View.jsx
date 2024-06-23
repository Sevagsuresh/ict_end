import { ThemeContext } from '@emotion/react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const View = () => {
  var [user,setuser] = useState([])
  var [update,setupdate] = useState(false)
  var [singleValue,setsingleValue] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3005/view")
    .then((res)=>{
      console.log(res.data)
      setuser(res.data)
    })
    .catch((err)=>console.log(err))
  },[])
  const deleteValue = (id)=>{
    console.log(id)
    axios.delete("http://localhost:3005/delete/"+id)
    .then((response)=>{
      alert(response.data)
      window.location.reload(false)

    }).catch((err)=>console.log(err))
  }
  const updateValues = (val)=>{
    console.log("update")
    setupdate(true)
    setsingleValue(val)
  }
  var finalJSX = <TableContainer>

    <Table>
    <TableHead>
        <TableRow>
        <TableCell>Employee_name</TableCell>
        <TableCell >Employee_age</TableCell>
        <TableCell >Employee_position</TableCell>
        <TableCell >Employee_salary</TableCell>
        </TableRow>  </TableHead>
    <TableBody>
      {user.map((val,i)=>{
          return(
      <TableRow>
        <TableCell>{val.ename}</TableCell>
        <TableCell>{val.eage}</TableCell>
        <TableCell>{val.eposition}</TableCell>
        <TableCell>{val.esalary}</TableCell>
        <TableCell>
      <Button onClick={()=>deleteValue(val._id)}>delete
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button onClick={()=>updateValues(val)}>update</Button>  
    </TableCell>

      </TableRow>
      )
    })}
    </TableBody>
  
  
    
    </Table>
    
    </TableContainer>
    if(update) finalJSX = <Add data={singleValue} method='put' />
    return finalJSX
  
  
}

export default View