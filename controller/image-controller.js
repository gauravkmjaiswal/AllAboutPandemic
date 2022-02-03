import grid from 'gridfs-stream'
import mongoose from 'mongoose'
const conn=mongoose.connection;

let gfs;
conn.once('open',()=>{
    gfs=grid(conn.db,mongoose.mongo)
    gfs.collection('fs')
})
const url=`http://localhost:8000`

export const uploadImage=(request,response)=>{
    try{
            if(!request.file)
            return response.status(404).json("file not found");
        
            const imageURL=`${url}/file/${request.file.filename}`
            return response.status(200).json(imageURL)

    }catch(error)
    {
        response.status(500).json("error while uploading image "+ error)
    }
  
    
}

export const getImage=async (request,response)=>{
    try{
       const file = await gfs.files.findOne({filename:request.params.filename})
       const readStream=gfs.createReadStream(file.filename)
        readStream.pipe(response)
    }catch(error)
    {
        response.status(500).json("error while getting image "+ error)
    }
  
    
}