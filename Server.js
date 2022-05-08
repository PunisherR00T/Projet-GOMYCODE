const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const CarRouter = require('./Routes/Car')
const userRouter = require('./Routes/User')


const app = express()

require('dotenv').config()


ConnectDB()


app.use(express.json())

app.use('/Upload',express.static('Upload'))
app.use('/api/auth',userRouter)
app.use('/api/car',CarRouter)



app.listen(process.env.port,console.log(`Server is running on the port ${process.env.port}`))