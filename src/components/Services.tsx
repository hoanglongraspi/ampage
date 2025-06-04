
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
      title: "AI Diagnostic Intelligence",
      description: "Deep learning algorithms that analyze medical data with superhuman precision for early disease detection.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Scan,
      title: "Medical AI Imaging",
      description: "Computer vision AI that interprets X-rays, MRIs, and CT scans with unmatched accuracy and speed.",
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: Activity,
      title: "Smart Patient Monitoring",
      description: "AI-powered continuous monitoring systems that predict health events before they occur.",
      color: "from-pink-600 to-rose-600"
    },
    {
      icon: Database,
      title: "Healthcare AI Analytics",
      description: "Machine learning models that extract actionable insights from complex medical datasets.",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Predictive AI Models",
      description: "Advanced AI algorithms that forecast health risks and enable proactive intervention strategies.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Clock,
      title: "AI Workflow Automation",
      description: "Intelligent automation that streamlines healthcare operations and reduces manual workload.",
      color: "from-rose-600 to-pink-600"
    },
    {
      icon: Users,
      title: "AI-Enhanced Telemedicine",
      description: "Smart virtual consultations powered by AI for enhanced remote patient care and diagnosis.",
      color: "from-pink-600 to-pink-700"
    },
    {
      icon: BarChart3,
      title: "AI Clinical Research",
      description: "Accelerated research through AI-driven data analysis, patient matching, and clinical trial optimization.",
      color: "from-rose-600 to-rose-700"
    },
    {
      icon: Microscope,
      title: "AI Drug Discovery",
      description: "Revolutionary AI models that accelerate pharmaceutical development and molecular discovery.",
      color: "from-pink-700 to-rose-700"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            AI Healthcare Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence technologies designed to revolutionize healthcare through intelligent automation and predictive analytics
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
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
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
