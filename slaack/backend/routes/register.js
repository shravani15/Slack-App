const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(res);
    res.sendStatus(200);
    res.send('<h1>Register new user</h1><br/><button method="GET" action"/auth/google">Login with google</button>')
})

module.exports = router;