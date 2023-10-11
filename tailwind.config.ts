import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ["var(--font-gothic)"],
      },
      colors: {
        primary: "#6a2dd0",
        primaryDark:"#03040e",
        secondaryDark:"#0d0e17"
      }
    },
    plugins: [],
  }
}

export default config
