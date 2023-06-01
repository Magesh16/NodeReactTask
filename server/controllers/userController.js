import client from '../utils/database.js'


let getUserInfo = async(req,res) =>{
    try{
        let result = await client.query(`select * from public."userData"`);

        res.status(200).send(result.rows);
    }catch(err){
        res.status(500).send(err);
    }  
}

let postUserInfo = async(req,res)=>{
    try{
        let {name, age, gender, image_url} = req.body;
        await client.query('insert into public."userData" (name,age, gender, image_url) values($1,$2,$3,$4)',
        [name, age, gender, image_url]);
        res.status(201).send({message: "Insertion successfull", status:true});
    }catch(err){
        res.status(403).send({error:err.message, status:false});
    }
}

export {getUserInfo, postUserInfo};