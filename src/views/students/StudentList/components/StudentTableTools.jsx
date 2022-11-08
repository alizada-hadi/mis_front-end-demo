import React, {useRef} from 'react'
import { Button } from 'components/ui'
import { getStudents, setTableData, setFilterData } from '../state/dataSlice'
import StudentTableFilter from './StudentTableFilter'
import StudentTableSearch from './StudentTableSearch'
import { useDispatch, useSelector } from 'react-redux'
import cloneDeep from 'lodash/cloneDeep'

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

    const onClearAll = () => {
        const newTableData = cloneDeep(tableData)
		newTableData.query = ''
		inputRef.current.value = ''
		dispatch(setFilterData({status: ''}))
		fetchData(newTableData)
    }

  return (
    <div className="md:flex items-center justify-between">
      <div className="md:flex items-center gap-4">
        <StudentTableSearch ref={inputRef} onInputChange={handleInputChange} />
        <StudentTableFilter />
      </div>
      <div className="mb-4">
				<Button 
					size="sm"
                    className="font-vazir"
					onClick={onClearAll}
				>
					پاک کردن فلتر ها
				</Button>
			</div>
    </div>
  )
}

export default StudentTableTools
