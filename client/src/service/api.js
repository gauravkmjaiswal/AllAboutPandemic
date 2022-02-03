import axios from 'axios';

const URL=""

export const createPost=async(post)=> {
   try{
        return await axios.post(`${URL}/create`,post)
   }catch(error)
   {
       console.log("Error while calling createPost Api "+error)
   }
}
export const getAllPosts=async(param)=>{
    try{
       let response = await axios.get(`${URL}/posts${param}`)
       return response.data
    }catch(error)
    {
      console.log("Error while calling getAllPosts Api "+error)
    }
}
export const getPost=async(id)=>{
  try{
     let response = await axios.get(`${URL}/post/${id}`)
     return response.data
  }catch(error)
  {
    console.log("Error while calling getPost Api "+error)
  }
}

export const updatePost=async(id,post)=>{
  try{
     let response = await axios.post(`${URL}/update/${id}`,post)
     return response.data
  }catch(error)
  {
    console.log("Error while calling updatePost Api "+error)
  }
}
export const deletePost=async(id)=>{
  try{
      await axios.delete(`${URL}/delete/${id}`)
  }catch(error)
  {
    console.log("Error while calling deletePost Api "+error)
  }
}
export const uploadFile=async(data)=>{
  try{
     return  await axios.post(`${URL}/file/upload`,data)
  }catch(error)
  {
    console.log("Error while calling uploadFile Api "+error)
  }
}
export const newComment=async(data)=>{
  try{
     return  await axios.post(`${URL}/comment/new`,data)
  }catch(error)
  {
    console.log("Error while calling newcomment Api "+error)
  }
}

export const getComments=async(id)=>{
  try{
     let response=  await axios.get(`${URL}/comments/${id}`)
      return response.data
 }catch(error)
  {
    console.log("Error while calling getComments Api "+error)
  }
}
export const deleteComment=async(id)=>{
  try{
     return await axios.delete(`${URL}/comment/delete/${id}`)
      
 }catch(error)
  {
    console.log("Error while calling deleteComment Api "+error)
  }
}