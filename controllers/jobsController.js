const createJob = async (req, res) => {
  return res.send('create Job')
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
