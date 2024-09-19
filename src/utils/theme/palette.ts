import { alpha } from "@mui/material/styles";
// import { light } from "@mui/material/styles/createPalette";

// ----------------------------------------------------------------------

export const grey = {
  // 100: "#F9FAFB",
  // 200: "#F9F9F9",
  // 300: "#DFE3E8",
  // 400: "#C4CDD5",
  // 500: "#919EAB",
  // 600: "#9F9F9F",
  // 700: "#454F5B",
  // 800: "#202020",
  // 900: "#161C24",
  100:'rgba(84, 110, 122, 1)',
  200:"rgba(120, 144, 156, 1)",
  300:"rgba(144, 164, 174, 1)",
  400:'rgba(38, 50, 56, 1)',
  500:'rgba(59, 67, 87, 1)',
  600:'rgba(55, 71, 79, 1)',
  700:'rgba(69, 90, 100, 1)',
};


export const pink = {
  100:"rgba(227, 64, 97, 1)"
}

export const customColor = {
  // organge: 'rgba(254, 96, 6, 1)',
  // blue: "rgba(0, 106, 215, 1)",
  // yellow: "#FFB627",
  // red: "rgba(255, 13, 4, 1)",
  // green: "#2ACE3A",
  // low: "#B7B7B7",
  // high: "#FF0000",
  // medium: "#FFB627",
  // duebytoday: "#FE6006",
  // duebytomorrow: "#006AD7",
  // overdue: "#FF0D04",
  // darkGreyOne: grey[900],
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

// export const greyColor = [
//   "#f5f5f5",
//   "#e7e7e7",
//   "#cdcdcd",
//   "#b2b2b2",
//   "#9a9a9a",
//   "#8b8b8b",
//   "#848484",
//   "#717171",
//   "#656565",
//   "#575757",
// ];

// export const yelowColor = [
//   "#fff8e0",
//   "#ffefca",
//   "#ffdd99",
//   "#ffcb62",
//   "#ffbb36",
//   "#ffb118",
//   "#ffac03",
//   "#e49600",
//   "#ca8400",
//   "#b07200",
// ];

// export const primaryColor = [
//   "hsla(359, 100%, 94%, 1)",
//   "#f2dde3",
//   "#e1b8c4",
//   "#d191a3",
//   "#c37087",
//   "#bb5b75",
//   "#b8506d",
//   "#a2415c",
//   "#923851",
//   "#812d46",
// ];

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

// export const secondary = {
//   light: "#23b9fe",
//   main: "#00B2FF",
//   dark: "#009ee4",
//   contrastText: "#FFFFFF",
// };

// export const info = {
//   light: "#b3b1b2",
//   main: "#9F9F9F",
//   dark: "#8b8b8b",
//   contrastText: "#FFFFFF",
// };

// export const success = {
//   light: "#DCF5E7",
//   main: "#50CD89",
//   dark: "#007867",
//   contrastText: "#FFFFFF",
// };

// export const warning = {
//   light: yelowColor[1],
//   main: yelowColor[5],
//   dark: yelowColor[8],
//   contrastText: grey[800],
// };

// export const error = {
//   light: "#FEECF1",
//   main: "#F1416C",
//   dark: "#f14d44",
//   contrastText: "#FFFFFF",
// };

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
  // secondary,
  // info,
  // success,
  // warning,
  // error,
  customColor,
  grey,
  common,
  // divider: alpha(grey[500], 0.2),
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
