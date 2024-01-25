import Header from './Comps/Header'
import Content from './Comps/Content'
import Total from './Comps/Total'
import './App.css'


const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content part={parts[0].name} excercises={parts[0].exercises} />
      <Content part={parts[1].name} excercises={parts[1].exercises} />
      <Content part={parts[2].name} excercises={parts[2].exercises} />
      

      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />

      

    </div>
  )
}
