"use client";

import { motion } from "framer-motion";
import { Target, Users, Award, BookOpen, Globe2, Sparkles } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Active Students", value: "50,000+" },
    { label: "Partner Companies", value: "500+" },
    { label: "Internships Posted", value: "10,000+" },
    { label: "Success Stories", value: "25,000+" },
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6 text-indigo-600" />,
      title: "Mission-Driven",
      description: "We are committed to bridging the gap between talent and opportunity across India.",
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Community First",
      description: "Building a supportive ecosystem where students and mentors can thrive together.",
    },
    {
      icon: <Award className="h-6 w-6 text-indigo-600" />,
      title: "Excellence",
      description: "Partnering with top-tier companies to ensure the highest quality experiences.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
      title: "Continuous Learning",
      description: "Fostering an environment where every internship is a stepping stone to mastery.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-800 text-white rounded-b-[3rem] lg:rounded-b-[4rem]">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid-about" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-about)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-indigo-100 text-sm font-semibold mb-6 border border-white/20">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering the Next Generation of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 block mt-2">
                Leaders & Innovators
              </span>
            </h1>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-10">
              Bharat Internz was founded with a single purpose: to connect ambitious students with life-changing internship opportunities that shape their futures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 w-full mb-20">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold mb-4 text-sm uppercase tracking-wider">
              <Sparkles className="h-4 w-4" /> The Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Building a stronger workforce for tomorrow's challenges.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We envision a world where every student has equal access to high-quality practical learning experiences, regardless of their background or location.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              By partnering with industry leaders and fast-growing startups, we've curated an ecosystem that prioritizes mentorship, skill-building, and real-world impact over traditional rote learning.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Students collaborating" 
                className="object-cover w-full h-full"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block z-20">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Globe2 className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Pan-India Reach</div>
                  <div className="text-xl font-bold text-slate-900">28 States</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-24 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 text-lg">The principles that guide everything we do at Bharat Internz.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
