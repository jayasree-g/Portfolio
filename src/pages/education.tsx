import React from "react";

const educationData = [
  {
    institution: "VNR Vignana Jyothi Institute of Engineering & Technology",
    location: "Hyderabad, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    result: "CGPA: 8.95/10",
    date: "2021 - 2025",
  },
  {
    institution: "Narayana Group of Institutions",
    location: "Hyderabad, India",
    degree: "Intermediate",
    result: "Percentage: 98%",
    date: "June 2021",
  },
  {
    institution: "Narayana Olympiad School",
    location: "Hyderabad, India",
    degree: "10th Grade",
    result: "CGPA: 10",
    date: "June 2019",
  },
];

function Education(props: { darkMode: boolean }) {
  return (
    <div
      className={`flex flex-col gap-6 max-w-md mx-auto text-white mt-20 ${
        props.darkMode ? "bg-[#292929]" : ""
      }`}
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Education</h2>
      {educationData.map((education, index) => (
        <div
          key={index}
          className="p-4 rounded-lg shadow-md hover:scale-105 duration-300"
        >
          <h3 className="text-lg font-semibold mb-2">
            {education.institution}
          </h3>
          <p className="mb-2">{education.degree}</p>
          <p className="mb-2">{education.location}</p>
          <p className="mb-2">{education.result}</p>
          <p>{education.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;
