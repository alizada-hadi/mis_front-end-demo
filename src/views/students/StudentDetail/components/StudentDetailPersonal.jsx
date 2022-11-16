import React, {useState} from 'react'
import { Card, Avatar, Badge} from 'components/ui'


const StudentInfoField = ({title, value, extraValue}) => {
	return (
		<div className='mb-1'>
			<span className="font-vazir">{title}</span>
			<p className="text-gray-700 font-vazir dark:text-gray-200 font-semibold">{value} {extraValue && extraValue}</p>
		</div>
	)
}
const StudentDetailPersonal = ({info}) => {
  return (
    <div className='flex flex-col lg:flex-row'>
        <Card>
        <div className="flex justify-between px-6">
            <div>
                <StudentInfoField title="آی دی کانکور" value={info?.kankor_id} />
                <StudentInfoField title="نام و تخلص" value={info?.first_name} extraValue={info?.last_name} />
                <StudentInfoField title="ولد و ولدیت" value={info?.father_name} extraValue={info?.grand_father_name} />
                <StudentInfoField title="ولایت" value={info?.proince} />
                <StudentInfoField title="مکتب دوره لیسه" value={info?.school} />
                <StudentInfoField title="نمره کانکور" value={info?.score} />
                <StudentInfoField title="جنسیت" value={info?.gender} />
                <StudentInfoField title="حالت مدنی" value={info?.maritalStatus} />
            </div>
            <div className='mr-32'>
            <Badge className="mr-4" content={info?.status} innerClass="bg-green-700">
                <Avatar size={100} src={info?.image} />
            </Badge>
            </div>
            
        </div>
    </Card>
    <div></div>
    </div>
  )
}

export default StudentDetailPersonal
