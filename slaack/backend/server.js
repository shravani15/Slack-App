const app = require('express')();
const passport = require('passport');
const io = require('socket.io');
const bodyParser = require('body-parser');
const session = require('express-session');
const controller = require('./controller/controller.js')
const cors = require('cors');
const db = require('./config/database.js');
const keys = require('./config/keys')
const passportSetup = require('./config/passport');

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mySQL db connected')
})
    

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: keys.sessionsecret,
    saveUninitialized: true,
    resave: true
}))
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());



const PORT = process.env.port || 5000;

app.use('/', controller);

app.listen(PORT, () => console.log('server listenining on port ' + PORT));