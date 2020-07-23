const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors
app.use(cors());

//Configuracion global de rutas
app.use(require('./routes'));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://127.0.0.1:27017/login-react', (err, res) => {
    if (err) throw err;

    console.log('Base de datos online');
});


app.listen(3000, () => {
    console.log('escuchando el puerto ', 3000);
}
);