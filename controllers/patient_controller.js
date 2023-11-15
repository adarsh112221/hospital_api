const Patient=require('../models/Patient');
const Doctor=require('../models/Doctor');
const Report=require('../models/Reports');
module.exports.create=async function(req,res){
  try{
    let patient=await Patient.findOne({
        phoneNumber:req.body.phone
    });
    if(!patient){
       patient=await Patient.create({name:req.body.name,email:req.body.email,phoneNumber:req.body.phone,address:req.body.address})
       return res.status(200).json({message:"patient created succefully",
       patient:patient._id
       })
    }
  }catch(err){
    console.log(err);
    return res.status(401).json({message:"error in creating the patient"})
  }
}

//patient report

module.exports.createReport=async (req,res)=>{
try{
  let patient=await Patient.findById(req.params.id);
  if(patient){
    let reportData={
      doctor:req.body.doctor,
      patient:req.param.id,
      status:req.body.status,
      date:req.body.date,
    }
    console.log("hello",Report);
    let report=await Report.create(reportData);
    patient.reports.push(report);
    patient.save();
    return res.status(200).json({message:"Patient report successfully created"})
  }else{
    return res.status(409).json({message:"Patient registration unsuccessful"})
  }
}catch(err){
  console.log("error in creating the report of patient")
  return res.status(500).json({err});
}
};


//create all patient reports

module.exports.allReports=async function(req,res){
  try{
   let patient = await Patient
    .findById(req.params.id)
    .populate('reports')
    .populate({
      path: 'reports',
      populate: {
        path: 'doctor',
        select: 'name _id'
      }
    });
    if(patient){
        return res.status(200).json({
            message: `${patient.name}'s Test Reports`,
            reports: patient.reports,
        });
    }else{
      return res.status(409).json({
        message: "Patient not registered",
    });
    }
  
  }catch(err){
    console.log('error in fetching the patient report',err);
    return res.status(500).json({err});
  }
}