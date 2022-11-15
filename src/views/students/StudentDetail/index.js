import React from 'react'
import { useLocation } from 'react-router-dom'

const StudentDetail = () => {
  const location = useLocation()
  const { id } = location.state
  return (
    <div>
      <h1>Hello World {id}</h1>
    </div>
  )
}

export default StudentDetail
