// routes/authRoutes.ts
import express from 'express'
import { loginUser, registerUser, getProfile } from '../controllers/auth.controller'
import { authenticate } from '../middleware/authMiddleware'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)

router.get('/me', authenticate,getProfile )


export default router