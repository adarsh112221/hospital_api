const express=require('express');
const router=express.Router();
const reportController=require('../controllers/report_controller');
//routers for patient controllers

//authorised router
router.get('/:status',reportController.status)
module.exports=router;