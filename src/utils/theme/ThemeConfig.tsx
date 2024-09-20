import { useMemo } from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  ThemeOptions,
} from "@mui/material/styles";

import { palette } from "./palette";
import { overrides } from "./overrides";
import { typography } from "./typography";

// ----------------------------------------------------------------------

export default function ThemeProvider({ children } : {children : React.ReactNode}) {
  const memoizedValue = useMemo(
    () => ({
      palette: palette(),
      typography,
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
    []
  );
  const overRideTheme = createTheme(memoizedValue as unknown as ThemeOptions);

  overRideTheme.components  = overrides(overRideTheme) as never

  return <MUIThemeProvider theme={overRideTheme}>{children}</MUIThemeProvider>;
}
