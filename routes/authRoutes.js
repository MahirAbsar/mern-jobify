import rateLimiter from 'express-rate-limit'
import express from 'express'
import authenticate from '../middleware/authenticate.js'
import { register, login, updateUser } from '../controllers/authController.js'

const router = express.Router()

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many requests from this IP, please try again after 15 minutes',
})

router.route('/register').post(apiLimiter, register)
router.route('/login').post(apiLimiter, login)
router.route('/updateUser').patch(authenticate, updateUser)

export default router
