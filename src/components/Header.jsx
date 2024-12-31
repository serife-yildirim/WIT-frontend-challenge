import { useState, useContext } from "react";
import { DataContext } from "../context/Context";

const Header = () => {
  const { language, toggleLanguage, localizedData } = useContext(DataContext);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="pt-5 relative pb-20 bg-gray-100 dark:bg-darkBackground px-9 lg:px-0">
      <div className="container relative">
        {/* Dil ve Tema Değiştirici */}
        <div
          className="flex justify-end items-center gap-5 text-neutral-500 dark:text-darkText font-bold tracking-[0.1rem] text-base absolute"
          style={{
            top: "-130px", // Konumlandırma yukarıda
            right: "100px", // Sağ kenar hizası
          }}
        >
          {/* Tema Değiştirici */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 text-[#EA2678] dark:text-darkText font-bold focus:outline-none"
            aria-label="Tema değiştir"
          >
            <div
              className={`w-[36px] h-[18px] rounded-full flex items-center justify-${
                darkMode ? "end" : "start"
              } p-1 transition-all duration-300 ${
                darkMode ? "bg-[#000000]" : "bg-[#EA2678]"
              }`}
            >
              {darkMode ? "🌙" : "☀️"}
            </div>
            <span>{darkMode ? "LIGHT MODE" : "DARK MODE"}</span>
          </button>

          {/* Çizgi Ayracı */}
          <div className="w-[1px] h-5 bg-gray-500"></div>

          {/* Dil Değiştirici */}
          <div
            className="text-[#EA2678] cursor-pointer flex items-center gap-1"
            onClick={() => toggleLanguage(language === "en-EN" ? "tr-TR" : "en-EN")}
          >
            {language === "en-EN" ? (
              <>
                TÜRKÇE<span className="text-gray-500">'YE GEÇ</span>
              </>
            ) : (
              <>
                <span className="text-gray-500">SWITCH TO </span>
                <span className="text-[#EA2678]">ENGLISH</span>
              </>
            )}
          </div>
        </div>

        {/* İçerik */}
        <div className="flex sm:ml-5 relative place-content-around mt-32 flex-wrap-reverse lg:flex-nowrap gap-5">
          <article className="flex relative z-10 flex-col gap-5">
            <div className="text-3xl font-normal leading-9 dark:text-darkText">
              {localizedData.greet}
            </div>
            <div className="text-xl lg:text-[42px] max-w-3xl font-medium leading-[64px] z-20 dark:text-darkText">
              {localizedData.article}
            </div>
            <div className="w-[148px] h-[31px] absolute top-[5.6rem] lg:top-[6rem] left-[-2rem] lg:left-0 rounded-[4px] bg-[#E92577]"></div>
            <div className="flex gap-5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="max-w-10"
                style={{
                  backgroundColor: darkMode ? "#D9D9D9" : "#0A0A14", // Dark ve Light Mode arka plan renkleri
                  borderRadius: "50%",
                  padding: "8px", // Simge etrafında boşluk
                  display: "inline-block",
                }}
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-1.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                  style={{
                    filter: darkMode ? "none" : "invert(1) brightness(2)", // Light mode için görünürlük artırıldı
                  }}
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/serife-yildirim"
                target="_blank"
                className="max-w-10"
                style={{
                  backgroundColor: darkMode ? "#D9D9D9" : "#0A0A14", // Dark ve Light Mode arka plan renkleri
                  borderRadius: "50%",
                  padding: "8px", // Simge etrafında boşluk
                  display: "inline-block",
                }}
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                  alt="GitHub"
                  className="w-6 h-6"
                  style={{
                    filter: darkMode ? "none" : "invert(1) brightness(2)", // Light mode için görünürlük artırıldı
                  }}
                />
              </a>
            </div>

            {/* Profillerim Üzerinden */}
            <div className="text-lg text-gray-900 dark:text-white mt-5">
              {language === "en-EN" ? (
                <>
                  Feel free to contact me{" "}
                  <span style={{ color: "#AF0C48" }}>through my profiles</span>.
                </>
              ) : (
                <>
                  Benimle{" "}
                  <span style={{ color: "#AF0C48" }}>profillerim üzerinden</span>{" "}
                  iletişime geçebilirsiniz.
                </>
              )}
            </div>
          </article>
          <div className="max-w-96 max-h-96 overflow-hidden rounded-xl shadow-[#EA2678_-20px_-20px]">
            <img
              className="object-cover w-full h-full scale-110"
              src="/img.png"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
