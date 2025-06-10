
import React from 'react';
import { Users, Building, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Collaborators = () => {
  const stats = [
    {
      icon: Building,
      number: "50+",
      label: "Healthcare Partners",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Users,
      number: "100+",
      label: "AI Researchers",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: Award,
      number: "15+",
      label: "AI Innovations",
      color: "from-pink-600 to-violet-600"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries Served",
      color: "from-violet-600 to-pink-600"
    }
  ];

  return (
    <section id="collaborators" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Global Network
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with world-class institutions to advance AI in healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="group bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-3xl p-12 backdrop-blur-sm border border-pink-500/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Join Our AI Revolution</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with us to shape the future of AI-powered healthcare solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/about'}
              >
                Learn More
              </button>
              <button 
                className="border border-pink-500 text-pink-400 hover:bg-pink-500/10 px-8 py-4 rounded-xl font-medium transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
