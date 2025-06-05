import React from 'react';
import { Award, Users, Target, Lightbulb, Heart, Stethoscope, Brain, Activity } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Medical Innovation",
      description: "Pioneering cutting-edge medical technologies that transform patient care across multiple therapeutic areas."
    },
    {
      icon: Stethoscope,
      title: "Clinical Excellence",
      description: "Creating solutions that enhance clinical workflows and improve diagnostic accuracy for healthcare professionals."
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Developing intelligent systems that provide real-time analysis and predictive insights for better patient outcomes."
    },
    {
      icon: Activity,
      title: "Patient-Centered Care",
      description: "Building technologies that put patients first, enabling personalized treatment and continuous monitoring."
    }
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Medical Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-teal-500/10"></div>
        <div className="absolute top-20 left-20 w-8 h-1 bg-gray-400 rounded"></div>
        <div className="absolute top-20 left-24 w-1 h-8 bg-gray-400 rounded"></div>
        <div className="absolute bottom-32 right-32 w-6 h-1 bg-gray-400 rounded"></div>
        <div className="absolute bottom-32 right-35 w-1 h-6 bg-gray-400 rounded"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/25">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                  About Auspex Medix LLC
                </h2>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At the forefront of medical technology innovation, Auspex Medix LLC specializes in developing 
              advanced digital solutions across five critical healthcare domains: Physical & Occupational Therapy, 
              Audiology, Wound Healing, Speech-Language Pathology, and Dentistry.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our multidisciplinary team combines expertise in AI, medical imaging, signal processing, and 
              clinical research to create technologies that enhance diagnostic accuracy, improve patient outcomes, 
              and revolutionize therapeutic interventions across specialized medical fields.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Medical Technology Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To advance healthcare through innovative medical technologies that bridge the gap between 
                  clinical research and practical application, making cutting-edge diagnostic and therapeutic 
                  tools accessible to healthcare providers worldwide while ensuring patient safety and efficacy.
                </p>
              </div>
            </div>

            {/* Medical Specialties Showcase */}
            <div className="mt-8 grid grid-cols-5 gap-4">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-xs text-gray-600 font-medium">PT/OT</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Stethoscope className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Audiology</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Wound Care</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Speech Therapy</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Dentistry</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:transform hover:scale-105 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="mt-24 bg-white rounded-3xl p-12 shadow-xl border border-blue-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Medical Technology Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Medical Specialties</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
                <div className="text-gray-600">Research Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-gray-600">Clinical Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
