import { FILE_FORMAT } from '@constants'

const handleImageFormData = (imageFile: Express.Multer.File | undefined) => {
  if (!imageFile) return

  const base64image = imageFile.buffer.toString(
    FILE_FORMAT.BASE_64 as BufferEncoding
  )
  return base64image
}

export default handleImageFormData
