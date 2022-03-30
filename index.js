const express = require('express');
const port = process.env.port || 7890;
const db = require('./config/mongoose');
const app = express();
app.use(express.urlencoded());


app.use('/', require('./routes'));
app.listen(port, (err)=>{
    if (err) {
        console.log(`Error in listening ${port}`);
    }
    console.log('Port is on the sever : ', port);
});