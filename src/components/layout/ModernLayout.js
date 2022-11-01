import React from "react";
import Header from "../template/Header";
import SidePanel from "../template/SidePanel";

const ModernLayout = () => {
  const HeaderActionsEnd = () => {
    return (
      <>
        <SidePanel />
        {/* <UserDropdown hoverable={false} /> */}
      </>
    );
  };
  return (
    <div className="app-layout-modern flex flex-auto flex-col">
      <div className="flex flex-auto min-w-0">
        sidenav
        {/* <SideNav /> */}
        <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
          <Header
            className="border-b border-gray-200 dark:border-gray-700"
            headerEnd={HeaderActionsEnd}
          />
          {/* <View {...props} /> */}
        </div>
      </div>
    </div>
  );
};

export default ModernLayout;
