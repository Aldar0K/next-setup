import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['var(--font-roboto)', 'Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
