import {
  ButtonProps,
  Components,
  formControlLabelClasses,
  formHelperTextClasses,
  formLabelClasses,
  SxProps,
  Theme,
} from "@mui/material";
import { fontFamily } from "./typography";
import { bordercolor } from "./palette";

// ----------------------------------------------------------------------

export const ConfigConst = {
  Input: 2.8125 - 16 / 16,
  TableInput: 1.7125 - 16 / 16,
};

// -----------------------------------------------------------------------

// interface ComponentsOverride extends Components<Omit<Theme, "components">> {
// 	MuiLoadingButton: {
// 		defaultProps: Partial<ButtonProps>;
// 		styleOverrides?: SxProps;
// 	};
// }
const componentsOverride = {
  MuiLoadingButton: {
    defaultProps: {
      // Define any default props for the MuiLoadingButton component here
    },
    styleOverrides: {
      // Define style overrides using the SxProps structure here
    },
  },
};

const grey = {
  1000: "rgba(55, 71, 79, 1)",
  1100: "rgba(227, 64, 97, 1)",
  1200: "rgba(255, 239, 242, 1)",
  1300: "rgba(242, 246, 248, 1)",
};

export function overrides(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          textTransform: "unset !important",
          // fontFamily: "Sora, sans-serif", // Set font family globally
        },
        html: {
          margin: 0,
          padding: 0,
          WebkitOverflowScrolling: "touch",
        },
        body: {
          margin: 0,
          padding: 0,
          // fontFamily:"Sora, sans-serif", // Set font family globally
        },

        img: {
          maxWidth: "100%",
          display: "inline-block",
          verticalAlign: "bottom",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontSize: theme.typography.fontSizeList.f16,
          fontWeight: theme.typography.fontWeightSemiBold,
          backgroundColor: theme.palette.primarybutton.background,
          "&:hover": {
            color: theme.palette.primarybutton.textcolor,
            backgroundColor: theme.palette.primarybutton.background,
          },
        },
      },
      variants: [
        {
          props: {
            variant: "primary-button",
          },
          style: {
            color: theme.palette.primarybutton.background,
            backgroundColor: theme.palette.primarybutton.textcolor,
            border: `1px solid ${theme.palette.primarybutton.background}`,
            textTransform: "unset",

            "&:hover": {
              color: theme.palette.primarybutton.background,
              backgroundColor: theme.palette.primarybutton.textcolor,
              border: `1px solid ${theme.palette.primarybutton.background}`
              
            },
          },
        },
      ],
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: "contained",
      }, 
    },

    MuiGrid: {
      defaultProps: {
        xs: 12,
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: theme.palette.primarybutton.textcolor,
          // backgroundColor: theme.palette.primarybutton.background,
          ":hover": {
            background: "white",
            color: theme.palette.primarybutton.iconcolor,
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          // left: "9px !important",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "15px 16px 15px 16px",
          [theme.breakpoints.down("sm")]: {
            padding: "13px 13px",
          },
          // left: "10px",
        },
      },
      variants: [
        {
          props: {
            variant: "task",
          },
          style: {
            background: theme?.palette?.primary?.light || "red",
            borderRadius: "8px",
          },
        },
        {
          props: {
            variant: "outlined",
          },
          style: {
            height: "100%",
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        },
      ],
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "rgba(5, 5, 5)",
          top: "calc(50% - .0em)",
          fontWeight: "400",
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          [`&.${formHelperTextClasses.root}`]: {
            color: theme.palette.customColor.bluegreydarken2,
            fontSize: theme.typography.fontSizeList.f16,
            fontWeight: theme.typography.fontWeightRegular,
          },
          marginLeft: "0px",
        },
      },
    },

    MuiCheckbox: {
      defaultProps: {
        disableRipple: true, // Disable ripple effect
      },
      styleOverrides: {
        root: {
          // padding: "0px",
          // paddingBottom: "7px",
          color: theme.palette.customColor.light,
          "&.Mui-checked": {
            color: theme.palette.customColor.pink,
          },
          "&:hover": {
            backgroundColor: theme.palette.customColor.white,
          },
        },
      },
    },

    MuiRadio: {
      defaultProps: {
        disableRipple: true, // Disable ripple effect
      },
      styleOverrides: {
        root: {
          color: theme.palette.customColor.light,
          '&.Mui-checked': {
            color: theme.palette.customColor.pink,
          },
          '&:hover': {
            backgroundColor: theme.palette.customColor.white,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: theme.palette.customColor.dark,
          fontFamily: "Sora, sans-serif",
          fontWeight: theme.typography.fontWeightRegular,
          fontSize: theme.typography.fontSizeList.f16,
        },
      },

      variants: [
        {
          props: { variant: "f500" },
          style: {
            color: theme.palette.customColor.dark,
            fontSize: theme.typography.fontSizeList.f16,
            fontWeight: theme.typography.fontWeightMedium,
          },
        },
        {
          props: { variant: "f600" },
          style: {
            color: theme.palette.customColor.dark,
            fontSize: theme.typography.fontSizeList.f16,
            fontWeight: theme.typography.fontWeightSemiBold,
          },
        },
        {
          props: { variant: "f700" },
          style: {
            color: theme.palette.customColor.dark,
            fontSize: theme.typography.fontSizeList.f16,
            fontWeight: theme.typography.fontWeightBold,
          },
        },
      ],
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
        },
      },
      variants: [
        {
          props: { variant: "customSearch" },
          style: {
            borderRadius: "8px",
          },
        },
      ],
    },

    MuiInputBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          border: `1px solid ${theme.palette.customColor.light}`,
          height: "54px",
          // borderRadius:"6px",
          color: theme.palette.customColor.bluegreylighten2,
          "& fieldset": {
            border: "none",
          },
          "&.MuiOutlinedInput": {
            borderRadius: "6px",
          },
          
        },
      },
      variants: [
        {
          props: { variant: "customInput" },
          style: {
            border: `1px solid ${theme.palette.customColor.dark}`,
            color: theme.palette.customColor.dark,
            "& fieldset": {
              border: "none",
            },
          },
        },
        {
          props: { variant: "customSearch" },
          style: {
            border: `1px solid ${theme.palette.customColor.bluegreylighten5}`,

            // color: theme.palette.customColor.bluegreylighten,
            // height: "58px",
            // borderRadius: "8px",
            // "& fieldset": {
            //   border: "none",
            // },
          },
        },
      ],
    },


    // MuiTextField: {
    //   defaultProps: {
    //     disableRipple: true,
    //   },
    //   styleOverrides: {
    //     root: {
    //       border: `1px solid ${theme.palette.customColor.light}`,
    //       height: "54px",
    //       // borderRadius:"6px",
    //       color: theme.palette.customColor.bluegreylighten2,
    //       "& fieldset": {
    //         border: "none",
    //       },
    //       "&.MuiOutlinedInput": {
    //         borderRadius: "6px",
    //       },
    //     },
    //   },
    //   variants: [
    //     {
    //       props: { variant: "customInput" },
    //       style: {
    //         border: `1px solid ${theme.palette.customColor.dark}`,
    //         color: theme.palette.customColor.dark,
    //         "& fieldset": {
    //           border: "none",
    //         },
    //       },
    //     },
    //   ],
    // },
  
    MuiModal: {
      styleOverrides: {
        root: {
          "& .MuiBox-root": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "white",
            boxShadow: 24,
            padding: "20px",
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          display: "flex",
          gap: "16px",
          width: "200px",
        },
        indicator: {
          left: 0,
          width: "4px",
          backgroundColor: grey[1100],
          borderRadius: "4px",
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            "& .MuiTabs-indicator": {
              backgroundColor: grey[1300],
            },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            "& .MuiTabs-indicator": {
              backgroundColor: grey[500],
            },
          },
        },
      ],
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true, // Disable ripple effect
      },
      styleOverrides: {
        root: {
          fontFamily: "Sora",
          color: grey[1000],
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: 600,
          backgroundColor: "transparent",
          width: "100%",
          padding: "12px",
          border: "none",
          borderRadius: "7px",
          display: "flex",

          justifyContent: "center",
          "&:hover": {
            backgroundColor: "#fff",
          },
          "&:focus": {
            color: grey[1100],
            outline: "3px solid white",
            boxShadow: "none",
          },
          "&.Mui-focusVisible": {
            backgroundColor: "#fff",
            color: grey[1100],
            boxShadow: "none",
          },
          "&.Mui-disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
          },
          "&.Mui-selected": {
            backgroundColor: grey[1200],
            color: grey[1100],
            boxShadow: "none",
          },
          variants: [
            {
              props: { variant: "primary" },
              style: {
                "&.Mui-selected": {
                  backgroundColor: grey[1300],
                  color: theme.palette.grey[600],
                  elevation: 0,
                  boxShadow: "none",
                },
                "&:focus": {
                  backgroundColor: grey[1300],
                  outline: "3px solid white",
                  color: theme.palette.grey[600],
                },
              },
            },
          ],
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          width: "100%",
          fontFamily: "Sora",
          fontSize: "0.875rem",
        },
      },
    },
    MuiTabsList: {
      styleOverrides: {
        root: ({ theme }) => ({
          minWidth: "80px",
          backgroundColor: theme.palette.customColor.white,
          borderRadius: "12px",
          marginBottom: "16px",
          display: "flex",
          padding: "6px",
          gap: "12px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "space-between",
          boxShadow: `0px 4px 8px ${
            theme.palette.mode === "dark" ? grey[1000] : grey[1100]
          }`,
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "none",
          borderRadius: "16px",
          padding: "0px!important",
          backgroundColor: "#f5f5f5",
          height: "260px",
          width: "360px",
        },
      },
      // variants: [
      //   {
      //     props: { variant: "small" },
      //     style: {
      //       height: "200px",
      //       width: "300px",
      //     },
      //   },
      //   {
      //     props: { variant: "medium" },
      //     style: {
      //       height: "260px",
      //       width: "360px",
      //     },
      //   },
      //   {
      //     props: { variant: "large" },
      //     style: {
      //       height: "420px",
      //       width: "488px",
      //     },
      //   },
      // ],
      variants: [
        {
          props: { variant: "top-right" },
          style: {
            position: "relative",
            height: "260px",
            width: "360px",
            borderRadius: "16px",
            backgroundColor: "#f5f5f5",
            "& .MuiTypography-root": {
              position: "absolute",
              top: "0%",
              left: "20%",
              transform: "translate(-50%, 0)",
              color: "white",
              // backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
              borderRadius: "4px",
              textAlign: "center",
            },
          },
        },
        {
          props: { variant: "bottom-right" },
          style: {
            position: "relative",
            height: "260px",
            width: "360px",
            borderRadius: "16px",
            backgroundColor: "#f5f5f5",
            "& .MuiTypography-root": {
              position: "absolute",
              bottom: "-7%",
              right: "-13%",
              transform: "translate(-50%, -50%)",
              color: "white",
              // backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
              borderRadius: "4px",
              textAlign: "center",
            },
            "& img": {
          position: "absolute",
         
          width: "50px",
          height: "50px",
          objectFit: "cover",
          borderRadius: "50%",
        },
          },
        },
        {
          props: { variant: "bottom-left" },
          style: {
            position: "relative",
            height: "260px",
            width: "360px",
            borderRadius: "16px",
            backgroundColor: "#f5f5f5",
            "& .MuiTypography-root": {
              position: "absolute",
              bottom: "0%",
              left:"4%",
              color: "white",
              // backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
              borderRadius: "4px",
              textAlign: "left",
            },
          },
        },
      ],
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.customColor.bluegreylighten5,
          borderRadius: "8px",
          // border: `1px solid ${theme.palette.customColor.bluegreylighten5}`,
          color: theme.palette.customColor.bluegreylighten,
          height: "58px",
        },

        inputRoot: {
          "& .MuiAutocomplete-input": {
            color: theme.palette.customColor.bluegreylighten, // Set input text color to red
          },
        },

        popupIndicator: {
          display: "none",
        },
      },
      "&.MuiFormLabel": {
        display: "none",
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.customColor.bluegreylighten2,
        },
      },
      variants: [
        {
          props: {
            variant: "customLabel",
          },
          style: {
            color: theme.palette.customColor.dark,
          },
        },
      ],
    },
    // MuiInputLabel: {
    // 	styleOverrides: {
    // 		root: {
    // 			fontSize: theme.typography.fontSizeList.f20,
    // 			fontWeight: 400,
    // 			color:theme.palette.customColor.bluegreylighten2
    // 			// [`& .${formLabelClasses.asterisk}`]: {
    // 			// 	color: theme.palette.customColor.bluegreylighten2,
    // 			// },
    // 		},
    // 	},
    // 	variants: [
    // 		{
    // 			props: { variant: 'customLabel' },
    // 			style: {
    // 				fontSize: theme.typography.fontSizeList.f20, // Custom font size
    // 				fontWeight: 400, // Custom font weight
    // 				color: theme.palette.customColor.dark, // Custom color
    // 			},
    // 		},
    // 		{
    // 			props: { variant: 'customSelectLabel' },
    // 			style: {
    // 				fontSize: theme.typography.fontSizeList.f16, // Custom font size
    // 				fontWeight: 400, // Custom font weight
    // 				color: theme.palette.customColor.bluegreylighten, // Custom color
    // 			},
    // 		},
    // 	],
    // },

    // MuiChip: {
    // 	styleOverrides: {
    // 		root: {
    // 			fontSize : "12px",
    // 			height: "24px",
    // 			fontWeight : "400",
    // 			minWidth : "114px",
    // 			padding:"4px 11px 4px 11px"
    // 		},
    // 	},
    // },

    // MuiFormControlLabel: {
    // 	styleOverrides: {
    // 		root: {
    // 			[`& .${formControlLabelClasses.label}`]: {
    // 				fontWeight: 400,
    // 			},
    // 			[`& .${formLabelClasses.asterisk}`]: {
    // 				color: theme.palette.customColor.light,
    // 			},
    // 			color:"red"
    // 		},
    // 	},
    // },

    // MuiStack: {
    // 	styleOverrides: {
    // 		root: {
    // 			padding: "0px !important",
    // 			width: "100%",
    // 		},
    // 	},
    // },
    // MuiDivider: {
    // 	styleOverrides: {
    // 		root: {
    // 			borderColor: theme.palette.info.main,
    // 			width: "270px",
    // 			marginTop: "10px",
    // 		},
    // 	},
    // },
    // MuiCircularProgress: {
    // 	styleOverrides: {
    // 		root: {
    // 			color: theme.palette.info.contrastText,
    // 			strokeLinecap: "round",
    // 		},
    // 	},
    // },

    // MuiFormLabel: {
    // 	styleOverrides: {
    // 		root: {
    // 			fontWeight: theme.typography.fontWeightBold,
    // 			color: theme.palette.common.black,
    // 			variants: "f20",
    // 		},
    // 	},
    // },
  };
}
