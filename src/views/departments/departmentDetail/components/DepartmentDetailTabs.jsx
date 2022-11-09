import React from "react";
import { Tabs } from "components/ui";
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineUserGroup,
  HiOutlineCog,
} from "react-icons/hi";
import DepartmentDetailInfo from "./DepartmentDetailInfo";
import DepartmentHolding from "./DepartmentHolding";
import StudentList from "views/students/StudentList";

const holdingData = [
  {
      icon: '/img/thumbs/help-center-category-4.png',
      symbol: 'STD',
      name: 'شاگردان',
      count: 150,
      growshrink: 16.7,
      path : "/student-list"
  },
  {
      icon: '/img/thumbs/hubspot.png',
      symbol: 'STF',
      name: 'استادان',
      count: 26,
      growshrink: -8.3,
      path : "/instructor-list"
  },
  {
      icon: '/img/thumbs/help-center-category-0.png',
      symbol: 'CURR',
      name: 'مضامین',
      count: 210,
      growshrink: 4.9,
      path : "/curriculum-list"
  },
  {
      icon: '/img/thumbs/help-center-category-7.png',
      symbol: 'CURS',
      name: 'کورس ها',
      count: 16,
      growshrink: 11.34,
      path : "course-list"
  },
  {
    icon: '/img/thumbs/help-center-category-3.png',
    symbol: 'STNG',
    name: 'جزییات و ویرایش',
    path : "setting"
}
]

const DepartmentDetailTabs = ({ data }) => {
  const { name, description, created_at, chief, slug } = data;
  const { TabNav, TabList, TabContent } = Tabs;
  
  return (
    <div>
      <DepartmentDetailInfo
              name={name}
              description={description}
              created_at={created_at}
              chief={chief}
      />
      <DepartmentHolding data={holdingData} slug={slug} />
    </div>
  );
};

export default DepartmentDetailTabs;
