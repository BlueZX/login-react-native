const express = require('express');

const Usuario = require('../models/usuario');

const app = express();

app.get('/api/usuario', (req, res) => {
    
    Usuario.find({})
        .sort('-fecha')
        .limit(100)
        .exec((err, usuarios) => {
            if(err){
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                usuarios,
            })
        })

})

app.get('/api/all/usuario', (req, res) => {
    
    Usuario.find({})
        .sort('-fecha')
        .exec((err, usuarios) => {
            if(err){
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                usuarios
            })
        })

})

app.get('/api/usuario/:nombre', (req, res) => {

    let {nombre} = req.params
    
    Usuario.find({nombre})
        .sort('-fecha')
        .limit(10)
        .exec((err, usuarios) => {
            if(err){
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                usuarios
            })
        })

})

app.get('/api/usuario/:email', (req, res) => {

    let {email} = req.params
    
    Usuario.find({email})
        .sort('-fecha')
        .limit(10)
        .exec((err, usuarios) => {
            if(err){
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                usuarios
            })
        })

})

module.exports = app;