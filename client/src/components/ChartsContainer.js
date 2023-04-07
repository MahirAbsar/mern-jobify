import { useState } from 'react'
import AreaChart from './AreaChartComponent'
import BarChart from './BarChartComponent'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/ChartsContainer'
const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const { monthlyApplications } = useAppContext()

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'AreaChart' : 'BarChart'}
      </button>
      {barChart ? (
        <BarChart data={monthlyApplications} />
      ) : (
        <AreaChart data={monthlyApplications} />
      )}
    </Wrapper>
  )
}
export default ChartsContainer
