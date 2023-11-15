const express=require('express');
const router=require('router');
const reportController=require('../controllers/report_controller');
//routers for patient controllers

//authorised router
router.get('/:status',reportController.status)
module.exports=router;