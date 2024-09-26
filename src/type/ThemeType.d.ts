import { Theme as DefaultTheme } from "@mui/material";
import { PaletteOptions as DefaultPaletteOptions } from "@mui/material/styles";
import {
    TypographyStyleOptions,
    FontStyleOptions,
    Variant as DefaultVariants,
    FontStyle,
    TypographyUtils,
} from "@mui/material/styles/createTypography";

type CustomVariants = "f12" | "f14" | "f16" | "f18" | "f20" | "f23" | "f24" | "f28" | "f32" | 'f40' | 'f52';
type CustomColorKey = "ik_bluegreylighten1" | "ik_bluegreylighten2" | "ik_bluegreydarken3" | "ik_black" | "ik_bluegreydarken4" | "ik_bluegreydarken6" | "ik_bluegreydarken1" | "ik_bluegreydarken2" | "ik_pink" | "mixedcolor" | "ik_multicolor" | "ik_white" | "light" | "ik_bluegreylighten5";

export interface Typography
    extends Record<DefaultVariants | CustomVariants, TypographyStyleOptions>,
    FontStyle,
    TypographyUtils { }

interface ModifiedTypography
    extends Partial<Record<DefaultVariants | CustomVariants, TypographyStyleOptions> & FontStyleOptions> {
    fontWeightSemiBold: number;
    [key in CustomVariants]: TypographyStyleOptions;
    secondaryFont?: string;
    fontWeight?: 400 | 500 | 600 | 700;
    fontSizeList: {
        [key in CustomVariants]: number;
    };
}

type CustomColorProps = {
    [key in CustomColorKey]: string;
};

declare module "@mui/material/styles" {
    interface Palette extends DefaultPaletteOptions {
        customColor: CustomColorProps;
        primarybutton: {
            background: 'rgba(227, 64, 97, 1)',
            textcolor: 'rgba(255, 255, 255, 1)',
            iconcolor: 'rgba(59, 67, 87, 1)',
        }
    }
}

declare module "@mui/material/styles/createTypography" {
    interface TypographyOptions extends ModifiedTypography { }
}

declare module "@mui/material" {

    interface Theme extends DefaultTheme {
        typography: ModifiedTypography;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        f12: true;
        f14: true;
        f16: true;
        f18: true;
        f20: true;
        f23: true;
        f24: true;
        f28: true;
        f32: true;
        f40: true;
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        white: true;
        "primary-button": true;
        task :true
    }
}
