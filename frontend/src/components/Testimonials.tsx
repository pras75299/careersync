import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Developer at TechCorp",
      content: "Bharat Internz helped me land my dream internship at a top tech company. The platform made it so easy to find relevant opportunities!",
      avatar: "PS"
    },
    {
      name: "Rahul Kumar",
      role: "Data Analyst at DataViz",
      content: "The filtering system is amazing! I found exactly what I was looking for in just a few clicks. Highly recommended!",
      avatar: "RK"
    },
    {
      name: "Ananya Singh",
      role: "Marketing Intern at GrowthHackers",
      content: "Great platform for students! The application process is smooth and the companies are verified. Love it!",
      avatar: "AS"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Success Stories</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-300 relative mt-8"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <Quote className="w-5 h-5" fill="currentColor" />
              </div>
              <p className="text-slate-600 italic leading-relaxed mb-6 pt-4">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                  <span className="text-sm text-indigo-500 font-medium">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
