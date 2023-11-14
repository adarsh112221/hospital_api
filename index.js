const express=require('express');
const app=express();
const port=8000;

// ======DB Connection=======
const db=require('./config/mongoose');

//setting up passport and passport jwt
const passport =require('passport');
const passportJWT=require('./config/passport_jwt_strategy');

// -----for reading forn data------
app.use(express.urlencoded({extended:true}))
app.use('/',require('./routes/index'));

app.listen(port,(err)=>{
    if(err){
        console.log('error in running on port')
    }else{
        console.log(`Server is running on  port ${port}`)
    }
})