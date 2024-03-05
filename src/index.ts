import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
// import { connectDatabase } from '@database'
import appRouter from './routes'
import { errorHandler } from '@utils'

const app = express()
dotenv.config()

const port = process.env.NODE_SERVER_PORT || '8080'

app.use(cors())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

app.use('/', appRouter)
app.use('/', errorHandler)

app.listen(port, () => {
  console.log('server running at port 8080')
})
