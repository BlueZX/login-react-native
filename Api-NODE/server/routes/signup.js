const express = require('express')
const bcrypt = require('bcrypt')

const Usuario = require('../models/usuario')

const app = express();

app.post('/api/signup', (req, res) => {
    let body = req.body;
    let email = req.body.email;

    let usuario = new Usuario({
        email: body.email,
        password: bcrypt.hashSync(body.password, 15),
        nombre: body.nombre
    });

    Usuario.findOne( {email}, (err, usuarioDB) =>{

        if(err){
            return res.status(400).json({
                ok: false,
                err
            })
        }

        if(usuarioDB){
            return res.status(500).json({
                ok: false,
                msg: 'El correo electronico ya se encuentra en uso'
            })
        }

        usuario.save( (err, usuarioSaveDB) => {
            if(err){
                return res.status(400).json({
                    ok: false,
                    msg: 'Error al momento de crear usuario',
                    err
                })
            }
    
            return res.json({
                ok: true,
                msg: 'El usuario ha sido creado exitosamente',
                usuarioDB: usuarioSaveDB
            })
        })

    })

})

module.exports = app;