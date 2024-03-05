import multer from 'multer'
import { MULTER_FILE_SIZE } from '@constants'

export const multerUpload = multer({
  limits: { fileSize: MULTER_FILE_SIZE.MB_10 },
})
