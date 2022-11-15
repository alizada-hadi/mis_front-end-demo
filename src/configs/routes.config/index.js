import React from "react";
import authRoute from "./authRoute";

export const publicRoutes = [...authRoute];

export const protectedRoutes = [
  {
    key: "home",
    path: "/home",
    component: React.lazy(() => import("views/Home")),
    authority: [],
  },
  /** Example purpose only */
  {
    key: "departmentList",
    path: "/department-list",
    component: React.lazy(() => import("views/departments/departmentList")),
    authority: [],
  },
  {
    key: "departmentDetail",
    path: "/department-detail",
    component: React.lazy(() => import("views/departments/departmentDetail")),
    authority: [],
  },
  {
    key: "StudentList",
    path: "/student-list",
    component: React.lazy(() => import("views/students/StudentList")),
    authority: [],
    meta: {
      pageContainerType: 'gutter'
  }
  },
  {
    key: "NewStudent",
    path: "/student-register",
    component: React.lazy(() => import("views/students/RegisterNewStudent")),
    authority: [],
    meta: {
      pageContainerType: 'gutter'
  }
  },
  {
    key: "StudentDetail",
    path: "/student-detail-view",
    component: React.lazy(() => import("views/students/StudentDetail")),
    authority: [],
    meta: {
      pageContainerType: 'gutter'
  }
  },
  {
    key: "collapseMenu.item1",
    path: "/collapse-menu-item-view-1",
    component: React.lazy(() => import("views/demo/CollapseMenuItemView1")),
    authority: [],
  },
  {
    key: "collapseMenu.item2",
    path: "/collapse-menu-item-view-2",
    component: React.lazy(() => import("views/demo/CollapseMenuItemView2")),
    authority: [],
  },
  {
    key: "groupMenu.single",
    path: "/group-single-menu-item-view",
    component: React.lazy(() => import("views/demo/GroupSingleMenuItemView")),
    authority: [],
  },
  {
    key: "groupMenu.collapse.item1",
    path: "/group-collapse-menu-item-view-1",
    component: React.lazy(() =>
      import("views/demo/GroupCollapseMenuItemView1")
    ),
    authority: [],
  },
  {
    key: "groupMenu.collapse.item2",
    path: "/group-collapse-menu-item-view-2",
    component: React.lazy(() =>
      import("views/demo/GroupCollapseMenuItemView2")
    ),
    authority: [],
  },
];
