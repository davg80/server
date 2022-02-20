//Imports
const express = require('express')
const bodyparser = require('body-parser')
const apiRouter = require('./apiRouter').router

// Instantiate server
const server = express()
// Body parser configuration
server.use(bodyparser.urlencoded({extended: true}))
server.use(bodyparser.json())

//Configure routes
server.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bienvenue sur mon super server</h1>')
});

server.use('/api/', apiRouter)


// launch server
server.listen(8080, function() {
    console.log('Server en écoute :)');
})