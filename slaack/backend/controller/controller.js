const app = require('express')();
const home = require('../routes/home.js');
const register = require('../routes/register.js');
const login = require('../routes/login.js');

app.use('/', home);
app.use('/register', register);
app.use('/auth', login);

module.exports = app;