import type { Router } from 'express'
import express from 'express'

import userRoute from './user.route'

const router: Router = express.Router()

router.use('/user', userRoute)

export default router
