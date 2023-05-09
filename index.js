const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send('hello world!');
// })

app.listen(7500, (req, res) => {
    console.log('express 가동 포트 : ', 7500);
})

app.use(express.static('public'));
app.use(express.static('public/user'));