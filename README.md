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