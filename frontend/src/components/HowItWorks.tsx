export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Create Your Profile",
      description: "Sign up and create a compelling profile showcasing your skills and interests.",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      number: "2",
      title: "Browse & Filter",
      description: "Use our advanced filters to find internships that match your preferences.",
      color: "from-purple-400 to-purple-600"
    },
    {
      number: "3",
      title: "Apply & Get Hired",
      description: "Apply with one click and get matched with the perfect opportunity.",
      color: "from-fuchsia-400 to-fuchsia-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-fuchsia-200"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 text-center flex flex-col items-center group">
              <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl mb-8 group-hover:scale-110 transition-transform duration-300 ring-4 ring-white`}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed max-w-sm mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
