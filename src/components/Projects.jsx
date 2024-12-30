import React, { useContext } from "react";
import { DataContext } from "../context/Context";

function Projects() {
  const { localizedData, language } = useContext(DataContext);

  const backgroundColors = [
    "bg-[#ddeefe] dark:bg-[#2d3235]", 
    "bg-[#d9f6f1] dark:bg-[#495351]",
  ];

  return (
    <div className="pb-20 bg-white dark:bg-darkBackgroundAlt dark:text-white">
      {/* Üst Boşluk */}
      <div className="w-full h-16 bg-white dark:bg-darkBackgroundAlt"></div>

      {/* Container */}
      <div className="container mx-auto px-6">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            {localizedData.projectHeader}
          </h2>
        </div>

        {/* Proje Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {localizedData.projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${backgroundColors[index % backgroundColors.length]} rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105`}
            >
              {/* Proje Detayları */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                  {project.name}
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skill.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm font-medium bg-white text-black dark:bg-[#495351] dark:text-gray-200 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1769ff] dark:text-[#82BBFF] hover:underline"
                  >
                    {localizedData.show}
                  </a>
                  <a
                    href={project.vercelLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1769ff] dark:text-[#82BBFF] hover:underline"
                  >
                    {localizedData.application} →
                  </a>
                </div>
              </div>

              {/* Proje Görseli */}
              <div className="bg-white dark:bg-[#484148] flex justify-center items-center p-4">
                <img
                  src={project.photoUrl}
                  alt={project.name}
                  className="w-[500px] h-[287px] object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-32 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <div className="w-full md:w-auto md:mr-16">
            {language === "tr-TR" ? (
              <p className="font-inter font-medium text-[42px] leading-[63px] tracking-[0.01em] text-[#0A0A14] dark:text-white text-center md:text-left">
                Projelerinizde{" "}
                <span className="underline decoration-[#82bbff] decoration-[8px] font-bold">
                  birlikte
                </span>{" "}
                çalışalım.
              </p>
            ) : (
              <p className="font-inter font-medium text-[42px] leading-[63px] tracking-[0.01em] text-[#0A0A14] dark:text-white text-center md:text-left">
                Let’s{" "}
                <span className="underline decoration-[#82bbff] decoration-[6px] font-bold">
                  work together
                </span>{" "}
                on your projects.
              </p>
            )}
          </div>

          {/* Bağlantılar */}
          <div className="flex flex-col items-center md:items-start space-y-0 mt-6 md:mt-0">
            <a
              href="https://github.com/serife-yildirim"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter font-medium text-[24px] leading-[36px] text-[#1769FF] hover:underline"
            >
              Github
            </a>
            <a
              href="#"
              className="font-inter font-medium text-[24px] leading-[36px] text-[#0A0A14] dark:text-white hover:underline"
            >
              Personal Blog
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter font-medium text-[24px] leading-[36px] text-[#499dc9] hover:underline"
            >
              Linkedin
            </a>
            <a
              href="mailto:serifeozyurek-94@hotmail.com"
              className="font-inter font-medium text-[24px] leading-[36px] text-[#c5507b] hover:underline"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
