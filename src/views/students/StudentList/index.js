import React from 'react'
import { Container } from 'components/shared'
import StudentTable from './components/StudentTable'
import reducer from './state'
import { injectReducer } from 'store/index'

injectReducer('studentList', reducer)


const StudentList = () => {
  return (
    <>
    <Container className="h-full">
      <StudentTable />
    </Container>
    </>
  )
}

export default StudentList