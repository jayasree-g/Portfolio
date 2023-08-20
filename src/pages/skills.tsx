import React from "react";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C and C++", percentage: 80 },
      { name: "Python", percentage: 90 },
      { name: "JavaScript", percentage: 95 },
      { name: "TypeScript", percentage: 85 },
    ],
  },
  {
    category: "Software Development",
    skills: [
      { name: "Data Structures and Algorithms (DSA)", percentage: 90 },
      { name: "Object-Oriented Programming (OOPs)", percentage: 85 },
      { name: "MYSQL", percentage: 80 },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML", percentage: 95 },
      { name: "CSS", percentage: 90 },
      { name: "Node.js", percentage: 85 },
      { name: "NestJS", percentage: 80 },
      { name: "React", percentage: 95 },
      { name: "Redux", percentage: 90 },
    ],
  },
];

function Skills(props: { darkMode: boolean }) {
  return (
    <div className=" text-white flex flex-col justify-center items-center">
      <div className="text-center text-3xl font-bold mb-6">Skills</div>
      <div className="flex gap-6 ">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className={`p-4 shadow-md w-[250px] hover:scale-105 duration-300 ${
              props.darkMode
                ? "bg-[#1e1e1e] border border-[#323434]"
                : "bg-[#925bff]"
            }`}
          >
            <h2 className="text-lg font-semibold mb-4">{category.category}</h2>
            <ul className="mb-3">
              {category.skills.map((skill) => (
                <li key={skill.name} className="items-center py-3">
                  <span>{skill.name}</span>
                  <div className="flex-1 h-2 bg-gray-200">
                    <div
                      className={`h-full ${
                        props.darkMode ? `bg-[#186d67]` : `bg-[#363535]`
                      }`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
