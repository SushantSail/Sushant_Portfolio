// src/components/Home/TopTen.jsx
import React from "react";
import { Link } from "react-router-dom";

const topTen = [
  { title: "Contact Me", path: "/contactme", image: "../images/ContactMe.jfif" },
  { title: "FAQ", path: "/faq", image: "../images/FAQ.jpg" },
  { title: "Achievements", path: "/certifications", image: "../images/Achi.jpg" },
  { title: "Recent Work", path: "/projects", image: "../images/Recent.jfif" },
  { title: "Experience", path: "/experience", image: "../images/Experience.jfif" },
  { title: "Skills", path: "/skills", image: "../images/Skills.jfif" },
];

const TopTen = () => (
  <section className="px-6 sm:px-16 mt-10 pb-16">
    <h2 className="text-3xl font-bold mb-4">Top 10</h2>
    <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-2">
      {topTen.map(({ title, path, image }, idx) => (
        <Link
          key={idx}
          to={path}
          className="min-w-[323px] h-[183px] rounded-lg relative overflow-hidden cursor-pointer group flex-shrink-0 snap-start"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all"></div>
          <div className="absolute bottom-4 left-4 text-white font-semibold text-xl z-10">{title}</div>
        </Link>
      ))}
    </div>
  </section>
);

export default TopTen;
