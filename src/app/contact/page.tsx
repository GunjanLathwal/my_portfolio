"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Mail, MapPin, Send, Loader2, CheckCircle2, Phone, Download, Clock } from "lucide-react";
import Link from "next/link";
import { Github } from "@/components/icons/Github";
import { Linkedin } from "@/components/icons/Linkedin";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    
    window.location.href = `mailto:gunjan251492@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
    setIsSubmitting(false);
  };

  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold font-heading mb-4"
        >
          Let's <span className="text-gradient">Connect</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted max-w-2xl mx-auto text-lg"
        >
          Whether you're hiring for a Software Engineer role, looking for a Full Stack Developer, discussing AI-powered products, or collaborating on innovative software solutions, I'd love to connect.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="p-8 rounded-3xl bg-card border border-border glass h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
            
            <h2 className="text-2xl font-bold font-heading mb-8 relative z-10">Contact Information</h2>
            
            <div className="space-y-6 relative z-10">
              <a href="mailto:gunjan251492@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted">Email</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">gunjan251492@gmail.com</p>
                </div>
              </a>

              <a href="tel:+917206028904" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-success group-hover:scale-110 group-hover:bg-success/10 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted">Phone</p>
                  <p className="font-medium text-foreground group-hover:text-success transition-colors">+91 7206028904</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary/10 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted">Location</p>
                  <p className="font-medium text-foreground">Gurugram, Haryana, India</p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-border" />

            <div>
              <p className="text-sm font-medium text-muted mb-4">Connect with me on</p>
              <div className="flex gap-4">
                <Link href="https://linkedin.com/in/gunjan-lathwal" target="_blank" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="https://github.com/GunjanLathwal" target="_blank" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all hover:scale-110">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="/resume.pdf" target="_blank" download="Gunjan_Lathwal_Resume.pdf" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110" title="Download Resume">
                  <Download className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="font-semibold text-foreground">Currently Open To</h3>
              <ul className="space-y-2">
                {['Software Engineer', 'Backend Engineer', 'Full Stack Developer', 'AI Engineer', 'Internship / Full-Time Opportunities'].map((role, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center gap-3 text-sm text-muted">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Average Response Time: <strong className="text-foreground">&lt; 24 Hours</strong></span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-7"
        >
          <div className="p-8 md:p-10 rounded-3xl bg-card border border-border glass relative">
            
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-card rounded-3xl z-20 backdrop-blur-md text-center p-8"
              >
                <div className="w-20 h-20 bg-success/20 text-success rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-2">Message Sent!</h3>
                <p className="text-muted">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : null}

            <h2 className="text-2xl font-bold font-heading mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Name</label>
                  <input 
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.name ? 'border-red-500' : 'border-border'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <input 
                    {...register("email")}
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.email ? 'border-red-500' : 'border-border'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Subject</label>
                <input 
                  {...register("subject")}
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.subject ? 'border-red-500' : 'border-border'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                  placeholder="Job Opportunity / Freelance Project"
                />
                {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea 
                  {...register("message")}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.message ? 'border-red-500' : 'border-border'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
