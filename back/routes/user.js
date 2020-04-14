const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');

const router = express.Router();

router.get('/', (req, res) => { // /api/user/
  
});

router.post('/', async (req, res, next) => { // POST /api/user 회원가입

  try {

    const exUser = await db.User.findOne({
        where: {

            userId: req.body.userId,
        },
    });

    if(exUser) {
        //send는 문자열
        return res.status(403).send('이미 가입한 아이디입니다.');
    }

    //암호화된 비밀번호
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const newUser = await db.User.create({
        nickname: req.body.nickname,
        userId: req.body.userId,
        password: hashedPassword,
    });

    console.log(newUser);

    //json데이터
    return res.status(200).json(newUser);

  }catch(e){
      
      console.error(e);

      return next(e);
  }
});

router.get('/:id', (req, res) => { // 남의 정보 가져오는 것 ex) /api/user/123

});

router.post('/logout', (req, res) => { // /api/user/logout
    req.logout();
    req.session.destroy();
    res.send('logout 했습니다.');
});

router.post('/login', (req, res, next) => { // POST /api/user/login
                        // passport에서 1,2,3 인자
  passport.authenticate('local',(err,user,info)=> {
    if(err)
    {
        console.error(err);
        return next(err);
    }
    if(info)
    {
        return res.status(401).send(info.reason);
    }

    return req.login(user, async(loginErr) => {
        try {
            if(loginErr)
            {
                return next(loginErr);
            }

            const fullUser = await db.User.findOne({
                where: { id: user.id },
                //연관된 테이블에서 정보가져오기
                include: [{
                  model: db.Post,
                  as: 'Posts',
                  //보낼 정보
                  attributes: ['id'],
                }, {
                  model: db.User,
                  as: 'Followings',
                  attributes: ['id'],
                }, {
                  model: db.User,
                  as: 'Followers',
                  attributes: ['id'],
                }],
                attributes: ['id', 'nickname', 'userId'],
              });
              
              return res.json(fullUser);
        }
        catch(e)
        {
            next(e);
        }
    });
  })(req,res,next);
});

router.get('/:id/follow', (req, res) => { // /api/user/:id/follow

});
router.post('/:id/follow', (req, res) => {

});

router.delete('/:id/follow', (req, res) => {

});

router.delete('/:id/follower', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

module.exports = router;