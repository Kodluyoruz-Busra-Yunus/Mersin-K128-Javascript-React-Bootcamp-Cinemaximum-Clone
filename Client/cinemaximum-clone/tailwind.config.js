module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-color": "#e6007e",
        "secondary-color": "#e91756",
        "text-color": "#000000",
        "secondary-text-color": "#717171",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
