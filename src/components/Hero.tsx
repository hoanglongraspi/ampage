import React from 'react';
import { ArrowRight, Activity, Users, Stethoscope, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Hero = () => {
  const externalLinks = [
    {
      name: "mRehab",
      url: "https://mRehab.agency"
    },
    {
      name: "AudioSight",
      url: "https://AudioSight.agency"
    },
    {
      name: "Oralscan",
      url: "https://Oralscan.health"
    },
    {
      name: "Sate",
      url: "https://Sate.agency"
    }
  ];

  return (
    <section id="home" className="min-h-screen">
      {/* Hero Section - Full Screen */}
      <div className="h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 to-gray-100/90 dark:from-gray-900/90 dark:to-gray-800/90" />
        
        {/* Content */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground">
            Advancing Healthcare Through
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Medical Technology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Auspex Medix develops innovative AI-powered medical technologies that enhance patient outcomes and support healthcare professionals 
          across diverse specialties, including Speech-Language Pathology, Physical & Occupational Therapy, Audiology, Dentistry, Wound Healing & Diabetic Care and more...
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-blue-400/50 px-8 py-4 text-lg rounded-xl"
              onClick={() => window.location.href = '/about'}
            >
              About us
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700 text-white px-8 py-4 text-lg group border-0 rounded-xl"
                >
                  Visit Our Products
                  <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center" 
                className="w-64 bg-background border-2 shadow-xl rounded-xl p-2 mt-2"
              >
                {externalLinks.map((link, index) => (
                  <DropdownMenuItem 
                    key={index}
                    className="cursor-pointer hover:bg-secondary/50 rounded-lg p-3 transition-colors duration-200"
                    onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-foreground font-medium">{link.name}</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            
          </div>
        </div>
      </div>

      {/* Three Focus Areas */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Patients */}
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Patients</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Access mobile rehabilitation tools, AI-powered diagnostics, and real-time monitoring 
                to support your recovery and health management at home.
              </p>
            </div>

            {/* Healthcare Providers */}
            <div className="text-center">
              <div className="w-24 h-24 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="h-12 w-12 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Healthcare Providers</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Utilize advanced imaging, AI diagnostics, and evidence-based tools to enhance 
                clinical decision-making and improve patient outcomes.
              </p>
            </div>

            {/* Researchers */}
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Researchers</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Collaborate on cutting-edge medical research with our AI technologies, 
                clinical validation tools, and comprehensive data analysis platforms.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
