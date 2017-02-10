/**
 * Created by ikj on 11/02/2017.
 */

//express 모듈로드 후 전역변수 express에 할당
var express = require('express');

//express 인스트턴 app 생성
var app = express();

//get 요청이 오면 익명함수(콜백함수) 호출
app.get('/', function (req, res) {
   res.send('hello world');
});

//3000번 포트로 연결. 연결이 되면 콜백함수 호출
app.listen(3000, function () {
    console.log('server on...');
});