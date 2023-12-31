import React from "react";

interface Experience {
  title: string;
  date: string;
  role: string;
  experiences: {
    project: string;
    description: string[];
  }[];
}

interface ExperienceCardProps {
  experience: Experience;
  darkMode: boolean;
}

function ExperienceCard({ experience, darkMode }: ExperienceCardProps) {
  return (
    <div
      className={`p-4 shadow-md my-6 hover:scale-105 duration-300 ${
        darkMode ? "bg-[#1e1e1e] border border-[#323434]" : ""
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">{experience.title}</h2>
      <p
        className={`mb-2 text-sm px-2 p-1 w-fit rounded-sm ${
          darkMode ? `bg-[#186d67]` : ``
        }`}
      >
        {experience.role}
      </p>
      <p className={`mb-2 text-sm ${darkMode ? "text-[#8f8da1]" : ""}`}>
        {experience.date}
      </p>
      <ul className="mb-4">
        {experience.experiences.map((exp, index) => (
          <li key={index} className="mb-2">
            <p className="font-semibold">{exp.project}</p>
            <ul className="list-disc pl-6 text-sm">
              {exp.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
