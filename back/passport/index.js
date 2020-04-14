const passport = require('passport');
const db = require('../models');
const local = require('./local');

module.exports = () => {

    //서버쪽에 id와 쿠키 저장해서 쿠키 프론트로 보냄
    //id만 서버쪽에서 저장
    passport.serializeUser((user, done) => { 

      return done(null, user.id);

    });

    // 프론트에서 쿠키를 전달해줬을 때 그 쿠키에 해당하는 id로 정보를 검색
    passport.deserializeUser(async (id, done) => {
        try {

          const user = await db.User.findOne({
            where: { id },

            include: [{
              model: db.Post,
              as: 'Posts',
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
          });
          return done(null, user); // req.user에 저장
        } catch (e) {
          console.error(e);
          return done(e);
        }
      });
    
      local();
    
    
};