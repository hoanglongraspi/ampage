import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Mic, Activity, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const SpeechLanguagePathology = () => {
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
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Mic className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-purple-500">
                Speech-Language Pathology
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Advanced AI-powered technologies and diagnostic tools designed to enhance speech-language therapy 
              outcomes through innovative assessment and treatment methodologies.
            </p>
          </div>

          {/* Technologies Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* SATE Technology */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-800 flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Activity className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-purple-600 transition-colors">
                      SATE Technology
                    </CardTitle>
                    <p className="text-muted-foreground">Speech Assessment and Treatment Enhancement</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    SATE AI revolutionizes speech therapy with AI-powered precision and speed, enabling 
                    speech-language pathologists to save 60+ minutes daily through automated speech 
                    analysis and comprehensive clinical reporting.
                  </p>
                  
                  {/* <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Core Features:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Reliable Verbatim Transcription:</strong> Instant speech-to-text with AI accuracy</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Fully Automated Annotation:</strong> Real-time speech pattern detection and multi-layer analysis</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Interactive Reports:</strong> One-click comprehensive clinical reports with dynamic visualizations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Detailed Speech Analysis:</strong> Identify specific issues with timestamps for targeted therapy</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Clinical Impact:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg text-center">
                        <div className="font-bold text-purple-600 text-lg">60+ min</div>
                        <div className="text-muted-foreground">Saved per day</div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg text-center">
                        <div className="font-bold text-purple-600 text-lg">$2,000+</div>
                        <div className="text-muted-foreground">Additional monthly revenue</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground pt-2 border-t border-border">
                    Trusted by Buffalo Public Schools, John R. Oishei Children's Hospital, DENT Neurologic Institute, and University at Buffalo
                  </div> */}
                </div>

                <div className="pt-4 mt-auto">
                  <Button 
                    className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white w-full"
                    onClick={() => window.open('https://sate.agency', '_blank')}
                  >
                    Learn More About SATE
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Ultrasound in SLP */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-800 flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Monitor className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-purple-600 transition-colors">
                      Ultrasound in SLP
                    </CardTitle>
                    <p className="text-muted-foreground">Advanced Diagnostic Imaging</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Integration of ultrasound technology in speech-language pathology provides 
                    real-time visualization of articulatory movements, enabling more precise 
                    diagnosis and targeted therapeutic interventions.
                  </p>
                  
                  {/* <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Applications:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Tongue movement visualization during speech production</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Assessment of swallowing disorders (dysphagia)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Biofeedback for articulatory training and therapy</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Non-invasive assessment of speech motor control</span>
                      </li>
                    </ul>
                  </div> */}
                </div>

                <div className="pt-4 mt-auto">
                  <Button 
                    className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white w-full"
                    onClick={() => window.open('#', '_blank')}
                  >
                    Learn More About Ultrasound in SLP
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

export default SpeechLanguagePathology; 