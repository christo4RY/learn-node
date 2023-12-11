const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mainPath = require('./utilities/mainPath')
const app = express()
const adminRoutes = require('./routes/admin')

app.use(bodyParser.urlencoded())
app.use(express.static('public'))
app.use('/admin',adminRoutes)

app.get('/',(req,res,next)=>{
res.sendFile(path.join(mainPath,'views','index.html'));
})
app.all('*',(req,res,next)=>{
res.status(404)
res.sendFile(path.join(mainPath,'views','404.html'))
})

app.listen(3000,()=>{
console.log("server is running at port:http://localhost:3000")
})
