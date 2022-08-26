const express = require('express')
const app = express()
app.all('/', (req, res) => {
    req.send(req)
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)