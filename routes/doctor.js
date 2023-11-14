const express=require('express');
const router=express.Router();
const doctorController=require('../controllers/doctor_controller');
//to register the doctor
router.post('register',doctorController.register);
//router to login the doctor
router.post('/login',doctorController.login);

module.exports=router;