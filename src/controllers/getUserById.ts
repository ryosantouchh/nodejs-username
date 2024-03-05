import type { NextFunction, Request, Response } from 'express'
import { UserEntity } from '@entities'
import { StatusCodeEnum } from '@types'
import { findUserById } from '@services'

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params
    const userById = await findUserById(userId)

    res.status(StatusCodeEnum.OK).json({ data: userById, message: 'get user!' })
  } catch (error) {
    next(error)
  }
}
