import { UserEntity } from '@entities'

const findUserById = async (userId: string) => {
  try {
    const id = parseInt(userId)

    const userById = await UserEntity.findUnique({
      where: { id },
    })

    return userById
  } catch (error) {
    console.error(error)
  }
}

export default findUserById
