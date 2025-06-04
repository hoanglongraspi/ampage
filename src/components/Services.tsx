
import React from 'react';
import { 
  Brain, 
  Scan, 
  Activity, 
  Database, 
  Shield, 
  Clock,
  Users,
  BarChart3,
  Microscope 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Diagnostics",
      description: "Advanced machine learning algorithms for accurate medical diagnosis and early disease detection.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Scan,
      title: "Medical Imaging AI",
      description: "Revolutionary image analysis for X-rays, MRIs, CT scans with unparalleled precision.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Activity,
      title: "Patient Monitoring",
      description: "Real-time AI-powered patient monitoring systems for critical care and remote health tracking.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Database,
      title: "Health Data Analytics",
      description: "Comprehensive analysis of patient data to identify trends and optimize treatment protocols.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Shield,
      title: "Predictive Healthcare",
      description: "Predictive models to prevent health complications and enable proactive medical interventions.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Workflow Optimization",
      description: "AI-driven solutions to streamline hospital operations and reduce administrative burden.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Telemedicine AI",
      description: "Enhanced remote consultation capabilities with AI-assisted diagnosis and treatment recommendations.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: BarChart3,
      title: "Clinical Research",
      description: "Accelerate clinical trials and research with AI-powered data analysis and patient matching.",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: Microscope,
      title: "Drug Discovery",
      description: "AI-accelerated pharmaceutical research and development for faster drug discovery processes.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our AI Healthcare Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions designed to transform every aspect of healthcare delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
