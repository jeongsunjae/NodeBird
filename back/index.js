const express = require('express');

const app = express();

//메인페이지
app.get('/', (req,res)=> {
    res.send("hello server");
})

app.get('/about', (req,res)=> {
    res.send("hello about");
})

// 포트 열어줌
app.listen(3065,() => {
    console.log("server is running");
})