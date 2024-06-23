//1.IMPORTING THE EXPRESS

const express = require('express')
const employeeModel = require('./model')
const cors = require('cors')

//2.INITIALIZATION
const app = express()

//middleware ||parsing the parameter
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors());
//3.API CREATION
app.get('/',(req,res)=>{
    res.send("THE MESSAGE FROM API")
})
//4.PORT
app.listen(3005,()=>{
    console.log("port 3005 is running")
})
//5.TRIAL API
app.get('/trail',(req,res)=>{
    res.send("THE TRAIL MESSAGE")

})
//6.POST
app.post('/po',(req,res)=>{
    res.send("THE POST MESSAGE")
})
app.post('/create',async(req,res)=>{
    var result = await new employeeModel(req.body)
    result.save()
    res.send("Data Added")
})
//api for viewing data
app.get('/view',async(req,res)=>{
    var data = await employeeModel.find()
    res.json(data)
    console.log(data)
})
//api for updating data
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
await employeeModel.findByIdAndUpdate(id,req.body)
res.send("DATA UPDATED")


})
//api for deleting data
app.delete('/delete/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id
    await employeeModel.findByIdAndDelete(id)
    res.send("Data Deleted")
})