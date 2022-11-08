import React, {useEffect, useCallback, useMemo } from 'react'
import { Avatar, Badge } from 'components/ui'
import { DataTable } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import { getStudents, setTableData } from '../state/dataSlice'
import { setSelectedStudent, setSortedColumn, setDrawerOpen } from '../state/stateSlice'
import useThemeClass from 'utils/hooks/useThemeClass'
import { Link } from 'react-scroll'
import dayjs from 'dayjs'
import cloneDeep from 'lodash/cloneDeep'

const statusColor = {
	فعال: 'bg-emerald-500',
	چانس: 'bg-red-500',
}

const ActionColumn = ({row}) => {
	const { textTheme } = useThemeClass()
	const dispatch = useDispatch()

	const onEdit = () => {
		dispatch(setDrawerOpen())
		dispatch(setSelectedStudent(row))
	}

	return (
		<div 
			className={`${textTheme} cursor-pointer select-none font-semibold`}
			onClick={onEdit}
		>
			Edit
		</div>
	)
}

const NameColumn = ({row}) => {

	const { textTheme } = useThemeClass()

	return (
		<div className="flex items-center">
			<Avatar size={28} shape="circle" src={row.image} />
			<Link 
				className={`hover:${textTheme} ml-2 rtl:mr-2 font-semibold font-vazir`}
				to={`/app/crm/customer-details?id=${row.id}`}
			>
				{row.first_name}  {row.last_name}
			</Link>
		</div>
	)
}

const columns = [
	{
		Header: 'نام',
		accessor: 'name',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return <NameColumn row={row} />
		},
	},
    {
        Header : "سمستر",
        accessor: 'semester',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
					<Badge className={statusColor[row.status]} />
					<span className="ml-2 rtl:mr-2 capitalize">{row.semester}</span>
				</div>
			)
		},
    },
	{
		Header: 'آدرس ایمیل',
		accessor: 'email',
		sortable: true,
	},
	{
		Header: 'وضعیت',
		accessor: 'status',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
					<Badge className={statusColor[row.status]} />
					<span className="ml-2 rtl:mr-2 capitalize">{row.status}</span>
				</div>
			)
		},
	},
	{
		Header: 'جنسیت',
		accessor: 'lastOnline',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
					<span className="ml-2 rtl:mr-2 capitalize">{row.gender}</span>
				</div>
			)
		},
	},
	{
		Header: '',
		id: 'action',
		accessor: (row) => row,
		Cell: props => <ActionColumn row={props.row.original} />
	},
]


const StudentTable = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.studentList.data.students)
    const loading = useSelector(state => state.studentList.data.loading)
    const filterData = useSelector(state => state.studentList.data.filterData)
    const { pageIndex, pageSize, sort, query, total } = useSelector(state => state.studentList.data.tableData)


    const fetchData = useCallback(() => {
		dispatch(getStudents({pageIndex, pageSize, sort, query, filterData}))
	}, [pageIndex, pageSize, sort, query, filterData, dispatch])

    useEffect(() => {
		fetchData()
	}, [fetchData, pageIndex, pageSize, sort, filterData])

    const tableData = useMemo(() => 
		({pageIndex, pageSize, sort, query, total}), 
	[pageIndex, pageSize, sort, query, total])

    const onPaginationChange = page => {
		const newTableData = cloneDeep(tableData)
		newTableData.pageIndex =  page
		dispatch(setTableData(newTableData))
	}

    const onSelectChange = value => {
		const newTableData = cloneDeep(tableData)
		newTableData.pageSize =  Number(value)
		newTableData.pageIndex = 1
		dispatch(setTableData(newTableData))
	}

    const onSort = (sort, sortingColumn) => {
		const newTableData = cloneDeep(tableData)
        console.log(newTableData);
		newTableData.sort = sort
		dispatch(setTableData(newTableData))
		dispatch(setSortedColumn(sortingColumn))
	}

  return (
    <div>
      <DataTable
            columns={columns} 
            data={data}
            skeletonAvatarColumns={[0]}
            skeletonAvatarProps={{width: 28, height: 28 }}
            loading={loading}
            pagingData={{ pageIndex, pageSize, sort, query, total }}
            onPaginationChange={onPaginationChange}
            onSelectChange={onSelectChange}
            onSort={onSort}
			/>
    </div>
  )
}

export default StudentTable
