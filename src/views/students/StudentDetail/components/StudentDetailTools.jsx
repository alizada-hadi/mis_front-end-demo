import React, {useState} from 'react'
import { Button, Notification, toast } from 'components/ui'
import { ConfirmDialog } from 'components/shared'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { HiPencilAlt, HiOutlineTrash } from 'react-icons/hi'
import { openEditStudentPersonalInfoDialog } from '../store/stateSlice'
import EditStudentPersonal from './EditStudentPersonal'

const StudentDetailTools = ({student}) => {
  const StudentProfileAction = () => {
    const dispatch = useDispatch()
    const [dialogOpen, setDialogOpen] = useState(false)
    const navigate = useNavigate()
  
    const onDialogClose = () => {
      setDialogOpen(false)
    }
  
    const onDialogOpen = () => {
      setDialogOpen(true)
    }
  
    const onDelete = () => {
      setDialogOpen(false)
      // dispatch(deleteCustomer({id}))
      navigate('/app/crm/customers')
      toast.push(
        <Notification title={"Successfuly Deleted"} type="success" className="font-vazir">
          یک شاگرد موفقانه از سیستم حذف گردید.
        </Notification>
      )
    }
    const onEdit = () => {
      dispatch(openEditStudentPersonalInfoDialog())
    }
    return (
      <div className='flex space-x-1'>
        <Button 
          block 
          icon={<HiOutlineTrash />}
          onClick={onDialogOpen}
          className="font-vazir ml-2"
        >
          حذف شاگرد
        </Button>
        <Button 
          icon={<HiPencilAlt/>} 
          block 
          variant="solid"
          onClick={onEdit} 
          className="font-vazir"
        >	
          ویرایش شاگرد 
        </Button>
        <ConfirmDialog
          isOpen={dialogOpen}
          onClose={onDialogClose}
          onRequestClose={onDialogClose}
          type="danger"
          title="حذف شاگرد"
          onCancel={onDialogClose}
          onConfirm={onDelete}
          confirmButtonColor="red-600"
        >
          <p className='font-vazir'>
            آیا واقعا میخواهید شاگرد فوق از سیستم حذف گردد؟ معلومات حذف شده قابل بازیابی نیست.
          </p>
        </ConfirmDialog>
        <EditStudentPersonal />
      </div>
    )
  }
  return (
    <div className='flex flex-col md:flex-row justify-between'>
      <div>
        <h3 className='font-vazir'>{student?.first_name} - {student?.last_name}</h3>
        <h6 className='font-vazir text-gray-500'>{student?.department?.name} - سمستر {student?.semester}</h6>
      </div>
      <div>
        <StudentProfileAction />
      </div>
    </div>
  )
}

export default StudentDetailTools
