const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');

const app = express();

db.sequelize.sync();

//로그
app.use(morgan('dev'));
//json 데이터 처리
app.use(express.json());
//form으로 넘어오는 데이터 처리
app.use(express.urlencoded({extended: true}));
// 다른 주소에서 요청 주고받고 할 수 있게
app.use(cors());

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);

// 포트 열어줌
app.listen(3065,() => {
    console.log("server is running");
})