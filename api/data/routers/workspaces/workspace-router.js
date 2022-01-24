const router= require('express').Router()
const Workspace = require('./workspace-model')

router.get('/', (req, res, next)=>{
    Workspace.getAllWorkSpaces()
    .then(spaces=>{
        res.status(200).json(spaces)
    })
    .catch(next)
})

router.post('/', (req, res, next)=>{
    let item ={ 
        workspace_name: req.body.workspace_name,
        workspace_description:  req.body.workspace_description,
        workspace_location: req.body.workspace_location,
        workspace_price: req.body.workspace_price
    }
    let image = {
        image_content: req.body.image_content,
        image_description: req.body.image_description || ''
    }
    Workspace.addWorkSpace(item, image)
    .then(workspace=>{
        res.status(200).json(workspace)
    })
    .catch(next)
})

router.use((err, req, res, next)=>{
    res.status(500).json({
        customMessage:'something went wrong inside the workspace router',
        message:err.message
    })
})
  
module.exports=router