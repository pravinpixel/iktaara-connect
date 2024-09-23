import { alpha } from "@mui/material/styles";

export const grey = {
  100:'var(--ik_bluegreydarken1)',
  200:"var(--ik_bluegreylighten1)",
  300:"var(--ik_bluegreylighten2)",
  400:'var(--ik_bluegreydarken4)',
  500:'var(ik_bluegreydarken6)',
  600:'var(--ik_bluegreydarken3)',
  700:'var(--ik_bluegreydarken2)',
};


export const pink = {
  100:"var(--ik_pink)",
  200:"var(--ik_blue)"
}



export const customColor = {
  ik_bluegreylighten1:"var(--ik_bluegreylighten1)",
  ik_bluegreylighten2:"var(--ik_bluegreylighten2)",
  ik_bluegreydarken3:'var(--ik_bluegreydarken3)',
  ik_black:'var(--ik_black)',
  ik_bluegreydarken4:'var(--ik_bluegreydarken4)',
  ik_bluegreydarken6:'var(ik_bluegreydarken6)',
  ik_bluegreydarken1:'var(--ik_bluegreydarken1)',
  ik_bluegreydarken2:'var( --ik_bluegreydarken2)',
  ik_pink:'var(--ik_pink)',
  mixedcolor: "linear-gradient(90deg, #FF5252 0%, #2E1E5A 51.5%, #10BAC5 100%)",
  ik_multicolor:"var(--ik_multicolor)",
  ik_white:'var(--ik_white)',
  light:"rgba(129, 134, 148, 1)",
  ik_bluegreylighten5:"var(--ik_bluegreylighten5)",


};

export const primarybutton = {
  background: 'rgba(227, 64, 97, 1)',
  textcolor: 'var(--ik_white)',
  iconcolor:'var(ik_bluegreydarken6)',
 
};

export const bordercolor = {
  light:"rgba(129, 134, 148, 1)",
  dark:"var(--ik_bluegreydarken3)"
}

export const primary = {
  light:"var(--ik_bluegreylighten1)",
  main:"var(--ik_bluegreylighten2)",
  dark:'var(--ik_bluegreydarken3)',
  contrastText: 'var(--ik_white)'
};


export const common = {
  black: 'var(--ik_black)',
  white: 'var(--ik_white)',
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
