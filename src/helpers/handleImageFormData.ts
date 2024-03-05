import { FILE_FORMAT } from '@constants'
import { errorGenerator } from './error'
import { StatusCodeEnum } from '@types'

const handleImageFormData = (imageFile: Express.Multer.File | undefined) => {
  if (!imageFile) return

  if (!imageFile.mimetype.startsWith('image')) {
    throw errorGenerator({
      message: 'image property in wrong type!',
      statusCode: StatusCodeEnum.BAD_REQUEST,
    })
  }

  const base64image = imageFile.buffer.toString(
    FILE_FORMAT.BASE_64 as BufferEncoding
  )
  return base64image
}

export default handleImageFormData
