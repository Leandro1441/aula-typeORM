import { EmpresaVindaDeFora } from './empresa.d'
import { RequestHandler } from 'express'
import { buscarEmpresaNoBD, criarEmpresaNoBD, buscarUmaEmpresaNoBD, alterarEmpresaNoBD, deletarEmpresaNoBd } from './empresa.service'

export const criarEmpresa: RequestHandler = async (req, res, next) => {
  try {
    const dadosVindoDeFora: EmpresaVindaDeFora = req.body.dados

    const empresaCriada = await criarEmpresaNoBD(dadosVindoDeFora)

    res.json({
      empresa: empresaCriada
    })

  } catch (error) {
    next(error)
  }
}

export const alterarEmpresa: RequestHandler = async (req, res, next) => {
  try {
    const id: number | undefined = (parseInt(req.params.id)) ? parseInt(req.params.id) : undefined
    const dadosVindoDeFora: EmpresaVindaDeFora = req.body.dados

    if(!id) throw new Error('ID não é valido')

    const empresaAlterada = await alterarEmpresaNoBD( id, dadosVindoDeFora)

    res.json({
      empresa: empresaAlterada
    })
  } catch (error) {
    next(error)
  }
}

export const buscarEmpresas: RequestHandler = async (req, res, next) => {
  try {
    const empresasBuscadas = await buscarEmpresaNoBD()
    res.json({
      empresa: empresasBuscadas
    })
  } catch (error) {
    next(error)
  }
}

export const buscarUmaEmpresa: RequestHandler = async (req, res, next) => {
  try {
    const id: number | undefined = (parseInt(req.params.id)) ? parseInt(req.params.id) : undefined

    if(!id) throw new Error('ID não é valido')

    const empresaBuscada = await buscarUmaEmpresaNoBD(id)
    res.json({
      empresa: empresaBuscada
    })
  } catch (error) {
    next(error)
  }
}

export const deletarEmpresa: RequestHandler = async(req, res, next) => {
  try {
    const id: number | undefined = (parseInt(req.params.id)) ? parseInt(req.params.id) : undefined

    if(!id) throw new Error('ID não é valido')

    const empresaDeletada = await deletarEmpresaNoBd(id)

    res.json({
      empresa: empresaDeletada
    })

  } catch (error) {
    next(error)
  }
}

