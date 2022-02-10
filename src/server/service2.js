const express = require('express');
const app = express();
app.use((request, response, next) => {
    console.log('有人请求服务器了')
    next()
})

app.get('/getCars', (request, response) => {
    const students = [
        {name:'奔驰', price: 118},
        {name:'宝马', age: 128},
        {name:'五菱', age: 111},
    ]

    response.send(students);
})

app.listen(5001, (err) => {
    if (!err) {
        console.log('服务器请求成功了,请求汽车信息的地址为http://localhost:5000/students')
    }
})