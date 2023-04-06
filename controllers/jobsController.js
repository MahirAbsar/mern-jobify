import Job from '../models/Job.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors/index.js'

const createJob = async (req, res) => {
  const { position, company } = req.body

  if (!position || !company) {
    throw new BadRequestError('Please provide all values')
  }
  req.body.createdBy = req.user.userId

  const job = await Job.create(req.body)

  return res.status(StatusCodes.CREATED).json({ job })
}
const deleteJob = async (req, res) => {
  return res.send('deleteJob')
}
const getAllJobs = async (req, res) => {
  return res.send('getAllJobs')
}
const updateJob = async (req, res) => {
  return res.send('updateJob')
}
const showStats = async (req, res) => {
  return res.send('showStats')
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats }
