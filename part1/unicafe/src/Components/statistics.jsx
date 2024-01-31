import React from 'react'
import { useState } from 'react'

const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return <div>No feedback given</div>
  }

  const calcAvrg = () => (good * 1 + neutral * 0 + bad * -1) / total || 0
  const calcPosFeedback = () => (good / total) * 100 || 0

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Average: </td>
            <td>{calcAvrg()} %</td>
          </tr>
          <tr>
            <td>Positive Feedback percentage: </td>
            <td>{calcPosFeedback()} %</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Statistics
