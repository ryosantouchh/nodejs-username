import type { RequestHandler } from 'express'
import { UserEntity } from '@entities'
import { StatusCodeEnum } from '@types'
import { queryUser } from '@services'

export const getUsers: RequestHandler = async (req, res, next) => {
  try {
    const query = queryUser(req.query)
    const users = await UserEntity.findMany(query)
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
