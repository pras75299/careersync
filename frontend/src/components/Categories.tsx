"use client";

import { motion } from "framer-motion";
import { Code, Megaphone, Paintbrush, Briefcase, ChevronRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      id: "technology",
      title: "Technology & Engineering",
      description: "Software Development, Data Science, Cloud Computing & AI/ML",
      jobs: "2,500+",
      trend: "+12% this week",
      icon: <Code className="h-6 w-6 text-indigo-600" />,
      bgIcon: <Code className="h-32 w-32 text-indigo-500 opacity-5" />,
      color: "bg-indigo-50",
      accent: "bg-indigo-600",
    },
    {
      id: "design",
      title: "Design & Creative",
      description: "UI/UX Design, Graphic Design, Product Design & Animation",
      jobs: "800+",
      trend: "+5% this week",
      icon: <Paintbrush className="h-6 w-6 text-fuchsia-600" />,
      bgIcon: <Paintbrush className="h-32 w-32 text-fuchsia-500 opacity-5" />,
      color: "bg-fuchsia-50",
      accent: "bg-fuchsia-600",
    },
    {
      id: "business",
      title: "Business & Management",
      description: "Finance, Operations, Strategy, HR & Project Management",
      jobs: "1,500+",
      trend: "+8% this week",
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      bgIcon: <Briefcase className="h-32 w-32 text-blue-500 opacity-5" />,
      color: "bg-blue-50",
      accent: "bg-blue-600",
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      description: "Content Creation, SEO, Social Media & Performance Marketing",
      jobs: "1,200+",
      trend: "+15% this week",
      icon: <Megaphone className="h-6 w-6 text-amber-600" />,
      bgIcon: <Megaphone className="h-32 w-32 text-amber-500 opacity-5" />,
      color: "bg-amber-50",
      accent: "bg-amber-500",
    }
  ];

  return (
    <section className="py-32 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Explore Popular Categories
            </h2>
            <p className="text-lg text-slate-600">
              Find the specific role you are looking for. We have opportunities across all major industries from top companies.
            </p>
          </div>
          <Link href="/internships">
            <motion.button 
              whileHover={{ x: 5 }}
              className="group flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
            >
              View all categories 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/internships?category=${category.id}`}>
                <div className="group relative bg-white rounded-3xl p-8 overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-500 cursor-pointer h-full">
                  
                  {/* Background Accents */}
                  <div className={`absolute top-0 left-0 w-2 h-full ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="absolute -bottom-10 -right-10 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700">
                    {category.bgIcon}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center shadow-inner`}>
                        {category.icon}
                      </div>
                      <div className="flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-100">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {category.trend}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed max-w-sm">
                        {category.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-slate-900">{category.jobs}</span>
                        <span className="text-slate-500 ml-2 text-sm">Active Roles</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
