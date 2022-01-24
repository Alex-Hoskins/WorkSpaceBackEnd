const db = require('../../db-config')

async function getAllWorkSpaces() {
    const rows = await db('workspaces')
    .leftJoin('images', 'workspaces.workspace_id', 'images.workspace_id')
    return rows 
  }

async function addWorkSpace(item, image) {
    const [newItem] = await db('workspaces').insert(item,['workspace_id', 'workspace_name','workspace_description', 'workspace_location', 'workspace_price'])
    image.workspace_id= newItem.workspace_id

    if(image.image_content){
      const [newImage] = await db('images').insert(image,['image_content', 'image_description'])
      newItem.image = newImage
    }
    return newItem 
  }

module.exports={
    getAllWorkSpaces,
    addWorkSpace,
}