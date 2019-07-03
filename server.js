const express = require('express')
const config = require('config')
const app = express()
const port =  config.server.port || 8080
//const port = process.env.PORT || 8080
console.log('app data is ' + config.app["my-data"])

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port} !`))
