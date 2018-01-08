import { Router } from 'express'

import users from './users'
import articleList from './articleList'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(articleList)

export default router
