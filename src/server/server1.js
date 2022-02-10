const express = require('express');
const app = express();
app.use((request, response, next) => {
    console.log('有人请求服务器了')
    next()
})

app.get('/students', (request, response) => {
    const students = [
        {name:'xiaohong', age: 18},
        {name:'wyf', age: 28},
        {name:'luhan', age: 38},
    ]

    response.send(students);
})

app.listen(5000, (err) => {
    if (!err) {
        console.log('服务器请求成功了,请求学生信息的地址为http://localhost:5000/students')
    }
})

module.exports.exit = 0;