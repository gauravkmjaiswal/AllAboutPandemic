import mongoose from "mongoose"
const connection= async (URL)=>{
    try{
        
        await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex: true})
        console.log("Database connected successfuly")
    }catch(error)
    {
        console.log("Error while connecting to MongoDB ",error)
    }
    
}
export default connection;