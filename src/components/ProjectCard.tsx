
import React, { ReactNode } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: ReactNode;
}

const ProjectCard = ({ title, description, tags, icon }: ProjectCardProps) => {
  return (
    <Card className="transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm h-full flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{title}</h3>
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
            {icon}
          </div>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
