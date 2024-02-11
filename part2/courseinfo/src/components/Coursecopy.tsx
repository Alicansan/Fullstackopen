import React from 'react'

const Header =({header})=>{
  console.log('header');
  return(
    <h1>{header}</h1>
  )
}

const Part =({part})=>{
  console.log('part');
  return(
    <p>{part.name}{part.excercises}</p>
  )

}

const Course =(props)=>{
  console.log('Course');
  return (
    <Header header={props.course.name} />
  )
}

export default Course
