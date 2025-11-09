import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../Pages/landingPage';

// Lazy imports (load only when visited)

const Experience = lazy(() => import('../Pages/Experience'));
const Skills = lazy(() => import('../Pages/Skills'));
const Certifications = lazy(() => import('../Pages/Certifications'));
const Projects = lazy(() => import('../Pages/Projects'));
const FaqSection = lazy(() => import('../Pages/FaqSection'));
const ContactPage = lazy(() => import('../Pages/ContactPage'));
const HomePage = lazy(() => import('../Pages/HomePage'));
const PageNotFound = lazy(() => import('../Pages/PageNotFound'));

export const AllRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen text-white text-xl">
  Loading...
</div>
      }
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/faq" element={<FaqSection />} />
        <Route path="/contactme" element={<ContactPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};
