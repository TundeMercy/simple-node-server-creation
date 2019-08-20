
const port = 8081;
const http = require('http');
const personalDetails = require("./personal-details-class");
person = new personalDetails("Tunde Ajagbe", "tundeajagbea@gmail.com", 08106887783);

var serv = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.write(JSON.stringify(person));
    res.end();
});

serv.listen(port);
console.log(`listening on port ${port} ...`);


