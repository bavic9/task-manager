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

    borderRadius: {
      topRightLeft: '15rem 15rem 0 0',
      topBottomLeft: '5px 0 5px 0',
      '2xl': '1rem',
      5: '5px',
      full: '100%',
      md: '10px'
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        activeNavLink: "#313030",
        activeNavLinkHover: "#C5C5C5",
        br: 'red',
        colorBg2: "#212121",
        colorBg3: "#181818",
        borderColor2: "rgba(249,249,249, 0.08)",
        colorGreenDark: "#27AE60",
        colorGrey3: "#6c7983",
        colorGrey0: "#f8f8f8",
        colorIcons: "rgba(249,249,249, 0.35)",
        colorIcons2: "rgba(249,249,249, 0.75)",
      },

      width: {
        sidebarWidth: "15rem",
        sidebarCollapsed: "5.4rem",
        fH4: "19px",
        fontSmall: "14px",
        fontSmall2: "15px",
        0: '0px',
        100: '100%',
        avatar: '70px',
        '0.3': '0.3rem',
      },

      height: {
        100: '100%',
        avatar: '70px',
        task: '634px',
        
      },

      spacing: {
        '0.3': '0.3rem',
        '0.6rem': '0.6rem',
        '0.8rem': '0.8rem',
        '1rem': '1rem',
        '1.5rem': '1.5rem',
        '2rem': '2rem',
        '2.1': '2.1rem',
        '2.5': '2.5rem',

      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config
