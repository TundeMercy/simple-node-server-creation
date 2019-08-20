const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.write("Hello world #newbies");
    res.end();
}).listen(8081);