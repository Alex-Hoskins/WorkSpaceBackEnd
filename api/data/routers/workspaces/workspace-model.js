const db = require('../../db-config')

async function getAllWorkSpaces() {
    const rows = await db('workspaces')
    .leftJoin('images', 'workspaces.workspace_id', 'images.workspace_id')
    return rows 
  }

module.exports={
    getAllWorkSpaces,
}