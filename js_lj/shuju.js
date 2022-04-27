const express = require('express');
// const app = express();
const rou = express.Router();

// 数据库
const db = require('./mysql');
// app.use(db);
// console.log(db);


// 总数据
rou.get('/api', (req, res) => {
    let { callback } = req.query;

    db.query('select * from huotai', (err, data) => {
        if (err) return console.log(err);
        res.send(`${callback}(${JSON.stringify(data)})`);
    })

})



module.exports = rou;
