const express = require('express');
const app = express();
const path = require('path');

// 暴露文件
// app.use(express.static(path.join(__dirname, '../html')))
// app.use(express.static(path.join(__dirname, '../css')))
// app.use(express.static(path.join(__dirname, '../package')))
// app.use(express.static(path.join(__dirname, '../layui-v2.6.8')))
app.use(express.static(path.join(__dirname, '../../后台管理系统')))

// 路由操作
const shuju = require('./shuju');
app.use(shuju);


app.listen(3000, (err) => {
    if (err) return console.log(err);
    console.log('成功');
})