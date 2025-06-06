
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
      description: "Joint medical research initiatives with leading academic institutions",
      points: ["Algorithm development", "Clinical trials", "Data analysis", "Publication collaboration"],
      icon: Microscope,
      color: "from-blue-500 to-teal-600",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/20"
    },
    {
      title: "Clinical Implementation",
      description: "Real-world deployment of medical solutions in healthcare settings",
      points: ["Pilot programs", "Staff training", "System integration", "Performance monitoring"],
      icon: Hospital,
      color: "from-green-500 to-emerald-600",
      borderColor: "border-green-500/30",
      iconBg: "bg-green-500/20"
    },
    {
      title: "Technology Transfer",
      description: "Knowledge sharing and technology commercialization",
      points: ["Patent licensing", "Technical consultation", "Platform integration", "Best practices"],
      icon: Globe,
      color: "from-purple-500 to-violet-600",
      borderColor: "border-purple-500/30",
      iconBg: "bg-purple-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Global Network
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Building the future of AI healthcare through strategic partnerships and collaborative innovation
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="group bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:-translate-y-2 border border-border hover:border-pink-500/50"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
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
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Collaborating with world-renowned institutions to advance AI in healthcare
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <Card 
                  key={index} 
                  className="group bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 border hover:border-pink-500/50"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                        <partner.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-pink-400 transition-colors">
                            {partner.name}
                          </h3>
                          <span className="text-sm text-violet-400 bg-violet-400/10 px-3 py-1 rounded-full">
                            {partner.type}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {partner.description}
                        </p>
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-pink-400">Focus: </span>
                          <span className="text-sm text-muted-foreground ml-2">{partner.focus}</span>
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
                  className={`group bg-card/60 backdrop-blur-sm border ${area.borderColor} hover:border-opacity-70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/50"></div>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${area.color} opacity-10 rounded-full -translate-y-16 translate-x-16`}></div>
                  <CardContent className="p-8 relative z-10">
                    <div className={`w-16 h-16 ${area.iconBg} backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border ${area.borderColor}`}>
                      <area.icon className={`h-8 w-8 ${area.color.includes('blue') ? 'text-blue-400' : area.color.includes('green') ? 'text-green-400' : 'text-purple-400'}`} />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 group-hover:${area.color.includes('blue') ? 'text-blue-400' : area.color.includes('green') ? 'text-green-400' : 'text-purple-400'} transition-colors text-foreground`}>
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{area.description}</p>
                    <ul className="space-y-3">
                      {area.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center text-muted-foreground">
                          <div className={`w-2 h-2 bg-gradient-to-r ${area.color} rounded-full mr-3 flex-shrink-0`}></div>
                          <span className="text-sm">{point}</span>
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
              <h3 className="text-4xl font-bold text-foreground mb-6">Join Our AI Revolution</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
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
