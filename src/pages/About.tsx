import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heart, Brain, Activity, User, Award, Code, Target, Zap, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50/30 via-background to-teal-50/30 dark:from-blue-950/10 dark:via-background dark:to-teal-950/10">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/30 dark:to-teal-950/30 rounded-full mb-8 border border-blue-200/50 dark:border-blue-800/50">
            <Heart className="h-5 w-5 text-blue-500 mr-3" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Medical Technology Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 bg-clip-text text-transparent">
              About Auspex Medix
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-delay">
            Revolutionizing healthcare through 
            <span className="font-semibold text-foreground bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent"> cutting-edge artificial intelligence</span> and advanced machine learning technologies that transform patient care and empower medical professionals across every specialty.
          </p>

          <div className="flex flex-wrap justify-center gap-6 animate-fade-in-delay-2">
            <div className="flex items-center text-muted-foreground">
              <Target className="h-5 w-5 text-blue-500 mr-2" />
              <span>AI-Powered Solutions</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Zap className="h-5 w-5 text-teal-500 mr-2" />
              <span>Universal Platform</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Shield className="h-5 w-5 text-purple-500 mr-2" />
              <span>Evidence-Based</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/20 to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl mb-8 shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <Heart className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
          </div>

          <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border shadow-2xl">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              To bridge the gap between cutting-edge technology and practical medical applications, 
              creating solutions that make a real difference in people's lives while supporting 
              <span className="font-semibold text-blue-600"> healthcare professionals worldwide</span>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-500 mb-2">∞</div>
                <div className="text-muted-foreground">Medical Specialties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">100%</div>
                <div className="text-muted-foreground">Evidence-Based</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* What We Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/20 to-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                What We Do
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI platform adapts to any medical specialty, delivering intelligent solutions for healthcare providers and patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="bg-background rounded-3xl p-8 shadow-lg border hover:shadow-2xl transition-all duration-500 h-full group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-500 group-hover:bg-clip-text transition-all duration-300">
                  AI Innovation
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed text-center">
                  Advanced artificial intelligence and machine learning for breakthrough medical solutions.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-background rounded-3xl p-8 shadow-lg border hover:shadow-2xl transition-all duration-500 h-full group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                  <Activity className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-500 group-hover:bg-clip-text transition-all duration-300">
                  Universal Platform
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed text-center">
                  Adaptable technology that works across any healthcare specialty or medical field.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-background rounded-3xl p-8 shadow-lg border hover:shadow-2xl transition-all duration-500 h-full group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-500 group-hover:bg-clip-text transition-all duration-300">
                  Patient Focus
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed text-center">
                  Solutions designed for better patient outcomes and enhanced healthcare experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50/50 to-gray-50/50 dark:from-slate-900/30 dark:to-gray-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experts driving innovation in medical technology and artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="bg-background/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border hover:-translate-y-2 h-full">
                <div className="text-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <User className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Sarah Chen</h3>
                  <p className="text-blue-600 font-semibold mb-4">Chief Technology Officer</p>
                  <p className="text-muted-foreground leading-relaxed">
                    PhD in Biomedical Engineering with 15+ years experience in AI-driven medical solutions and healthcare innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="bg-background/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border hover:-translate-y-2 h-full">
                <div className="text-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Award className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Michael Rodriguez</h3>
                  <p className="text-teal-600 font-semibold mb-4">Chief Medical Officer</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Board-certified physician specializing in digital health transformation and evidence-based medical technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="bg-background/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border hover:-translate-y-2 h-full">
                <div className="text-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Code className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Alex Thompson</h3>
                  <p className="text-purple-600 font-semibold mb-4">Lead AI Engineer</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Machine learning expert with expertise in computer vision and natural language processing for healthcare applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-fade-in { animation: fade-in 1.2s ease-out; }
        .animate-fade-in-delay { animation: fade-in 1.2s ease-out 0.4s both; }
        .animate-fade-in-delay-2 { animation: fade-in 1.2s ease-out 0.8s both; }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 25s linear infinite; }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .bg-dot-pattern {
          background-image: radial-gradient(circle, rgba(20, 184, 166, 0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </div>
  );
};

export default About; 