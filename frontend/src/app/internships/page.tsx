"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, MapPin, Briefcase, Clock, IndianRupee, X } from "lucide-react";

type Internship = {
  id: string;
  title: string;
  company: string;
  location: string;
  job_type: string;
  duration: string;
  stipend: string | null;
  description: string;
  category: string;
  tags: string[];
  external_url: string | null;
  created_at: string;
  application_deadline: string | null;
};

export default function InternshipsPage() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [filtered, setFiltered] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filters state
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    // In a real app we'd fetch with query params from the API.
    // For now we fetch all and filter on client side.
    const fetchInternships = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/internships");
        if (res.ok) {
          const data = await res.json();
          setInternships(data);
          setFiltered(data);
        }
      } catch (err) {
        console.error("Failed to fetch internships:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchInternships();
  }, []);

  useEffect(() => {
    let result = internships;
    
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(v => 
        v.title.toLowerCase().includes(q) || 
        v.company.toLowerCase().includes(q) ||
        v.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    
    if (category) {
      // In our fetcher we mapped mostly to "technology", but handling general match
      result = result.filter(v => v.category.toLowerCase().includes(category.toLowerCase()));
    }
    
    if (location) {
      result = result.filter(v => v.location.toLowerCase().includes(location.toLowerCase()));
    }
    
    if (type) {
      result = result.filter(v => v.job_type.toLowerCase() === type.toLowerCase());
    }

    setFiltered(result);
  }, [search, category, location, type, internships]);

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setLocation("");
    setType("");
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Internship</h1>
        <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
          Discover thousands of opportunities from top companies
        </p>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-slate-100">
          <div className="relative mb-6 max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-10 pr-3 py-4 border-2 border-slate-200 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
              placeholder="Search by job title, company, or skills..."
            />
          </div>

          <div className="flex flex-wrap gap-4 items-end justify-center">
            <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[150px]">
              <label className="text-sm font-semibold text-slate-700">Category</label>
              <select 
                value={category} onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-2.5 px-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              >
                <option value="">All Categories</option>
                <option value="technology">Technology</option>
                <option value="marketing">Marketing</option>
                <option value="design">Design</option>
                <option value="business">Business</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[150px]">
              <label className="text-sm font-semibold text-slate-700">Location</label>
              <select 
                value={location} onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-2.5 px-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              >
                <option value="">All Locations</option>
                <option value="remote">Remote</option>
                <option value="bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[150px]">
              <label className="text-sm font-semibold text-slate-700">Type</label>
              <select 
                value={type} onChange={(e) => setType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-2.5 px-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              >
                <option value="">All Types</option>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="on-site">On-site</option>
              </select>
            </div>

            <button 
              onClick={clearFilters}
              className="flex items-center justify-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 font-semibold py-2.5 px-4 rounded-lg w-full sm:w-auto transition-colors h-[42px]"
            >
              <X className="w-4 h-4" /> Clear 
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-slate-700">
            {loading ? "Loading internships..." : `Showing ${filtered.length} internships`}
          </h3>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm animate-pulse">
                <div className="w-12 h-12 bg-slate-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-slate-200 rounded w-1/2 mb-6"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-slate-200 rounded w-full"></div>
                  <div className="h-3 bg-slate-200 rounded w-4/5"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-100 shadow-sm">
            <Search className="w-16 h-16 mx-auto text-slate-300 mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">No internships found</h3>
            <p className="text-slate-500 mb-6">Try adjusting your search criteria or filters</p>
            <button onClick={clearFilters} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map(job => (
              <div key={job.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-indigo-100 transition-all duration-300 flex flex-col sm:flex-row gap-6 relative">
                
                {/* Left: Brand Logo Block */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#6338EE] rounded-3xl flex items-center justify-center text-white font-bold text-3xl shadow-sm">
                    {job.company.charAt(0)}
                  </div>
                </div>
                
                {/* Middle: Job Info */}
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-[22px] font-bold text-[#1a1a1a] mb-1 hover:text-[#6338EE] transition-colors leading-tight">
                    <Link href={`/internships/${job.id}`}>
                      {job.title}
                    </Link>
                  </h3>
                  <p className="text-[#64748b] text-[17px] font-medium mb-4">{job.company}</p>
                  
                  <div className="flex flex-wrap gap-2 text-sm font-medium text-[#64748b]">
                    {job.location && (
                      <div className="flex items-center gap-1.5 bg-[#f8fafc] px-3 py-1.5 rounded-lg border border-[#f1f5f9]">
                        <MapPin className="w-4 h-4 text-[#94a3b8]" />
                        <span>{job.location}</span>
                      </div>
                    )}
                    {job.job_type && (
                      <div className="flex items-center gap-1.5 bg-[#f8fafc] px-3 py-1.5 rounded-lg border border-[#f1f5f9]">
                        <Briefcase className="w-4 h-4 text-[#94a3b8]" />
                        <span className="capitalize">{job.job_type.replace(/_/g, " ")}</span>
                      </div>
                    )}
                    {job.stipend && (
                      <div className="flex items-center gap-1.5 bg-[#f8fafc] px-3 py-1.5 rounded-lg border border-[#f1f5f9]">
                        <IndianRupee className="w-4 h-4 text-[#94a3b8]" />
                        <span>{job.stipend}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-row sm:flex-col sm:items-end justify-between gap-3 sm:ml-auto w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t border-slate-100 sm:border-0">
                  <div className="flex gap-3 mt-auto">
                    <button className="flex items-center gap-2 bg-white border border-[#e2e8f0] text-[#475569] hover:text-[#0f172a] hover:bg-[#f8fafc] font-medium px-5 py-2.5 rounded-xl transition-all h-[44px]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                      Save
                    </button>
                    <Link href={`/internships/${job.id}`}>
                      <button className="flex items-center gap-2 bg-[#6338EE] hover:bg-[#5225D6] text-white font-medium px-6 py-2.5 rounded-xl shadow-sm transition-all h-[44px]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                        Apply Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
