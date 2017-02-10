/**
 * Created by ikj on 11/02/2017.
 */

//express 모듈로드 후 전역변수 express에 할당
var express = require('express');

var path = require('path');

//express 인스트턴 app 생성
var app = express();

app.use(express.static(path.join(__dirname, 'client')));

//3000번 포트로 연결. 연결이 되면 콜백함수 호출
app.listen(3000, function () {
    console.log('server on...');
});