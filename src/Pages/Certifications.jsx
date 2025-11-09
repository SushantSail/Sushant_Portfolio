import React from "react";
import { Link } from "react-router-dom";

export const Certifications = () => {
  const certs = [
    {
      title: "Full-Stack Web Development",
      platform: "Udemy",
      link: "https://www.udemy.com/certificate/UC-07b0dd77-5677-4c93-a381-ace11d4a6278/",
      image:
        "../images/fullstack.png",
    },
    {
      title: "MongoDB Node.js Developer Path",
      platform: "MongoDB University",
      link: "https://learn.mongodb.com/c/LOonSGIeSZSFYt94Hjq0WA",
      image:
        "../images/database.png",
    },
    {
      title: "SQL Programming",
      platform: "Udemy",
      link: "https://www.udemy.com/certificate/UC-66181e1a-b445-48d8-a49a-22e3b087245e/",
      image:
        "../images/sql.png",
    },
    {
      title: "React: Design Patterns",
      platform: "LinkedIn Learning",
      link: "https://drive.google.com/file/d/14SWWkw_ckVoAzlJFcCjQlePzP22KoFz_/view?usp=drive_link",
      image:
       "../images/react.png",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen py-20 relative overflow-hidden">
      {/* 🔹 Background Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7e5a935b-6d8d-4db2-b24a-79c4b783d6e7/f5f8792e-1a0a-4ed0-9f8b-0b7a2b2c640e.jpg')] bg-cover bg-center blur-sm"></div>

      <div className="container mx-auto relative z-10 px-6 md:px-12 lg:px-20">
        {/* 🔸 Title Section */}
        <div className="text-center mb-16">
          <p className="text-red-600 uppercase tracking-widest font-semibold text-sm md:text-base">
            Achievements & Certifications
          </p>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-[0_0_15px_rgba(255,0,0,0.4)]">
            <span className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
              Certified Excellence
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Every certificate represents a milestone — proof of skills, hard work, and continuous learning across technologies.
          </p>

          <div className="mt-6">
            <Link
              to="/home"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-300 shadow-md hover:shadow-red-700/50 hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* 🔻 Certificates Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-zinc-900/70 backdrop-blur-md rounded-xl shadow-lg hover:bg-zinc-800/80 hover:shadow-red-700/30 transition-all duration-300 border border-zinc-800 hover:border-red-600 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-all duration-300">
                  {cert.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{cert.platform}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-red-500 hover:text-red-400 underline underline-offset-4 transition-colors duration-300"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 🔸 Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-red-900/30 to-transparent"></div>
    </section>
  );
};

export default Certifications;