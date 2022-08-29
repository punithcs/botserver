const express = require('express')
const app = express()
app.all('/', (req, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end('ok');
    console.log("Start of Response..............");
    console.log(response);
    console.log("End of Response...............");
    console.log(req)
    console.log("Request.....")

})
app.listen(process.env.PORT || 3000)