import type { NextFunction, Request, Response } from 'express'
import { UserEntity } from '@entities'
import { StatusCodeEnum } from '@types'

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body

    await UserEntity.create({ data })

    res.status(StatusCodeEnum.CREATED).json({ message: 'create user success!' })
  } catch (error) {
    next(error)
  }
}
