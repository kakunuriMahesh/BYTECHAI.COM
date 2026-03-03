/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Configure paths to all of your template files
  ],
  theme: {
  extend: {
    animation: {
      borderFlow: "borderFlow 3s linear infinite",
    },
    keyframes: {
      borderFlow: {
        "0%": { backgroundPosition: "0% 50%" },
        "100%": { backgroundPosition: "200% 50%" },
      },
    },
  },
},
  plugins: [], // Add Tailwind CSS plugins here
};




