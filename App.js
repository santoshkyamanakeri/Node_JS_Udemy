const http = require('http');

const Server = http.createServer((req, res) => {
    console.log(req)
});

Server.listen(3000);