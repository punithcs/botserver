var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World! Punith');
}).listen(3000, ()=>{
    console.log('server is runing at port 3000')
});
