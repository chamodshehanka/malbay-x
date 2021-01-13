import React from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  ThemeProvider,
  jssPreset,
} from "@material-ui/core/styles";
import { theme, themeWithRtl } from ".";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

interface Props {
  direction: "rtl" | "ltr";
}
function CustomThemeProvider(props: React.PropsWithChildren<Props>) {
  const { direction, children } = props;
  const content =
    direction === "ltr" ? children : <div dir="rtl">{children}</div>;
  return (
    <ThemeProvider theme={direction === "ltr" ? theme : themeWithRtl}>
      <StylesProvider jss={jss}>{content}</StylesProvider>
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
