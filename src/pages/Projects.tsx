import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Activity, Volume2, Scan, Mic, Smile } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Activity,
      title: "Physical & Occupational Therapy",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Volume2,
      title: "Audiology",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Scan,
      title: "Wound Healing & Diabetic Care",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Mic,
      title: "Speech-Language Pathology",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Smile,
      title: "Dentistry",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Our Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-16">
            Medical technology solutions across five specialized areas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="bg-background border rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-20 h-20 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
