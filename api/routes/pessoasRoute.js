const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.listarPessoasAtivas)
      .get('/pessoas/todos', PessoaController.listarTodasAsPessoas)
      .get('/pessoas/:id', PessoaController.listaUmaPessoa)
      .post('/pessoas', PessoaController.inserirPessoa)
      .put('/pessoas/:id', PessoaController.atualizaPessoa)
      .delete('/pessoas/:id', PessoaController.deletaPessoa)
      .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
      .get('/pessoas/:estudanteId/matricula',PessoaController.listarMatriculas)
      .post('/pessoas/:estudanteId/matricula',PessoaController.inserirMatricula)
      .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.listaUmaMatricula)
      .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
      .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula)
      .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)

module.exports = router
