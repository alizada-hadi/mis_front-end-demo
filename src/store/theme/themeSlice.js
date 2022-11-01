import { createSlice } from "@reduxjs/toolkit";
import { themeConfig } from "../../configs/theme.config";
import {
  LAYOUT_TYPE_MODERN,
  NAV_MODE_TRANSPARENT,
  NAV_MODE_LIGHT,
  NAV_MODE_DARK,
  NAV_MODE_THEMED,
  MODE_DARK,
  MODE_LIGHT,
} from "../../constants/theme.constant";

const initialState = {
  themeColor: themeConfig.themeColor,
  direction: themeConfig.direction,
  mode: themeConfig.mode,
  locale: themeConfig.locale,
  primaryColorLevel: themeConfig.primaryColorLevel,
  panelExpand: themeConfig.panelExpand,
  navMode: themeConfig.navMode,
  layout: themeConfig.layout,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state, action) => {
      if (action.payload === MODE_DARK && state.navMode !== NAV_MODE_THEMED) {
        state.navMode = NAV_MODE_DARK;
      }
      if (action.payload === MODE_LIGHT && state.navMode !== NAV_MODE_THEMED) {
        state.navMode = NAV_MODE_LIGHT;
      }
      state.mode = action.payload;
    },
    setSideNavCollapse: (state, action) => {
      state.layout = {
        ...state.layout,
        ...{ sideNavCollapse: action.payload },
      };
    },

    setNavMode: (state, action) => {
      if (action.payload !== "default") {
        state.navMode = action.payload;
      } else {
        if (state.layout.type === LAYOUT_TYPE_MODERN) {
          state.navMode = NAV_MODE_TRANSPARENT;
        }
        if (state.mode === MODE_LIGHT) {
          state.navMode = NAV_MODE_LIGHT;
        }

        if (state.mode === MODE_DARK) {
          state.navMode = NAV_MODE_DARK;
        }
      }
    },
    setPanelExpand: (state, action) => {
      state.panelExpand = action.payload;
    },
    setThemeColor: (state, action) => {
      state.themeColor = action.payload;
    },
    setThemeColorLevel: (state, action) => {
      state.primaryColorLevel = action.payload;
    },
  },
});

export const {
  setMode,
  setSideNavCollapse,
  setNavMode,
  setPanelExpand,
  setThemeColor,
  setThemeColorLevel,
} = themeSlice.actions;

export default themeSlice.reducer;
