const express = require('express');
const app = express();
const port = 5000;

app.get('/bestSinger', (req, res) => {
    res.send('avi biter');
});

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log('listen to port', port);
});