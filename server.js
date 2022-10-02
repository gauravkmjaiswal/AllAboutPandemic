import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
//components
import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);
app.get('/',(req,res)=>{
    res.send("ok bro")
})


if(process.env.NODE_ENV=='production')
{

}

const PORT = process.env.Port || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

const URL = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@allaboutpendemic.asqmc.mongodb.net/AllAboutPendemic?retryWrites=true&w=majority`;
Connection(URL);
