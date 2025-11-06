const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    console.log(`Request URL: ${req.url}`);
    res.write('Welcome to Our Home Page');
    res.end();
}
);

server.listen(8000,()=>{
    console.log('Server is listening on port 8000');
})