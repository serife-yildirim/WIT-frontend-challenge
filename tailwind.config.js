module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      colors: {
      primary: '#EA2678', 
      secondary: '#525252',
      background: '#F3F4F6', 
      darkBackground: '#1E1E1E', // Dark mode arka plan rengi
      darkText: '#FFFFFF', // Dark mode metin rengi
    },
    boxShadow: {
      custom: '5px 5px 20px #EA2678', // Hover efektlerinde kullanmak için
    },
    spacing: {
      '18': '4.5rem', // İhtiyaç duyduğunuz ekstra spacing'ler
    },
  },
},
  plugins: [],
};
