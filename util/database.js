const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node complete',
    password:'radadiya123'
});

module.exports = pool.promise()