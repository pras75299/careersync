"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, Building2, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Build a standout profile highlighting your skills, education, and passions. Our AI assistant helps you craft the perfect resume directly on the platform.",
      icon: <UserPlus className="w-8 h-8" />,
      color: "text-indigo-600",
      bg: "bg-indigo-100",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "02",
      title: "Discover Opportunities",
      description: "Get personalized internship recommendations based on your profile. Filter by role, location, stipend, and company culture to find your perfect match.",
      icon: <Search className="w-8 h-8" />,
      color: "text-fuchsia-600",
      bg: "bg-fuchsia-100",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "03",
      title: "Apply Seamlessly",
      description: "Apply to multiple companies with a single click. Track your application status in real-time and prepare for interviews with our curated resources.",
      icon: <Building2 className="w-8 h-8" />,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-50/50 rounded-bl-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-fuchsia-50/50 rounded-tr-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-4 block">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Your Journey to Success
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We've streamlined the entire process from discovery to placement, ensuring you land the right opportunity with minimal friction.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}>
              
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full"
              >
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-6xl font-black text-slate-100 leading-none tracking-tighter shadow-sm">{step.number}</span>
                  <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center shadow-inner`}>
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-6">{step.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {step.description}
                </p>

                <ul className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                       <CheckCircle2 className={`${step.color} w-5 h-5 flex-shrink-0`} />
                       <span>{index === 0 ? ['AI-powered resume builder', 'Portfolio integration', 'Skill verification'][i] : index === 1 ? ['Smart matching algorithm', 'Advanced filtering options', 'Verified company profiles'][i] : ['One-click applications', 'Real-time status tracking', 'Interview preparation guides'][i]}</span>
                     </li>
                  ))}
                </ul>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full relative"
              >
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500 z-10"></div>
                  <img src={step.image} alt={step.title} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                </div>
                
                {/* Decorative floating element */}
                <div className={`absolute ${index % 2 !== 0 ? '-left-8' : '-right-8'} -bottom-8 w-24 h-24 ${step.bg} rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse`}></div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
