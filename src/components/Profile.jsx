import { useContext } from "react";
import { DataContext } from "../context/Context";

export const Profile = () => {
  const { localizedData } = useContext(DataContext);
  const info = localizedData.info;

  return (
    <div className="bg-backgroundLight dark:bg-darkBackground w-full py-6 pb-10">
      <div className="w-full h-4 bg-backgroundLight dark:bg-darkBackground"></div>

      {/* Profil Konteyneri */}
      <div className="container mx-auto px-5 lg:px-0">
        {/* Başlık */}
        <div className="text-center mt-10">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-10">
            {localizedData.profileHeader}
          </h2>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-5 md:gap-10 xl:gap-24 place-content-around">
          {/* Kişisel Bilgiler Kartı */}
          <div className="my-auto max-w-lg w-full sm:w-[90%] md:w-[70%] lg:w-auto rounded-2xl px-6 md:px-8 lg:px-10 py-10 shadow-[10px_10px_2px_rgb(82,82,82)] sm:mb-10 bg-white dark:bg-[#2d3235]">
            <h3 className="font-light mb-5 text-2xl font-playfair text-[#EA2678]">
              {localizedData.profile}
            </h3>
            <div className="flex flex-col gap-5">
              {info.map((item, index) => (
                <div
                  key={index}
                  className="text-lg text-black dark:text-gray-300"
                >
                  <strong className="font-semibold">{item.name}:</strong>{" "}
                  {item.value}
                </div>
              ))}
            </div>
          </div>

          {/* Hakkımda */}
          <div className="max-w-3xl w-full flex flex-col gap-4">
            {/* About Me Başlık ve Çizgi */}
            <div className="relative">
              <h3 className="font-playfair text-2xl font-normal text-black dark:text-white relative z-10 -translate-y-2">
                {localizedData.aboutTitle}
              </h3>
              <div className="w-[110px] h-[15px] bg-[#82BBFF] rounded-[3px] -translate-y-5 relative"></div>
            </div>
            {/* Hakkımda Metinleri */}
            <div className="text-lg font-light text-gray-800 dark:text-gray-300">
              {localizedData.about}
            </div>
            <div className="text-lg font-light text-gray-800 dark:text-gray-300">
              {localizedData.about2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
