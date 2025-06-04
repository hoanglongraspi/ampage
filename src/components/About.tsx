
import React from 'react';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Award,
      title: "AI Excellence",
      description: "Pioneering the most advanced AI technologies that set new standards in healthcare intelligence."
    },
    {
      icon: Users,
      title: "Human-AI Partnership",
      description: "Creating seamless collaboration between medical professionals and artificial intelligence systems."
    },
    {
      icon: Target,
      title: "Precision AI",
      description: "Developing ultra-precise AI models that healthcare providers can trust for critical medical decisions."
    },
    {
      icon: Lightbulb,
      title: "AI Innovation",
      description: "Breakthrough artificial intelligence technologies that redefine what's possible in patient care."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About Auspex Medix LLC
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At the intersection of artificial intelligence and healthcare, Auspex Medix LLC 
              is pioneering the next generation of medical AI solutions. Our team of AI researchers, 
              machine learning engineers, and medical professionals collaborate to create intelligent 
              systems that augment human expertise and save lives.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We believe AI should amplify human intelligence, not replace it. Our sophisticated 
              AI models are designed to work alongside healthcare professionals, providing 
              unprecedented insights and capabilities that enhance decision-making and patient outcomes.
            </p>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our AI Mission</h3>
              <p className="text-slate-700 leading-relaxed">
                To democratize access to world-class AI healthcare technology, making intelligent 
                medical solutions available globally while ensuring AI serves humanity's health 
                and wellbeing through ethical, transparent, and innovative approaches.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100"
              >
                <div className="bg-gradient-to-r from-pink-500 to-rose-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
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
