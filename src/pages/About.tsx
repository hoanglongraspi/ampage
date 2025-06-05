import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heart, Stethoscope, Brain, Activity, Users, Award, Target, Lightbulb, Building, Globe, Microscope, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Innovation",
      description: "Every technology we develop is designed with patient outcomes and safety as our primary focus, ensuring that our solutions truly improve lives."
    },
    {
      icon: Stethoscope,
      title: "Clinical Excellence",
      description: "We collaborate with leading healthcare professionals to ensure our technologies meet the highest clinical standards and real-world needs."
    },
    {
      icon: Brain,
      title: "Advanced Technology",
      description: "Leveraging cutting-edge AI, machine learning, and medical imaging to create breakthrough solutions that push the boundaries of medical technology."
    },
    {
      icon: Activity,
      title: "Evidence-Based Solutions",
      description: "All our technologies are validated through rigorous clinical trials and evidence-based research to ensure efficacy and safety."
    }
  ];

  const specialties = [
    {
      icon: Activity,
      title: "Physical & Occupational Therapy",
      description: "mRehab platforms, motion analysis, and app-based therapy tools",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Stethoscope,
      title: "Audiology",
      description: "Audio processing, vestibular diagnostics, and EEG integration",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Wound Healing & Diabetic Care",
      description: "Multispectral imaging and mmWave diagnostic technologies",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Microscope,
      title: "Speech-Language Pathology",
      description: "Ultrasound imaging, EEG monitoring, and AI speech analysis",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Dentistry",
      description: "Oral imaging, AI diagnostics, and 3D analysis systems",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      specialty: "AI & Medical Imaging",
      description: "Leading our research initiatives in computer vision and deep learning for medical applications."
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Head of Clinical Research",
      specialty: "Audiology & Neural Engineering",
      description: "Overseeing clinical validation and audiology technology development programs."
    },
    {
      name: "Jennifer Walsh",
      role: "Director of Clinical Operations",
      specialty: "Healthcare Implementation",
      description: "Managing clinical partnerships and real-world deployment of our medical technologies."
    },
    {
      name: "Dr. Alex Thompson",
      role: "Lead AI Research Scientist",
      specialty: "Machine Learning & Diagnostics",
      description: "Developing AI algorithms for diagnostic accuracy and predictive healthcare analytics."
    }
  ];

  const stats = [
    { number: "5+", label: "Medical Specialties", icon: Heart },
    { number: "15+", label: "Research Projects", icon: Microscope },
    { number: "100+", label: "Clinical Partners", icon: Building },
    { number: "25+", label: "Countries Served", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-75"></div>
          <div className="absolute bottom-32 left-32 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-150"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <Heart className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              About Auspex Medix LLC
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of medical technology through innovative solutions that enhance patient care and clinical outcomes across specialized therapeutic areas.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                At Auspex Medix LLC, we are dedicated to transforming healthcare through cutting-edge medical technologies. Our multidisciplinary team combines expertise in artificial intelligence, medical imaging, signal processing, and clinical research to develop solutions that address real-world healthcare challenges.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We focus on five specialized areas where technology can make the greatest impact: Physical & Occupational Therapy, Audiology, Wound Healing & Diabetic Care, Speech-Language Pathology, and Dentistry.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20">
                <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To become the global leader in medical technology innovation, making advanced diagnostic and therapeutic tools accessible to healthcare providers worldwide while ensuring the highest standards of patient safety and clinical efficacy.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Innovation-Driven</p>
                    <p className="text-gray-400 text-sm">Advancing healthcare through technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our innovation and drive our commitment to excellence in medical technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group bg-gray-900/60 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Specialties */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Our Medical Specialties
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Five specialized areas where we're developing breakthrough medical technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card 
                key={index}
                className="group bg-gray-900/60 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${specialty.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <specialty.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {specialty.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the experts driving innovation in medical technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="group bg-gray-900/60 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-500"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-blue-400 font-semibold mb-1">{member.role}</p>
                      <p className="text-teal-400 text-sm mb-4">{member.specialty}</p>
                      <p className="text-gray-300 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 