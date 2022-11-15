import React from "react";
import { Timeline, Card, Tag, Avatar} from "components/ui";


const TimelineAvatar = ({children, ...rest}) => {

	return (
		<Avatar 
			{...rest} 
			size={25} 
			shape="circle" 
		>
			{children}
		</Avatar>
	)
}

const DepartmentDetailInfo = (props) => {
  const { name, description, created_at, chief } = props;
  return (
    <div className="flex justify-between">
      <div className="">
        <Timeline>
          <Timeline.Item>
            <h6 className="font-vazir text-sm text-gray-400">نام دیپارتمنت</h6>
            <h4 className="font-vazir">{name}</h4>
          </Timeline.Item>
          <Timeline.Item>
            <h6 className="font-vazir text-sm text-gray-400">توضیخات</h6>
            <Card className="mt-4">
              <p className="font-vazir">{description}</p>
            </Card>
          </Timeline.Item>
          <Timeline.Item>
            <h6 className="font-vazir text-sm text-gray-400">تاریخ ایجاد</h6>
            <Tag
							className="mr-2 rtl:ml-2 cursor-pointer mt-3"
							prefix 
							prefixClass="bg-blue-600"
						>
							{created_at}
						</Tag>
          </Timeline.Item>
        </Timeline>
      </div>
      <div className="max-w-[700px]">
        <h4 className="font-vazir mb-4">ریاست دیپارتمنت</h4>
        <Timeline>
          {chief?.map(item => (
            <Timeline.Item key={item.id} media={item?.user?.staff?.image ? <TimelineAvatar src={item?.user?.staff?.image}></TimelineAvatar> : <TimelineAvatar className="bg-amber-500">{item?.user?.username.charAt(0).toUpperCase()}</TimelineAvatar>}>
              <p className="my-1 flex items-center">
						<span className="font-semibold text-gray-900 dark:text-gray-100 font-vazir">{item?.user?.staff?.first_name} {item?.user?.staff?.last_name} </span>
						<span className="mx-2 font-vazir">از تاریخ </span>
            <Tag
							className="mr-2 rtl:ml-2 cursor-pointer"
							prefix 
							prefixClass="bg-rose-500"
						>
							{item?.from_date}
						</Tag>
            {item.to_date ? (
            <>
            <span className="font-vazir">تا</span>
						<Tag
							className="mr-2 rtl:ml-2 cursor-pointer"
							prefix 
							prefixClass="bg-blue-600"
						>
							{item?.to_date}
						</Tag>
            </>

            ) : (
              <></>
            )}
						
					</p>
          {!item.to_date && <Card className="mt-3">
                <p className="font-vazir">در حال حاضر رییس دیپارتمنت مذکور می باشد. </p>
              </Card>}
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default DepartmentDetailInfo;
