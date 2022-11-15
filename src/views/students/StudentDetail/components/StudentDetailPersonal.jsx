import React from 'react'
import { Card, Avatar } from 'components/ui'

const StudentDetailPersonal = ({info}) => {
  return (
    <Card className="max-w-4xl">
        <div className="flex justify-between px-6">
            <div>
                <div className='mb-2'>
                    <p className='font-vazir text-slate-400'>
                        آی دی کانکور
                    </p>
                    <h5 className="font-vazir">{info?.kankor_id}</h5>
                </div>
                <div className='mb-2'>
                    <p className='font-vazir text-slate-400'>
                        نام و تخلص
                    </p>
                    <h5 className="font-vazir">{info?.first_name} - {info?.last_name}</h5>
                </div>
                <div className='mb-2'>
                <p className='font-vazir text-slate-400'>
                       ولد و ولدیت
                    </p>
                    <h5 className="font-vazir">{info?.father_name} - {info?.grand_father_name}</h5>
                </div>
                <div className='mb-2'>
                <p className='font-vazir text-slate-400'>
                       ولایت اصلی
                    </p>
                    <h5 className="font-vazir">{info?.proince}</h5>
                </div>
                <div className='mb-2'>
                <p className='font-vazir text-slate-400'>
                       مکتب دوره لیسه
                    </p>
                    <h5 className="font-vazir">{info?.school}</h5>
                </div>
                <div className='mb-2'>
                <p className='font-vazir text-slate-400'>
                       نمره کانکور
                    </p>
                    <h5 className="font-vazir">{info?.score}</h5>
                </div>
                <div className='mb-2'>
                <p className='font-vazir text-slate-400'>
                       جنسیت و حالت مدنی
                    </p>
                    <h5 className="font-vazir">{info?.gender} - {info?.maritalStatus}</h5>
                </div>
            </div>
            <div className='mr-32'>
                <Avatar size={100} src={info?.image} />
            </div>
        </div>
    </Card>
  )
}

export default StudentDetailPersonal
