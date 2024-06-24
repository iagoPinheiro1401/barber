import express from "express"
import morgan from "morgan"

const app = express()

app.use(morgan('dev'))

app.set('port', 8000)

app.listen(app.get('port'), () => {
    console.log(`API rodando na porta ${app.get('port')}`)
})