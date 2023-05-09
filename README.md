<h1><img src="https://em-content.zobj.net/thumbs/160/microsoft/319/star_2b50.png" height="30px"/> Open express server and html setting for window</h1>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

<h3> Now, explain about express server </h3>

* express server
1. Express 서버는 Node.js를 기반으로 하는 웹 프레임워크이다.
2. 웹 애플리케이션 및 API를 개발하는 데 사용되며, HTTP 요청 및 응답 처리, 라우팅, 미들웨어, 템플릿 엔진 등 다양한 기능을 제공한다.
3. Express는 간단하고 빠르게 웹 서버를 만들 수 있다.

* Visual Studio Code 환경 세팅
1. npm init -y
2. npm install
3. npm install nodemon
- javascript 파일을 저장했을 때 자동으로 서버를 재실행해주는 패키지
- 원래는 코드 수정하면 서버를 종료했다가 다시 실행해주는 작업을 해야함.
4. package.json의 script부분 start 추가
-----------------------------
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
-----------------------------
5. index.js 파일 생성
6. npm install express
7. express 서버 환경 세팅 코드 작성
-----------------------------
const express = require('express');
const app = express();

app.listen(7500, (req, res) => {
    console.log('express 가동 포트 : ', 7500);
})
-----------------------------
8. 터미널에 npm start 명령어 실행해서 테스트
9. 아래 코드를 index.js에 추가해서 텍스트 잘 나오는 지 로컬 브라우저에서 확인
-----------------------------
app.get('/', (req, res) => {
    res.send('<h1>hello world!</h1>');
})
-----------------------------

* html까지 연결해보기
1. 연결 확인 되었다면, html 파일 연결해보기
2. "public"이라는 폴더 생성 후 public 폴더 안에 index.html 파일 생성
3. index.html에서 "!" 입력해서 기본 베이스 코드 생성 해주고 "<h1>hello world</h1>"입력
4. index.js에 다음 코드 추가 작성
-----------------------------
app.use(express.static('public'));
-----------------------------
5. 로컬 브라우저에서 확인
6. 더 다양한 폴더와 html을 추가해서 사용하려면 아래의 코드처럼 폴더 경로만 정의해주고, "localhost:port/해당html파일이름.html"해서 테스트
-----------------------------
app.use(express.static('public/easy'));
app.use(express.static('public/middle'));
app.use(express.static('public/hard'));
-----------------------------
