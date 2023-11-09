const express=require('express');
const router=express.Router();
const patientController=require('../controllers/patient_controller');
const passport=require('passport')
//routers for patient controllers

//authorised router
router.post('/register',passport.authenticate('jwt',{session:false}),patientController.create)
router.post('/creat-report/:id',passport.authenticate('jwt',{session:false}),patientController.createReport)
router.get('/:id/all_reports', passport.authenticate('jwt', { session: false }), patientController.allReports);
module.exports=router;