const mongoose = require('mongoose')
const Schema   = mongoose.Schema

var usuarioModelo = new Schema({
    nome:{
        type: String,
        required: true
    },
    data:{
        type: Date,
        default: Date.now()
    } 
})

module.exports = mongoose.model('usuario', usuarioModelo)