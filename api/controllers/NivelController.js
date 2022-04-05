const database = require('../models')

class NivelController {

 
  static async listarNiveis(req, res){
    try {
      const todosOsNiveis = await database.Niveis.findAll()
      return res.status(200).json(todosOsNiveis)
    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  }
  static async listaUmNivel(req, res){
    try {
      const { id }= req.params
      const nivel = await database.Niveis.findOne({
        where:{
          id:Number(id)
        }
      })
      return res.status(200).json(nivel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  }
  static async inserirNivel(req, res){
    try {
      const dados = req.body
      const nivel = await database.Niveis.create(dados)
      return res.status(201).json(nivel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  }

  static async atualizaNivel(req,res) {
    try {
      const {id} = req.params
      const dados = req.body
      
      await database.Niveis.update(dados,{where:{id:Number(id)}})
      const nivelAtualizado = await database.Niveis.findOne({where:{id:Number(id)}})
      return res.status(200).json(nivelAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }

  static async deletaNivel(req,res) {
     try {
      const {id} = req.params
      await database.Niveis.destroy( { where:{ id : Number(id) } }
      )
      return res.status(200).json({message: `ID ${id} deletado` })
     } catch (error) {
      return res.status(500).json(error.message)
     }
  }
  static async restauraNivel(req, res) {
    const { id } = req.params
    try {
      await database.Niveis.restore( {where: { id: Number(id) } } )
      return res.status(200).json({ mensagem: `id ${id} restaurado`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
}

module.exports = NivelController