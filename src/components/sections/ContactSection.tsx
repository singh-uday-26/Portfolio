
import { Github, Linkedin, Mail } from 'lucide-react';
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
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
  );
};

export default ContactSection;
