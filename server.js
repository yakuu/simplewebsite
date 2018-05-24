const express = require('express');
const http = require("http");
const app = express();

const server = http.Server(app);
server.listen(3001);
console.log('Server running at http://127.0.0.1:3001/')

//Uses .\public\ as index
app.use(express.static('public'));




