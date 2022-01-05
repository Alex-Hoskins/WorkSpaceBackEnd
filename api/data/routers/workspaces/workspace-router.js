const router= require('express').Router()
const Workspace = require('./workspace-model')

router.get('/', (req, res, next)=>{
    Workspace.getAllWorkSpaces()
    .then(spaces=>{
        res.status(200).json(spaces)
    })
    .catch(next)
})

// router.post('/', (req, res, next)=>{
//     Workspace.insertWorkspace(req.body)
//     .then(workspace=>{
//         res.status(200).json(workspace)
//     })
//     .catch(next)
// })

router.use((err, req, res, next)=>{
    res.status(500).json({
        customMessage:'something went wrong inside the workspace router',
        message:err.message
    })
})
  
module.exports=router