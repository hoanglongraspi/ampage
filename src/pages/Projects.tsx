
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Eye, Volume2, Cpu, ArrowRight, Brain, Heart, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      icon: Cpu,
      title: "mmware",
      description: "Advanced middleware solutions for seamless AI integration in healthcare systems",
      fullDescription: "Our mmware platform represents a breakthrough in healthcare AI middleware, providing a robust, scalable infrastructure that seamlessly connects diverse medical systems with cutting-edge AI algorithms. This platform enables real-time data processing, ensures HIPAA compliance, and facilitates the deployment of machine learning models across hospital networks.",
      features: [
        "Real-time medical data processing",
        "HIPAA-compliant security protocols",
        "Scalable cloud architecture",
        "API-first integration design",
        "Advanced analytics dashboard"
      ],
      color: "from-pink-500 to-pink-600",
      borderColor: "border-pink-500/30"
    },
    {
      icon: Volume2,
      title: "Audio Detection",
      description: "Real-time acoustic analysis for medical diagnostics and patient monitoring",
      fullDescription: "Our AI-powered audio detection system revolutionizes medical diagnostics through advanced acoustic analysis. Using deep learning algorithms, we can detect early signs of respiratory conditions, heart abnormalities, and neurological disorders through voice patterns and breathing sounds.",
      features: [
        "Respiratory pattern analysis",
        "Heart sound classification",
        "Voice biomarker detection",
        "Real-time monitoring alerts",
        "Multi-language support"
      ],
      color: "from-violet-500 to-violet-600",
      borderColor: "border-violet-500/30"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "AI-powered visual analysis for medical imaging and diagnostic accuracy",
      fullDescription: "Our computer vision technology leverages state-of-the-art convolutional neural networks to analyze medical images with superhuman accuracy. From detecting tumors in radiology scans to analyzing retinal images for diabetic complications, our AI sees what human eyes might miss.",
      features: [
        "Radiology scan analysis",
        "Pathology slide examination",
        "Retinal disease detection",
        "Skin lesion classification",
        "3D medical imaging processing"
      ],
      color: "from-pink-600 to-violet-600",
      borderColor: "border-pink-600/30"
    }
  ];

  const additionalProjects = [
    {
      icon: Brain,
      title: "Neural Interface",
      description: "Brain-computer interfaces for neurological rehabilitation",
      color: "from-violet-600 to-purple-600"
    },
    {
      icon: Heart,
      title: "Cardiac AI",
      description: "Predictive analytics for cardiovascular health monitoring",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Shield,
      title: "MedGuard",
      description: "AI-powered cybersecurity for healthcare infrastructure",
      color: "from-blue-500 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                AI Projects
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Pioneering the future of healthcare through revolutionary AI technologies
            </p>
          </div>

          {/* Main Projects */}
          <div className="space-y-16 mb-20">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 border ${project.borderColor} overflow-hidden`}
              >
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className={`w-24 h-24 bg-gradient-to-r ${project.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                        <project.icon className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-pink-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        {project.fullDescription}
                      </p>
                      <div className="flex items-center text-pink-400 group-hover:text-violet-400 transition-colors">
                        <span className="font-medium text-lg">Explore Technology</span>
                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
                      <h4 className="text-2xl font-bold text-white mb-6">Key Features</h4>
                      <ul className="space-y-4">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mr-4"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Projects */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Emerging Technologies
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className="group bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 hover:-translate-y-4 border border-gray-600 hover:border-pink-500/50"
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <project.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
