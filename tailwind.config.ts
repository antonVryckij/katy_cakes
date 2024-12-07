import prelineConfig from 'preline/plugin';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'primary-text': 'var(--text-color)',
      },
    },
  },
  plugins: [prelineConfig],
} satisfies Config;
