const passport = require('passport');
const passportJWT = require('passport-jwt');
const Doctor=require('../models/Doctor')
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}, (jwtPayload, done) => {
   Doctor.findById(jwtPayload._id,function(err,user){
    if(err){
        if(err){
            console.log("Error in finding the user");
            return;
        }
        if(user){
             return done(null,user);
        }else{
            return done(null, false)
        }
    }
   })
}));
module.exports=passport;
