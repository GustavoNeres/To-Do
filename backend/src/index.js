
const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors())
server.use(express.json())

const taskRouter = require('./routes/taskRoutes')

server.use('/task', taskRouter);

server.listen(3001, () => {
    console.log('API ONLINE')
} )