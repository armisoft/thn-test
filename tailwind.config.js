module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
			fontSize: {
				'xxs': '.7rem',
			}
		},
    fontFamily: {
      'avenir': ['Avenir'],
		 },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
