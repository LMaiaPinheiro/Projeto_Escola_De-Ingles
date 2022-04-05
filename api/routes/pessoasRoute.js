const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.listarPessoas)
      .get('/pessoas/:id', PessoaController.listaUmaPessoa)
      .post('/pessoas', PessoaController.inserirPessoa)
      .put('/pessoas/:id', PessoaController.atualizaPessoa)
      .delete('/pessoas/:id', PessoaController.deletaPessoa)
      .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.listaUmaMatricula)
      .get('/pessoas/:estudanteId/matricula',PessoaController.listarMatriculas)
      .post('/pessoas/:estudanteId/matricula',PessoaController.inserirMatricula)
      .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
      .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula)

module.exports = router
