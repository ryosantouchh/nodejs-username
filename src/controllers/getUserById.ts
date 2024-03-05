import type { NextFunction, Request, Response } from 'express'
import { StatusCodeEnum } from '@types'
import { findUserById } from '@services'
import { errorGenerator } from '@helpers'

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params
    const userById = await findUserById(userId)

    if (!userById) {
      throw errorGenerator({
        statusCode: 404,
        message: 'user not found!',
      })
    }

    res.status(StatusCodeEnum.OK).json({ data: userById, message: 'get user!' })
  } catch (error) {
    next(error)
  }
}
