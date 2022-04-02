const database = require('../models')


class PessoaController {
  static async listarPessoas(req, res){
    try {
      const todasAsPessoas = await database.Pessoas.findAll()
      return res.status(200).json(todasAsPessoas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  }
  static async listaUmaPessoa(req, res){
    try {
      const { id }= req.params
      const pessoa = await database.Pessoas.findOne({
        where:{
          id:Number(id)
        }
      })
      return res.status(200).json(pessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  }
  static async inserirPessoa(req, res){
    try {
      const dados = req.body
      const pessoa = await database.Pessoas.create(dados)
      return res.status(201).json(pessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  }

  static async atualizaPessoa(req,res) {
    try {
      const {id} = req.params
      const dados = req.body
      
      await database.Pessoas.update(dados,{where:{id:Number(id)}})
      const pessoaAtualizada = await database.Pessoas.findOne({where:{id:Number(id)}})
      return res.status(200).json(pessoaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }

  static async deletaPessoa(req,res) {
     try {
      const {id} = req.params
      await database.Pessoas.destroy( { where:{ id : Number(id) } }
      )
      return res.status(200).json({message: `ID ${id} deletado` })
     } catch (error) {
      return res.status(500).json(error.message)
     }
  }
}

module.exports = PessoaController