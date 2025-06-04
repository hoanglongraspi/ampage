
import React from 'react';
import { Eye, Volume2, Cpu, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Projects = () => {
  const projects = [
    {
      icon: Cpu,
      title: "mmware",
      description: "Advanced middleware solutions for seamless AI integration in healthcare systems",
      color: "from-pink-500 to-pink-600",
      borderColor: "border-pink-500/30"
    },
    {
      icon: Volume2,
      title: "Audio Detection",
      description: "Real-time acoustic analysis for medical diagnostics and patient monitoring",
      color: "from-violet-500 to-violet-600",
      borderColor: "border-violet-500/30"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "AI-powered visual analysis for medical imaging and diagnostic accuracy",
      color: "from-pink-600 to-violet-600",
      borderColor: "border-pink-600/30"
    }
  ];

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              AI Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies reshaping healthcare through intelligent automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 hover:-translate-y-4 border ${project.borderColor} overflow-hidden`}
            >
              <CardContent className="p-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <project.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex items-center text-pink-400 group-hover:text-violet-400 transition-colors">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
