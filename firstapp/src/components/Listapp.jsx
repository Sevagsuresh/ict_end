import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listapp = () => {
    var [imp,setImp]=useState(["ICTAK"])
    var [data,setData]=useState("")
    const inputhandle=(e)=>{
        setData(e.target.value)
    }
    const add=()=>{
        setImp([...imp,data])
        console.log(imp)
        setData("")
    }
  return (
    <div>
<TextField  label="Enter your name" onChange={inputhandle} value={data}/>&nbsp;&nbsp;
<Button variant='contained' onClick={add} label='submit'>SUBMIT</Button>
<ul>
    {imp.map((v,i)=>{
        return<li>{v}</li>

    })}
</ul>

    </div>
  )
}

export default Listapp