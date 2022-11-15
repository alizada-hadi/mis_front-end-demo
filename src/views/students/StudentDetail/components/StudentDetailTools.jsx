import React from 'react'

const StudentDetailTools = ({student}) => {
  return (
    <div className='flex flex-col md:flex-row justify-between'>
      <div>
        <h3 className='font-vazir'>{student?.first_name} - {student?.last_name}</h3>
        <h6 className='font-vazir text-gray-500'>{student?.department?.name} - سمستر {student?.semester}</h6>
      </div>
      <div>Actions</div>
    </div>
  )
}

export default StudentDetailTools
