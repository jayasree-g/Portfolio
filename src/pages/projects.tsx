import React from "react";
import ProjectCard from "./ProjectsCard";

function Projects(props: { darkMode: boolean }) {
  const projects = [
    {
      title: "LanguageConnect - Interactive Language Learning Web App",
      description: "Developed a language learning web app enabling users...",
      githubLink: "https://github.com/jayasree-g/LanguageConnect",
      liveDemoLink: "https://www.example.com/language-connect",
    },
    {
      title: "NostalgiPlay - Multi-Game Platform",
      description: "A platform that features a variety of interactive games...",
      githubLink: "https://github.com/jayasree-g/Games",
      liveDemoLink: "https://www.example.com/nostalgiplay",
    },
    {
      title: "Calm your Chaos - Mental health website (Hackathon Project)",
      description: "Developed a user-friendly online platform focused on...",
      githubLink: "https://github.com/jayasree-g/Calm_Your_Chaos",
      liveDemoLink: "https://www.example.com/calm-your-chaos",
    },
  ];

  return (
    <div className={`py-10 text-white`}>
      <div className="text-center text-3xl font-bold mb-6">My Projects</div>
      <div className="flex justify-center gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            darkMode={props.darkMode}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
