import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Company Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="rounded-lg flex items-center justify-center">
              <img 
                src="/AM_logo.svg" 
                alt="Auspex Medix Logo" 
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black-500">
                Auspex Medix
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
