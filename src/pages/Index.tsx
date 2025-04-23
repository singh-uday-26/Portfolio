import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail, Code, FileText } from "lucide-react";
import SkillTag from "@/components/SkillTag";
import EducationCard from "@/components/EducationCard";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">US<span className="text-gradient">.</span></a>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`nav-link ${activeSection === 'home' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`nav-link ${activeSection === 'about' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('education')} 
              className={`nav-link ${activeSection === 'education' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className={`nav-link ${activeSection === 'experience' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className={`nav-link ${activeSection === 'projects' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className={`nav-link ${activeSection === 'skills' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`nav-link ${activeSection === 'contact' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
            >
              Contact
            </button>
          </div>
          
          <div className="md:hidden">
            <MobileMenu scrollToSection={scrollToSection} activeSection={activeSection} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-indigo-100/30 to-transparent dark:from-indigo-900/10"></div>
        <div className="absolute inset-0 bg-pattern opacity-[0.015] dark:opacity-[0.03]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
              Computer Science Undergraduate
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              Building The Future<br/>Through Code
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-300 animate-fade-in">
              Hi, I'm Uday Singh
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto animate-fade-in">
              Transforming ideas into elegant solutions through innovative software development
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-all transform hover:-translate-y-1"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 text-slate-800 dark:text-slate-200 font-medium rounded-md transition-all transform hover:-translate-y-1"
              >
                Get in Touch
              </button>
            </div>
            
            <div className="mt-12 flex justify-center gap-6">
              <a href="https://github.com/udaysingh2626" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/udaysingh2626" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:udaysingh240818@gmail.com" className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Education Section */}
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

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800 dark:text-slate-200">
            Experience
          </h2>
          
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline center line */}
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

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-slate-800 dark:text-slate-200">
            Featured Projects
          </h2>
          
          <p className="text-center mb-16 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            A showcase of my technical projects, focusing on innovative solutions and clean code implementation.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <ProjectCard
              title="Image Classification System"
              description="Developed a CNN-based image classification system achieving 95% accuracy through advanced deep learning techniques."
              tags={["Python", "TensorFlow", "Deep Learning"]}
              icon={<Code size={24} className="text-indigo-500" />}
            />
            
            {/* Project Card 2 */}
            <ProjectCard
              title="Full-Stack Social Platform"
              description="Built a scalable social media platform with real-time features and robust authentication system."
              tags={["Node.js", "React", "MongoDB"]}
              icon={<Code size={24} className="text-indigo-500" />}
            />
            
            {/* Project Card 3 */}
            <ProjectCard
              title="Algorithmic Trading Bot"
              description="Created an automated trading system using machine learning for market prediction and portfolio optimization."
              tags={["Python", "ML", "API Integration"]}
              icon={<Code size={24} className="text-indigo-500" />}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Get In Touch
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:udaysingh240818@gmail.com" 
                  className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Mail className="mr-3" size={20} />
                  <div>
                    <p className="text-sm opacity-75">Email</p>
                    <p className="font-medium">udaysingh240818@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/udaysingh2626" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Linkedin className="mr-3" size={20} />
                  <div>
                    <p className="text-sm opacity-75">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/udaysingh2626</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/udaysingh2626" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Github className="mr-3" size={20} />
                  <div>
                    <p className="text-sm opacity-75">GitHub</p>
                    <p className="font-medium">github.com/udaysingh2626</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+918126852998" 
                  className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <div className="mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-75">Phone</p>
                    <p className="font-medium">+91-81268-52998</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
