import { useContext } from "react";
import { DataContext } from "../context/Context";

const Header = () => {
  const { language, toggleLanguage, localizedData, darkMode, toggleDarkMode } = useContext(DataContext);

  return (
    <div className="pt-5 relative pb-20 bg-gray-100 dark:bg-darkBackground px-9 lg:px-0">
      {/* Dekoratif öğeler */}
      <div
        className="w-[13rem] bg-[#EA2678] h-[3.6875rem] absolute bottom-[5rem] sm:bottom-[6rem] right-[-5rem] rounded-[1.84375rem] opacity-90"
        aria-hidden="true"
      ></div>
      <div
        className="w-[111px] h-[111px] top-[-4rem] left-[26rem] absolute bg-gray-300 dark:bg-[#525252] rounded-full"
        aria-hidden="true"
      ></div>

      {/* Ana Container */}
      <div className="container relative">
        {/* Dil ve Tema değiştirici */}
        <div className="flex justify-end items-center gap-5 mb-5 text-neutral-500 dark:text-darkText font-bold tracking-[0.1rem] text-base">
          {/* Tema Değiştirici */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 text-[#EA2678] dark:text-darkText font-bold focus:outline-none"
            aria-label="Tema değiştir"
          >
            <div
              className={`w-[36px] h-[18px] rounded-full flex items-center justify-${
                darkMode ? "end" : "start"
              } p-1 ${
                darkMode ? "bg-[#000000]" : "bg-[#EA2678]"
              }`}
            >
              {darkMode ? "🌙" : "☀️"}
            </div>
            <span>{darkMode ? "LIGHT MODE" : "DARK MODE"}</span>
          </button>

          <div className="w-[6px] h-[18px] bg-[#777777]"></div>

          {/* Dil değiştirici */}
          <div className="flex items-center gap-1">
            <div className="text-[#EA2678] cursor-pointer" onClick={() => toggleLanguage("tr-TR")}>
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
        </div>

        {/* Header İçeriği */}
        <div className="flex sm:ml-4 relative place-content-around mt-32 flex-wrap-reverse lg:flex-nowrap gap-3">
          <article className="flex relative z-10 flex-col gap-5 mt-10 lg:ml-auto lg:pl-[25%]">
            <div className="text-2xl font-normal leading-6 dark:text-darkText">
              {localizedData.greet}
            </div>
            <div className="text-xl lg:text-[35px] max-w-3xl font-medium sm:leading-[2] leading-[64px] z-20 dark:text-darkText">
              {localizedData.article}
            </div>
            <div className="sm:w-[90px] sm:h-[15px] sm:left-[0.2rem] sm:top-[4rem] lg:w-[160px] lg:h-[25px] absolute top-[5.6rem] lg:top-[5.2rem] left-[-2rem] lg:left-[375px]  rounded-[4px] bg-[#E92577]"></div>

            <div className="flex gap-5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="max-w-10"
                aria-label="LinkedIn profilinizi ziyaret edin"
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-1.svg"
                  alt="LinkedIn"
                  className="dark:filter dark:invert"
                />
                <div className="w-[50px] h-[5px] bg-[#EA2678] mt-1"></div>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/serife-yildirim"
                target="_blank"
                className="max-w-10"
                aria-label="GitHub profilinizi ziyaret edin"
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                  alt="GitHub"
                  className="dark:filter dark:invert"
                />
                <div className="w-[50px] h-[5px] bg-[#EA2678] mt-1"></div>
              </a>
            </div>

            <div className="text-lg dark:text-darkText mt-4">
              {language === "en-EN" ? (
                <>
                  You can contact me{" "}
                  <span className="text-[#EA2678]">through my profiles</span> above.
                </>
              ) : (
                <>
                  Benimle yukarıda bulunan{" "}
                  <span className="text-[#EA2678]">profillerim üzerinden</span> iletişime
                  geçebilirsiniz
                </>
              )}
            </div>
          </article>
          <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] overflow-hidden rounded-xl shadow-[#EA2678_-20px_-20px] mb-6 sm:left-[10px] sm:top-[10px] lg:left-[250px] lg:top-[120px]">
            <div className="absolute top-[-30px] left-[-10px] w-full h-full bg-[#EA2678] rounded-xl z-0"></div>
            <img
              className="object-cover w-full h-full scale-110 relative z-10 rounded-xl border-[4px] border-[#EA2678]"
              src="/img.png"
              alt="Header Image"
            />
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Header;
