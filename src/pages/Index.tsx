import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Collaborators } from '@/components/Collaborators';
import { Footer } from '@/components/Footer';
import { ChevronDown, ExternalLink } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const Index = () => {
  const externalLinks = [
    {
      name: "mRehab",
      url: "https://mRehab.auspexmedix.com"
    },
    {
      name: "AudioSight", 
      url: "https://AudioSight.auspexmedix.com"
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
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      
      {/* Products Dropdown Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Explore Our Products
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Access our comprehensive suite of medical technology solutions
          </p>

          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="bg-background border-2 hover:bg-secondary/50 transition-colors duration-300 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl"
                >
                  Visit Our Products
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center" 
                className="w-64 bg-background border-2 shadow-xl rounded-xl p-2"
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
      </section>

      
      <Footer />
    </div>
  );
};

export default Index;
