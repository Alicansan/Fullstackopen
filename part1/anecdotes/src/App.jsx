import React, { useState } from 'react'
import anecdotes from './components/anecdotes'



const App = ()=>{
  const [selected, setSelected]= useState(0)
  //initialize with an array and give every index 0 via map method
  const [votePoint,setVotePoint] = useState(anecdotes.map(() => 0))
  console.log(votePoint)
  const rndSelect =()=>{
    setSelected(()=> Math.floor((Math.random() * anecdotes.length)))
  }
  const voteBtn =(index)=>{
    const newPoints = [...votePoint]
    newPoints[index] +=1
    setVotePoint(newPoints)
  }
  const mostVoted = Math.max(...votePoint)
  const index = votePoint.indexOf(mostVoted)

  return (
    
    <div>
      <h3>Anecdote of the Day</h3>
      
      <p> {anecdotes[selected].anecdote} </p>
      <p>has {votePoint[selected]} votes</p>

      <button onClick={rndSelect}>Next</button>
      <button onClick={() => voteBtn(selected)}>Vote</button>

      <p>Most voted anecdote is:</p>
      <p>{anecdotes[index].anecdote}</p>
      
    </div>
  )
}
export default App






