
import React from 'react';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality AI solutions that exceed healthcare standards."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working hand-in-hand with medical professionals to create meaningful healthcare innovations."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Developing precise, reliable AI tools that healthcare providers can trust for critical decisions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering breakthrough technologies that revolutionize patient care and medical outcomes."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About Auspex Medix LLC
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded with a vision to transform healthcare through artificial intelligence, 
              Auspex Medix LLC stands at the forefront of medical technology innovation. 
              Our team of world-class engineers, data scientists, and medical professionals 
              work together to create AI solutions that save lives and improve patient outcomes.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We believe that advanced AI should augment human expertise, not replace it. 
              Our solutions are designed to empower healthcare professionals with unprecedented 
              insights and capabilities, enabling them to provide the best possible care for their patients.
            </p>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-700 leading-relaxed">
                To democratize access to advanced AI healthcare solutions, making cutting-edge 
                medical technology available to healthcare providers worldwide, ultimately 
                improving patient outcomes and saving lives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
