import React from "react";
import ExperienceCard from "./ExperienceCard";

const workExperiences = [
  {
    title: "UnPlatforms",
    role: "Web Development Intern",
    date: "May 2023 - Present",
    experiences: [
      {
        project: "Time.Dev - Productivity app",
        description: [
          "Implemented efficient course retrieval and score calculation for Tutor Section.",
          "Developed user-friendly Shortcut Trainer app for mastering keyboard shortcuts.",
          "Added bookmarking and editing for AI prompts and collections.",
          "Utilized Storybook for customizable UI component.",
        ],
      },
      {
        project: "Advisorly - Dynamic career platform",
        description: [
          "Built app-specific user-profiles and job posting pages.",
          "Implemented job posting and application management functionalities.",
        ],
      },
    ],
  },
];

function WorkExperience(props: { darkMode: boolean }) {
  return (
    <div className="flex flex-col gap-6 max-w-md mx-auto text-white mt-20">
      <div className="text-center text-3xl font-bold ">Experience</div>
      {workExperiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} darkMode={props.darkMode} />
      ))}
    </div>
  );
}

export default WorkExperience;
