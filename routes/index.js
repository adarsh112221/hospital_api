const express=require('express');
const router=express.Router();
console.log('router is loaded');
router.use('/doctors',require('./doctor'));
module.exports=router;
