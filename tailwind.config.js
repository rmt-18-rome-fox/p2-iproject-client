module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        herobg: "url('/dndbg2.png')",
      },
      colors: {
        reddnd: "#A50105",
        yellowdnd: "#F1C249",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
