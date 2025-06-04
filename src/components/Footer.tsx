
import React from 'react';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-2 rounded-xl">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Auspex Medix LLC</h3>
                <p className="text-slate-400">AI-Powered Healthcare Intelligence</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Pioneering the future of healthcare through advanced artificial intelligence. 
              Empowering medical professionals with intelligent technologies for superior patient outcomes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-pink-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-pink-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">AI Solutions</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-pink-400 transition-colors">AI Diagnostics</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Medical AI Imaging</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Smart Monitoring</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Predictive AI</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">AI Telemedicine</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact AI Team</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-pink-400" />
                <span>ai@auspexmedix.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-pink-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-pink-400 mt-0.5" />
                <span>123 AI Innovation Center<br />Medical AI District, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 Auspex Medix LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-pink-400 transition-colors">AI Ethics Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-400 transition-colors">HIPAA Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
