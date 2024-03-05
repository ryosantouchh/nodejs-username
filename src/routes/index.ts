import type { Router } from 'express'
import express from 'express'
import routeV1 from './v1'

const router: Router = express.Router()

router.use('/v1', routeV1)

export default router
