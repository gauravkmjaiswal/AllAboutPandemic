import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
//components
import connection from './database/db.js'
import Router from './routes/route.js'
import DotEnv from 'dotenv'

const app=express()
DotEnv.config();
const router=express.Router();
//console.log("hello")
const PORT=process.env.PORT||8000

app.use(cors())
app.use(bodyParser.json( {extended : true }))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router)

if(process.env.NODE_ENV==='production')
{
    app.use(express.static('client/build'));
}



app.listen(PORT,()=>{
    console.log("server is running on "+PORT)
})


const URL=`mongodb+srv://user:codeforinterview@allaboutpendemic.asqmc.mongodb.net/AllAboutPendemic?retryWrites=true&w=majority`
connection(process.env.MONGODB_URI|| URL);
