import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Collaborators } from '@/components/Collaborators';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Collaborators />
      <Footer />
    </div>
  );
};

export default Index;
