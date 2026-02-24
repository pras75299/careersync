"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-24 pb-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold mb-4 text-sm uppercase tracking-wider bg-indigo-100 px-4 py-1.5 rounded-full">
            <MessageSquare className="h-4 w-4" /> Reach Out
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you have a question about placements, partnership opportunities, or just want to say hi, our team is ready to help.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid lg:grid-cols-5 min-h-[600px]">
            
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2 bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <defs>
                    <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-contact)" />
                </svg>
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p className="text-indigo-100 mb-12">Fill up the form and our Team will get back to you within 24 hours.</p>

                <div className="space-y-8 flex-grow">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-white/10 p-3 rounded-lg"><Phone className="h-6 w-6 text-amber-300" /></div>
                    <div>
                      <div className="text-sm text-indigo-200 mb-1">Call Us</div>
                      <div className="font-medium">+91 (800) 123-4567</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-white/10 p-3 rounded-lg"><Mail className="h-6 w-6 text-amber-300" /></div>
                    <div>
                      <div className="text-sm text-indigo-200 mb-1">Email Us</div>
                      <div className="font-medium">contact@bharatinternz.com</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-white/10 p-3 rounded-lg"><MapPin className="h-6 w-6 text-amber-300" /></div>
                    <div>
                      <div className="text-sm text-indigo-200 mb-1">Location</div>
                      <div className="font-medium leading-relaxed">
                        123 Tech Park, Phase 2<br/>
                        HSR Layout, Bengaluru<br/>
                        Karnataka 560102
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative blob */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3 p-10 lg:p-14">
              {formStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-10 h-10 text-green-600 ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-500 max-w-md">
                    Thank you for reaching out. We have received your message and will respond as soon as possible.
                  </p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-8 text-indigo-600 font-semibold hover:text-indigo-700 underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={formStatus === "submitting"}
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Send Message <Send className="w-4 h-4 ml-1" /></>
                    )}
                  </motion.button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
