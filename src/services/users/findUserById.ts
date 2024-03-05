import { UserEntity } from '@entities'
import { ErrorGenerator } from '@helpers'
import { StatusCodeEnum } from '@types'

const findUserById = async (userId: string) => {
  try {
    const id = parseInt(userId)

    const userById = await UserEntity.findUnique({
      where: { id },
    })

    return userById
  } catch (error) {
    throw ErrorGenerator({
      statusCode: StatusCodeEnum.NOT_FOUND,
      message: 'user not found!',
    })
  }
}

export default findUserById
