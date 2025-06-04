
import React from 'react';
import { ArrowRight, Brain, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500 rounded-full filter blur-3xl animate-pulse delay-75"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="flex space-x-6">
            <div className="bg-pink-500/20 p-4 rounded-2xl backdrop-blur-sm animate-pulse">
              <Brain className="h-12 w-12 text-pink-400" />
            </div>
            <div className="bg-violet-500/20 p-4 rounded-2xl backdrop-blur-sm animate-pulse delay-75">
              <Cpu className="h-12 w-12 text-violet-400" />
            </div>
            <div className="bg-pink-500/20 p-4 rounded-2xl backdrop-blur-sm animate-pulse delay-150">
              <Zap className="h-12 w-12 text-pink-400" />
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-pink-200 to-violet-200 bg-clip-text text-transparent">
            AI Healthcare
          </span>
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-pink-600 bg-clip-text text-transparent">
            Intelligence
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Pioneering the future of healthcare through cutting-edge AI technologies.
          <br />
          <span className="text-pink-400 font-semibold">mmware • Audio Detection • Computer Vision</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-12 py-6 text-lg group border-0 rounded-xl"
          >
            Explore Projects
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20">
            <div className="text-3xl font-bold text-pink-400 mb-2">AI-First</div>
            <div className="text-gray-300">Approach</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/20">
            <div className="text-3xl font-bold text-violet-400 mb-2">Real-time</div>
            <div className="text-gray-300">Processing</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20">
            <div className="text-3xl font-bold text-pink-400 mb-2">Advanced</div>
            <div className="text-gray-300">Analytics</div>
          </div>
        </div>
      </div>
    </section>
  );
};
