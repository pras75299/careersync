import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join thousands of students who have found their perfect internship through CareerSync.
          </p>
          <a href="/internships" className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 font-bold px-10 py-5 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300">
            Get Started Now
          </a>
        </div>
      </section>
    </>
  );
}
