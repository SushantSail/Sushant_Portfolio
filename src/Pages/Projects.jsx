import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
   {
  title: "E-Commerce Web App",
  description:
    "A dynamic single-page e-commerce application built with React.js, featuring product listings, cart management, checkout flow, and responsive design using Context API and Redux.",
  tech: ["React.js", "Redux", "Context API", "React Router", "CSS Modules"],
  image: "../images/eComWebsite.jpg",
  link: "https://fliptrazoneecom.netlify.app/",
  github: "https://github.com/SushantSail/FliptraZonEcom.git",
},
    {
      title: "Movie Rating App",
      description:
        "Interactive app using TMDB API that allows users to search, rate, and save movies. Designed with React and Tailwind for a modern UI.",
      tech: ["React", "TMDB API", "Tailwind CSS"],
      image: "../images/cineyard1.jpg",
      link: "https://cineyard.netlify.app/",
      github: "https://github.com/SushantSail/CineYard.git",
    },
{
  title: "Hotel Booking App",
  description:
    "A full-stack hotel booking web application built using Express.js, Node.js, MongoDB, and EJS. It allows users to explore hotels, view details, and manage bookings with a modern interface.",
  tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Mongoose"],
  image: "../images/hotelBook.PNG",
  link: "https://hotelbooking-2-5yzl.onrender.com",
  github: "https://github.com/SushantSail/HotelBooking.git",
},
{
  title: "Simon Game",
  description:
    "A fun memory-based Simon Game built with JavaScript, HTML, and CSS. The game tests users' ability to remember color patterns with interactive sound and visual effects.",
  tech: ["JavaScript", "HTML5", "CSS3"],
  image: "../images/simonGame.jpg",
  link: "https://simongamess.netlify.app/",
  github: "https://github.com/SushantSail/MemoryGame.git",
},

  ];

  return (
    <section className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen py-16 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7e5a935b-6d8d-4db2-b24a-79c4b783d6e7/f5f8792e-1a0a-4ed0-9f8b-0b7a2b2c640e.jpg')] bg-cover bg-center blur-sm"></div>

      <div className="container mx-auto relative z-10 px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-600 uppercase tracking-widest font-semibold text-sm md:text-base">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            My Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of my hands-on projects that showcase my front-end and
            full-stack development skills — inspired by creativity and passion.
          </p>

          <div className="mt-6">
            <Link
              to="/home"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded px-6 py-3 transition-all duration-300 shadow-md hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
  key={index}
  onClick={() => setSelectedProject(project)}
  className="bg-zinc-900/70 rounded-xl overflow-hidden shadow-lg hover:shadow-red-700/20 transition-all duration-300 cursor-pointer"
>
  <div className="overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
    />
  </div>
  <div className="p-5">
    <h3 className="text-xl font-bold text-white mb-2 border-b border-red-600 pb-2">
      {project.title}
    </h3>
    <p className="text-gray-300 text-sm mb-3">
      {project.description.substring(0, 80)}...
    </p>
    <p className="text-gray-400 text-xs mb-2">
      {project.tech.join(" • ")}
    </p>
  </div>
</div>

          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-2xl w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh] shadow-lg shadow-red-800/30 animate-fade-in">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-xl mb-4"
            />

            <h2 className="text-2xl font-bold mb-2 text-white">
              {selectedProject.title}
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-zinc-800 text-sm px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-gray-300 mb-6">{selectedProject.description}</p>

            <div className="flex gap-4">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white font-semibold"
              >
                Live Demo
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg text-white font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;