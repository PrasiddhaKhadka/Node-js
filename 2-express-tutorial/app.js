const http = require('http');
const { readFileSync } = require('fs');

// Get All Files
const homePage = readFileSync('index.html');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, { 'Content-Type': 'text/html' });

    console.log(`Request received : ${req.method} ${req.url}`);
    res.write(homePage);
    res.end();
}
);

server.listen(8000);

console.log('Server running at http://localhost8000/');