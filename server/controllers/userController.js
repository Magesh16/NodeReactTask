import client from '../utils/database.js'


let getUserInfo = async(req,res) =>{
    try{
        let result = await client.query(`select id,name, age, gender, image_url from public."userData" order by id asc`);

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

let getUserInfoById = async(req,res)=>{
    try{
        let id = req.params.id;
        let result = await client.query(`select * from public."userData" where id=${id}`);
        res.status(200).send(result.rows);
    }catch(err){
        res.status(500).send(err);
    }  
}

let updateUserInfo = async(req,res)=>{
    try{
        let id = req.params.id;
        let name =req.body.name,
         age=req.body.age,
         gender=req.body.gender,
         image_url=req.body.image_url;
        await client.query('update public."userData" set name=$1,age=$2, gender=$3, image_url=$4 where id=$5',
        [name, age, gender, image_url,id]);
        console.log("yoooo")
        res.status(201).send({message: "Updation successfull", status:true});
    }catch(err){
        res.status(403).send({error:err.message, status:false});
    }
}

let deleteUserInfo = async(req,res)=>{
    try{
        let id = req.params.id;
        await client.query('delete from public."userData" where id=$1',[id]);
        res.status(200).send({message:"Deletion successfull, status:true"})
    }catch(err){
        res.status(403).send({error:err.message, status:false});
    }
}
export {getUserInfo, postUserInfo, updateUserInfo,getUserInfoById,deleteUserInfo};