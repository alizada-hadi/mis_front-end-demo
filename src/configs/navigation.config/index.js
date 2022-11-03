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
    authority: ["manager"],
    subMenu: [],
  },
  /** Example purpose only */
  {
    key: "singleMenuItem",
    path: "/single-menu-view",
    title: "Single menu item",
    translateKey: "nav.singleMenuItem",
    icon: "singleMenu",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
  },
];

export default navigationConfig;
