// import { pxToRem } from "../helpers/globalHelper";

export function responsiveFontSizes({ xs, sm, md, lg }) {
  return {
    "@media (min-width:320px)": {
      fontSize: xs,
    },
    "@media (min-width:600px)": {
      fontSize: sm,
    },
    "@media (min-width:900px)": {
      fontSize: md,
    },
    "@media (min-width:1200px)": {
      fontSize: lg,
    },
  };
}

export const fontFamily = "var(--sora)" ;
export const secondaryFont = "var(--sora)";

export const fontWeightRegular = 400;
export const fontWeightMedium = 500;
export const fontWeightSemiBold = 600;
export const fontWeightBold = 700;

const fontSizeList = {
  f12: 12,
  f14: 14,
  f16: 16,
  f18: 18,
  f20: 20,
  f22: 22,
  f24: 24,
  f26: 26,
  f28: 28,
  f32: 32,
  f64: 64,
  f68: 68,
};

function createCustomFontSize() {
  const returnObj = {};

  Object.entries(fontSizeList).forEach(([name, value]) => {
    returnObj[name] = {
      fontWeight: fontWeightRegular,
      lineHeight: (value * 2) / value,
      fontSize: value,
      ...responsiveFontSizes({ xs: value, sm: value, md: value, lg: value }),
    };
  });

  return returnObj;
}

export const typography = {
  fontFamily,
  secondaryFont,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightSemiBold,
  fontWeightBold,
  fontSizeList,
  ...createCustomFontSize(),
};
