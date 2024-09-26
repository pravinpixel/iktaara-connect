import type { Config } from "tailwindcss";

import TailwindAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ["class"],

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "var(--ik_pink)",
          foreground: "var(--ik_pink-foreground)",
        },
        ik_pink: {
          DEFAULT: "var(--ik_pink)",
          foreground: "var(--ik_pink-foreground)",
        },
        secondary: {
          DEFAULT: "var(--ik_pink_button)",
          foreground: "var(--ik_pink-foreground-button)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        ik_pink_button: {
          DEFAULT: "var(--ik_pink_button)",
          foreground: "var(--ik_pink-foreground-button)",
        },
        ik_green: {
          DEFAULT: "var(--ik_green)",
          foreground: "var(--ik_green-foreground)",
        },
        ik_blue: {
          DEFAULT: "var(--ik_blue)",
          foreground: "var(--ik_blue-foreground)",
        },
        ik_multicolor: {
          DEFAULT: "var(--ik_multicolor)",
          foreground: "var(--ik_multicolor-foreground)",
        },
        ik_multicolor1: {
          DEFAULT: "var(--ik_multicolor1)",
        },
        ik_white: {
          DEFAULT: "var(--ik_white)",
          foreground: "var(--ik_white-foreground)",
        },
        ik_whitevariant: {
          DEFAULT: "var(--ik_whitevariant)",
          foreground: "var(--ik_whitevariant-foreground)",
        },
        ik_bluegreydarken4: {
          DEFAULT: "var(--ik_bluegreydarken4)",
        },
        ik_bluegreydarken3: {
          DEFAULT: "var(--ik_bluegreydarken3)",
        },
        ik_bluegreydarken2: {
          DEFAULT: "var(--ik_bluegreydarken2)",
        },
        ik_bluegreydarken1: {
          DEFAULT: "var(--ik_bluegreydarken1)",
        },
        ik_bluegreylighten1: {
          DEFAULT: "var( --ik_bluegreylighten1)",
        },
        ik_bluegreylighten2: {
          DEFAULT: "var( --ik_bluegreylighten2)",
        },
        ik_bluegreylighten3: {
          DEFAULT: "var( --ik_bluegreylighten3)",
        },
        ik_bluegreylighten4: {
          DEFAULT: "var( --ik_bluegreylighten4)",
        },
        ik_bluegreylighten5: {
          DEFAULT: "var(--ik_bluegreylighten5)",
        },
        ik_redvariant1: {
          DEFAULT: "var(--ik_redvariant1)",
        },
        ik_bordervariant: {
          DEFAULT: "var(--ik_bordervariant)",
        },
        ik_bordervariant2: {
          DEFAULT: "var(--ik_bordervariant2)",
        },
        ik_bluegreydarken6: {
          DEFAULT: "var(--ik_bluegreydarken6)",
        },
        ik_black: {
          DEFAULT: "var(--ik_black)",
        },
        ik_lightblue: {
          DEFAULT: "var(--ik_lightblue)",
        },
        ik_bluevariantcolor: {
          DEFAULT: "var(--ik_bluevariantcolor)",
        },
        ik_bluegreybluegrey: {
          DEFAULT: "var(--ik_bluegreybluegrey)",
        },

        ik_lightbluevariant: {
          DEFAULT: "var(--ik_lightbluevariant)",
        },
        ik_bluegreylightens3: {
          DEFAULT: "var(--ik_bluegreylightens3)",
        },
        ik_bluegreylighten6: {
          DEFAULT: "var(--ik_bluegreylighten6)",
        },
      },
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      chart: {
        "1": "hsl(var(--chart-1))",
        "2": "hsl(var(--chart-2))",
        "3": "hsl(var(--chart-3))",
        "4": "hsl(var(--chart-4))",
        "5": "hsl(var(--chart-5))",
      },
    },
    // borderRadius: {
    //   lg: "var(--radius)",
    //   md: "calc(var(--radius) - 2px)",
    //   sm: "calc(var(--radius) - 4px)",
    // },
    fontFamily: {
      sora: "var(--sora)",
    },
    fontSize: {
      f12: "var(--f12)",
      f14: "var(--f14)",
      f16: "var(--f16)",
      f18: "var(--f18)",
      f20: "var(--f20)",
      f22: "var(--f22)",
      f24: "var(--f24)",
      f28: "var(--f28)",
      f26: "var(--f26)",
      f30: "var(--f30)",
      f38: "var(--f38)",
      f64: "var(--f64)",
    },
  },
  plugins: [TailwindAnimate],
};
export default config;
