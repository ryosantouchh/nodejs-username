import type { NextFunction, Request, Response } from 'express'
import { UserEntity } from '@entities'
import { StatusCodeEnum } from '@types'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export const deleteUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params
    const id = parseInt(userId)

    await UserEntity.delete({
      where: {
        id,
      },
    })

    res
      .status(StatusCodeEnum.OK)
      .json({ message: 'delete user data by id success!' })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        const newError = {
          statusCode: 404,
          message: 'user to delete does not exit',
        }
        next(newError)
      }
    }
  }
}
