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

      {/* Skills List */}
      <div className="flex flex-wrap justify-center gap-10">
        {common.skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-32 h-32 bg-white dark:bg-[#252127] rounded-lg shadow-md p-3 transition-colors duration-200"
          >
            <img
              src={skill.url}
              alt={skill.name}
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
