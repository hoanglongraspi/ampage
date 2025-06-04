
import React from 'react';
import { ArrowRight, Brain, Heart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4">
              <div className="bg-blue-100 p-3 rounded-full animate-pulse">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <div className="bg-indigo-100 p-3 rounded-full animate-pulse delay-75">
                <Heart className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="bg-blue-100 p-3 rounded-full animate-pulse delay-150">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Revolutionizing
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent block">
              Healthcare with AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering medical professionals with cutting-edge artificial intelligence solutions 
            for enhanced patient care, diagnostic accuracy, and operational efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg group"
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
            >
              Schedule Demo
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl p-8 backdrop-blur-sm border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.7%</div>
                <div className="text-slate-600">Diagnostic Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">50%</div>
                <div className="text-slate-600">Faster Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-slate-600">AI Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
