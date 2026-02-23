"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { MapPin, Briefcase, Clock, IndianRupee, Bookmark, Send, ChevronRight, X } from "lucide-react";

type InternshipDetail = {
  id: string;
  title: string;
  company: string;
  location: string;
  job_type: string;
  duration: string;
  stipend: string | null;
  description: string;
  html_description: string | null;
  category: string;
  tags: string[];
  external_url: string | null;
  created_at: string;
  application_deadline: string | null;
};

export default function InternshipDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  
  const [job, setJob] = useState<InternshipDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/internships/${id}`);
        if (res.ok) {
          const data = await res.json();
          setJob(data);
        } else {
          router.push("/internships");
        }
      } catch (err) {
        console.error("Failed to fetch job:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchJob();
  }, [id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!job) return null;

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm">
          <Link href="/" className="text-slate-500 hover:text-indigo-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <Link href="/internships" className="text-slate-500 hover:text-indigo-600 transition-colors">Internships</Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-indigo-600 font-medium truncate max-w-[200px] sm:max-w-none">{job.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 md:items-start justify-between">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex-shrink-0 flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                  {job.company.charAt(0)}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">{job.title}</h1>
                  <h2 className="text-lg text-slate-600 font-medium mb-4">{job.company}</h2>
                  <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm font-medium text-slate-600">
                    {job.location && (
                      <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <MapPin className="w-4 h-4 text-slate-400" /> {job.location}
                      </span>
                    )}
                    {job.job_type && (
                      <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 capitalize">
                        <Briefcase className="w-4 h-4 text-slate-400" /> {job.job_type.replace(/_/g, " ")}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 md:flex-col lg:flex-row w-full md:w-auto mt-4 md:mt-0">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white text-slate-600 border border-slate-300 font-medium px-6 py-2.5 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
                  <Bookmark className="w-4 h-4" /> Save
                </button>
                <button 
                  onClick={() => job.external_url ? window.open(job.external_url, "_blank") : setIsModalOpen(true)}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
                >
                  <Send className="w-4 h-4" /> Apply Now
                </button>
              </div>
            </div>

            {/* Description Details */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-8">
              
              <section>
                <h3 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">About the Role</h3>
                <div className="prose prose-slate max-w-none text-slate-600" dangerouslySetInnerHTML={{ __html: job.html_description || job.description.replace(/\n/g, "<br/>") }} />
              </section>

              {job.tags && job.tags.length > 0 && (
                <section>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">Tags / Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-6 pb-2 border-b border-slate-100">Job Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600"><IndianRupee className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Stipend / Salary</p>
                    <p className="font-medium text-slate-800 mt-0.5">{job.stipend || "Not specified"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><Clock className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Duration</p>
                    <p className="font-medium text-slate-800 mt-0.5">{job.duration || "Not specified"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="font-medium text-slate-800 mt-0.5">{job.location || "Remote"}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg text-center">
               <h3 className="text-xl font-bold mb-2">Ready to Apply?</h3>
               <p className="text-indigo-100 mb-6 text-sm">Don't miss out on this opportunity.</p>
               <button 
                  onClick={() => job.external_url ? window.open(job.external_url, "_blank") : setIsModalOpen(true)}
                  className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl hover:scale-105 transition-transform shadow-md"
               >
                 Apply for this Internship
               </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Internal Application Modal (only shown if no external_url) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-800">Apply for Internship</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                  <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
                  <input type="email" className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Resume / CV *</label>
                  <input type="file" accept=".pdf,.doc,.docx" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500 text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" required />
                </div>
                <div>
                 <label className="block text-sm font-semibold text-slate-700 mb-1.5">Cover Letter</label>
                 <textarea rows={4} className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Tell us why you're a great fit..."></textarea>
                </div>
              </form>
            </div>
            
            <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
              <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 rounded-xl font-semibold text-slate-600 hover:bg-slate-200 transition-colors">
                Cancel
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); alert("Application submitted successfully!"); setIsModalOpen(false); }}
                className="px-6 py-2.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
