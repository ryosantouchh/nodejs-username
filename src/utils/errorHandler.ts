import type { ErrorRequestHandler } from 'express'

const errorHandler: ErrorRequestHandler = (error, _, res, _next) => {
  const errorObj = { message: error.message, statusCode: 500 }

  if ((error as any).statusCode) {
    errorObj.statusCode = (error as any).statusCode
  }

  res.status(errorObj.statusCode).send(errorObj)
}

export default errorHandler
