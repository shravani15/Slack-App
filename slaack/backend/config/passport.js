const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'http://localhost:5000/auth/google/redirect'
},
(accessToken, refreshToken, profile, done) => {
    console.log('callback function fired');
    done(null, profile); // passes the profile data to serializeUser
}
));

// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) => {
done(null, user);
});

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
done(null, user);
});

// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
if (req.user) {
    next();
} else {
    res.send('You must login!');
    }
}

module.exports.isUserAuthenticated;