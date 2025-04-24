
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Code, Monitor, PlayCircle, Laptop, Server, Star, Brain, Github } from "lucide-react";

const ProfileVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  
  const steps = [
    {
      icon: <Code size={24} className="text-indigo-400" />,
      title: "Full Stack Development",
      description: "Python, Java, React & Modern Web Technologies"
    },
    {
      icon: <Brain size={24} className="text-purple-400" />,
      title: "Smart India Hackathon",
      description: "Government Project Development Experience"
    },
    {
      icon: <Star size={24} className="text-blue-400" />,
      title: "Academic Excellence",
      description: "CGPA: 8.91 at VIT-AP University"
    },
    {
      icon: <Github size={24} className="text-green-400" />,
      title: "Open Source",
      description: "Active Contributor & Community Builder"
    }
  ];

  const startAnimation = () => {
    if (intervalRef.current) return;
    
    setIsPlaying(true);
    
    intervalRef.current = window.setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 3000);
  };

  const stopAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      {
        root: null,
        threshold: 0.5
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      stopAnimation();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900/80 to-purple-900/80 shadow-2xl border border-indigo-500/30 backdrop-blur-sm ${isMobile ? 'h-[350px] mx-4' : 'h-[400px]'}`}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
      </div>
      
      <div className="absolute top-2 right-2 flex space-x-1">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      
      <div className="h-8 w-full bg-slate-800/50 backdrop-blur-sm flex items-center px-4 border-b border-slate-700/50">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse mr-2"></div>
          <p className="text-xs text-slate-300 font-mono">portfolio-showcase.tsx</p>
        </div>
      </div>
      
      <div className="relative p-6 text-center h-full flex flex-col justify-center items-center">
        <button 
          onClick={() => isPlaying ? stopAnimation() : startAnimation()}
          className="mb-6 text-slate-300 hover:text-white transition-colors transform hover:scale-105 duration-300"
          aria-label={isPlaying ? "Pause presentation" : "Play presentation"}
        >
          <PlayCircle size={48} className={`${isPlaying ? "animate-pulse text-indigo-400" : ""} transition-all duration-300`} />
        </button>
        
        <div className="relative w-full max-w-md mx-auto h-48">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`absolute top-0 left-0 w-full transition-all duration-700 
                ${currentStep === index ? 
                  'opacity-100 translate-y-0 scale-100' : 
                  'opacity-0 translate-y-10 scale-95 pointer-events-none'}`}
            >
              <div className="mb-4 p-3 bg-white/10 rounded-full backdrop-blur-sm 
                            transform transition-transform duration-300 hover:scale-110">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 animate-fade-in">{step.title}</h3>
              <p className="text-slate-300 animate-fade-in">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-2 mt-auto">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentStep(index);
                if (!isPlaying) startAnimation();
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 transform hover:scale-150
                ${currentStep === index ? 'bg-indigo-400 w-4' : 'bg-slate-600'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-indigo-900 to-transparent"></div>
    </div>
  );
};

export default ProfileVideo;

