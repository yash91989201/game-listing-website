module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: {
        "3xl": "0px 20px 30px -10px rgb(38, 57, 77)",
      },
    },
  },
  plugin: [],
};
