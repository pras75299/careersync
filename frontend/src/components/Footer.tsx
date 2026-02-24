"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive CTA Section built right into the footer */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-800 rounded-3xl p-10 md:p-16 mb-20 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Ready to kickstart your career?</h2>
              <p className="text-indigo-100 text-lg">Join over 50,000 students who have found their dream internships through our platform.</p>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-auto">
              <Link href="/internships">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-indigo-900 font-bold px-8 py-5 rounded-2xl shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:bg-slate-50 transition-colors"
                >
                  Create Your Free Profile
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        {/* Traditional Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-lg">C</span>
                </div>
                CareerSync
              </span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Empowering the next generation of leaders with premium internship opportunities across India's top companies.
            </p>
            
            <form className="relative max-w-sm mb-8">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="email" 
                placeholder="Subscribe to our newsletter" 
                className="w-full bg-slate-900 border border-slate-800 text-white px-12 py-4 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-lg transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 transition-all" /> Home</Link></li>
              <li><Link href="/internships" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 transition-all" /> Browse Internships</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 transition-all" /> About Us</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 transition-all" /> Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Resume Tips</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Interview Guide</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Career Blog</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Legal & Support</h4>
            <ul className="space-y-4 mb-8">
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800/50 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CareerSync. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Made with precision in India.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
