import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import appRouter from './routes'
import { errorHandler } from '@utils'
import { PAYLOAD_SIZE } from '@constants'
import swaggerDocsInit from './swagger/swagger'

const app = express()
dotenv.config()

const port = process.env.NODE_SERVER_PORT || '8080'

app.use(cors())
app.use(
  cors({
    origin: '*',
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    methods: 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
  })
)
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json({ limit: PAYLOAD_SIZE.MB_10 }))

app.use('/', appRouter)
app.use('/', errorHandler)

app.listen(port, () => {
  console.log('server running at port 8080')
  swaggerDocsInit(app, port)
})
