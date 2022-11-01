import React, { memo, useMemo, lazy, Suspense } from "react";
import { Loading } from "../shared";
import { useSelector } from "react-redux";
import { LAYOUT_TYPE_MODERN } from "../../constants/theme.constant";
import useAuth from "../../utils/hooks/useAuth";

const layouts = {
  [LAYOUT_TYPE_MODERN]: lazy(() => import("./ModernLayout")),
};

const Layout = () => {
  const layoutType = useSelector((state) => state.theme.layout.type);
  const { authenticated } = useAuth();
  const AppLayout = useMemo(() => {
    if (authenticated) {
      return layouts[layoutType];
    }
    return lazy(() => import("./AuthLayout"));
  }, [layoutType, authenticated]);
  return (
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">
          <Loading loading={true} />
        </div>
      }
    >
      <AppLayout />
    </Suspense>
  );
};

export default memo(Layout);
