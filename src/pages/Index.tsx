
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Collaborators } from '@/components/Collaborators';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Projects />
      <Collaborators />
      <Footer />
    </div>
  );
};

export default Index;
