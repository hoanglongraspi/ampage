import React from 'react';
import { ArrowRight, Heart, Stethoscope, Brain, Activity, Zap, Microscope, Scan, Shield, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Medical Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-40 left-40 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-60 left-60 w-3 h-3 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-40 right-40 w-1 h-1 bg-white rounded-full"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
      </div>

      {/* Floating Medical Icons */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full filter blur-3xl animate-pulse delay-150"></div>
        
        {/* Floating Medical Icons */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Microscope className="h-12 w-12 text-blue-400/30" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-100">
          <Scan className="h-10 w-10 text-teal-400/30" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-200">
          <Shield className="h-14 w-14 text-green-400/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-300">
          <Activity className="h-8 w-8 text-blue-400/30" />
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Medical Technology Icons */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <div className="bg-blue-500/20 p-3 rounded-2xl backdrop-blur-sm animate-pulse border border-blue-500/30 shadow-lg shadow-blue-500/20">
              <Heart className="h-10 w-10 text-blue-400" />
            </div>
            <div className="bg-teal-500/20 p-3 rounded-2xl backdrop-blur-sm animate-pulse delay-75 border border-teal-500/30 shadow-lg shadow-teal-500/20">
              <Stethoscope className="h-10 w-10 text-teal-400" />
            </div>
            <div className="bg-green-500/20 p-3 rounded-2xl backdrop-blur-sm animate-pulse delay-150 border border-green-500/30 shadow-lg shadow-green-500/20">
              <Brain className="h-10 w-10 text-green-400" />
            </div>
            <div className="bg-purple-500/20 p-3 rounded-2xl backdrop-blur-sm animate-pulse delay-200 border border-purple-500/30 shadow-lg shadow-purple-500/20">
              <Activity className="h-10 w-10 text-purple-400" />
            </div>
            <div className="bg-orange-500/20 p-3 rounded-2xl backdrop-blur-sm animate-pulse delay-300 border border-orange-500/30 shadow-lg shadow-orange-500/20">
              <Zap className="h-10 w-10 text-orange-400" />
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-200 to-teal-200 bg-clip-text text-transparent drop-shadow-xl">
            Auspex Medix
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 bg-clip-text text-transparent drop-shadow-xl">
            LLC
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Advancing healthcare through innovative digital technologies and intelligent medical solutions
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          <span className="text-blue-400 font-semibold">Physical Therapy</span> • 
          <span className="text-teal-400 font-semibold"> Audiology</span> • 
          <span className="text-green-400 font-semibold"> Wound Care</span> • 
          <span className="text-purple-400 font-semibold"> Speech Therapy</span> • 
          <span className="text-orange-400 font-semibold"> Dentistry</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700 text-white px-12 py-6 text-lg group border-0 rounded-xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Projects
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            className="border-2 border-teal-400/50 bg-transparent text-white hover:bg-teal-500/20 hover:border-teal-400/70 px-12 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
            onClick={() => window.location.href = '/news'}
          >
            <Newspaper className="mr-3 h-5 w-5 group-hover:rotate-6 transition-transform duration-300" />
            Latest News
          </Button>
        </div>

        {/* Enhanced Feature Cards with Medical Imagery */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl shadow-blue-500/10">
            <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Heart className="h-8 w-8 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-blue-400 mb-2">Digital</div>
            <div className="text-gray-300">Health Solutions</div>
          </div>
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/30 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl shadow-teal-500/10">
            <div className="bg-teal-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Brain className="h-8 w-8 text-teal-400" />
            </div>
            <div className="text-3xl font-bold text-teal-400 mb-2">AI-Powered</div>
            <div className="text-gray-300">Diagnostics</div>
          </div>
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl shadow-green-500/10">
            <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Activity className="h-8 w-8 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">Real-time</div>
            <div className="text-gray-300">Monitoring</div>
          </div>
        </div>

        {/* Medical Technology Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
            <div className="text-gray-400 text-sm">Medical Specialties</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">100%</div>
            <div className="text-gray-400 text-sm">AI-Powered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-gray-400 text-sm">Innovation</div>
          </div>
        </div>
      </div>
    </section>
  );
};
