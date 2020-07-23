const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Es necesario un email']
    },
    nombre: {
        type: String,
        required: [true, 'Es necesario un nombre']
    },
    password: {
        type: String,
        required: [true, 'Es necesario una contraseña']
    },
    activo: {
        type: Boolean,
        default: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Usuario', usuarioSchema);