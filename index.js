// import dotenv
require('dotenv').config()

//1 import express
const express = require('express')

//5 import cros
const cors = require('cors')

//8 import router
const router = require('./router')

//import app
// const appMiddleware = require('./middleware/appMiddleware')

// import connect
require('./connection')

//2 create server
const pfServer = express()

//6 server using cors
pfServer.use(cors())

//7 parse the data  -  middleware - parse the data
pfServer.use(express.json()) // only use applicarion

// pfServer.use(appMiddleware)

// use router
pfServer.use(router)

//exporting upload folder
pfServer.use('/upload',express.static('./uploads'))

//3 port 
const PORT = 4000 || process.env.PORT

//4 listern 
pfServer.listen(PORT, () => {
    console.log(`server running successfully at fort number ${PORT}`);
})

// get 
// pfServer.get('/',(req,res)=>{
//     res.send('get request is recevied')
// })

// post
// pfServer.post('/', (req, res) => {
//     res.send('post request is recevied')
// })

// put
// pfServer.put('/', (req, res) => {
//     res.send('put request is recevied')
// })

// delete
// pfServer.delete('/', (req, res) => {
//     res.send('delete request is recevied')
// })
