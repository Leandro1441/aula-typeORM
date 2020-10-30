import express from 'express'
import { conectarBD } from './database'
import empresaRouter from './modules/empresa/empresa.router'

const app = express()

const porta = 8087

app.listen(porta, () => console.log('Escutando na porta '+ porta))

app.use(express.json())
app.use('/empresa', empresaRouter)

const inicializar = async (): Promise<void> => {
  await conectarBD()
}
inicializar()

export default app