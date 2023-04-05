import express from 'express'
import authenticate from '../middleware/authenticate.js'
import { register, login, updateUser } from '../controllers/authController.js'

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/updateUser').patch(authenticate, updateUser)

export default router
