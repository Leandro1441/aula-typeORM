import express from 'express'

const app = express()

const porta = 8087

app.use(express.json())

app.listen(porta, () => console.log('Escutando na porta '+ porta))

export default app