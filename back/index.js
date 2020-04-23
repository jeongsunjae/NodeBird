const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const passport = require('passport');

const passportConfig = require('./passport');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
const hashtagAPIRouter = require('./routes/hashtag');

//.env 설정 불러오기
dotenv.config();
const app = express();

db.sequelize.sync();

// passport 전략 
passportConfig();

//로그
app.use(morgan('dev'));
//static 미들웨어에 경로를 지정하면 그 안에 파일들을 다른 곳에서 사용할 수 있게함
     //uploads경로를 /(루트) 경로처럼 사용
app.use('/', express.static('uploads'));
//json 데이터 처리
app.use(express.json());
//form으로 넘어오는 데이터 처리
app.use(express.urlencoded({extended: true}));
// 다른 주소에서 요청 주고받고 할 수 있게
app.use(cors({
    // 요청주소랑 갖게
    origin: true,
    credentials: true,
}));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({

    //매번 세션 강제 저장
    resave:false,
    // 빈 값도 저장
    saveUninitialized: false,
    // 시크릿 키
    secret: process.env.COOKIE_SECRET,
    // 쿠키 옵션
    cookie: {
        // 자바스크립트에서 쿠키 접근 불가
        httpOnly: true,
        secure: false, // https를 쓸 대 true
    },
    name: 'rnbck',
}));

app.use(passport.initialize());
//passprot session은  expressSession 아래 위치해야함
app.use(passport.session());

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/hashtag', hashtagAPIRouter);

// 포트 열어줌
app.listen(3065,() => {
    console.log("server is running");
})