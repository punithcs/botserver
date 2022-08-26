const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Request");
    console.log(res);
    console.log("End of Request");
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)