"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, LogIn, UserPlus } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Check on initial load
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Decide whether navbar should be transparent or solid white based on page and scroll
  const isDarkArea = pathname === "/" || pathname === "/about";
  const isTransparent = isDarkArea && !scrolled;

  const navBgClass = isTransparent 
    ? "bg-transparent border-transparent" 
    : "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm";
    
  const textClass = isTransparent 
    ? "text-slate-200 hover:text-white" 
    : "text-slate-600 hover:text-[#6338EE]";
    
  const logoClass = "bg-clip-text text-transparent bg-gradient-to-r from-[#6338EE] to-[#8b5cf6]";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className={`text-2xl font-bold tracking-tight ${logoClass}`}>
              CareerSync
            </Link>
          </div>
          
          {/* Main Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/internships" className={`font-medium transition-colors ${textClass}`}>
              Find Internships
            </Link>
            <Link href="/about" className={`font-medium transition-colors ${textClass}`}>
              About
            </Link>
            <Link href="/contact" className={`font-medium transition-colors ${textClass}`}>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className={`focus:outline-none ${isTransparent ? 'text-white' : 'text-slate-600'}`}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
