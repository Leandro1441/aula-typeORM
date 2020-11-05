import { criarEmpresa, buscarEmpresas, buscarUmaEmpresa, alterarEmpresa, deletarEmpresa } from './empresa.controller'
import express from 'express'

const empresaRouter = express.Router()

empresaRouter.get('/', buscarEmpresas)
empresaRouter.get('/:id', buscarUmaEmpresa)
empresaRouter.post('/', criarEmpresa)
empresaRouter.patch('/:id', alterarEmpresa)
empresaRouter.delete('/:id', deletarEmpresa)

export default empresaRouter