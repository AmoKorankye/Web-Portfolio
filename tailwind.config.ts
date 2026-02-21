import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		spacing: {
  			'16': '4rem',
  			'20': '5rem',
  			'24': '6rem',
  			'28': '7rem',
  			'32': '8rem',
  			'36': '9rem',
  			'40': '10rem',
  			'44': '11rem',
  			'48': '12rem',
  			'52': '13rem',
  		},
  		fontSize: {
  			'xs': '0.5625rem',    // 9px (was 12px)
  			'sm': '0.65625rem',   // 10.5px (was 14px)
  			'base': '0.75rem',    // 12px (was 16px)
  			'lg': '0.84375rem',   // 13.5px (was 18px)
  			'xl': '0.9375rem',    // 15px (was 20px)
  			'2xl': '1.125rem',    // 18px (was 24px)
  			'3xl': '1.40625rem',  // 22.5px (was 30px)
  			'4xl': '1.6875rem',   // 27px (was 36px)
  			'5xl': '2.25rem',     // 36px (was 48px)
  		},
  		keyframes: {
  			'collapsible-down': {
  				from: { height: '0', opacity: '0' },
  				to: { height: 'var(--radix-collapsible-content-height)', opacity: '1' }
  			},
  			'collapsible-up': {
  				from: { height: 'var(--radix-collapsible-content-height)', opacity: '1' },
  				to: { height: '0', opacity: '0' }
  			}
  		},
  		animation: {
  			'collapsible-down': 'collapsible-down 0.3s ease-out',
  			'collapsible-up': 'collapsible-up 0.3s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
