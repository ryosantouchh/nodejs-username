import type { NextFunction, Request, Response } from 'express'
import { UserEntity } from '@entities'
import { StatusCodeEnum } from '@types'
import { separateDateAndTime } from '@utils'
import { handleImageBase64, handleImageFormData } from '@helpers'

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { birthDate, image } = req.body

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

    await UserEntity.create({ data: newUserData })

    res.status(StatusCodeEnum.CREATED).json({ message: 'create user success!' })
  } catch (error) {
    next(error)
  }
}
