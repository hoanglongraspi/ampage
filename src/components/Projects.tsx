import React from 'react';
import { Activity, Volume2, Scan, Mic, Smile, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const projects = [
    {
      icon: Activity,
      title: "Physical & Occupational Therapy",
      description: "Mobile rehabilitation and motion analysis tools",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Volume2,
      title: "Audiology",
      description: "Audio processing and vestibular diagnostics",
      color: "from-green-500 to-green-600",
      borderColor: "border-green-500/30"
    },
    {
      icon: Scan,
      title: "Wound Healing & Diabetic Care",
      description: "Multispectral and mmWave imaging solutions",
      color: "from-orange-500 to-orange-600",
      borderColor: "border-orange-500/30"
    },
    {
      icon: Mic,
      title: "Speech-Language Pathology",
      description: "Ultrasound imaging and AI speech analysis",
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Smile,
      title: "Dentistry",
      description: "Oral imaging and AI diagnostic tools",
      color: "from-teal-500 to-teal-600",
      borderColor: "border-teal-500/30"
    }
  ];

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Medical Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-violet-500/10"></div>
        <div className="absolute top-10 left-10 w-4 h-4 bg-foreground/10 rounded-full"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-foreground/5 rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-3 h-3 bg-foreground/10 rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-5 h-5 bg-foreground/5 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              Medical Technology Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Advancing healthcare through innovative medical technologies across specialized therapeutic areas
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-semibold"
          >
            <a href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:-translate-y-4 border ${project.borderColor} overflow-hidden cursor-pointer`}
              onClick={() => window.location.href = '/projects'}
            >
              <CardContent className="p-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <project.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
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
