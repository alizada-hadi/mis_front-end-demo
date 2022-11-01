import { THEME_ENUM } from "../constants/theme.constant";

export const themeConfig = {
  themeColor: "indigo",
  direction: "rtl",
  mode: THEME_ENUM.MODE_LIGHT,
  locale: "en",
  primaryColorLevel: 600,
  cardBordered: true,
  panelExpand: false,
  controlSize: "md",
  navMode: "transparent",
  layout: {
    type: THEME_ENUM.LAYOUT_TYPE_MODERN,
    sideNavCollapse: false,
  },
};
