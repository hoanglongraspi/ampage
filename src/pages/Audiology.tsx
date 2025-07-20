import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Volume2, RotateCcw, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Audiology = () => {
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
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                <Volume2 className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-green-500">
                Audiology
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Advanced diagnostic and therapeutic technologies for comprehensive hearing healthcare, 
              balance disorders, and auditory system assessment through innovative medical solutions.
            </p>
          </div>

          {/* Technologies Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* BPPV */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-2 hover:border-green-200 dark:hover:border-green-800 flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <RotateCcw className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-green-600 transition-colors">
                      BPPV Technology
                    </CardTitle>
                    <p className="text-muted-foreground">Balance & Vestibular Disorder Treatment</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced technology for diagnosing and treating Benign Paroxysmal Positional Vertigo (BPPV) 
                    and other vestibular disorders. Helps doctors get comprehensive reports from their patients 
                    for better diagnosis and treatment planning.
                  </p>
                </div>

                <div className="pt-4 mt-auto">
                  <Button 
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-full"
                    onClick={() => window.open('#', '_blank')}
                  >
                    Learn More About BPPV
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Audiosight */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-2 hover:border-green-200 dark:hover:border-green-800 flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-green-600 transition-colors">
                      Audiosight
                    </CardTitle>
                    <p className="text-muted-foreground">Advanced Auditory Assessment</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive auditory assessment and diagnostic platform that provides detailed 
                    hearing analysis and visualization tools for audiologists and hearing healthcare 
                    professionals to deliver precise patient care.
                  </p>
                </div>

                <div className="pt-4 mt-auto">
                  <Button 
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-full"
                    onClick={() => window.open('#', '_blank')}
                  >
                    Learn More About Audiosight
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

export default Audiology; 