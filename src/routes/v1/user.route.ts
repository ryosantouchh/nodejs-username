import type { Router } from 'express'
import express from 'express'
import { CreateUserReqSchema, UpdateUserReqSchema } from '@schemas'
import { multerUpload, schemaValidator } from '@middlewares'
import {
  createUser,
  getUserById,
  getUsers,
  deleteUserById,
  updateUserById,
} from '@controllers'

const router: Router = express.Router()

router.get('/', getUsers)
router.get('/:userId', getUserById)
router.post(
  '/',
  multerUpload.single('image'),
  schemaValidator(CreateUserReqSchema),
  createUser
)
router.put('/:userId', schemaValidator(UpdateUserReqSchema), updateUserById)
router.delete('/:userId', deleteUserById)

export default router
