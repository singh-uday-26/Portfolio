
import EducationCard from "@/components/EducationCard";

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800 dark:text-slate-200">
          Education Journey
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <EducationCard />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
