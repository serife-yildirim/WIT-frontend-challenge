import { useContext } from "react";
import { DataContext } from "../context/Context";

  const Header = () => {
    const { language, toggleLanguage, localizedData } = useContext(DataContext);
    return (
      <div className="pt-5 relative pb-20 bg-background px-9 lg:px-0">
        {/* Dekoratif öğeler */}
        <div className="w-[13rem] bg-primary h-[3.6875rem] absolute bottom-[5rem] right-[-5rem] rounded-[1.84375rem] opacity-90"></div>
        <div className="w-[111px] h-[111px] top-[-4rem] left-[26rem] absolute bg-secondary rounded-full"></div>
  
        {/* Ana Container */}
        <div className="container relative">
          {/* Dil değiştirici */}
          <div className="flex justify-end text-secondary font-bold tracking-[0.1rem] text-base">
            <div>
              {language === "en-EN" ? (
                <span>
                  <span
                    onClick={() => toggleLanguage("tr-TR")}
                    className="text-primary cursor-pointer hover:underline"
                  >
                    TÜRKÇE
                  </span>{" "}
                  | ENGLISH
                </span>
              ) : (
                <span>
                  <span>SWITCH TO </span>
                  <span
                    onClick={() => toggleLanguage("en-EN")}
                    className="text-primary cursor-pointer hover:underline"
                  >
                    ENGLISH
                  </span>
                </span>
              )}
            </div>
          </div>
  
          {/* Header İçeriği */}
          <div className="flex sm:ml-5 relative place-content-around mt-32 flex-wrap-reverse lg:flex-nowrap gap-5">
            <article className="flex relative z-10 flex-col gap-5">
              <div className="text-3xl font-normal leading-9">
                {localizedData.greet}
              </div>
              <div className="text-xl lg:text-[42px] max-w-3xl font-medium leading-[64px] z-20">
                {localizedData.article}
              </div>
              <div className="w-[148px] h-[31px] absolute top-[5.6rem] lg:top-[6rem] left-[-2rem] lg:left-0 rounded-[4px] bg-primary"></div>
              <div className="flex gap-5">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="max-w-10"
                >
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-1.svg"
                    alt="Linkedin"
                  />
                </a>
                <a
                  href="https://github.com/serife-yildirim"
                  target="_blank"
                  className="max-w-10"
                >
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                    alt="GitHub"
                  />
                </a>
              </div>
              <div className="text-lg">{localizedData.communication}</div>
            </article>
            <div className="max-w-96 max-h-96 overflow-hidden rounded-xl shadow-custom">
              <img
                className="object-cover w-full h-full scale-110"
                src="/img.png"
                alt="Header Image"
              />
            </div>
          </div>
  
          {/* Ek Dekoratif Şekil */}
          <div className="w-[121px] h-[121px] border-[20px] border-secondary rounded-full absolute lg:right-[14rem] lg:bottom-[-9rem] sm:bottom-[-8rem] sm:right-[4rem] opacity-50"></div>
        </div>
      </div>
    );
  };

export default Header;
