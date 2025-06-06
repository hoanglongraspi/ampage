import React from 'react';
import { ArrowRight, Heart, Stethoscope, Brain, Activity, Zap, Microscope, Scan, Shield, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-32 relative overflow-hidden">
      {/* Medical Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
          <div className="absolute top-40 left-40 w-1 h-1 bg-foreground rounded-full animate-pulse delay-75"></div>
          <div className="absolute top-60 left-60 w-3 h-3 bg-foreground rounded-full animate-pulse delay-150"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-foreground rounded-full animate-pulse delay-200"></div>
          <div className="absolute bottom-40 right-40 w-1 h-1 bg-foreground rounded-full animate-pulse delay-300"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60"></div>
      </div>

      {/* Subtle Background Effects - Simplified */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full filter blur-2xl animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-teal-500 rounded-full filter blur-2xl animate-pulse delay-75 hidden lg:block"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Medical Technology Icons */}
            
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-xl">
                Auspex Medix
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 bg-clip-text text-transparent drop-shadow-xl">
                LLC
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 lg:mb-8 max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Advancing healthcare through innovative digital technologies and intelligent medical solutions
            </p>
            
            <p className="text-base lg:text-lg text-muted-foreground/80 mb-8 lg:mb-12 max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
              <span className="text-blue-400 font-semibold">Physical Therapy</span> • 
              <span className="text-teal-400 font-semibold"> Audiology</span> • 
              <span className="text-green-400 font-semibold"> Wound Care</span> • 
              <span className="text-purple-400 font-semibold"> Speech Therapy</span> • 
              <span className="text-orange-400 font-semibold"> Dentistry</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700 text-white px-8 lg:px-12 py-4 lg:py-6 text-base lg:text-lg group border-0 rounded-xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Projects
                <ArrowRight className="ml-2 lg:ml-3 h-5 w-5 lg:h-6 lg:w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-teal-400/50 bg-transparent hover:bg-teal-500/20 hover:border-teal-400/70 px-8 lg:px-12 py-4 lg:py-6 text-base lg:text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
                onClick={() => window.location.href = '/news'}
              >
                <Newspaper className="mr-2 lg:mr-3 h-4 w-4 lg:h-5 lg:w-5 group-hover:rotate-6 transition-transform duration-300" />
                Latest News
              </Button>
            </div>
          </div>
          

          {/* Right Column - Hero Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-500/20 backdrop-blur-sm">
                              <img 
                  src="https://images.pexels.com/photos/4226262/pexels-photo-4226262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="AI in Healthcare - Artificial Intelligence Medical Technology" 
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 right-4 lg:right-8">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1 lg:mb-2">AI-Powered Healthcare</h3>
                <p className="text-foreground/80 text-xs lg:text-sm">Artificial intelligence revolutionizing medical diagnostics and patient care</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Feature Cards with Medical Imagery */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div className="bg-card/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl shadow-blue-500/10">
            <div className="bg-blue-500/20 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Heart className="h-6 w-6 lg:h-8 lg:w-8 text-blue-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-2 text-center">Digital</div>
            <div className="text-muted-foreground text-center">Health Solutions</div>
          </div>
          <div className="bg-card/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-teal-500/30 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl shadow-teal-500/10">
            <div className="bg-teal-500/20 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Brain className="h-6 w-6 lg:h-8 lg:w-8 text-teal-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-teal-400 mb-2 text-center">AI-Powered</div>
            <div className="text-muted-foreground text-center">Diagnostics</div>
          </div>
          <div className="bg-card/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl shadow-green-500/10">
            <div className="bg-green-500/20 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Activity className="h-6 w-6 lg:h-8 lg:w-8 text-green-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-2 text-center">Real-time</div>
            <div className="text-muted-foreground text-center">Monitoring</div>
          </div>
        </div>

        {/* Medical Technology Stats */}
        <div className="mt-16 lg:mt-20 mb-8 lg:mb-0 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-1 lg:mb-2">5+</div>
            <div className="text-muted-foreground text-xs lg:text-sm">Medical Specialties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-teal-400 mb-1 lg:mb-2">100%</div>
            <div className="text-muted-foreground text-xs lg:text-sm">AI-Powered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-1 lg:mb-2">24/7</div>
            <div className="text-muted-foreground text-xs lg:text-sm">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-1 lg:mb-2">∞</div>
            <div className="text-muted-foreground text-xs lg:text-sm">Innovation</div>
          </div>
        </div>
      </div>
    </section>
  );
};
