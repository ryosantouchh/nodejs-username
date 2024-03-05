import type { NextFunction, Request, Response } from 'express'
import { UserEntity } from '@entities'
import { StatusCodeEnum } from '@types'

export const getUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await UserEntity.findMany()
    const userCount = users.length

    const getUserResponse = {
      count: userCount,
      users,
    }

    res
      .status(StatusCodeEnum.OK)
      .json({ data: getUserResponse, message: 'get all users!' })
  } catch (error) {
    next(error)
  }
}
