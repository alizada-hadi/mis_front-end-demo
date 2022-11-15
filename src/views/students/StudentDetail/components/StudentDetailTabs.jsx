import React from 'react'
import StudentDetailTools from './StudentDetailTools'
import StudentDetailPersonal from './StudentDetailPersonal'
import { Tabs } from 'components/ui'
import { HiOutlineUser } from 'react-icons/hi'
import { MdOutlineFamilyRestroom, MdSwitchAccount } from 'react-icons/md'
import { AiOutlineIdcard } from 'react-icons/ai'

const { TabNav, TabList, TabContent } = Tabs




const StudentDetailTabs = ({student}) => {
  return (
    <div>
      <StudentDetailTools student={student} />
      <Tabs defaultValue="tab1" className="mt-10">
            <TabList>
                <TabNav value="tab1" icon={<HiOutlineUser />} className="font-vazir">معلومات شخصی</TabNav>
                <TabNav value="tab2" icon={<MdOutlineFamilyRestroom />} className="font-vazir">معلومات اقارب</TabNav>
                <TabNav value="tab3" icon={<AiOutlineIdcard />} className="font-vazir">معلومات کارت هویت</TabNav>
                <TabNav value="tab4" icon={<MdSwitchAccount />} className="font-vazir">معلومات حساب کاربری</TabNav>
            </TabList>
            <div className="p-4">
                <TabContent value="tab1">
                    <StudentDetailPersonal info={student} />
                </TabContent>
                <TabContent value="tab2">
                    <p>
                        A computer lets you make more mistakes faster than any invention in human history–with 
                        the possible exceptions of handguns and tequila. (Mitch Radcliffe). 
                    </p>
                </TabContent>
                <TabContent value="tab3">
                    <p>
                        In C++ it’s harder to shoot yourself in the foot, but when you do, 
                        you blow off your whole leg. (Bjarne Stroustrup) 
                    </p>
                </TabContent>
            </div>
        </Tabs>
    </div>
  )
}

export default StudentDetailTabs
