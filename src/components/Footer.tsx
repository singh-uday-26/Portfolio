
import { Github, Linkedin, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-900 text-white text-center">
      <div className="container mx-auto px-4">
        <p className="mb-4">© {new Date().getFullYear()} Uday Singh. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/udaysingh2626" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/udaysingh2626" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors">
            <FileText size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
