const express         = require('express')
let router            = express.Router()
let UsuarioModelo     = require('../usuario')

router.get('/', function(req, res){
    UsuarioModelo.find({
        nome:'mendesDev'
        },
        function(err, resultado){
            if(err){
                return handleError(err)
            }
            res.status(200).json(resultado)
    })
})

module.exports = router