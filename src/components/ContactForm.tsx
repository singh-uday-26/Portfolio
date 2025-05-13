
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing again
    if (formError) setFormError(null);
    if (formSuccess) setFormSuccess(false);
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      consent: checked
    }));
    
    // Clear errors when user changes consent
    if (formError) setFormError(null);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setFormError(null);
    setFormSuccess(false);
    setIsSubmitting(true);
    
    // Validate form data
    if (!formData.name.trim()) {
      setFormError("Please enter your name");
      setIsSubmitting(false);
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid email address");
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.message.trim()) {
      setFormError("Please enter your message");
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.consent) {
      setFormError("Please agree to be contacted");
      setIsSubmitting(false);
      return;
    }
    
    console.log("Submitting form data:", formData);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          message: formData.message,
          consent: formData.consent
        }]);
        
      console.log("Supabase response:", error ? `Error: ${error.message}` : "Success");
        
      if (error) {
        console.error('Database error:', error);
        throw new Error(error.message || "Failed to submit form");
      }
      
      // Show success message
      setFormSuccess(true);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        consent: false
      });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setFormError(error.message || "There was a problem sending your message. Please try again.");
      toast({
        title: "Error",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formError && (
        <Alert variant="destructive" className="bg-red-600/20 border-red-400 text-white">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{formError}</AlertDescription>
        </Alert>
      )}
      
      {formSuccess && (
        <Alert className="bg-green-600/20 border-green-400 text-white">
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>Your message has been sent successfully!</AlertDescription>
        </Alert>
      )}
      
      <div className="group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/60 transition-all duration-300 group-hover:bg-white/15"
          disabled={isSubmitting}
        />
      </div>
      
      <div className="group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/60 transition-all duration-300 group-hover:bg-white/15"
          disabled={isSubmitting}
        />
      </div>
      
      <div className="group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={4}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/60 resize-none transition-all duration-300 group-hover:bg-white/15"
          disabled={isSubmitting}
        />
      </div>
      
      <div className="flex items-start space-x-2">
        <Checkbox 
          id="consent" 
          checked={formData.consent}
          onCheckedChange={handleCheckboxChange}
          className="border-white/30 data-[state=checked]:bg-indigo-400 data-[state=checked]:border-indigo-400"
          disabled={isSubmitting}
        />
        <label htmlFor="consent" className="text-sm text-white/80">
          I agree to be contacted regarding my message.
        </label>
      </div>
      
      <Button
        type="submit"
        className={`w-full bg-white hover:bg-white/90 text-indigo-700 font-medium py-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${isSubmitting ? 'opacity-75' : ''}`}
        disabled={isSubmitting || !formData.consent}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </div>
        ) : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
