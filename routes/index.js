const express=require('express');
const router=express.Router();
console.log('router is loaded');
router.use('/doctors',require('./doctor'));
router.use('/patient',require('./patients'));
router.use('/report', require('./report'));
module.exports=router;
