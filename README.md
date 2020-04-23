# NodeBird
React + Next.js + Express => 트위터 클론 코딩

# package 설정 
- npm i로 react , react-dom , next, nodemon, eslint 등 설치

# eslint 설정

```
{
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "import",
        "react-hooks"
    ]
}

```

# scripts

```
 "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },

```

# Next에서 pages 폴더를 만드는 이유
- 폴더안 디렉토리 및 파일은 자동으로 주소 체계를 갖춤 

    http://localhost:3000/about
    http://localhost:3000/user/create 

- Next Link 하는법
```
    <Link href="/about"><a>about</a></Link>
```

# antd <-- 디자인 툴 
- 초기 사용할 때는 css 불러오지 않으면 사용할 수 없음
```
<Head>
            <title>NodeBird</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
</Head>
```

# Children 하위 컴포넌트 랜더링

```

 <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/">
                        <a>
                        노드버드
                        </a>
                    </Link>
                </Menu.Item>

                <Menu.Item key="profile">
                    <Link href="/profile">
                     <a>
                        프로필
                     </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{verticalAlign: 'middle'}}/>
                </Menu.Item>
            </Menu>
            <Link href="/singup"><a><Button>회원가입</Button></a></Link>
            {children}
</div>

```
```
   <AppLayout>
                <div>Hello Next.js!</div>
    </AppLayout>
```


- AppLayou이라는 컴포넌트 안에 div가 있을 때 AppLayout에서는 Children이라는 props를 사용해 랜더링 할 수 있다.


# 커스텀 Hooks

```
const useInput = (initValue = null ) => {

        const [value, setter] = useState(initValue);
        const handler = (e) => {
            setter(e.target.value);
        };

        return [value,handler];
    }

    const [id, onChangeId] = useInput();

```

- 기존 Hooks를 조합해 추가된 기능의 Hooks를 만들 수 있다.

# UseCallback

```
     const handler = useCallback((e) => {
     setter(e.target.value);
 }, []);
 
```

# 중복되는 소스 줄이기
- NEXT.js는 pages안에 _app.js로 설정한 파일내용을 최상위 부모 컴포넌트로 인식한다

```
const NodeBird = ({Component}) => {

    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    )
};

```
- 중복되는 코드를 정의하고 컴포넌트를 props로 받아와 사용
- _document.js - html, head, body
- _app.js  - root
- page - 실제 컴포넌트
- error.js - 에러

- 컴포넌트 분리는 반복문, 조건문 등으로 나뉘는 부분을 분리해주면 쉽다.

# Redux 전체적인 state 관리 통제 Store사용
- Action -> state를 변경하는 행동
- Dispatch -> action을 실행
- Reducer -> action의 결과로 state를 어떻게 바꿀지 정의

```
import {combineReducers} from 'redux';
import user from './user';
import post from './post';

const rootReducer =combineReducers({
    user,
    post
});

export default rootReducer;
```

- reducer를 하나로 합칠 수 있음

# redux에서 dispatch 및 state 가져오기

 - const dispatch = useDispatch(); -> dispatch를 가져옴
 -  const {isLoggedIn,user} = useSelector(state=>state.user); // selecort를 사용해서 state를 가져옴

 # redux state와 react state를 같이 쓰는 이유

 - redex state만 사용하면 너무 많은 action을 만들어야되며 많은 action이 실행됨

 - 예를들어 폼 입력 시 입력은 react state로 받고 마지막에 redux state에 담아서 서버로 보냄
 
 - 여러 컴포넌트에서 사용되는 데이터 -> redux state

 - 단일 컴포넌트에서 사용되는 데이터 -> react state -> 서버로 보낼때 redux state

 # redux 미들웨어가 필요한 이유

 - redux는 동기적인 방식밖에 지원하지 않음, 타이머도 X

 - redux에서 비동기 활용하기 위해 미들웨어 사용

 - saga에서는 function* 과 같은 제너레이터 사용

 - yield 키워드는 제너레이터 함수의 실행을 중지시키거나 그리고  yield 키워드 뒤에오는 표현식[expression]의 값은 제너레이터의 caller로 반환된다. 제너레이터 버전의 return 키워드로 생각 할 수 있다

 ```
    export default function* rootSaga() {
    yield all([
        call(user),
        call(post),
    ]);
}

 ```

 - put은 dispatch와 동일

 # Middleware 설정 

 ```

    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    sagaMiddleware.run(rootSaga);

```

