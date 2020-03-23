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