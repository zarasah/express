const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
const server = http.createServer(app);

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.use(express.static('public'));

app.use(express.static('node'));

app.get('/node', (res, req) => {
    req.redirect('/node.html');
})

// app.get('/node', (req, res) => {
//    res.sendFile(path.join(path.resolve(), '/node/node.html'));
// })

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/first', (req, res) => {
    res.send('This is first page');
})

app.get('/second', (req, res) => {
    res.send('This is second page');
})

// app.post('/', (req, res) => {
//     res.send('Got a POST request')
// })

// app.put('/user', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//     res.send('Got a DELETE request at /user')
// })

server.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
//console.log(app);