import React from 'react'
import { Container } from 'components/shared'
import StudentTable from './components/StudentTable'
import reducer from './state'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'

injectReducer('studentList', reducer)


const StudentList = () => {
  return (
    <>
    <AdaptableCard className="h-full" bodyClass="h-full">
			
			<StudentTable />
		</AdaptableCard>
    </>
  )
}

export default StudentList