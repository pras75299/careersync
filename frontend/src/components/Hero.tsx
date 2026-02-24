"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Play, Code, LineChart, Palette, Sparkles, MoveRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[90vh] flex items-center pt-20">
      
      {/* Complex Premium Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/30 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-600/20 blur-[120px]"
        />
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-blue-500/20 blur-[80px]"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-20 pt-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="xl:col-span-6 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-indigo-200">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>The #1 Internship Platform in India</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Launch Your Career
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400">
                With The Perfect Internship
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-xl font-light leading-relaxed">
              Discover verified opportunities from top-tier companies and hyper-growth startups. Accelerate your professional journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/internships">
                <motion.button 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold px-8 py-4 rounded-2xl hover:bg-slate-100 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] ring-1 ring-white/50"
                >
                  <Search className="h-5 w-5" />
                  Explore Internships
                </motion.button>
              </Link>
              <Link href="#how-it-works">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }} 
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-2xl backdrop-blur-md transition-colors"
                >
                  <Play className="h-5 w-5 fill-current opacity-80" />
                  How It Works
                </motion.button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-white/10">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-slate-950 flex items-center justify-center font-bold text-xs shadow-sm shadow-black/50 ${
                    i===1 ? 'bg-blue-500' : i===2 ? 'bg-purple-500' : i===3 ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}>
                    {String.fromCharCode(64+i)}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs font-semibold backdrop-blur-md">
                  +50k
                </div>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                  <Star className="w-4 h-4 fill-current"/>
                  <Star className="w-4 h-4 fill-current"/>
                  <Star className="w-4 h-4 fill-current"/>
                  <Star className="w-4 h-4 fill-current"/>
                  <Star className="w-4 h-4 fill-current"/>
                </div>
                <span className="text-slate-400">Trusted by students</span>
              </div>
            </div>
          </motion.div>

          {/* Right Floating UI Elements */}
          <div className="hidden xl:block xl:col-span-6 relative h-[600px] w-full perspective-1000">
             
             {/* Main Graphic Backdrop */}
             <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[3rem] border border-white/10 backdrop-blur-3xl transform rotate-3 scale-95 origin-bottom-right"></div>
             
             {/* Floating Card 1: Job Match */}
             <motion.div
               initial={{ opacity: 0, y: 50, x: 20 }}
               animate={{ opacity: 1, y: [0, -15, 0], x: 0 }}
               transition={{ 
                 opacity: { duration: 0.8, delay: 0.2 },
                 y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
               }}
               className="absolute top-10 right-10 w-72 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-20"
             >
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                   <Code className="w-6 h-6 text-indigo-400" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-white">Frontend Developer</h3>
                   <p className="text-xs text-slate-400">TechCorp Inc.</p>
                 </div>
               </div>
               <div className="flex items-center justify-between text-xs font-medium">
                 <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">₹40k/mo</span>
                 <span className="text-slate-500 flex items-center gap-1">Remote <MoveRight className="w-3 h-3"/></span>
               </div>
             </motion.div>

             {/* Floating Card 2: Analytics */}
             <motion.div
               initial={{ opacity: 0, y: 50, x: -20 }}
               animate={{ opacity: 1, y: [0, 20, 0], x: 0 }}
               transition={{ 
                 opacity: { duration: 0.8, delay: 0.4 },
                 y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
               }}
               className="absolute top-1/2 left-0 -translate-y-1/2 w-64 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-20"
             >
               <div className="flex items-center justify-between mb-4">
                 <h3 className="font-semibold text-white text-sm">Application Status</h3>
                 <LineChart className="w-4 h-4 text-purple-400" />
               </div>
               <div className="space-y-3">
                 <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 w-[85%] rounded-full"></div>
                 </div>
                 <p className="text-xs text-slate-400 text-right">85% Match Rate</p>
               </div>
             </motion.div>

             {/* Floating Card 3: New Opportunity */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: [0, -10, 0] }}
               transition={{ 
                 opacity: { duration: 0.8, delay: 0.6 },
                 y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }
               }}
               className="absolute bottom-10 right-20 w-80 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl z-30"
             >
               <div className="flex gap-4 items-center">
                 <div className="relative">
                   <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center shadow-inner">
                     <Palette className="w-5 h-5 text-white" />
                   </div>
                   <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-900"></div>
                 </div>
                 <div className="flex-1">
                   <p className="text-xs text-indigo-300 font-medium mb-0.5">New Opportunity!</p>
                   <h3 className="font-semibold text-white text-sm">UI/UX Design Intern</h3>
                 </div>
                 <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                   <MoveRight className="w-4 h-4 text-white" />
                 </button>
               </div>
             </motion.div>
             
          </div>

        </div>
      </div>
    </section>
  );
}
