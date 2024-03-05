import type { NextFunction, Request, Response } from 'express'
import { UserEntity } from '@entities'
import { StatusCodeEnum } from '@types'
import { findUserById } from '@services'
import { separateDateAndTime } from '@utils'
import {
  errorGenerator,
  handleImageBase64,
  handleImageFormData,
} from '@helpers'

export const updateUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params
    const { birthDate, image } = req.body
    const id = parseInt(userId)
    const oldUserData = await findUserById(userId)

    if (!oldUserData) {
      throw errorGenerator({
        statusCode: 404,
        message: 'user not found!',
      })
    }

    const ISOBirthDate = birthDate ? separateDateAndTime(birthDate) : {}

    // handle either base64 or image file
    const imageFile = req.file
      ? handleImageFormData(req.file)
      : handleImageBase64(image)

    const newUserData = {
      ...req.body,
      ...ISOBirthDate,
      ...{ image: imageFile },
    }

    const updatedUserData = {
      ...oldUserData,
      ...newUserData,
    }

    delete updatedUserData.createdAt

    await UserEntity.update({
      where: {
        id,
      },
      data: updatedUserData,
    })

    res
      .status(StatusCodeEnum.OK)
      .json({ message: 'update user data by id success!' })
  } catch (error) {
    next(error)
  }
}
