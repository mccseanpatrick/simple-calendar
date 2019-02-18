const express = require('express');
const path = require('path');
const app = express();
const router = require('./router')

//app.use(express.static(path.join(__dirname, "..", "/client")))

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, "..", "..", "/public/index.html"));
});

app.use('/', router);

const port = process.env.PORT || 5000;
app.listen(port);