import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heart, Brain, Activity, Stethoscope, Users } from 'lucide-react';

const About = () => {
  const specialties = [
    { title: "Physical & Occupational Therapy", icon: Activity, color: "from-blue-500 to-blue-600" },
    { title: "Audiology", icon: Stethoscope, color: "from-teal-500 to-teal-600" },
    { title: "Wound Healing & Diabetic Care", icon: Heart, color: "from-red-500 to-pink-600" },
    { title: "Speech-Language Pathology", icon: Brain, color: "from-purple-500 to-purple-600" },
    { title: "Dentistry", icon: Users, color: "from-green-500 to-green-600" }
  ];

  const approaches = [
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Using artificial intelligence and machine learning to create breakthrough medical solutions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Clinical Collaboration",
      description: "Working closely with healthcare professionals to ensure real-world applicability.",
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: Activity,
      title: "Patient-Centered",
      description: "Designing solutions focused on improving patient outcomes and experiences.",
      color: "from-green-500 to-lime-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      
      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x bg-300% bg-gradient-to-r">
              About Auspex Medix LLC
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            We are a medical technology company developing innovative AI-powered solutions to improve healthcare outcomes across five specialized therapeutic areas.
          </p>
        </div>
      </section>

      {/* Our Mission with Floating Animation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-110 hover:rotate-3 group">
              <Heart className="h-12 w-12 text-white group-hover:animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 hover:bg-clip-text transition-all duration-300">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto hover:text-foreground transition-colors duration-300">
            To bridge the gap between cutting-edge technology and practical medical applications, 
            creating solutions that make a real difference in people's lives while supporting 
            healthcare professionals in delivering exceptional care.
          </p>
        </div>
      </section>

      {/* Medical Specialties with Staggered Animation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border border-blue-500 rounded-full animate-spin-slow"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-teal-500 rounded-full animate-spin-reverse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-green-500 rounded-full animate-bounce"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 hover:scale-105 transition-transform duration-300">Medical Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} 
                   className="bg-background rounded-xl p-6 text-center border hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer"
                   style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`bg-gradient-to-r ${specialty.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 group-hover:rotate-6`}>
                  <specialty.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-500 group-hover:bg-clip-text transition-all duration-300">{specialty.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach with Interactive Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 hover:scale-105 transition-transform duration-300">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} 
                   className="text-center group hover:transform hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className={`bg-gradient-to-r ${approach.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:rotate-12 group-hover:scale-125`}>
                  <approach.icon className="h-8 w-8 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-500 group-hover:bg-clip-text transition-all duration-300">{approach.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment with Gradient Animation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-teal-50 to-blue-50 dark:from-blue-950/20 dark:via-teal-950/20 dark:to-blue-950/20 animate-gradient-x bg-300% relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-10 w-6 h-6 bg-teal-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 hover:scale-110 transition-transform duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 hover:bg-clip-text">Our Commitment</h2>
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-white/20">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto hover:text-foreground transition-colors duration-300">
              Every solution we develop is designed with the end user in mind—whether that's a patient 
              recovering at home, a therapist conducting treatment, or a clinician making critical 
              diagnostic decisions. We believe in intelligent, accessible, and evidence-based solutions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
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
        
        .animate-gradient-x { animation: gradient-x 15s ease infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.3s both; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .bg-300% { background-size: 300% 300%; }
      `}</style>
    </div>
  );
};

export default About; 