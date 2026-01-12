import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, DollarSign, BookOpen } from 'lucide-react';
import { courses } from '../data/courses';

export default function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Course Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = course.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-md border-b border-slate-700/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Programs
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{course.title}</h1>
        </div>
      </header>

      {/* Course Hero */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Image */}
            <div className="rounded-2xl overflow-hidden mb-8 h-96 border border-slate-700/50">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Course Overview</h2>
              <p className="text-slate-300 text-lg leading-relaxed">{course.description}</p>
            </div>

            {/* Weekly Breakdown */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Weekly Breakdown</h2>
              <div className="space-y-6">
                {course.weekly_breakdown.map((week) => (
                  <div
                    key={week.week}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 hover:border-slate-600/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">W{week.week}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3">{week.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {week.topics.map((topic, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-20 space-y-6">
              {/* Course Info Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Duration */}
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm font-medium">DURATION</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{course.duration}</p>
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <DollarSign className="w-5 h-5" />
                    <span className="text-sm font-medium">PRICE</span>
                  </div>
                  <p className="text-2xl font-bold text-green-400">{course.cost}</p>
                </div>

                {/* Topics Count */}
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-sm font-medium">CONTENT</span>
                  </div>
                  <p className="text-2xl font-bold text-white">
                    {course.weekly_breakdown.length} Weeks
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/9779761792180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-center block"
                >
                  Enroll Now
                </a>

                {/* Download Syllabus */}
                <a
                  href="https://raw.githubusercontent.com/NCA-Nepal/Static-Assets/refs/heads/main/PDF/NCA%20Ethical%20Hacking%20Bootcamp.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-full text-center font-semibold transition-all duration-300 border-2 border-slate-600 hover:border-blue-400"
                >
                  Download Syllabus
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4 text-center">
                  <p className="text-slate-400 text-sm mb-2">BATCH SIZE</p>
                  <p className="text-xl font-bold text-white">25</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4 text-center">
                  <p className="text-slate-400 text-sm mb-2">SKILL LEVEL</p>
                  <p className="text-xl font-bold text-white">Beginner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">Made with ❤️ by NCA Team</p>
        </div>
      </footer>
    </div>
  );
}
