import dotenv from 'dotenv'
import morgan from 'morgan'
import 'express-async-errors'
import express from 'express'
const app = express()
dotenv.config()

// dbconnection
import connectDB from './db/connect.js'

// router
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

// middleware
import authenticate from './middleware/authenticate.js'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use(express.json())
if (process.env.NODE_DEV !== 'production') {
  app.use(morgan('dev'))
}
app.get('/', (req, res) => {
  return res.send('Welcome')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticate, jobsRouter)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
