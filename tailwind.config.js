module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-foderj": "#EAA522",
        "blue-foderj": "#22274C",
        "red-foderj": "#A2195B",
      },
      backgroundImage: {
        radial: "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
