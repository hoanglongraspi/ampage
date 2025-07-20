import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Smile, Scan, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Dentistry = () => {
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
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center">
                <Smile className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-teal-500">
                Dentistry
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Advanced dental imaging and diagnostic technologies for comprehensive oral healthcare, 
              providing precise scanning and analysis solutions for modern dental practice.
            </p>
          </div>

          {/* Technologies Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Oralscan */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-2 hover:border-teal-200 dark:hover:border-teal-800 flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Scan className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-teal-600 transition-colors">
                      OralScan
                    </CardTitle>
                    <p className="text-muted-foreground">AI-Powered Accessible Dental Care</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    AI-powered mobile application designed for accessible dental care for older adults 
                    who cannot access regular dental services. Uses advanced AI to detect oral health 
                    issues like caries and ulcers, providing real-time diagnostics and personalized 
                    care recommendations in under 5 seconds.
                  </p>

                  

                  
                </div>

                <div className="pt-4 mt-auto">
                  <Button 
                    className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white w-full"
                    onClick={() => window.open('https://oralscan.health/')}
                  >
                    Learn More About OralScan
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* orthoscan */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-2 hover:border-teal-200 dark:hover:border-teal-800 flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-teal-600 transition-colors">
                      orthoscan
                    </CardTitle>
                    <p className="text-muted-foreground">AI-Powered Orthodontic Care</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    AI-powered mobile application designed for accessible orthodontic care for patients 
                    who cannot access regular orthodontic services. Uses advanced AI to detect orthodontic 
                    issues and alignment problems, providing real-time diagnostics and personalized 
                    treatment recommendations for orthodontic care.
                  </p>
                   

                   
                </div>

                <div className="pt-4 mt-auto">
                  <Button 
                    className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white w-full"
                    onClick={() => window.open('#', '_blank')}
                  >
                    Learn More About orthoscan
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

export default Dentistry; 