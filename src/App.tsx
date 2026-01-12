import { useState, useEffect } from 'react';
import { Shield, Terminal, PenTool as Tool, Users, Award, Briefcase, Clock, Users2, FlaskRound as Flask, GraduationCap, Rocket, MessageCircle, Mail, Phone, FileDown, Code, TrendingUp, Brain, ArrowRight } from 'lucide-react';

function CountdownTimer() {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // Simulate progress decrease
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev - 0.1;
        return newProgress > 0 ? newProgress : 0;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative h-3 bg-slate-700/50 rounded-full mb-6 overflow-hidden shadow-inner">
        <div 
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 ease-linear rounded-full shadow-sm"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-slate-300 text-sm md:text-base text-center font-medium">
        Applications closing soon
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-md border-b border-slate-700/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl shadow-lg">
                <Shield className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <span className="text-lg md:text-xl font-bold text-white">NCA Team</span>
                <p className="text-sm text-slate-300 hidden sm:block">Professional Bootcamps</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <div className="flex gap-6 text-sm md:text-base">
                <a 
                  href="https://ncateam.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
                >
                  Main Site
                </a>
                <a 
                  href="https://handbook.ncateam.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
                >
                  Handbook
                </a>
              </div>
              <a 
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base font-semibold"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
            <Rocket className="w-4 h-4" />
            Professional Cybersecurity Training
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Ethical Hacking
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Bootcamp
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-300 mb-8 font-medium">
            Powered by NCA Team
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            An intensive 24-week cybersecurity training program designed to transform you into a certified ethical hacker with industry-ready skills.
          </p>
          
          <div className="mb-12">
            <h3 className="text-lg md:text-xl mb-8 text-slate-200 font-semibold">Limited Time Opportunity</h3>
            <CountdownTimer />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <a 
              href="https://wa.me/9779761792180"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              ⚡ Secure Your Spot
            </a>
            <a 
              href="https://raw.githubusercontent.com/NCA-Nepal/Static-Assets/refs/heads/main/PDF/NCA%20Ethical%20Hacking%20Bootcamp.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-full text-lg font-semibold transition-all duration-300 border-2 border-slate-600 hover:border-blue-400 shadow-md hover:shadow-lg"
            >
              <FileDown className="w-5 h-5" />
              Download Syllabus
            </a>
          </div>
        </div>
      </section>


      {/* Bootcamp Programs */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Bootcamp Programs</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Choose from our comprehensive range of industry-focused training programs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {[
              {
                title: "Ethical Hacking Bootcamp",
                duration: "90 Days",
                cost: "रु4,500",
                desc: "Master cybersecurity fundamentals, penetration testing, and ethical hacking techniques",
                image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: Shield,
                color: "from-blue-500 to-blue-600",
                link: "#"
              },
              {
                title: "Full Web Development - MERN Stack",
                duration: "30 Days",
                cost: "रु2,500",
                desc: "Learn modern web development with HTML, CSS, JavaScript, React, and backend technologies",
                image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: Code,
                color: "from-emerald-500 to-emerald-600",
                link: "#"
              },
              {
                title: "OSINT",
                duration: "7 Days",
                cost: "रु800",
                desc: "Master Open Source Intelligence gathering techniques and digital investigation methods",
                image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: TrendingUp,
                color: "from-orange-500 to-orange-600",
                link: "#"
              },
              {
                title: "Full Web Development - Python Django",
                duration: "45 Days",
                cost: "रु3,200",
                desc: "Build full-stack web applications using Python, Django, and modern frontend frameworks",
                image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: Brain,
                color: "from-violet-500 to-violet-600",
                link: "#"
              },
              {
                title: "Data Science & Analytics",
                duration: "60 Days",
                cost: "रु4,000",
                desc: "Master data analysis, machine learning, and visualization with Python and industry tools",
                image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: TrendingUp,
                color: "from-cyan-500 to-cyan-600",
                link: "#"
              },
              {
                title: "Mobile App Development",
                duration: "40 Days",
                cost: "रु3,500",
                desc: "Create cross-platform mobile apps using React Native and Flutter frameworks",
                image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: Code,
                color: "from-pink-500 to-pink-600",
                link: "#"
              },
              {
                title: "DevOps & Cloud Engineering",
                duration: "50 Days",
                cost: "रु4,200",
                desc: "Learn CI/CD, containerization, cloud platforms, and infrastructure automation",
                image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: Terminal,
                color: "from-yellow-500 to-yellow-600",
                link: "#"
              },
              {
                title: "UI/UX Design Bootcamp",
                duration: "35 Days",
                cost: "रु2,800",
                desc: "Design beautiful and functional user interfaces with modern design principles and tools",
                image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: Tool,
                color: "from-purple-500 to-purple-600",
                link: "#"
              },
              {
                title: "Digital Marketing Mastery",
                duration: "25 Days",
                cost: "रु2,200",
                desc: "Comprehensive digital marketing strategies including SEO, social media, and content marketing",
                image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: TrendingUp,
                color: "from-green-500 to-green-600",
                link: "#"
              },
              {
                title: "AI & Machine Learning",
                duration: "75 Days",
                cost: "रु5,500",
                desc: "Deep dive into artificial intelligence, machine learning algorithms, and neural networks",
                image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: Brain,
                color: "from-red-500 to-red-600",
                link: "#"
              }

            ].map((program, index) => (
              <a
                key={index}
                href={program.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className={`absolute top-4 right-4 p-2 rounded-lg bg-gradient-to-r ${program.color} shadow-lg`}>
                    <program.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {program.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-semibold text-blue-400">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-green-400">{program.cost}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {program.desc}
                  </p>

                  <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="bg-slate-800/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose NCA Team</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Comprehensive training designed to build real-world expertise
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Terminal,
                title: "Hands-on Labs",
                desc: "Practice real-world scenarios in our secure virtual lab environments",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Tool,
                title: "Industry Tools",
                desc: "Master cutting-edge tools and professional-grade environments",
                color: "from-cyan-500 to-cyan-600"
              },
              {
                icon: Shield,
                title: "Expert Training",
                desc: "From fundamentals to advanced techniques across multiple domains",
                color: "from-emerald-500 to-emerald-600"
              },
              {
                icon: Users,
                title: "Expert Instructors",
                desc: "Learn from seasoned professionals with industry experience",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: Award,
                title: "Certification Prep",
                desc: "Comprehensive preparation for globally recognized certifications",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: Briefcase,
                title: "Career Support",
                desc: "Post-training career assistance, job placement guidance, and networking",
                color: "from-rose-500 to-rose-600"
              }
            ].map((item, index) => (
              <div key={index} className="group bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Stats */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Course Overview</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Comprehensive metrics that define our intensive training program
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {[
              { icon: Clock, title: "Duration", value: "24 Weeks", color: "from-blue-500 to-blue-600" },
              { icon: Users2, title: "Batch Size", value: "25 Students", color: "from-indigo-500 to-indigo-600" },
              { icon: Flask, title: "Lab Scenarios", value: "40+ Exercises", color: "from-purple-500 to-purple-600" },
              { icon: GraduationCap, title: "Certification", value: "Industry-Ready", color: "from-emerald-500 to-emerald-600" },
              { icon: MessageCircle, title: "Support", value: "24/7 Available", color: "from-orange-500 to-orange-600" }
            ].map((stat, index) => (
              <div key={index} className="bg-slate-700/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-center border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 hover:shadow-lg group">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm md:text-base font-semibold mb-2 text-slate-300 uppercase tracking-wide">{stat.title}</h3>
                <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-800/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards becoming a certified ethical hacker. Contact us through any of these channels to apply or learn more about the program.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a href="mailto:bootcamp@ncateam.xyz" className="group bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl text-center border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-white">Email Us</h3>
              <p className="text-slate-300 text-sm">bootcamp@ncateam.xyz</p>
            </a>
            
            <a href="https://discord.gg/KDuvkJHh3D" className="group bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl text-center border border-slate-600/50 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-white">Join Discord</h3>
              <p className="text-slate-300 text-sm">Active Community</p>
            </a>
            
            <a href="tel:+9779761792180" className="group bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl text-center border border-slate-600/50 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-white">Call Us</h3>
              <p className="text-slate-300 text-sm">24/7 Available</p>
            </a>
            
            <a href="https://www.facebook.com/ncateam" className="group bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl text-center border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 mb-6 group-hover:scale-110 transition-transform duration-300 text-2xl">
                📘
              </div>
              <h3 className="font-bold mb-2 text-white">Facebook</h3>
              <p className="text-slate-300 text-sm">NCA Team</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">NCA Team</span>
          </div>
          <p className="text-slate-400">Made with ❤️ by NCA Team</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
