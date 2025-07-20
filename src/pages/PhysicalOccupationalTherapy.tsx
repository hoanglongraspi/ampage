import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Activity, Smartphone, Wifi, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const PhysicalOccupationalTherapy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Link to="/projects" className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6 group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
            
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Activity className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-blue-500">
                Physical & Occupational Therapy
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Innovative rehabilitation technologies and smart monitoring systems designed to enhance 
              therapy outcomes and patient recovery through advanced sensor technology and AI-powered insights.
            </p>
          </div>

          {/* Technologies Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* mRehab */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800 flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-blue-600 transition-colors">
                      mRehab
                    </CardTitle>
                    <p className="text-muted-foreground">AI-Powered Home Rehabilitation</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Revolutionary AI-powered rehabilitation app combined with custom 3D-printed therapy tools 
                    that brings hospital-grade therapy into your living room. Empowers recovery with real-time 
                    feedback and personalized routines from the comfort of home.
                  </p>

                  
                </div>

                <div className="pt-4 mt-auto">
                  <Button 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-full"
                    onClick={() => window.open('https://mrehab.auspexmedix.com/', '_blank')}
                  >
                    Learn More About mRehab
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Senno */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800 flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Wifi className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-blue-600 transition-colors">
                      Senno
                    </CardTitle>
                    <p className="text-muted-foreground">Smart Insoles Technology</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Smart insole technology for comprehensive foot health monitoring. Features three key 
                    applications: Balance Monitoring, Foot Neurofeedback, and GPS Tracking for enhanced 
                    rehabilitation and mobility assessment.
                  </p>
                   
                </div>

                <div className="pt-4 mt-auto">
                  <Button 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-full"
                    onClick={() => window.open('#', '_blank')}
                  >
                    Learn More About Senno
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* SmartSock */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800 flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-blue-600 transition-colors">
                      SmartSock
                    </CardTitle>
                    <p className="text-muted-foreground">Wearable Gait Analysis</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Revolutionary wearable technology that monitors gait patterns, balance, 
                    and movement quality in real-time, providing valuable insights for 
                    physical therapy and fall prevention.
                  </p>
                </div>

                <div className="pt-4 mt-auto">
                  <Button 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-full"
                    onClick={() => window.open('#', '_blank')}
                  >
                    Learn More About SmartSock
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

         

          
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PhysicalOccupationalTherapy; 