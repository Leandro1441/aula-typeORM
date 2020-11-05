import { Empresa } from './../../models/empresa.model'
import { DeleteResult, getRepository, UpdateResult } from "typeorm"
import { EmpresaVindaDeFora } from "./empresa"



// criar a empresa no BD
export const formatarEmpresa = (dados: EmpresaVindaDeFora): Empresa => {
  const empresaFormatada: Empresa = {
    nomeEmpresa: dados.empresa.nome,
    telefoneEmpresa: dados.empresa.telefone
  }
  return empresaFormatada
}

export const criarEmpresaNoBD = async (dados: EmpresaVindaDeFora): Promise<Empresa> => {
  const repositorioEmpresa = getRepository(Empresa)
  const empresaFormatada = formatarEmpresa(dados)
  const empresaSalva = await repositorioEmpresa.save(empresaFormatada)
  return empresaSalva
}

// buscar empresas no BD 
export const buscarEmpresaNoBD = async (): Promise<Empresa[]> => {
  const repositorioEmpresa = getRepository(Empresa)
  const empresasBuscadas = await repositorioEmpresa.find()
  return empresasBuscadas
}

// buscar empresa pelo ID
export const buscarUmaEmpresaNoBD = async (id: number): Promise<Empresa> => {
  const repositorioEmpresa = getRepository(Empresa)
  const empresasBuscadas = await repositorioEmpresa.findOne({
    where: {
      idEmpresa: id
    }
  })

  if (!empresasBuscadas) throw new Error('Esse ID não consta no BD!')

  return empresasBuscadas
}

// alterar empresa pelo id
export const alterarEmpresaNoBD = async (id: number, dados: EmpresaVindaDeFora): Promise<UpdateResult> => {
  const repositorioEmpresa = getRepository(Empresa)

  const empresaFormatada = formatarEmpresa(dados)

  const empresaBuscada = await buscarUmaEmpresaNoBD(id)

  const empresaAlterada = await repositorioEmpresa.update(empresaBuscada, empresaFormatada)

  return empresaAlterada
}

// deletar empresa pelo id 
export const deletarEmpresaNoBd = async (id: number): Promise<DeleteResult> => {
  const repositorioEmpresa = getRepository(Empresa)

  const empresaBuscada = await buscarUmaEmpresaNoBD(id)

  const empresaDeletada = await repositorioEmpresa.delete(empresaBuscada)
  
  return empresaDeletada
}