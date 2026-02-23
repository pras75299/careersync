import Link from "next/link";
import { Briefcase, Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Bharat Internz
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/internships" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
              Browse Internships
            </Link>
            <Link href="#about" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-slate-600 hover:text-indigo-600 focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
