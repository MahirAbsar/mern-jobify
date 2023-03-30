import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/index.js'
import User from '../models/User.js'

const register = async (req, res, next) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    throw new BadRequestError('please provide all values')
  }

  const userAlreadyExists = await User.findOne({ email })

  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use')
  }

  const user = await User.create(req.body)
  return res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
  return res.send('login')
}

const updateUser = async (req, res) => {
  return res.send('updateUser')
}

export { register, login, updateUser }
