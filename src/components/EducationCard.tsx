
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const EducationCard = () => {
  return (
    <Card className="transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl">
            <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                Vellore Institute of Technology (VIT-AP University)
              </h3>
              <span className="inline-flex items-center px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium rounded-full mt-2 md:mt-0">
                2023 - 2027
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
                  B.Tech in Computer Science and Engineering
                </p>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                  CGPA: 8.91
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Core Focus Areas
                  </h4>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Programming",
                    "Database Systems",
                    "Software Engineering"
                  ].map((area) => (
                    <div
                      key={area}
                      className="px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
