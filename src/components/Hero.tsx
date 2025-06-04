
import React from 'react';
import { ArrowRight, Brain, Cpu, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4">
              <div className="bg-pink-100 p-3 rounded-full animate-pulse">
                <Brain className="h-8 w-8 text-pink-600" />
              </div>
              <div className="bg-rose-100 p-3 rounded-full animate-pulse delay-75">
                <Cpu className="h-8 w-8 text-rose-600" />
              </div>
              <div className="bg-pink-100 p-3 rounded-full animate-pulse delay-150">
                <Bot className="h-8 w-8 text-pink-600" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            AI-Driven
            <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-800 bg-clip-text text-transparent block">
              Healthcare Intelligence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harnessing the power of artificial intelligence to transform medical diagnosis, 
            enhance patient outcomes, and revolutionize healthcare delivery through intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-4 text-lg group"
            >
              Discover AI Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg"
            >
              AI Demo
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-r from-pink-600/10 to-rose-600/10 rounded-3xl p-8 backdrop-blur-sm border border-pink-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">99.8%</div>
                <div className="text-slate-600">AI Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">75%</div>
                <div className="text-slate-600">Faster AI Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-800 mb-2">24/7</div>
                <div className="text-slate-600">AI Intelligence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
