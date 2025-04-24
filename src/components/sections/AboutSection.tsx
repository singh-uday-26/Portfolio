
import ProfileVideo from "@/components/ProfileVideo";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="max-w-lg space-y-6">
              <div className="inline-block bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium mb-2">
                Computer Science Student
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Professional Summary</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Computer Science undergraduate with a passion for building innovative solutions
                and solving complex problems. Focused on developing scalable applications
                and exploring cutting-edge technologies.
              </p>
              
              <p className="text-slate-600 dark:text-slate-300">
                Actively engaged in competitive programming, open-source contributions,
                and technical community building at VIT-AP University.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Personal Details</h3>
                <ul className="space-y-2">
                  <li className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-slate-200 dark:border-slate-700">
                    <span className="font-medium text-slate-900 dark:text-white w-32">Location:</span>
                    <span className="text-slate-600 dark:text-slate-300">Saharanpur, Uttar Pradesh, India</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-slate-200 dark:border-slate-700">
                    <span className="font-medium text-slate-900 dark:text-white w-32">Email:</span>
                    <a href="mailto:uday.singh240818@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">uday.singh240818@gmail.com</a>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-slate-200 dark:border-slate-700">
                    <span className="font-medium text-slate-900 dark:text-white w-32">Phone:</span>
                    <a href="tel:+918126852998" className="text-indigo-600 dark:text-indigo-400 hover:underline">+91-81268-52998</a>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center py-2">
                    <span className="font-medium text-slate-900 dark:text-white w-32">LinkedIn:</span>
                    <a href="https://linkedin.com/in/udaysingh2626" target="_blank" rel="noopener" className="text-indigo-600 dark:text-indigo-400 hover:underline">linkedin.com/in/udaysingh2626</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <ProfileVideo />
            <p className="text-sm text-center mt-4 text-slate-500 dark:text-slate-400">
              Interactive profile showcase — click play to learn about my skills
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
