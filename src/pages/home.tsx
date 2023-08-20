import React, { useState } from "react";
import pic from "../Images/pic.jpeg";
import Projects from "./projects";
import Skills from "./skills";
import WorkExperience from "./experience";
import Education from "./education";

function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div
      className={
        darkMode
          ? `bg-[#191919] p-4`
          : `bg-gradient-to-r from-blue-400 to-purple-600 p-4`
      }
    >
      <div className="flex justify-end p-4 items-baseline">
        <span
          className={`cursor-pointer text-white ${
            darkMode ? " font-semibold" : "text-sm"
          } pr-2`}
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          Dark
        </span>
        <span
          className={`cursor-pointer text-white ${
            darkMode ? "text-sm" : "font-semibold"
          }`}
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          Light
        </span>
      </div>
      <div className="flex flex-wrap justify-center items-center h-screen">
        <div className="text-center text-white">
          <div className="text-2xl font-semibold mb-2">Hello, I'm</div>
          <div className="text-4xl font-bold mb-4">Jayasree Gondipalle</div>
          <p className="text-xl mb-6 typing-text">
            A passionate developer exploring the world of technology.
          </p>
          <div className="flex justify-center items-center space-x-6">
            <a
              href="https://www.instagram.com/jayasree._g"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 duration-300"
            >
              <i className="bi bi-instagram text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jayasree-gondipalle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 duration-300"
            >
              <i className="bi bi-linkedin text-2xl"></i>
            </a>
            <a
              href="https://github.com/jayasree-g"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 duration-300"
            >
              <i className="bi bi-github text-2xl"></i>
            </a>
            <a
              href="https://discord.com/users/Jayasree#9827"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 duration-300"
            >
              <i className="bi bi-discord text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="ml-8">
          <img
            src={pic}
            alt="Jayasree Gondipalle"
            className="rounded-full w-60 h-60 object-cover border-4"
          />
        </div>
      </div>
      <div className="flex justify-center mb-40">
        <Projects darkMode={darkMode} />
      </div>
      <Skills darkMode={darkMode} />
      <div className="flex flex-wrap ">
        <WorkExperience darkMode={darkMode} />
        <Education darkMode={darkMode} />
      </div>
    </div>
  );
}

export default Home;
