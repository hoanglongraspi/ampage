import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Company Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-teal-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                Auspex Medix LLC
              </h3>
              <p className="text-sm text-muted-foreground">Medical Technology Innovation</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2024 Auspex Medix LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
