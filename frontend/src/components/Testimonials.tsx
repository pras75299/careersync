"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Developer at TechCorp",
      content: "CareerSync completely transformed my career trajectory. The sheer volume of high-quality verified internships on the platform made finding my dream role at a top tech company incredibly simple and stress-free.",
      avatar: "https://i.pravatar.cc/150?u=priya",
      companyLogo: "https://logo.clearbit.com/microsoft.com"
    },
    {
      name: "Rahul Kumar",
      role: "Data Analyst at DataViz",
      content: "The intelligent filtering system is phenomenal! It didn't just show me any jobs, it showed me exactly the data analytics roles I was qualified for. I landed an offer within two weeks of creating my profile.",
      avatar: "https://i.pravatar.cc/150?u=rahul",
      companyLogo: "https://logo.clearbit.com/amazon.com"
    },
    {
      name: "Ananya Singh",
      role: "Marketing Intern at GrowthHackers",
      content: "As a marketing student, finding structured internship programs was tough. This platform bridges that gap perfectly. The application process is buttery smooth, and knowing all companies are verified gave me complete peace of mind.",
      avatar: "https://i.pravatar.cc/150?u=ananya",
      companyLogo: "https://logo.clearbit.com/google.com"
    }
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center gap-2 mb-4 text-amber-500">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Trusted by Thousands of Students
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Look at the successful careers launched through our platform.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex flex-col items-center">
        {/* Fading edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        {/* Carousel track */}
        <div className="flex gap-8 px-4 py-8">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 shrink-0"
            // To make infinite scrolling work smoothly, we duplicate the content visually
          >
             {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-[400px] shrink-0 bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-slate-100 transition-all duration-300 relative group"
                >
                  <div className="absolute -top-5 left-10 w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-full flex items-center justify-center text-indigo-500 shadow-sm">
                    <Quote className="w-5 h-5" fill="currentColor" />
                  </div>
                  
                  <div className="flex gap-1 mb-6 mt-2 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>

                  <p className="text-slate-700 text-lg leading-relaxed mb-8 line-clamp-4 group-hover:line-clamp-none transition-all">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-4">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-slate-100 shadow-sm" />
                      <div>
                        <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                        <span className="text-sm text-slate-500 font-medium line-clamp-1">{testimonial.role}</span>
                      </div>
                    </div>
                    {/* Placeholder for company logo */}
                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center opacity-70 grayscale group-hover:grayscale-0 transition-all">
                      <BuildingLogo src={testimonial.companyLogo} />
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Simple fallback component if image fails to load (since we use clearbit which sometimes fails)
function BuildingLogo({ src }: { src: string }) {
  return (
    <img src={src} alt="Company" className="w-6 h-6 object-contain" onError={(e) => {
      e.currentTarget.style.display = 'none';
      e.currentTarget.parentElement!.innerHTML = '<span class="text-xs font-bold text-slate-400">Co</span>';
    }} />
  )
}
