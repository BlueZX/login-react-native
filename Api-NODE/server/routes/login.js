const express = require('express')
const bcrypt = require('bcrypt')
const Usuario = require('../models/usuario')

const app = express();


app.post('/api/login', (req, res) => {

    let {email, password} = req.body
    console.log(req.body);

    Usuario.findOne( {email}, (err, usuarioDB) =>{
        if(err){
            return res.status(400).json({
                ok: false,
                err
            })
        }
        console.log(usuarioDB)

        if(!usuarioDB){
            return res.json({
                ok: false,
                msg: 'Email y/o contraseña incorrectos'
            })
        }

        if(bcrypt.compareSync(password, usuarioDB.password) && email === usuarioDB.email){

            return res.json({
                ok: true,
                msg: 'Se ha ingresado al sistema exitosamente',
                usuarioDB
            })
        }

        return res.json({
            ok: false,
            msg: 'Email y/o contraseña incorrectos'
        })

    })
})


module.exports = app;