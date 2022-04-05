const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()
router
 .get('/niveis', NivelController.listarNiveis)
 .get('/niveis/:id', NivelController.listaUmNivel)
 .post('/niveis', NivelController.inserirNivel)
 .put('/niveis/:id', NivelController.atualizaNivel)
 .delete('/niveis/:id', NivelController.deletaNivel)
 .post('/niveis/:id/restaura', NivelController.restauraNivel)

 module.exports = router