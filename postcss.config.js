module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  plugins: [
    'postcss-import',
    'tailwindcss',
    'postcss-nested', // or require('postcss-nesting')
    'autoprefixer',
  ],
}
