const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()
router
 .get('/turmas', TurmaController.listarTurma)
 .get('/turmas/:id', TurmaController.listaUmaTurma)
 .post('/turmas', TurmaController.inserirTurma)
 .put('/turmas/:id', TurmaController.atualizaTurma)
 .delete('/turmas/:id', TurmaController.deletaTurma)
 .post('/turmas/:id/restaura', TurmaController.restauraTurma)
module.exports = router