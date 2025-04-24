
import { Github, Linkedin, Mail } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-indigo-100/30 to-transparent dark:from-indigo-900/10"></div>
      <div className="absolute inset-0 bg-pattern opacity-[0.015] dark:opacity-[0.03]"></div>
      
      {/* Animated circles in background */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-200/20 dark:bg-indigo-900/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in transform hover:scale-105 transition-all duration-300">
            Computer Science Undergraduate
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Building The Future<br/>Through Code
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-300 animate-fade-in">
            Hi, I'm Uday Singh
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto animate-fade-in">
            Transforming ideas into elegant solutions through innovative software development
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 text-slate-800 dark:text-slate-200 font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Get in Touch
            </button>
          </div>
          
          <div className="mt-12 flex justify-center gap-6">
            <a 
              href="https://github.com/udaysingh2626" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-all duration-300 transform hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <Github size={isMobile ? 22 : 24} />
            </a>
            <a 
              href="https://linkedin.com/in/udaysingh2626" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-all duration-300 transform hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={isMobile ? 22 : 24} />
            </a>
            <a 
              href="mailto:uday.singh240818@gmail.com" 
              className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Email Contact"
            >
              <Mail size={isMobile ? 22 : 24} />
            </a>
          </div>

          {/* Typing animation effect */}
          <div className="mt-16 font-mono text-slate-600 dark:text-slate-400 flex justify-center">
            <span className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
              <span className="typing-animation">console.log('Hello World!');</span>
              <span className="inline-block w-2 h-4 bg-indigo-500 ml-1 animate-pulse"></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
