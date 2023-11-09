const passport = require('passport');
const passportJWT = require('passport-jwt');
const Doctor=require('../models/Doctor')
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}, (jwtPayload, done) => {
    Doctor.findById(jwtPayload._id)
    .exec()
    .then(doctor => {
      if (doctor) {
        console.log('Found doctor:', doctor);
        if (doctor) {
            return done(null, doctor);
          } else {
            return done(null, false);
          }
      } else {
        console.log('Doctor not found');
      }
    }).catch(err => {
    console.error('Error in finding user from JWT', err);
    return done(err, false);
  });
}));
module.exports=passport;
