const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200);
    res.end('OK');
  } else {
    res.writeHead(200);
    res.end('Hello World!');
  }
});

server.listen(3000, () => {
  console.log('Server chạy tại http://localhost:3000');
});

module.exports = server;