const router = require('express').Router();
const passport = require('passport');
const passconfig = require('../config/passport')

function isUserAuthenticated(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.send('You must login!');
        }
    }

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    console.log(req.user);
    res.send('<h1>You are logged in<h1>')
});

module.exports = router;