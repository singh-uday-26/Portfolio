
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800 dark:text-slate-200">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Professional Summary</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Computer Science undergraduate with a passion for building innovative solutions 
              and solving complex problems. Focused on developing scalable applications 
              and exploring cutting-edge technologies.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              Actively engaged in competitive programming, open-source contributions, 
              and technical community building at VIT-AP University.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Personal Details</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="text-sm text-slate-500 dark:text-slate-400">Location</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">Saharanpur, Uttar Pradesh, India</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-sm text-slate-500 dark:text-slate-400">Email</span>
                    <a href="mailto:udaysingh240818@gmail.com" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                      udaysingh240818@gmail.com
                    </a>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-sm text-slate-500 dark:text-slate-400">Phone</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">+91-81268-52998</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</span>
                    <a href="https://linkedin.com/in/udaysingh2626" target="_blank" rel="noreferrer" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                      linkedin.com/in/udaysingh2626
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
