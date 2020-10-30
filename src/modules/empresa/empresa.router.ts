import { criarEmpresa, buscarEmpresa, alterarEmpresa, deletarEmpresa } from './empresa.controller'
import express from 'express'

const empresaRouter = express.Router()

empresaRouter.get('/', buscarEmpresa)
empresaRouter.post('/', criarEmpresa)
empresaRouter.patch('/', alterarEmpresa)
empresaRouter.delete('/', deletarEmpresa)

export default empresaRouter