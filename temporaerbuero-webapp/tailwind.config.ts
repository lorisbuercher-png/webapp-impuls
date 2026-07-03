import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: { extend: { colors: { primary: '#2D0A57', secondary: '#B794F4', soft: '#F4F0FF' }, borderRadius: { '2xl': '1.25rem' } } },
  plugins: [],
};
export default config;
