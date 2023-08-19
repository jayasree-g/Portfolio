import React from "react";

interface Project {
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-lg shadow-lg p-6 max-w-sm text-white transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="mb-4">{project.description}</p>
      <div className="flex justify-between ">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href={project.liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
