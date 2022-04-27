const sql = require('mysql');

const db = sql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'abc'
})

module.exports = db;