/**
 * Created by ikj on 07/02/2017.
 */

var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("hello world");
});

app.listen(8888, function () {
    console.log("server on");
})