import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],

	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'var(--ik_pink)',
					foreground: 'var(--ik_pink-foreground)'
				},
				ik_pink:{
					DEFAULT: 'var(--ik_pink)',
					foreground: 'var(--ik_pink-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--ik_pink_button)',
					foreground: 'var(--ik_pink-foreground-button)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				ik_pink_button:{
					DEFAULT: 'var(--ik_pink_button)',
					foreground: 'var(--ik_pink-foreground-button)'
				},
				ik_green:{
					DEFAULT: 'var(--ik_green)',
					foreground: 'var(--ik_green-foreground)'
				},
				ik_blue:{
					DEFAULT: 'var(--ik_blue)',
					foreground: 'var(--ik_blue-foreground)'
				},
				ik_multicolor:{
					DEFAULT: 'var(--ik_multicolor)',
					foreground: 'var(--ik_multicolor-foreground)'
				},
				ik_white:{
					DEFAULT: 'var(--ik_white)',
					foreground: 'var(--ik_white-foreground)'
				},
				ik_whitevariant:{
					DEFAULT: 'var(--ik_whitevariant)',
					foreground: 'var(--ik_whitevariant-foreground)'
				},
				ik_bluegreydarken4:{
					DEFAULT: 'var(--ik_bluegreydarken4)',	
				},
				ik_bluegreydarken3:{
					DEFAULT: 'var(--ik_bluegreydarken3)',	
				},
				ik_bluegreydarken2:{
					DEFAULT: 'var(--ik_bluegreydarken2)',	
				},
				ik_bluegreydarken1:{
					DEFAULT: 'var(--ik_bluegreydarken1)',	
				},
				ik_bluegreylighten1:{
					DEFAULT: 'var( --ik_bluegreylighten1)',	
				},
				ik_bluegreylighten2:{
					DEFAULT: 'var( --ik_bluegreylighten2)',	
				},
				ik_bluegreylighten4:{
					DEFAULT: 'var( --ik_bluegreylighten4)',	
				},
				ik_bluegreylighten5:{
					DEFAULT: 'var(--ik_bluegreylighten5)',	
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},

			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sora: 'var(--sora)',
			},
			fontSize: {
				f12: ['var(--f12)', {
					lineHeight: "16px"
					
				}],
				f14: ['var(--f14)', {
					lineHeight: "20.16px"
					
				}],
				f16: ['var(--f16)', {
					lineHeight: "20.16px"
				}],
				f18: ['var(--f18)', {
					lineHeight: "38px",
					
				}],
				f22: ['var(--f22)', {
					lineHeight: "38px",
				
				}],
				f28: ['var(--f28)', {
					lineHeight: "38px",
					
				}],
				
				
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
