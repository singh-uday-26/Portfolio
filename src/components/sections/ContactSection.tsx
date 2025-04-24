
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import ContactForm from "@/components/ContactForm";
import { useIsMobile } from "@/hooks/use-mobile";

const ContactSection = () => {
  const isMobile = useIsMobile();

  return (
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
                href="mailto:uday.singh240818@gmail.com" 
                className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors transform hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                <Mail className="mr-3" size={isMobile ? 18 : 20} />
                <div>
                  <p className="text-sm opacity-75">Email</p>
                  <p className="font-medium">uday.singh240818@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/udaysingh2626" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors transform hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                <Linkedin className="mr-3" size={isMobile ? 18 : 20} />
                <div>
                  <p className="text-sm opacity-75">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/udaysingh2626</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/udaysingh2626" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors transform hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                <Github className="mr-3" size={isMobile ? 18 : 20} />
                <div>
                  <p className="text-sm opacity-75">GitHub</p>
                  <p className="font-medium">github.com/udaysingh2626</p>
                </div>
              </a>
              
              <a 
                href="tel:+918126852998" 
                className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors transform hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                <Phone className="mr-3" size={isMobile ? 18 : 20} />
                <div>
                  <p className="text-sm opacity-75">Phone</p>
                  <p className="font-medium">+91-81268-52998</p>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-lg">
              <h4 className="text-xl font-medium mb-4">My LinkedIn Highlights</h4>
              <div className="space-y-2">
                <p className="text-sm">• Computer Science student at VIT-AP University</p>
                <p className="text-sm">• Skilled in Python, Java & Web Development</p>
                <p className="text-sm">• Passionate about AI & Machine Learning</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
