import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import StudentDetailTabs from './components/StudentDetailTabs'
import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import { useDispatch, useSelector} from 'react-redux'
import { studentDetail } from './store/dataSlice'

injectReducer("getStudentDetail", reducer)

const StudentDetail = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { id } = location.state
  useEffect(() => {
    dispatch(studentDetail(id))
  }, [location])

  const student = useSelector(state => state.getStudentDetail.data.student)

  return (
    <AdaptableCard className="h-full" bodyClass="h-full">
      <StudentDetailTabs student={student} />
    </AdaptableCard>
  )
}

export default StudentDetail
