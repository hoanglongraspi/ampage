import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Scan, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const WoundHealingDiabeticCare = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Link to="/products" className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6 group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Link>
            
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Scan className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-orange-500">
                Wound Healing & Diabetic Care
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Advanced wound assessment and diabetic care technologies designed to improve healing outcomes 
              and provide comprehensive monitoring solutions for wound management and diabetic complications.
            </p>
          </div>

          {/* Technologies Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* woundSight */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-2 hover:border-orange-200 dark:hover:border-orange-800 flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-orange-600 transition-colors">
                      woundSight
                    </CardTitle>
                    <p className="text-muted-foreground">Advanced Wound Assessment Technology</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Intelligent wound assessment and monitoring system that uses advanced imaging 
                    technology to analyze wound healing progress, providing healthcare professionals 
                    with precise measurements and treatment recommendations.
                  </p>
                </div>

                <div className="pt-4 mt-auto">
                  <Button 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white w-full"
                    onClick={() => window.open('#', '_blank')}
                  >
                    Learn More About woundSight
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* mmskin */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-2 hover:border-orange-200 dark:hover:border-orange-800 flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-orange-600 transition-colors">
                      mmSkin
                    </CardTitle>
                    <p className="text-muted-foreground">Radar & AI Wound Monitoring</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Revolutionary medical imaging technology that uses radar and artificial intelligence 
                    to see through bandages and monitor wounds without removing dressings. Uses millimeter 
                    wave radio signals to measure wound moisture content, achieving 99.45% accuracy while 
                    reducing secondary infections and saving healthcare provider time.
                  </p>

                  {/* <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Capabilities:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Non-invasive Monitoring:</strong> See through 1-2 layers of gauze without removing dressings</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>High Accuracy:</strong> 99.45% accurate in moisture detection, 95.5% on human skin</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Universal Application:</strong> Works across different skin tones, ages, and genders</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-xs text-muted-foreground pt-2 border-t border-border">
                    Developed by University at Buffalo researchers, patent pending (PCT application filed)
                  </div> */}
                </div>

                <div className="pt-4 mt-auto">
                  <Button 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white w-full"
                    onClick={() => window.open('#', '_blank')}
                  >
                    Learn More About mmSkin
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

export default WoundHealingDiabeticCare; 