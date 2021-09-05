const port            = 443
const mongodb         = 'mongodb://localhost:27017/apicomdocker'
let UsuarioModelo     = require('./usuario')
const log       = require('morgan')
const mongoose  = require('mongoose')
const express   = require('express')
const app       = express()


app.use(log('dev'))
app.listen(port,()=>console.log(`online into port:${port}`))

mongoose.connect(mongodb)
const db = mongoose.connection
db.on('error',console.error.bind(console, 'Erro de conexão!'))

let usuario = new UsuarioModelo({
    nome:'mendesDev'
})
usuario.save(err =>{
    if(err){
        console.error('Erro ao criar o usuário!')
    }else{
        console.log('usuário criado com sucesso!')
    }
})