# 제너레이터

- 함수 실행을 중간에 멈출 수 있는 함수 (멈췄다 사용자가 원할 때 재개)

- yield => 중단점 / yield* => iterable(반복 가능 값)

- take : 해당 액션이 dispatch되면 제너레이터를 next하는 이펙트

```
    yield take(함수);

```

- while(true) 와 yield를 통한 반복문 제어 혹은 yield []를 통해 가능

- put => saga의 dispatch

# call와 fork

- 둘다 함수 실행

- call => 동기호출 fork => 비동기 호출

# Commnet 작성

```
    const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
      const post = state.mainPosts[postIndex];
      const Comments = [...post.Comments, dummyComment];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };

```

- postIndex를 찾기 위해 현재 받은 data의 id와 post의 id 비교 index를 찾음
- 해당 index를 가진 post를 가져와 그 post안에 Commnets 배열에 불변성 유지하여 추가
- mainPosts도 불변성 유지 
- 현재는 backend가 없어서 더미로 대체


# Back-End

- sequelize 관계형 DB 표현

- hasmany , belongsTo (1 : N) 관계 
- belongsToMany (N : M) 관계 ( 중간에 테이블 생성 - 서로의 관계 정리 ) -> through : "테이블 명" 

```
      db.Post.hasMany(db.Image);
      db.Post.belongsTo(db.Post, { as: 'Retweet' });
      db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });

```

- through 중간 테이블 명

- as 별칭

- 정의한 model 가져와서 사용

```
db.sequelize.sync();
```

# db 생성 및 연결
- sequelize db:create
- npm i mysql2

# express에서 router 사용

```
const router = express.Router();
```

- router에서 정의한 내용은 index에서 불러서 사용app.use('/api/user', userAPIRouter); -> router.get('/') => api/user/ 


# bcrypt 모듈

- 암호화 모듈 (비밀번호 해쉬)

```
bcrypt.hash(req.body.password, 12);
```

- 보통 10~12 정도 많이 씀 뒤에 숫자가 커질수록 해킹하기 어렵지만 비밀번호가 만들어지는데도 오래걸림

# express restAPI 구성할때 기본

```
//로그
app.use(morgan('dev'));
//json 데이터 처리
app.use(express.json());
//form으로 넘어오는 데이터 처리
app.use(express.urlencoded({extended: true}));
// 다른 주소에서 요청 주고받고 할 수 있게
app.use(cors());
```

# cookie 사용

```
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

```

- back
```
  요청주소랑 갖게
    origin: true,
    credentials: true,
```

- front 
```
  return axios.post('/user/login', loginData, {
        withCredentials: true,
    });
```

- front와 back 서로 쿠키 전달 하려면 다음과 같이 Credentials 옵션 있어야함



# passport 로그인

- serializeUser : id와 쿠키 저장해서 보냄

- deserializeUser : 쿠키를 토대로 해당 정보 검색


# Next 동적 주소 사용

- NodeBird.getInitialProps를 통해 _app.js에서 query를 받아온다

- 해당 컴포넌트에서 context.query.tag와 같은 형식으로 받아온다

```
Hashtag.getInitialProps = async (context) => {
  console.log('hashtag getInitialProps', context.query.tag);
  return { tag: context.query.tag };
};

```

# 동적인 주소 Link

```
href={{pathname: '/hashtag', query:{tag: v.slice(1)}}}
```

# 로그인 확인 함수

- isAuthenticated

# 이미지 올리는 방식

- 이미지 업로드와 게시글 본문을 따로 전송 저장 (ajax 사용)

- multer를 사용해서 이미지 업로드

```

const upload = multer({
  // 서버쪽에 저장하겠다는 옵션
  storage: multer.diskStorage({
      
    destination(req,file,done){
          //에러시 //저장할 폴더
      done(null, 'uploads');

    },
    filename(req,file,done){

      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + new Date().valueOf() + ext);

    }
  }),
  //file 용량 및 갯수 등 제한 가능
  limits: {fileSize: 20 * 1024 * 1024},
});

```

- static 미들웨어에 경로를 지정하면 그 안에 파일들을 다른 곳에서 사용할 수 있게함

```
//static 미들웨어에 경로를 지정하면 그 안에 파일들을 다른 곳에서 사용할 수 있게함
     //uploads경로를 /(루트) 경로처럼 사용
app.use('/', express.static('uploads'));

```