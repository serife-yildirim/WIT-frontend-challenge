import React, { useContext } from "react";
import { DataContext } from "../context/Context";

function Projects() {
  const { localizedData, common } = useContext(DataContext);

  // Tailwind CSS renklerini manuel olarak sabit bir dizide tanımlıyoruz.
  const backgroundColors = ["bg-blue-200", "bg-green-200", "bg-pink-200"];

  return (
    <div className="mt-5 pb-20">
      <div className="flex flex-col container">
        <div className="mx-auto mt-10">
          <h2 className="text-4xl mb-10">{localizedData.projectHeader}</h2>
        </div>
        <div className="flex container flex-wrap-reverse lg:flex-nowrap gap-y-20 gap-x-5 place-content-around lg:gap-10">
          {localizedData.projects.map((project, index) => (
            <div
              key={index}
              // Use a valid className string with proper syntax
              className={`h-[670px] relative flex-1 flex flex-col p-10 basis-[30%] rounded-lg shadow-md ${
                backgroundColors[index % backgroundColors.length]
              }`}
            >
              <div>
                <h3 className="text-3xl font-bold font-playfair leading-10">
                  {project.name}
                </h3>
              </div>

              <div>
                <p className="text-black mt-1 text-base font-normal leading-6">
                  {project.description}
                </p>
              </div>

              <div className="mt-4">
                <div className="flex gap-3 mt-5 flex-wrap place-content-start">
                  {project.skill.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-black text-base font-bold leading-[16px] tracking-[0.05em] font-playfair bg-white px-2.5 py-1.5 rounded-full"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex mt-5 place-content-between">
                <div>
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[20px] font-inter font-semibold leading-[30px] text-black hover:underline"
                  >
                    {localizedData.show}
                  </a>
                </div>
                <div>
                  <a
                    href={project.vercelLink}
                    target="_blank"
                    className="text-[20px] font-inter font-semibold leading-[30px] text-black hover:underline"
                  >
                    {localizedData.application} →
                  </a>
                </div>
              </div>

              <img
                className="absolute bottom-[-3rem] left-0 right-0"
                src={project.photoUrl}
                alt="Project Thumbnail"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
