import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Rocket, Star, Zap, Trophy } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = React.useState(0);
  const features = [
    { 
      icon: Code, 
      title: 'Clean Code', 
      desc: 'Modern, maintainable code',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: Palette, 
      title: 'Modern Design', 
      desc: 'Stunning visual experiences',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: Rocket, 
      title: 'Fast Launch', 
      desc: 'Quick deployment process',
      image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=800&q=80'
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#00A9E0]/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#00274D]/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00A9E0]/10 to-[#00274D]/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="absolute top-1/4 left-1/4 animate-float" style={{ animationDelay: '0s' }}>
          <Star className="w-8 h-8 text-[#00A9E0]/30" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <Zap className="w-6 h-6 text-[#00274D]/30" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <Trophy className="w-10 h-10 text-[#00A9E0]/30" />
        </div>
      </div>

      <div className="relative min-h-screen w-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="stagger-fade-in relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00A9E0]/10 to-[#00274D]/10 rounded-full mb-6 text-[#00A9E0] font-medium animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '3s' }}>
                <Rocket size={16} className="mr-2" />
                <span>Welcome to the Future of Web Design</span>
              </div>
              
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#00274D] mb-6 leading-tight" style={{ animationDelay: '0.3s' }}>
                  Where ideas go from{' '}
                  <span className="relative inline-block">
                    <span className="text-[#00A9E0] relative z-10">BLANQ</span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00A9E0]/20 to-transparent blur-lg" />
                  </span>{' '}
                  to brilliance.
                </h1>
              </div>

              <div className="relative mb-8">
                <p className="text-lg sm:text-xl text-gray-600 max-w-xl relative z-10" style={{ animationDelay: '0.5s' }}>
                  Transform your online presence with our expert web design and development services. We build beautiful, functional websites that drive results.
                </p>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00A9E0]/5 to-transparent rounded-lg blur-lg" />
              </div>

              <div className="flex flex-wrap gap-4" style={{ animationDelay: '0.7s' }}>
                <Link to="/book" className="btn-primary group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00A9E0] to-[#00274D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <Link to="/services" className="relative group overflow-hidden inline-flex items-center px-6 py-3 bg-white text-[#00274D] rounded-lg border-2 border-[#00274D] hover:text-white transition-all duration-300">
                  <span className="relative z-10">View Services</span>
                  <div className="absolute inset-0 bg-[#00274D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-12">
                {[
                  { value: 'Focused', label: 'On Impactful Results' },
                  { value: '100%', label: 'Client Satisfaction Guaranteed' },
                  { value: '5⭐', label: 'Average Rating' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100 hover:border-[#00A9E0] transition-colors">
                    <div className="text-xl sm:text-2xl font-bold text-[#00274D]">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-0 relative z-10">
              <div className="relative max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/20 to-[#00274D]/20 rounded-2xl transform rotate-6 scale-95 transition-transform group-hover:rotate-12" />
                <div className="bg-white/30 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-2xl transform hover:-rotate-2 transition-all duration-500">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/20 to-[#00274D]/20 animate-pulse" />
                    <img
                      src={features[activeTab].image}
                      alt={features[activeTab].title}
                      className="rounded-lg shadow-lg relative z-10 transform hover:scale-105 transition-transform duration-500 w-full h-[300px] object-cover"
                    />
                  </div>

                  <div className="mt-8">
                    <div className="flex justify-between mb-4">
                      {features.map((feature, index) => (
                        <button
                          key={index}
                          className={`flex-1 p-2 sm:p-4 text-center transition-all duration-300 ${
                            activeTab === index
                              ? 'bg-[#00A9E0]/10 text-[#00A9E0]'
                              : 'text-gray-500 hover:text-[#00A9E0]'
                          } rounded-lg`}
                          onClick={() => setActiveTab(index)}
                        >
                          <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 transition-transform duration-300 ${
                            activeTab === index ? 'scale-110' : ''
                          }`} />
                          <span className="text-xs sm:text-sm font-medium block">{feature.title}</span>
                        </button>
                      ))}
                    </div>
                    <div className="bg-white/50 rounded-lg p-4 backdrop-blur-sm">
                      <p className="text-gray-600 text-center text-sm">{features[activeTab].desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}