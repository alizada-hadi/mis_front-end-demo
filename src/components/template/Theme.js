import React from "react";
import { useSelector } from "react-redux";
import { themeConfig } from "../../configs/theme.config";
import { ConfigProvider } from "../ui";
import useDarkMode from "../../utils/hooks/useDarkMode";

const Theme = (props) => {
  const theme = useSelector((state) => state.theme);
  const [isDark] = useDarkMode();

  const currentTheme = {
    mode: isDark ? "dark" : "light",
    ...themeConfig,
    ...theme,
  };
  return (
    <>
      <ConfigProvider value={currentTheme}>{props.children}</ConfigProvider>
    </>
  );
};

export default Theme;