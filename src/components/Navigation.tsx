
import { useState } from 'react';
import MobileMenu from './MobileMenu';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          US<span className="text-gradient">.</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className={`nav-link ${activeSection === 'home' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className={`nav-link ${activeSection === 'about' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('education')} 
            className={`nav-link ${activeSection === 'education' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className={`nav-link ${activeSection === 'experience' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className={`nav-link ${activeSection === 'projects' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className={`nav-link ${activeSection === 'skills' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`nav-link ${activeSection === 'contact' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
          >
            Contact
          </button>
        </div>
        
        <div className="md:hidden">
          <MobileMenu scrollToSection={scrollToSection} activeSection={activeSection} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
