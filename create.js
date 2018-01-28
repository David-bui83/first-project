// import a module used later
const path = require('path')

const DEFAULT_PORT = 3377
const WEBSITE_FOLDER = 'website'

const express = require('express')
const app = express()

// Serve up website constents from teh specified folder
const websitePath = path.join(_dirname, WEBSITE_FOLDER)
app.use(express.static(websitePath))

// start the web server listening on a port
const port = process.env.PORT || DEFAULT_PORT
app.listen(port)

// log runtime message
console.log('Server listening at port ${port}')