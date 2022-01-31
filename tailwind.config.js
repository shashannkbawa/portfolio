module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  theme: {
    extend: {
      spacing: {
        '180': '40rem',
        '140': '35rem',
        '128': '32rem',
        '112': '28rem',
      }

    },
  },
  plugins: [],
}
