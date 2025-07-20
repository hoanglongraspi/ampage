import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Activity, Volume2, Scan, Mic, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      icon: Mic,
      title: "Speech-Language Pathology",
      color: "from-purple-500 to-purple-600",
      route: "/products/speech-language-pathology",
      available: true
    },
    {
      icon: Activity,
      title: "Physical & Occupational Therapy",
      color: "from-blue-500 to-blue-600",
      route: "/products/physical-occupational-therapy",
      available: true
    },
    {
      icon: Volume2,
      title: "Audiology",
      color: "from-green-500 to-green-600",
      route: "/products/audiology",
      available: true
    },
    {
      icon: Smile,
      title: "Dentistry",
      color: "from-teal-500 to-teal-600",
      route: "/products/dentistry",
      available: true
    },
    {
      icon: Scan,
      title: "Wound Care & Diabetes",
      color: "from-orange-500 to-orange-600",
      route: "/products/wound-healing-diabetic-care",
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Our Products
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-16">
            Medical technology solutions across key specialized areas
          </p>

          {/* Improved grid layout for better visual balance */}
          <div className="flex flex-col items-center gap-8">
            {/* First row - 2 items centered */}
            <div className="flex flex-wrap justify-center gap-8 w-full">
              {products.slice(0, 2).map((product, index) => (
                <div key={index} className="w-full sm:w-96 max-w-sm">
                  {product.available ? (
                    <Link to={product.route} className="block group hover:scale-105 transition-transform duration-300 cursor-pointer h-full">
                      <div className="bg-background border rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <product.icon className="h-10 w-10 text-white" />
                        </div>
                        
                        <div className="flex-grow flex items-center justify-center">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-500 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="group hover:scale-105 transition-transform duration-300 cursor-not-allowed h-full">
                      <div className="bg-background border rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 opacity-75 h-full flex flex-col">
                        <div className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <product.icon className="h-10 w-10 text-white" />
                        </div>
                        
                        <div className="flex-grow flex flex-col items-center justify-center">
                          <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                            {product.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">Coming Soon</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Second row - 3 items centered */}
            <div className="flex flex-wrap justify-center gap-8 w-full">
              {products.slice(2, 5).map((product, index) => (
                <div key={index + 2} className="w-full sm:w-80 max-w-sm">
                  {product.available ? (
                    <Link to={product.route} className="block group hover:scale-105 transition-transform duration-300 cursor-pointer h-full">
                      <div className="bg-background border rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <product.icon className="h-10 w-10 text-white" />
                        </div>
                        
                        <div className="flex-grow flex items-center justify-center">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-500 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="group hover:scale-105 transition-transform duration-300 cursor-not-allowed h-full">
                      <div className="bg-background border rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 opacity-75 h-full flex flex-col">
                        <div className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <product.icon className="h-10 w-10 text-white" />
                        </div>
                        
                        <div className="flex-grow flex flex-col items-center justify-center">
                          <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                            {product.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">Coming Soon</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products; 