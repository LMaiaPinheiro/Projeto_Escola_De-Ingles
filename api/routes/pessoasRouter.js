const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.listarPessoas)
router.get('/pessoas/:id', PessoaController.listaUmaPessoa)
router.post('/pessoas', PessoaController.inserirPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.deletaPessoa)

module.exports = router
