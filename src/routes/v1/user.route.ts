import { createUser, getUserById, getUsers } from '@controllers'
import { schemaValidator } from '@middlewares'
import { CreateUserReqSchema } from '@schemas'
import type { Router } from 'express'
import express from 'express'

const router: Router = express.Router()

router.get('/', getUsers)
router.get('/:userId', getUserById)
router.post('/', schemaValidator(CreateUserReqSchema), createUser)
router.put('/:userId')
router.delete('/:userId')

export default router
