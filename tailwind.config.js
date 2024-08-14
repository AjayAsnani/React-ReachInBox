/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
        "custom-gradient2": "linear-gradient(180deg, #484E53 0%, #2F3338 100%)",
        "custom-gradient3":
          "linear-gradient(91.73deg, #FA5252 -2.99%, #A91919 95.8%)",
      },
    },
  },
  plugins: [],
};
