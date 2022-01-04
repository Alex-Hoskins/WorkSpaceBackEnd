const router= require('express').Router()
const User = require('./user-model')

router.get('/', (req, res, next)=>{
    User.getAllUsers()
    .then(users=>{
        res.status(200).json(users)
    })
    .catch(next)
})

router.post('/', (req, res, next)=>{
    User.insertUser(req.body)
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(next)
})

router.use((err, req, res, next)=>{
    res.status(500).json({
        customMessage:'something went wrong inside the user router',
        message:err.message
    })
})
  
module.exports=router