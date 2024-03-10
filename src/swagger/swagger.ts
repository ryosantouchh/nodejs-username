import type { Express, Request, Response } from 'express'
import type { SwaggerDefinition } from 'swagger-jsdoc'

import fs from 'fs'
import path from 'path'
import YAML from 'js-yaml'
import swaggerUi from 'swagger-ui-express'
import { version } from '../../package.json'

import { generateSwaggerFileNames } from '@swagger'
import swaggerJsdoc from 'swagger-jsdoc'

const generateSwaggerDefinitions = async () => {
  const yamlFileList = await generateSwaggerFileNames()

  const swaggerDefinitions = {}
  yamlFileList.forEach((yamlFile) => {
    const swaggerPath = path.join(__dirname, `../${yamlFile.path}`)
    const yamlContent = fs.readFileSync(
      `${swaggerPath}/${yamlFile.file}`,
      'utf8'
    )
    const yamlObject = YAML.load(yamlContent)
    Object.assign(swaggerDefinitions, yamlObject)
  })
  return swaggerDefinitions
}

const BASE_OPTIONS: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nodejs Username',
      version,
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'Bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [],
}

const generateSwaggerOption = async (swaggerOptions: swaggerJsdoc.Options) => {
  const options = { ...swaggerOptions }
  const definitions = await generateSwaggerDefinitions()
  const baseDefinitions = { ...options.definition, ...definitions }

  options.definition = baseDefinitions as SwaggerDefinition
  // console.log(options.definition.components)
  return options
}

const swaggerDocsInit = async (app: Express, port: number | string) => {
  // Swagger page
  const options = await generateSwaggerOption(BASE_OPTIONS)
  const swaggerSpec = swaggerJsdoc(options)
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Docs in JSON format
  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })

  console.log(`Docs available at http://localhost:${port}/docs`)
}

export default swaggerDocsInit
