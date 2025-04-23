
import { Slider } from "@/components/ui/slider";

interface SkillTagProps {
  name: string;
  level: number;
  showSlider?: boolean;
}

const SkillTag = ({ name, level, showSlider = true }: SkillTagProps) => {
  return (
    <div className="group relative bg-white dark:bg-slate-800 rounded-lg p-4 transition-all duration-300 hover:shadow-lg border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-700 dark:text-slate-300 font-medium">{name}</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
          {level}%
        </span>
      </div>
      
      {showSlider && (
        <Slider
          defaultValue={[level]}
          max={100}
          step={1}
          disabled
          className="cursor-default"
        />
      )}
    </div>
  );
};

export default SkillTag;
