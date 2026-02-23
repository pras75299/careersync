import { Code, Megaphone, Paintbrush, Briefcase } from "lucide-react";

export default function Categories() {
  const categories = [
    {
      id: "technology",
      title: "Technology",
      description: "Software Development, Data Science, AI/ML",
      jobs: "2,500+ Jobs",
      icon: <Code className="h-8 w-8 text-white" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "marketing",
      title: "Marketing",
      description: "Digital Marketing, Content Creation, SEO",
      jobs: "1,200+ Jobs",
      icon: <Megaphone className="h-8 w-8 text-white" />,
      color: "from-pink-500 to-rose-600",
    },
    {
      id: "design",
      title: "Design",
      description: "UI/UX Design, Graphic Design, Web Design",
      jobs: "800+ Jobs",
      icon: <Paintbrush className="h-8 w-8 text-white" />,
      color: "from-purple-500 to-fuchsia-600",
    },
    {
      id: "business",
      title: "Business",
      description: "Finance, Operations, Strategy",
      jobs: "1,500+ Jobs",
      icon: <Briefcase className="h-8 w-8 text-white" />,
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Popular Categories</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group bg-white rounded-2xl p-8 text-center shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{category.title}</h3>
              <p className="text-slate-500 mb-6 text-sm">{category.description}</p>
              <span className="inline-block bg-slate-100 text-indigo-600 font-medium px-4 py-1.5 rounded-full text-sm group-hover:bg-indigo-50 transition-colors">
                {category.jobs}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
