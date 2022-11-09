import React, {useEffect} from 'react'
import { Card, Avatar } from 'components/ui'
import { GrowShrinkTag, MediaSkeleton, Loading } from 'components/shared'
import { HiOutlineUserGroup, HiOutlineUserAdd, HiOutlineUsers } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { getDepartment } from 'views/departments/departmentDetail/store/dataSlice'
import NumberFormat from 'react-number-format'

const StatisticCard = props => {

	const { icon, avatarClass, label, value, growthRate, loading } = props

	const avatarSize = 55

	return (
		<Card bordered>
			<Loading 
				loading={loading} 
				customLoader={
					<MediaSkeleton 
						avatarProps={
							{
								className: 'rounded',
								width: avatarSize,
								height: avatarSize
							}
						} 
					/>
				}
			>
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-4">
						<Avatar className={avatarClass} size={avatarSize} icon={icon} />
						<div>
							<span className='font-vazir font-semibold'>{label}</span>
							<h3>
								<NumberFormat
									displayType="text"
									value={value}
									thousandSeparator
								/>
							</h3>
						</div>
					</div>
					<GrowShrinkTag value={growthRate} suffix="%" />
				</div>
			</Loading>
		</Card>
	)
}



const StudentStatistic = ({slug}) => {
    const dispatch = useDispatch()
    const data = useSelector(
        (state) => state?.departmentDetail?.data?.departmentData
      );
    const loading = useSelector((state) => state?.departmentDetail?.data?.loading);
    useEffect(() => {
        dispatch(getDepartment({slug}))
    }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
        <StatisticCard 
				icon={<HiOutlineUserGroup />} 
				avatarClass="!bg-indigo-600"
				label="تعداد شاگردان"
				value={data?.total_students}
				// growthRate={statisticData?.totalCustomers?.growShrink}
				loading={loading}
			/>
			<StatisticCard 
				icon={<HiOutlineUsers />} 
				avatarClass="!bg-blue-500"
				label="تعداد شاگردان فعال "
				value={data?.total_active_students}
				// growthRate={statisticData?.activeCustomers?.growShrink}
				loading={loading}
			/>
			<StatisticCard 
				icon={<HiOutlineUserAdd />} 
				avatarClass="!bg-emerald-500"
				label="تعداد شاگردان جدید"
				value={data?.total_new_students}
				// growthRate={statisticData?.newCustomers?.growShrink}
				loading={loading}
			/>
    </div>
  )
}

export default StudentStatistic
