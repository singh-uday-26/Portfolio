
import { useState, useEffect, lazy, Suspense } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import Footer from '@/components/Footer';

// Lazy load non-critical sections for better performance
const AboutSection = lazy(() => import('@/components/sections/AboutSection'));
const EducationSection = lazy(() => import('@/components/sections/EducationSection'));
const ExperienceSection = lazy(() => import('@/components/sections/ExperienceSection'));
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection'));
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection'));
const ContactSection = lazy(() => import('@/components/sections/ContactSection'));

// Loading component for suspense fallback
const SectionLoader = () => (
  <div className="py-24 flex justify-center items-center">
    <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Set loaded state after initial render
    setTimeout(() => setIsLoaded(true), 500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section function for navigation
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      {/* Hero section is always loaded immediately */}
      <HeroSection />
      
      {/* Lazy load other sections with suspense fallbacks */}
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <EducationSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ExperienceSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ProjectsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <SkillsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
      
      <Footer />
      
      {/* Preload indicator for better UX */}
      <div className={`fixed inset-0 bg-white dark:bg-slate-900 z-50 flex items-center justify-center transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-indigo-600 dark:text-indigo-400">Loading portfolio...</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
