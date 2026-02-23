"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Play, Code, LineChart, Palette } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-800 text-white min-h-[85vh] flex items-center">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">Launch Your Career</span>
              <br/>with the Perfect Internship
            </h1>
            
            <p className="text-lg md:text-xl text-indigo-100 max-w-lg">
              Discover thousands of internship opportunities from top companies across India.
              Build your skills, gain experience, and kickstart your professional journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/internships" className="flex items-center justify-center gap-2 bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all">
                  <Search className="h-5 w-5" />
                  Find Internships
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#how-it-works" className="flex items-center justify-center gap-2 bg-transparent border-2 border-indigo-200 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all">
                  <Play className="h-5 w-5 fill-current" />
                  How It Works
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-indigo-400/30">
              <div>
                <h3 className="text-3xl font-bold">10k+</h3>
                <p className="text-indigo-200 text-sm">Active Internships</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-indigo-200 text-sm">Partner Companies</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">50k+</h3>
                <p className="text-indigo-200 text-sm">Placements</p>
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:block relative h-[500px]">
             {/* Floating elements mimicking the original custom floating cards */}
             
             <motion.div
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-10 left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl flex items-center gap-4 text-white font-medium"
             >
               <div className="bg-indigo-500/30 p-3 rounded-lg"><Code className="w-8 h-8" /></div>
               <span>Tech Internships</span>
             </motion.div>

             <motion.div
               animate={{ y: [0, 25, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl flex items-center gap-4 text-white font-medium"
             >
               <div className="bg-purple-500/30 p-3 rounded-lg"><LineChart className="w-8 h-8" /></div>
               <span>Business Analytics</span>
             </motion.div>

             <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
               className="absolute bottom-10 left-20 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl flex items-center gap-4 text-white font-medium"
             >
               <div className="bg-pink-500/30 p-3 rounded-lg"><Palette className="w-8 h-8" /></div>
               <span>Design & Marketing</span>
             </motion.div>
             
          </div>

        </div>
      </div>
    </section>
  );
}
