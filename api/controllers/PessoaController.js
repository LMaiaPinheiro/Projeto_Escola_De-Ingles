const database = require('../models')


class PessoaController {
  static async listarPessoasAtivas(req, res) {
    try {
      const pessoasAtivas = await database.Pessoas.findAll()
      return res.status(200).json(pessoasAtivas)
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }
  static async listarTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.scope('todos').findAll()
      return res.status(200).json(todasAsPessoas)
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }
  static async listaUmaPessoa(req, res) {
    try {
      const { id } = req.params
      const pessoa = await database.Pessoas.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(pessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }
  static async inserirPessoa(req, res) {
    try {
      const dados = req.body
      const pessoa = await database.Pessoas.create(dados)
      return res.status(201).json(pessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }

  static async atualizaPessoa(req, res) {
    try {
      const { id } = req.params
      const dados = req.body

      await database.Pessoas.update(dados, { where: { id: Number(id) } })
      const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } })
      return res.status(200).json(pessoaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }

  static async deletaPessoa(req, res) {
    try {
      const { id } = req.params
      await database.Pessoas.destroy({ where: { id: Number(id) } }
      )
      return res.status(200).json({ message: `ID ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restauraPessoa(req, res) {
    const { id } = req.params
    try {
      await database.Pessoas.restore({ where: { id: Number(id) } })
      return res.status(200).json({ message: `id ${id} restaurado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async listaUmaMatricula(req, res) {
    try {
      const { estudanteId, matriculaId } = req.params
      const umaMatricula = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json(umaMatricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }

  static async listarMatriculas(req, res) {
    try {
      const { estudanteId } = req.params
      const todasAsMatriculas = await database.Matriculas.findAll({ where: { estudante_id: Number(estudanteId) } })
      return res.status(200).json(todasAsMatriculas)
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }

  static async inserirMatricula(req, res) {
    try {
      const { estudanteId } = req.params
      const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
      const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
      return res.status(201).json(novaMatriculaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }

  static async atualizaMatricula(req, res) {
    try {
      const { estudanteId, matriculaId } = req.params
      const novasInfos = req.body

      await database.Matriculas.update(novasInfos, {
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      const matriculaAtualizada = await database.Matriculas.findOne(
        {
          where: {
            id: Number(matriculaId),
            estudante_id: Number(estudanteId)
          }
        })
      return res.status(200).json(matriculaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }
  static async deletaMatricula(req, res) {
    try {
      const { estudanteId, matriculaId } = req.params
      await database.Matriculas.destroy(
        {
          where: {
            id: Number(matriculaId),
            estudante_id: Number(estudanteId)
          }
        })

      return res.status(200).json({ message: `ID ${matriculaId} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async restauraMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.restore({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json({ mensagem: `id ${id} restaurado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = PessoaController