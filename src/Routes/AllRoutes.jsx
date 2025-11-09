import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../Pages/landingPage';
import { Experience } from '../Pages/Experience';
import  Skills  from '../Pages/Skills';
import {Certifications} from "../Pages/Certifications";
import { Projects } from '../Pages/Projects';
import { FaqSection } from '../Pages/FaqSection';
import { ContactPage } from '../Pages/ContactPage';
import { HomePage } from '../Pages/HomePage';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/experience" element={<Experience/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/faq" element={<FaqSection/>} />
       <Route path="/contactme" element={<ContactPage/>} />
        <Route path="/home" element={<HomePage/>} />
    </Routes>
  )
}
