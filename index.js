const express=require('express')
const cors=require('cors')
const app=express()
const port=3700
const router=require('./config/routes')
const dbsetup=require('./config/database')
//dbsetup
dbsetup()
app.use(express.json())
app.use(cors())
app.use('/',router)
app.listen(port,()=>{
    console.log('listening on port',port)
})