const mysql = require('mysql');
const keys = require('./keys');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'ecomm',
    password: keys.dbpassword,
    database: 'ecommerce'
})

module.exports = db;