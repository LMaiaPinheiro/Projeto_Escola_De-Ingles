const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.listarPessoasAtivas)
      .get('/pessoas/todos', PessoaController.listarTodasAsPessoas)
      .get('/pessoas/:id', PessoaController.listaUmaPessoa)
      .get('/pessoas/:estudanteId/matricula',PessoaController.listarMatriculas)
      .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.listarMatriculasPorTurma)
      .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.listaUmaMatricula)
      .get('/pessoas/matricula/lotada',PessoaController.listaTurmasLotadas)
      .post('/pessoas', PessoaController.inserirPessoa)
      .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
      .post('/pessoas/:estudanteId/matricula',PessoaController.inserirMatricula)
      .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
      .put('/pessoas/:id', PessoaController.atualizaPessoa)
      .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
      .delete('/pessoas/:id', PessoaController.deletaPessoa)
      .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula)
      

module.exports = router
