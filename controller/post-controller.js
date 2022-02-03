
import post from '../schema/post-schema.js';
import Post from '../schema/post-schema.js'

export const createPost =async (request,response)=>{
    console.log(request.body)
    try{

        const post = await new Post(request.body);
        post.save()

        response.status(200).json('story save successfully')

    }catch(error)
    {
        response.status(500).json(error)
    }
}
export const getAllposts =async (request,response)=>{
   let username=request.query.username
   let category=request.query.category
  
    try{
        let posts
        if(username)
        {
         posts = await Post.find({username:username})
        }
        else if(category)
        {
         posts= await Post.find({categories:category})
        }
        else
        {
         posts = await  Post.find({})
        }

         response.status(200).json(posts)

    }catch(error)
    {
        response.status(500).json(error)
    }
}
export const getPost =async (request,response)=>{
   
    try{

        let post = await  Post.findById(request.params.id)
        console.log(post)
        response.status(200).json(post)

    }catch(error)
    {
        response.status(500).json(error)
    }
}
export const updatePost= async (request,response)=>{
    try{
        await Post.findByIdAndUpdate(request.params.id,{ $set :request.body})
        response.status(200).json("story updated successfully")
    }catch(error)
    {
        response.status(500).json(error)
    }
}
export const deletePost= async (request,response)=>{
    try{
        await Post.findByIdAndDelete(request.params.id)
        response.status(200).json("story deleted successfully")
    }catch(error)
    {
        response.status(500).json(error)
    }
}