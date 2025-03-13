const login=(req,res)=>{
    const data=req.body;

    try{
        if(data.email=="" && data.password==""){
            return res.status(400).send({messege:"data not found"});
        }
        else{
            return res.status(200).send({messege:"user logged in successfully"});
        }
    }catch(e){
        return res.status(500).send({messege:error.messege})
    }
}

const signUp=(req,res)=>{
    const data=req.body;

    try{
        if(data.email=="" && data.password==""){
            return res.status(400).send({messege:"data not found"});
        }
        else{
            return res.status(200).send({messege:"user registered successfully"});
        }
    }catch(e){
        return res.status(500).send({messege:error.messege})
    }
}
module.exports={
    login,signUp
}