import { UnauthenticatedError } from '../errors/index.js'
import jwt from 'jsonwebtoken'

const authenticate = (req, res, next) => {
  const authorizationHeader = req.headers.authorization
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Authentication Invalid')
  }
  const token = authorizationHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = payload
    next()
  } catch (error) {
    throw new UnauthenticatedError('Authentication Invalid')
  }
}

export default authenticate
