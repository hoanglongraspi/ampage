
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Users, Building, Award, Globe, University, Hospital, Microscope, Stethoscope } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Collaborators = () => {
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

  const partners = [
    {
      icon: University,
      name: "Stanford AI Lab",
      type: "Research Institution",
      description: "Collaborative research on neural networks for medical imaging analysis and diagnostic accuracy improvements.",
      focus: "Computer Vision & Deep Learning",
      color: "from-blue-500 to-violet-600"
    },
    {
      icon: Hospital,
      name: "Mayo Clinic",
      type: "Healthcare Provider",
      description: "Clinical validation of AI systems for patient monitoring and early disease detection protocols.",
      focus: "Clinical AI Implementation",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Microscope,
      name: "MIT CSAIL",
      type: "Technology Partner",
      description: "Joint development of machine learning algorithms for predictive healthcare analytics and patient outcomes.",
      focus: "Machine Learning Research",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Stethoscope,
      name: "Johns Hopkins",
      type: "Medical Research",
      description: "Integration of AI technologies into medical education and training programs for next-generation healthcare.",
      focus: "Medical AI Education",
      color: "from-pink-600 to-violet-600"
    }
  ];

  const collaborationAreas = [
    {
      title: "Research & Development",
      description: "Joint AI research initiatives with leading academic institutions",
      points: ["Algorithm development", "Clinical trials", "Data analysis", "Publication collaboration"]
    },
    {
      title: "Clinical Implementation",
      description: "Real-world deployment of AI solutions in healthcare settings",
      points: ["Pilot programs", "Staff training", "System integration", "Performance monitoring"]
    },
    {
      title: "Technology Transfer",
      description: "Knowledge sharing and technology commercialization",
      points: ["Patent licensing", "Technical consultation", "Platform integration", "Best practices"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Global Network
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Building the future of AI healthcare through strategic partnerships and collaborative innovation
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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

          {/* Key Partners */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                Strategic Partners
              </span>
            </h2>
            <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Collaborating with world-renowned institutions to advance AI in healthcare
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <Card 
                  key={index} 
                  className="group bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 border border-gray-700 hover:border-pink-500/50"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                        <partner.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                            {partner.name}
                          </h3>
                          <span className="text-sm text-violet-400 bg-violet-400/10 px-3 py-1 rounded-full">
                            {partner.type}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {partner.description}
                        </p>
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-pink-400">Focus: </span>
                          <span className="text-sm text-gray-400 ml-2">{partner.focus}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Collaboration Areas */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Collaboration Areas
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collaborationAreas.map((area, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{area.description}</p>
                    <ul className="space-y-2">
                      {area.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center text-gray-400">
                          <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mr-3"></div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-3xl p-12 backdrop-blur-sm border border-pink-500/20">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-6">Join Our AI Revolution</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Partner with us to shape the future of AI-powered healthcare solutions and make a lasting impact on global health outcomes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                  Become a Partner
                </button>
                <button className="border border-pink-500 text-pink-400 hover:bg-pink-500/10 px-8 py-4 rounded-xl font-medium transition-all duration-300">
                  Research Collaboration
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Collaborators;
