import React from 'react'
import { Container } from 'components/shared'
import StudentTableTools from './components/StudentTableTools'
import StudentTable from './components/StudentTable'
import reducer from './state'
import { injectReducer } from 'store/index'

injectReducer('studentList', reducer)


const StudentList = ({slug}) => {
  return (
    <Container className="h-full">
      <StudentTableTools />
      <StudentTable />
    </Container>
  )
}

export default StudentList