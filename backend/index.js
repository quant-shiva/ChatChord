const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const port = 3000;

io.on('connection',socket => {
    console.log("A new user connected...");
});

server.listen(port, ()=>{
    console.log('server is running on port 3000...')
});