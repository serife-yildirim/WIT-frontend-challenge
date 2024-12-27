import React, { useContext } from "react";
import { DataContext } from "../context/Context";

function Projects() {
  const { localizedData, language } = useContext(DataContext); // Dil kontrolü için `language` kullanılıyor

  // Tailwind CSS renkleri
  const backgroundColors = [
    "bg-[#ddeefe] dark:bg-[#2d3235]", // Witflix
    "bg-[#d9f6f1] dark:bg-[#495351]", // Pizza Projesi
  ];

  return (
    <div className="mt-16 pb-20 bg-white dark:bg-[#484148] dark:text-white">
      <div className="container mx-auto px-6">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            {localizedData.projectHeader}
          </h2>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {localizedData.projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 ${
                backgroundColors[index % backgroundColors.length]
              }`}
            >
              {/* Üst Kısım: Metin İçeriği */}
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
      className="px-3 py-1 text-sm font-medium bg-[#525252] text-white rounded-full"
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
    className="text-blue-500 dark:text-white hover:underline"
  >
    View on Github
  </a>
  <a
    href={project.vercelLink}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 dark:text-white hover:underline"
  >
    Go to app →
  </a>
</div>
              </div>
              {/* Alt Kısım: Görsel */}
              <div className="bg-white dark:bg-[#484148]">
                <img
                  src={project.photoUrl}
                  alt={project.name}
                  className="w-130 h-auto object-contain mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className="text-center mt-16">
          {language === "tr" ? ( // Türkçe için
             <p className="text-lg text-black dark:text-white leading-8">
             Projelerinizde{" "}
             <span className="underline decoration-[#82bbff] decoration-[6px] font-bold">
               birlikte
             </span>{" "}
             çalışalım.
           </p>
          ) : (
            // İngilizce için
            <p className="text-3xl text-black dark:text-white leading-8">
        Let’s{" "}
        <span className="underline decoration-[#82bbff] decoration-[6px] font-bold">
          work together
        </span>{" "}
        on your projects.
      </p>
          )}
          {/* Linkler */}
          <div className="mt-6 space-x-6">
            <a
              href="https://github.com/serife-yildirim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1769ff] font-medium hover:underline"
            >
              Github
            </a>
            <a
              href="#"
              className="text-black dark:text-white font-medium hover:underline"
            >
              Personal Blog
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#499dc9] font-medium hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:serifeozyurek-94@hotmail.com"
              className="text-[#c5507b] font-medium hover:underline"
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
