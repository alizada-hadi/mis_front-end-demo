import React from "react";
import ModeSwitcher from "./ModeSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import NavModeSwitcher from "./NavModeSwitcher";
import DirectionSwitcher from "./DirectionSwitcher";

const ThemeConfigurator = ({ callBackClose }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-y-10 mb-6">
        <div className="flex items-center justify-between">
          <div className="font-vazir">
            <h6>حالت شب</h6>
            <span>تغییر صفحه به حالت تاریک</span>
          </div>
          <ModeSwitcher />
        </div>

        <div className="font-vazir">
          <h6 className="mb-3">حالت مینیو</h6>
          <NavModeSwitcher />
        </div>
        <div className="font-vazir">
          <h6 className="mb-3">حالت مینیو</h6>
          <DirectionSwitcher />
        </div>
        <div className="font-vazir">
          <h6 className="mb-3">رنگها</h6>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default ThemeConfigurator;
