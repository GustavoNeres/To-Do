
const express = require('express')
const server = express()
server.use(express.json())

const taskRouter = require('./routes/taskRoutes')

server.use('/task', taskRouter);

server.listen(3000, () => {
    console.log('API ONLINE')
} )