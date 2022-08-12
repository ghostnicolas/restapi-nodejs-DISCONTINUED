const app = require('./index.js');
const http = require('http');

const port = process.env.PORT;
const server = http.createServer(app);
server.listen(port);