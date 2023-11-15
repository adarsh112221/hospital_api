// doctorController.js

const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor'); 
module.exports.register=async function(req,res){
    try{
        let doctor=await Doctor.findOne({
            email:req.body.email
        });
        if(doctor){
          return res.status(200).json({message:"Doctor already registerd, Use your email to Login",data:{doctor:doctor}})
        }else{
           doctor=await Doctor.create({name:req.body.name,email:req.body.email,password:req.body.password,speciality:req.body.speciality,phone:req.body.phone})
           return res.status(200).json({message:"you are successfully registered",
        data:{
            doctor:doctor
        }})
        }
    }catch(err){
        console.log(err);
        return res.status(401).json({message:"error in registration"})
    }
}

// login controller
module.exports.login=async function(req,res){
try{
    let doctor=await Doctor.findOne({email:req.body.email})
    if(!doctor||doctor.password!=req.body.password){
       return res.status(422).json({
        message:"Invalid username or passwrod"
       });
    }
       return res.status(200).json({message:"loged in sucessfully",
    data:{token:jwt.sign(doctor.toJSON(),'secret',{expiresIn:'200000'})}})
    
}catch(err){
    console.log(err);
    return res.status(401).json({
        message:"Internal Error"
    })
}
}