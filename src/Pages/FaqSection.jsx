import React, { useState } from "react";
import { Link } from "react-router-dom";

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who are you?",
      answer:
        "I’m Sushant Sail, a front-end developer passionate about building interactive and responsive web applications using React.js, Node.js, and modern web technologies.",
    },
    {
      question: "What do you specialize in?",
      answer:
        "I specialize in creating fast, user-friendly, and visually appealing web apps using React, Express, and MongoDB — with clean code and optimized performance.",
    },
    {
      question: "What projects have you built?",
      answer:
        "I’ve built several real-world projects like a Hotel Booking system (MERN stack), an E-Commerce website, and API-based apps using TMDB and Firebase.",
    },
    {
      question: "Where can I see your projects?",
      answer:
        "You can explore them on the Projects page or visit my GitHub for source code.",
    },
    {
      question: "Do your projects have live demos?",
      answer:
        "Yes! Most of my projects are hosted on Render, Netlify, or Vercel — you can try them directly.",
    },
    {
      question: "Are you open to work?",
      answer:
        "Yes! I’m currently open to front-end developer roles where I can grow, contribute to impactful projects, and work with modern web technologies.",
    },
    {
      question: "What’s your career goal?",
      answer:
        "To become a full-stack developer and build scalable, production-level web applications.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "React, JavaScript, Node.js, Express, MongoDB, HTML, CSS, Bootstrap, and Tailwind CSS.",
    },
    {
      question: "Are you learning anything new?",
      answer:
        "Yes, I’m currently improving my backend skills with Node.js and exploring deployment and CI/CD workflows.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can reach me via email or through the Contact section of my portfolio.",
    },
    {
      question: "Do you collaborate on projects?",
      answer:
        "Absolutely! I enjoy working with other developers on creative or challenging ideas — feel free to connect on GitHub or LinkedIn.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#000000] text-white py-10 px-5">

      <div className="text-center my-8">
          <Link
            to="/home"
             className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded px-6 py-3 transition-all duration-300 shadow-md hover:scale-105"
             >
            Back to Home
          </Link>
        </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#2d2d2d] p-5 rounded-sm shadow-md transition-all duration-300"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex items-center justify-between text-left text-xl font-semibold focus:outline-none"
            >
              <span>{faq.question}</span>
              <span
                className={`text-[#a9a9a9] transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {openIndex === index && (
              <div className="mt-3 text-base text-[#a9a9a9] transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;