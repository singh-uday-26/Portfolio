
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface MobileMenuProps {
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
}

const MobileMenu = ({ scrollToSection, activeSection }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="relative">
      <CollapsibleTrigger asChild>
        <button className="p-2 text-slate-800 dark:text-slate-200">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </CollapsibleTrigger>
      
      <CollapsibleContent className="absolute top-full right-0 w-56 bg-white dark:bg-slate-800 shadow-lg rounded-lg mt-2 p-4 z-50">
        <div className="flex flex-col space-y-4">
          <button 
            onClick={() => handleLinkClick('home')} 
            className={`p-2 rounded-md ${activeSection === 'home' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleLinkClick('about')} 
            className={`p-2 rounded-md ${activeSection === 'about' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
          >
            About
          </button>
          <button 
            onClick={() => handleLinkClick('education')} 
            className={`p-2 rounded-md ${activeSection === 'education' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
          >
            Education
          </button>
          <button 
            onClick={() => handleLinkClick('experience')} 
            className={`p-2 rounded-md ${activeSection === 'experience' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
          >
            Experience
          </button>
          <button 
            onClick={() => handleLinkClick('projects')} 
            className={`p-2 rounded-md ${activeSection === 'projects' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => handleLinkClick('skills')} 
            className={`p-2 rounded-md ${activeSection === 'skills' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
          >
            Skills
          </button>
          <button 
            onClick={() => handleLinkClick('contact')} 
            className={`p-2 rounded-md ${activeSection === 'contact' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
          >
            Contact
          </button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MobileMenu;
