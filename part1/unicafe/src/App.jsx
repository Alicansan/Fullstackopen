import { useState } from 'react'
import Button from './Components/button'
import Statistics from './Components/statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    const updGood = good + 1
    setGood(updGood)
    setTotal(updGood + bad + neutral)
  }
  const handleNeutral = () => {
    const updNeutral = neutral + 1
    setNeutral(updNeutral)
    setTotal(good + bad + updNeutral)
  }
  const handleBad = () => {
    const updBad = bad + 1
    setBad(updBad)
    setTotal(good + updBad + neutral)
  }

  return (
    <div>
      <Button func={handleGood} text='Good' />
      <Button func={handleNeutral} text='Neutral' />
      <Button func={handleBad} text='Bad' />

      <table>
        <tbody></tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td>Good:</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral:</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad:</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>Total feedback:</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App
