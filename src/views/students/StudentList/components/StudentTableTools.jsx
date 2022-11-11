import React, {useRef} from 'react'
import { Button } from 'components/ui'
import { getStudents, setTableData, setFilterData } from '../state/dataSlice'
import { Link } from 'react-router-dom'
import StudentTableSearch from './StudentTableSearch'
import { useDispatch, useSelector } from 'react-redux'
import cloneDeep from 'lodash/cloneDeep'
import StudentFilter from './StudentFilter'
import { HiPlusCircle } from 'react-icons/hi'

const StudentTableTools = () => {
    const dispatch = useDispatch()
	const inputRef = useRef()
    const tableData = useSelector(state => state.studentList.data.tableData)
    const handleInputChange = (val) => {
		const newTableData = cloneDeep(tableData)
		newTableData.query = val
		newTableData.pageIndex = 1
		if(typeof val === 'string' && val.length > 1) {
			fetchData(newTableData)
		}

		if(typeof val === 'string' && val.length === 0) {
			fetchData(newTableData)
		}
	}

    const fetchData = data => {
        dispatch(setTableData(data))
        dispatch(getStudents(data))
    }


  return (
    <div className="md:flex items-center justify-between">
      <div className="md:flex items-center gap-4">
        <StudentTableSearch ref={inputRef} onInputChange={handleInputChange} />
        <StudentFilter />
      </div>
      <Link 
		className="block lg:inline-block md:mb-4 font-vazir"
		to="/student-register" 
	>
		<Button
			block
			variant="solid"
			size="sm" 
			icon={<HiPlusCircle />}
		>
			ثبت شاگرد جدید
		</Button>
	</Link>
    </div>
  )
}

export default StudentTableTools
