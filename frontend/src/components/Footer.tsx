import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Bharat Internz</h3>
            <p className="text-slate-400 mb-6">Connecting students with the best internship opportunities across India.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-400 hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link href="/internships" className="text-slate-400 hover:text-indigo-400 transition-colors">Browse Internships</Link></li>
              <li><Link href="#about" className="text-slate-400 hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/internships?category=technology" className="text-slate-400 hover:text-indigo-400 transition-colors">Technology</Link></li>
              <li><Link href="/internships?category=marketing" className="text-slate-400 hover:text-indigo-400 transition-colors">Marketing</Link></li>
              <li><Link href="/internships?category=design" className="text-slate-400 hover:text-indigo-400 transition-colors">Design</Link></li>
              <li><Link href="/internships?category=business" className="text-slate-400 hover:text-indigo-400 transition-colors">Business</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Bharat Internz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
