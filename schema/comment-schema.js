import mongoose from 'mongoose'

const CommentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    postId:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:false
    },
    comments:{
        type:String,
        required:true
    }
})
const Comment=mongoose.model('comment',CommentSchema)
export default Comment;