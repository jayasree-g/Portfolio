import React from "react";
import pic from "../Images/pic.jpeg";
import Projects from "./projects";
import Skills from "./skills";

function Home() {
  return (
    <div className=" bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="flex justify-center items-center h-screen">
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
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <i className="bi bi-instagram text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jayasree-gondipalle"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <i className="bi bi-linkedin text-2xl"></i>
            </a>
            <a
              href="https://github.com/jayasree-g"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <i className="bi bi-github text-2xl"></i>
            </a>
            <a
              href="https://discord.com/users/Jayasree#9827"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <i className="bi bi-discord text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="ml-8">
          <img
            src={pic}
            alt="Jayasree Gondipalle"
            className="rounded-full w-60 h-60 object-cover border-4 border-white"
          />
        </div>
      </div>
      <div className="flex justify-center mb-40">
        <Projects />
      </div>
      <Skills/>
    </div>
  );
}

export default Home;
