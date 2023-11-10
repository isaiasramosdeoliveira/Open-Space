import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "purple-100": "var(--purple-100)",
        "purple-200": "var(--purple-200)",
        "purple-300": "var(--purple-300)",
        "white-100": "var(--white-100)",
        "white-200": "var(--white-200)",
        "gray-100": "var(--gray-100)",
      }
    },
  },
  plugins: [],
}
export default config
