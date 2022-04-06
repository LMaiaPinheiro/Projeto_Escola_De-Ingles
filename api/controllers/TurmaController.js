const database = require('../models')
const {Op} = require('sequelize')

class TurmaController {

  static async listarTurma(req, res){
    const {data_inicial,data_final} = req.query
    const where = {}
    data_inicial || data_final ? where.data_inicio = {} : null
    data_inicial ? where.data_inicio[Op.gte] = data_inicial: null
    data_final ? where.data_inicio[Op.lte] = data_final: null
    try {
      const todasAsTurmas = await database.Turmas.findAll({ where })
      return res.status(200).json(todasAsTurmas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  }
  static async listaUmaTurma(req, res){
    try {
      const { id }= req.params
      const turma = await database.Turmas.findOne({
        where:{
          id:Number(id)
        }
      })
      return res.status(200).json(turma)
    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  }
  static async inserirTurma(req, res){
    try {
      const dados = req.body
      const turma = await database.Turmas.create(dados)
      return res.status(201).json(turma)
    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  }

  static async atualizaTurma(req,res) {
    try {
      const {id} = req.params
      const dados = req.body
      
      await database.Turmas.update(dados,{where:{id:Number(id)}})
      const turmaAtualizada = await database.Turmas.findOne({where:{id:Number(id)}})
      return res.status(200).json(turmaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }

  static async deletaTurma(req,res) {
     try {
      const {id} = req.params
      await database.Turmas.destroy( { where:{ id : Number(id) } }
      )
      return res.status(200).json({message: `ID ${id} deletado` })
     } catch (error) {
      return res.status(500).json(error.message)
     }
  }
  static async restauraTurma(req, res) {
    const { id } = req.params
    try {
      await database.Turmas.restore( {where: { id: Number(id) } } )
      return res.status(200).json({ mensagem: `id ${id} restaurado`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = TurmaController