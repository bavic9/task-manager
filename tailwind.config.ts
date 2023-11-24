import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '979px',
      xl: '1440px'
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        br: 'red',
        colorBg2: "#212121",
        borderColor2: "rgba(249,249,249, 0.08)",
      },

      width: {
        sidebarWidth: "15rem",
        sidebarCollapsed: "5.4rem",
        fH4: "19px",
        fontSmall: "14px",
        fontSmall2: "15px",
      },

      height: {
        
      },
    },
  },
  plugins: [],
}
export default config
