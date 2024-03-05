import { UserEntity } from '@entities'

const findUserByName = async (nameSurname: string) => {
  try {
    const userByName = await UserEntity.findMany({
      where: {
        OR: [
          {
            firstName: {
              contains: nameSurname,
            },
          },
          {
            lastName: {
              contains: nameSurname,
            },
          },
        ],
      },
    })

    return userByName
  } catch (error) {
    console.error(error)
  }
}

export default findUserByName
