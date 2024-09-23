import { alpha } from "@mui/material/styles";

export const grey = {
  100:'rgba(84, 110, 122, 1)',
  200:"rgba(120, 144, 156, 1)",
  300:"rgba(144, 164, 174, 1)",
  400:'rgba(38, 50, 56, 1)',
  500:'rgba(59, 67, 87, 1)',
  600:'rgba(55, 71, 79, 1)',
  700:'rgba(69, 90, 100, 1)',
};


export const pink = {
  100:"rgba(227, 64, 97, 1)",
  200:"rgba(46, 30, 90, 1)"
}

export const blue = {
  100:"rgba(46, 30, 90, 1)"
}

export const customColor = {
  bluegreylighten:"rgba(120, 144, 156, 1)",
  bluegreylighten2:"rgba(144, 164, 174, 1)",
  bluegreydarken:'rgba(55, 71, 79, 1)',
  black:'rgba(0, 0, 0, 1)',
  darkgrey:'rgba(38, 50, 56, 1)',
  darkgrey1:'rgba(59, 67, 87, 1)',
  lightgrey:'rgba(84, 110, 122, 1)',
  bluegreydarken2:'rgba(69, 90, 100, 1)',
  pink:'rgba(227, 64, 97, 1)',
  mixedcolor: "linear-gradient(90deg, #FF5252 0%, #2E1E5A 51.5%, #10BAC5 100%)",
  mixedcolor1:"linear-gradient(90deg, #E34061 0%, #3C1393 44%, #1E9D77 100%)",
  white:'rgba(255, 255, 255, 1)',
  light:"rgba(129, 134, 148, 1)",
  dark:"rgba(55, 71, 79, 1)",
  bluegreylighten5:"rgba(236, 239, 241, 1)",


};

export const primarybutton = {
  background: 'rgba(227, 64, 97, 1)',
  textcolor: 'rgba(255, 255, 255, 1)',
  iconcolor:'rgba(59, 67, 87, 1)',
 
};

export const bordercolor = {
  light:"rgba(129, 134, 148, 1)",
  dark:"rgba(55, 71, 79, 1)"
}

export const primary = {
  light:"rgba(120, 144, 156, 1)",
  main:"rgba(144, 164, 174, 1)",
  dark:'rgba(55, 71, 79, 1)',
  contrastText: 'rgba(255, 255, 255, 1)'
};


export const common = {
  black: 'rgba(0, 0, 0, 1)',
  white: 'rgba(255, 255, 255, 1)',
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  customColor,
  grey,
  common,
  action,
  primarybutton,
  bordercolor,
  pink
};

// ----------------------------------------------------------------------

export function palette() {
  const obj = {
    ...base,
    primary: base.primary,
  };
  return {
    ...obj,
    mode: "light",

    text: {
      primary: base.grey[600],
      secondary: base.grey[100],
      disabled: base.grey[300],
    },
    background: {
      paper: base.common.white,
      default: base.grey[600],
    },
    action: {
      ...base.action,
      active: base.grey[600],
    },
  };
}
