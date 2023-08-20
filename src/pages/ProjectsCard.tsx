import React from "react";

interface Project {
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
}

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
}

function ProjectCard({ project, darkMode }: ProjectCardProps) {
  return (
    <div
      className={` shadow-lg max-w-sm text-white hover:scale-105 duration-300 ${
        darkMode ? "bg-[#1e1e1e] border border-[#323434]" : ""
      }`}
    >
      {/* <img src={project.image} alt="languageConnect" /> */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex justify-between ">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:underline ${darkMode ? " text-[#8f8da1]" : ""}`}
          >
            GitHub
          </a>
          {/* <a
          href={project.liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Live Demo
        </a> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
