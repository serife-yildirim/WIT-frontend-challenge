module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      colors: {
      primary: '#EA2678', // Özel birincil renk
      secondary: '#525252', // Ek renk
      background: '#F3F4F6', // Arka plan için özel renk
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
