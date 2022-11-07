import React from "react";
import { Tabs } from "components/ui";
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineUserGroup,
} from "react-icons/hi";

import { BsBook } from "react-icons/bs";

const DepartmentDetailTabs = () => {
  const { TabNav, TabList, TabContent } = Tabs;
  return (
    <div>
      <Tabs defaultValue="department_info">
        <TabList>
          <TabNav
            value="department_info"
            className="font-vazir"
            icon={<HiOutlineHome />}
          >
            بخش معلومات
          </TabNav>
          <TabNav
            value="student_tab"
            className="font-vazir"
            icon={<HiOutlineUserGroup />}
          >
            بخش شاگردان
          </TabNav>
          <TabNav
            value="instructor_tab"
            className="font-vazir"
            icon={<HiOutlineUsers />}
          >
            بخش استادان
          </TabNav>
          <TabNav className="font-vazir" value="subject_tab" icon={<BsBook />}>
            بخش مضامین
          </TabNav>
        </TabList>
        <div className="p-4">
          <TabContent value="department_info">
            <p>
              If builders built buildings the way programmers wrote programs,
              then the first woodpecker that came along would destroy
              civilization. (Gerald Weinberg)
            </p>
          </TabContent>
          <TabContent value="student_tab">
            <p>
              A computer lets you make more mistakes faster than any invention
              in human history–with the possible exceptions of handguns and
              tequila. (Mitch Radcliffe).
            </p>
          </TabContent>
          <TabContent value="instructor_tab">
            <p>
              In C++ it’s harder to shoot yourself in the foot, but when you do,
              you blow off your whole leg. (Bjarne Stroustrup)
            </p>
          </TabContent>
          <TabContent value="subject_tab">
            <p>
              Javascript is one the most programming langugaes in the world that
              enables us to create dynamic web page.
            </p>
          </TabContent>
        </div>
      </Tabs>
    </div>
  );
};

export default DepartmentDetailTabs;
