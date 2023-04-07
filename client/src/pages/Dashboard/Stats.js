import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import Loading from '../../components/Loading'
import { StatsContainer, ChartsContainer } from '../../components'

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext()
  useEffect(() => {
    showStats()
  }, [])

  if (isLoading) {
    return <Loading center />
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
  return <div>Stats</div>
}
export default Stats
