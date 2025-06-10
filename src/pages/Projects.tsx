import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Activity, Volume2, Scan, Mic, Smile } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Activity,
      title: "Physical & Occupational Therapy",
      description: "Mobile rehabilitation tools and motion analysis systems for therapy.",
      technologies: ["mRehab Apps", "Motion Tracking", "Progress Analytics"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Volume2,
      title: "Audiology",
      description: "Audio processing and vestibular diagnostic solutions.",
      technologies: ["Audio Processing", "BPPV Diagnostics", "EEG Integration"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Scan,
      title: "Wound Healing & Diabetic Care",
      description: "Non-invasive imaging for wound monitoring and diabetic foot care.",
      technologies: ["Multispectral Imaging", "mmWave Technology", "Wound Tracking"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Mic,
      title: "Speech-Language Pathology",
      description: "AI-powered speech analysis and real-time imaging for therapy.",
      technologies: ["Ultrasound Imaging", "AI Speech Analysis", "Therapy Tools"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Smile,
      title: "Dentistry",
      description: "AI diagnostics and 3D analysis for oral health screening.",
      technologies: ["3D Oral Imaging", "AI Diagnostics", "Treatment Planning"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Our Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Medical technology solutions across five specialized areas
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="border-b border-border pb-8 last:border-b-0">
                <div className="flex items-start space-x-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <project.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 bg-muted text-sm text-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
