module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        bottom: "inset 0px -11px 0px   #e74c32",
        bottom2: "inset 0px -13px 0px   #e74c32",
        bottom3: "inset 0px -14px 0px   #e74c32",
        bottom4: "inset 0px -11px 0px   #e74c32",
      },
      backgroundImage: {
        hero: "url('/trees.jpg')",
        quote: "url('/dots.svg')",
        testimonial: "url('/.jpg')",
      },
      colors: {
        highlight1: "#dc2626",
        highlight2: "#e74c32",
        dark: "#45433e",
        text1: "#8e0e00",
        text2: "#1f1c18",
        text3: "#E94057",
      },
      fontFamily: {
        logo: ["Space Grotesk"],
        display: ["Poppins"],
        body: ["Poppins"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
