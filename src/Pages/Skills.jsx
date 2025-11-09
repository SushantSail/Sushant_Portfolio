import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedux,
  SiExpress,
  SiPostman,
  SiJson,
  SiAxios,
} from "react-icons/si";

export default function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-20 px-8 md:px-16 lg:px-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7e5a935b-6d8d-4db2-b24a-79c4b783d6e7/f5f8792e-1a0a-4ed0-9f8b-0b7a2b2c640e.jpg')] bg-cover bg-center blur-sm"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-extrabold text-red-600 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A strong foundation in front-end and back-end technologies — crafted
            with precision and passion.
          </p>
        </div>

         {/* Back to Home Button */}
        <div className="text-center my-8">
          <Link
            to="/home"
             className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded px-6 py-3 transition-all duration-300 shadow-md hover:scale-105"
             >
            Back to Home
          </Link>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
          {/* Languages */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl shadow-lg hover:bg-zinc-800/80 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all duration-300">
            <h3 className="text-red-500 text-xl font-bold mb-4 border-b border-red-700 pb-2">
              Languages
            </h3>
            <div className="flex flex-wrap gap-5 text-gray-300 text-base leading-relaxed">
              <span className="flex items-center gap-2">
                <FaHtml5 className="text-orange-500 text-2xl" /> HTML5
              </span>
              <span className="flex items-center gap-2">
                <FaCss3Alt className="text-blue-500 text-2xl" /> CSS3
              </span>
              <span className="flex items-center gap-2">
                <FaJsSquare className="text-yellow-400 text-2xl" /> JavaScript
              </span>
              <span className="flex items-center gap-2">
                <SiJson className="text-green-400 text-2xl" /> JSON
              </span>
            </div>
          </div>

          {/* Databases & APIs */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl shadow-lg hover:bg-zinc-800/80 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all duration-300">
            <h3 className="text-red-500 text-xl font-bold mb-4 border-b border-red-700 pb-2">
              Databases & APIs
            </h3>
            <div className="flex flex-wrap gap-5 text-gray-300 text-base leading-relaxed">
              <span className="flex items-center gap-2">
                <SiMongodb className="text-green-500 text-2xl" /> MongoDB
              </span>
              <span className="flex items-center gap-2">
                <SiPostgresql className="text-sky-500 text-2xl" /> PostgreSQL
              </span>
              <span className="flex items-center gap-2">
                <SiMysql className="text-blue-400 text-2xl" /> MySQL
              </span>
              <span className="flex items-center gap-2">
                <SiAxios className="text-purple-400 text-2xl" /> Axios
              </span>
              <span className="flex items-center gap-2">
                <SiExpress className="text-gray-300 text-2xl" /> RESTful APIs
              </span>
            </div>
          </div>

          {/* Frameworks / Libraries */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl shadow-lg hover:bg-zinc-800/80 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all duration-300">
            <h3 className="text-red-500 text-xl font-bold mb-4 border-b border-red-700 pb-2">
              Frameworks / Libraries
            </h3>
            <div className="flex flex-wrap gap-5 text-gray-300 text-base leading-relaxed">
              <span className="flex items-center gap-2">
                <FaReact className="text-cyan-400 text-2xl" /> React.js
              </span>
              <span className="flex items-center gap-2">
                <SiRedux className="text-purple-500 text-2xl" /> Redux
              </span>
              <span className="flex items-center gap-2">
                <FaNodeJs className="text-green-600 text-2xl" /> Node.js
              </span>
              <span className="flex items-center gap-2">
                <SiExpress className="text-gray-300 text-2xl" /> Express.js
              </span>
              <span className="flex items-center gap-2">
                <FaBootstrap className="text-purple-600 text-2xl" /> Bootstrap
              </span>
              <span className="flex items-center gap-2">
                <SiTailwindcss className="text-sky-400 text-2xl" /> Tailwind CSS
              </span>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl shadow-lg hover:bg-zinc-800/80 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all duration-300">
            <h3 className="text-red-500 text-xl font-bold mb-4 border-b border-red-700 pb-2">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-5 text-gray-300 text-base leading-relaxed">
              <span className="flex items-center gap-2">
                <FaGitAlt className="text-orange-600 text-2xl" /> Git
              </span>
              <span className="flex items-center gap-2">
                <FaGithub className="text-gray-300 text-2xl" /> GitHub
              </span>
              <span className="flex items-center gap-2">
                <SiPostman className="text-orange-500 text-2xl" /> Postman
              </span>
              <span className="flex items-center gap-2">
                <FaLinux className="text-yellow-500 text-2xl" /> Linux (Basic)
              </span>
              <span className="flex items-center gap-2">
                <FaGithub className="text-gray-400 text-2xl" /> Windows
              </span>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}
