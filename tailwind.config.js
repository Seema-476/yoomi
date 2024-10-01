/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        }
      },
      fontSize: {
        'custom-4xl': "32px",
        'custom-6xl': "40px",
        'custom-7xl': "50px",
        'custom-8xl': "52px",
      },
      colors: {
        'gray': "#808080",
        'medium-gray': "#333434",
        'ocean-blue': "#ecf6f9",
        'deep-blue': "#076787",
        'light-blue': "#82b2c2",
        'sky-blue': "#98c1cf",
        'off-white': "#f8fdff",
        'light-gray': "#f5f8f9",
        'dark-gray': "#c1b5aa",
        'gray-light': "#0000001A",
        'blue': "#110163",
        'green': "#85b6a6"
      },
      boxShadow: {
        'custom-xl': "0px 4px 15px 0px #07678726",
        'custom-xxl': "0px 26px 27px 0px #0000000A",
        'custom-2xl': "0px 3.86px 21.24px 0px #0000001A",
        'custom-3xl': "0px 0px 18.03px 0px #0000000D",
        'custom-4xl': "0px 13px 18px 0px #0000000F",
        'custom-5xl': "-2px 8px 20px 18px #0000000F",
      },
      lineHeight: {
        'custom-base': "16.94px",
        'custom-lg': "19.36px",
        'custom-xl': "21.78px",
        'custom-xxl': "26.4px",
        'custom-2xl': "30px",
        'custom-3xl': "33px",
        'custom-4xl': "38.4px",
        'custom-5xl': "44px",
        'custom-6xl': "55px",
        'custom-7xl': "57.2px",
        'custom-8xl': "66px",
      },
      backgroundImage: {
        'platform-card1': "url('../assets/images/webp/platform-card1.webp')",
        'footer-bg': "url('../assets/images/webp/footer-bg.webp')",
        'star':"url('../assets/images/webp/star.webp')",
      },
      fontFamily: {
        'plusJakarta': "'plus jakarta sans' ,sans serif",
        'inter': "'inter', sans serif"
      }
    },
  },
  plugins: [],
}
