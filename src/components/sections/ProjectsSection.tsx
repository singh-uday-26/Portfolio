
import { Code } from 'lucide-react';
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-slate-800 dark:text-slate-200">
          Featured Projects
        </h2>
        
        <p className="text-center mb-16 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
          A showcase of my technical projects, focusing on innovative solutions and clean code implementation.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Image Classification System"
            description="Developed a CNN-based image classification system achieving 95% accuracy through advanced deep learning techniques."
            tags={["Python", "TensorFlow", "Deep Learning"]}
            icon={<Code size={24} className="text-indigo-500" />}
          />
          
          <ProjectCard
            title="Full-Stack Social Platform"
            description="Built a scalable social media platform with real-time features and robust authentication system."
            tags={["Node.js", "React", "MongoDB"]}
            icon={<Code size={24} className="text-indigo-500" />}
          />
          
          <ProjectCard
            title="Algorithmic Trading Bot"
            description="Created an automated trading system using machine learning for market prediction and portfolio optimization."
            tags={["Python", "ML", "API Integration"]}
            icon={<Code size={24} className="text-indigo-500" />}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
