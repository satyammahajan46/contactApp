const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(_dirname+'/dist/contactApp/'));

app.listen(process.env.PORT || 8080);

app.get('*/', function(req, res){
    res.sendFile(path.join(_dirname+'/dist/contactApp/index.html'));
})

console.log("listening");