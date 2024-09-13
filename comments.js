// Create web server
var http = require('http');
// Create a web server with a request listener
http.createServer(function (req, res) {
    // Set the response header
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Set the response content
    res.write('Hello, World!');
    // End the response
    res.end();
}).listen(8080); // Listen on port 8080
// Print the message
console.log('Server running on http://localhost:8080/');