const http = require('http');

const address ="127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) =>{
res.statusCode = 200
res.setHeader('Content-Type', 'text/plain');
res.end('Hello from server!!!!yo');
})

server.listen(port, address, () =>console.log('Server running...'));
