import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
} from "constants/navigation.constant";

const navigationConfig = [
  {
    key: "home",
    path: "/home",
    title: "Home",
    translateKey: "nav.home",
    icon: "home",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
  },
  /** Example purpose only */
  {
    key: "departmentList",
    path: "",
    title: "دیپارتمنت ها",
    translateKey: "nav.departmentList",
    icon: "collapseMenu",
    type: NAV_ITEM_TYPE_COLLAPSE,
    authority: [],
    subMenu: [
      {
        key: "departmentList",
        path: "/department-list",
        title: " لیست دیپارتمنت ها",
        translateKey: "nav.departmentList",
        icon: "singleMenu",
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
      },
      {
        key: "departmentDetail",
        path: "/department-detail/?slug",
        title: "جزییات دیپارتمنت",
        translateKey: "nav.departmentList",
        icon: "singleMenu",
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
      },
    ],
  },
];

export default navigationConfig;
