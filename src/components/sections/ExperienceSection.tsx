
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800 dark:text-slate-200">
          Experience
        </h2>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>
          
          {/* Experience Item 1 */}
          <div className="relative mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-semibold mb-1 text-slate-800 dark:text-slate-200">Smart India Hackathon (SIH)</h3>
                <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium rounded-full mb-2">2024</span>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Team Developer - Government of India</p>
              </div>
              
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-indigo-600 dark:bg-indigo-500 rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <div className="w-full md:w-1/2 md:pl-12">
                <Card className="h-full">
                  <CardContent className="p-4">
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
                      <li>Collaborated in a high-pressure environment to build a complete software solution.</li>
                      <li>Practiced Agile, sprint planning, and version control tools for rapid deployment.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Experience Item 2 */}
          <div className="relative mb-12">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="w-full md:w-1/2 md:pl-12 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold mb-1 text-slate-800 dark:text-slate-200">Microsoft Hackathon (MSC - VITAP)</h3>
                <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium rounded-full mb-2">2024</span>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Hackathon Participant - Microsoft Student Chapter</p>
              </div>
              
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-indigo-600 dark:bg-indigo-500 rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                <Card className="h-full">
                  <CardContent className="p-4">
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 md:list-outside">
                      <li>Contributed to a team-based project emphasizing collaboration, documentation, and clean code.</li>
                      <li>Focused on user-centered design and scalable application architecture.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Experience Item 3 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-semibold mb-1 text-slate-800 dark:text-slate-200">Microsoft Student Chapter (MSC) - VIT-AP</h3>
                <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium rounded-full mb-2">2023 - 2024</span>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Tech Mentor & Event Coordinator</p>
              </div>
              
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-indigo-600 dark:bg-indigo-500 rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <div className="w-full md:w-1/2 md:pl-12">
                <Card className="h-full">
                  <CardContent className="p-4">
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
                      <li>Led technical workshops; mentored peers in project planning and communication skills.</li>
                      <li>Organized hackathons and seminars, enhancing stakeholder coordination and leadership.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
