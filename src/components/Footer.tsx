
import React from 'react';
import { Brain, Mail, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-violet-600 p-2 rounded-lg">
                <Brain className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Auspex Medix LLC</h3>
                <p className="text-muted-foreground">Medical Technology Innovation</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Advancing healthcare through innovative medical technologies across specialized therapeutic areas including PT/OT, audiology, wound care, speech therapy, and dentistry.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Medical Technologies</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><span className="text-blue-400">•</span> Physical & Occupational Therapy</li>
              <li><span className="text-green-400">•</span> Audiology Solutions</li>
              <li><span className="text-orange-400">•</span> Wound Healing & Diabetic Care</li>
              <li><span className="text-purple-400">•</span> Speech-Language Pathology</li>
              <li><span className="text-teal-400">•</span> Dental Diagnostics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3 text-muted-foreground mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-pink-400" />
                <span>contact@auspexmedix.com</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="bg-muted p-3 rounded-lg hover:bg-pink-600 transition-colors">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary-foreground" />
              </a>
              <a href="#" className="bg-muted p-3 rounded-lg hover:bg-violet-600 transition-colors">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Auspex Medix LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-violet-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-400 transition-colors">AI Ethics</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
