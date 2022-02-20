//Imports
const express = require('express')

// Instantiate server
const server = express()

//Configure routes
server.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bienvenue sur mon super server</h1>')
});

// launch server
server.listen(8080, function() {
    console.log('Server en écoute :)');
})