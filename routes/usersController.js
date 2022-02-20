// Imports
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const models = require('../models')

// User Routes

module.exports = {
    register: function(req, res) {
        //Params
        let email = req.body.email
        let username = req.body.username
        let password = req.body.password
        let bio = req.body.bio

        // Check obligatory params
        if(email == null || username == null || password == null) {
            return res.status(400).json({'error': 'paramètres manquants'})
        }

        //Verify pseudo, mail regex, password

        // check email exist
        models.User.findOne({
            attributes:['email'],
            where: {email: email}
        })
        .then(function(userFound){
            if(!userFound){
                bcrypt.hash(password, 5, function(err, bcryptedPassword){
                    let newUser = models.User.create({
                        email: email,
                        username: username,
                        password: bcryptedPassword,
                        bio: bio,
                        isAdmin: 0
                    })
                    .then(function(newUser) {
                        return res.status(201).json({'userId': newUser.id})
                    })
                    .catch(function(err) {
                        return res.status(500).json({'error': "impossible d'ajouter l'utilisateur"})
                    })
                })
            }else{
                return res.status(409).json({'error': "l'utilisateur existe déjà"})
            }
        })
        .catch(function(err){
            return res.status(500).json({'error': "impossible de verifier l'utilisateur"})
        })
        
    },
    login: function(req, res) {
        // Params
        let email = req.body.email
        let password = req.body.password

        if(email == null || password == null) {
            return res.status(400).json({'error' : 'paramètres manquants'})
        }

        // Check User exist
        models.User.findOne({
            where: {email: email}
        })
        .then(function(userFound){
            if(userFound) {
                bcrypt.compare(password,userFound.password, function(errBcrypt, resBcrypt){
                    if(resBcrypt){
                        return res.status(200).json({
                            'userId': newUser.id,
                            'token': 'THE TOKEN'
                        })
                    }else{
                        return res.status(500).json({'error': "identifiants incorrects!!"})
                    }
                })
            }else{
                return res.status(500).json({'error': "identifiants incorrects"})
            }

        })
        .catch(function(err) {
            return res.status(500).json({'error': "impossible de verifier l'utilisateur"})
        })
    },
}