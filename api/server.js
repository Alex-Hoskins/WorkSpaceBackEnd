const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const userRouter=require('./data/routers/users/user-router')
const authRouter = require('./data/routers/auth/auth-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users',userRouter)
server.use('/api/auth',authRouter)

server.use((err, req, res, next) => { 
  res.status(err.status || 500).json({
    message: err.message
  })
})

module.exports = server
