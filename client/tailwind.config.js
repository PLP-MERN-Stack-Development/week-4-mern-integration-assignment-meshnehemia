module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            50: "#f0f9ff",
            100: "#e0f2fe",
            500: "#3b82f6",
            600: "#2563eb",
          },
          dark: {
            800: "#1e293b",
            900: "#0f172a",
          },
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
    ],
  };