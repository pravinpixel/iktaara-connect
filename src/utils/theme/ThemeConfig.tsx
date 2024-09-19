import { useMemo } from "react";
import {
  useTheme,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

import { palette } from "./palette";
// import { shadows } from "./shadows";
import { overrides } from "./overrides";
import { typography } from "./typography";
// import { customShadows } from "./custom-shadows";

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }) {
  const theme = useTheme();
  const memoizedValue = useMemo(
    () => ({
      palette: palette(),
      typography,
      //   shadows: shadows(theme),
      //   customShadows: customShadows(theme),
      shape: { borderRadius: 6 },
      transitions: {
        duration: {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 400,
          leavingScreen: 400,
        },
      },
    }),
    [theme]
  );
  const overRideTheme = createTheme(memoizedValue);
  // console.log(overRideTheme, "nnnnn"); // Check the theme object
  overRideTheme.components = overrides(overRideTheme);

  return <MUIThemeProvider theme={overRideTheme}>{children}</MUIThemeProvider>;
}
