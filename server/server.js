import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import client from './utils/database.js'

const app =express();

app.use(cors({
    origin:"*"
}));
app.use(express.json());
app.use('/',userRoutes);

client.connect((err)=>{
    if(!err){
        console.log("connected to Database");
    }else{
        console.log(err);
    }
})

app.get('/get',(req,res)=>{
    res.send("Yoo man !!")
})


app.listen(4000, ()=>{
    console.log("Server running at port : 4000");
})