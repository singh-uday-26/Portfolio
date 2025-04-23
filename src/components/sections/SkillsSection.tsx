
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import SkillTag from "@/components/SkillTag";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-purple-50/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800 dark:text-slate-200">
          Core Skills
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="w-full flex mb-8">
              <TabsTrigger value="technical" className="flex-1">
                Technical Skills
              </TabsTrigger>
              <TabsTrigger value="soft" className="flex-1">
                Soft Skills
              </TabsTrigger>
              <TabsTrigger value="certifications" className="flex-1">
                Certifications
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Programming Languages</h3>
                <div className="space-y-4">
                  <SkillTag name="Python" level={90} />
                  <SkillTag name="Java" level={85} />
                  <SkillTag name="JavaScript" level={82} />
                  <SkillTag name="SQL" level={80} />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Web Development</h3>
                <div className="space-y-4">
                  <SkillTag name="React" level={85} />
                  <SkillTag name="Node.js" level={80} />
                  <SkillTag name="HTML/CSS" level={90} />
                  <SkillTag name="TypeScript" level={75} />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="soft">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <SkillTag name="Communication" level={95} />
                      <SkillTag name="Team Leadership" level={85} />
                      <SkillTag name="Problem Solving" level={90} />
                      <SkillTag name="Time Management" level={88} />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <SkillTag name="Adaptability" level={92} />
                      <SkillTag name="Critical Thinking" level={88} />
                      <SkillTag name="Creativity" level={85} />
                      <SkillTag name="Project Management" level={87} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="certifications">
              <div className="grid gap-6">
                {[
                  {
                    title: "Business Communication",
                    provider: "Coursera",
                    date: "2024",
                    credentialId: "BC123456"
                  },
                  {
                    title: "Excel for Business: Essentials",
                    provider: "Macquarie University",
                    date: "2023",
                    credentialId: "EBE789012"
                  },
                  {
                    title: "HR Management Foundations",
                    provider: "LinkedIn Learning",
                    date: "2023",
                    credentialId: "HRM345678"
                  }
                ].map((cert) => (
                  <Card key={cert.credentialId} className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">{cert.title}</h3>
                          <p className="text-sm opacity-75">{cert.provider}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-slate-500 dark:text-slate-400">{cert.date}</span>
                          <span className="text-xs text-slate-400 dark:text-slate-500">ID: {cert.credentialId}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
