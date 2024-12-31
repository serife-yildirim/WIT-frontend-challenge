import { useContext } from "react";
import { DataContext } from "../context/Context";

const Skills = () => {
  const { common, localizedData } = useContext(DataContext);

  return (
    <div className="relative w-screen h-auto bg-white dark:bg-darkBackgroundAlt px-5 lg:px-10 py-20">
      {/* Title */}
      <h2
        className="text-center text-black dark:text-white font-inter font-medium text-[48px] leading-[58px] mb-12"
        style={{
          letterSpacing: "1%",
        }}
      >
        {localizedData.skill}
      </h2>
            <div
        className="absolute w-[181px] h-[49px] sm:top-[400px] lg:top-[230px] left-[-70px] bg-[#525252] dark:bg-[#525252] rounded-[29.5px]"
        aria-hidden="true"
      ></div>
      <div
  className="w-[121px] h-[121px] border-[20px] border-gray-300 dark:border-[#525252] bg-transparent dark:bg-darkBackground rounded-full absolute left-[80%] translate-x-[-70%] top-[-60px] opacity-50"
  aria-hidden="true"
></div>

<div
    className="absolute w-[121px] h-[121px] border-[20px] border-[#EA2678] bg-transparent rounded-full bottom-[-80px] right-[-30px]"
    aria-hidden="true"
  ></div>

      {/* Skills List */}
      <div className="flex flex-wrap justify-center gap-10">
        {common.skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-32 h-32 bg-white dark:bg-[#252127] rounded-lg shadow-md p-3 transition-transform duration-300 hover:shadow-[5px_2px_20px_#EA2678] hover:scale-105"
          >
            <img
              src={skill.url} // src özelliği
              alt={skill.name} // alt özelliği
              className="w-16 h-16 mb-3"
            />
            <p className="text-sm font-medium text-neutral-800 dark:text-white">
              {skill.name.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
