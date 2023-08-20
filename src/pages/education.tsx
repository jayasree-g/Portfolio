import React from "react";

const educationData = [
  {
    institution: "VNR Vignana Jyothi Institute of Engineering & Technology",
    location: "Hyderabad, India",
    degree: "BTech - Computer Science and Engineering",
    result: "CGPA: 8.95/10",
    date: "2021 - 2025",
  },
  {
    institution: "Narayana Group of Institutions",
    location: "Hyderabad, India",
    degree: "Intermediate",
    result: "Percentage: 98%",
    date: "2019 - 2021",
  },
  {
    institution: "Narayana Olympiad School",
    location: "Hyderabad, India",
    degree: "10th Grade",
    result: "CGPA: 10/10",
    date: "2016 - 2019",
  },
];

function Education(props: { darkMode: boolean }) {
  return (
    <div className="text-white mt-20 mx-auto">
      <div className="text-center text-3xl font-bold mb-12">Education</div>
      <div>
        {educationData.map((education, index) => (
          <div
            key={index}
            className={`flex flex-col gap-1 max-w-lg mt-6 p-4 hover:scale-105 duration-300 ${
              props.darkMode ? "bg-[#1e1e1e] border border-[#323434]" : ""
            }`}
          >
            <h3 className="text-lg font-semibold mb-2">
              {education.institution}
            </h3>
            <span
              className={`mb-2 text-sm px-2 p-1 w-fit rounded-sm ${
                props.darkMode ? `bg-[#186d67]` : ``
              }`}
            >
              {education.degree} | {education.date}
            </span>
            <span
              className={`mb-2 text-sm ${
                props.darkMode ? "text-[#8f8da1]" : ""
              }`}
            >
              {education.result}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
