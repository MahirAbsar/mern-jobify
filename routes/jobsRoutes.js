import express from 'express'
import {
  createJob,
  updateJob,
  deleteJob,
  showStats,
  getAllJobs,
} from '../controllers/jobsController.js'
const router = express.Router()

router.route('/').post(createJob).get(getAllJobs)
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router
