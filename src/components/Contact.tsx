
import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Connect with Our AI Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to harness AI for your healthcare practice? Let's explore how our intelligent solutions can transform your patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">Discuss AI Solutions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <Input placeholder="John" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <Input placeholder="Doe" className="w-full" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <Input type="email" placeholder="john.doe@hospital.com" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Healthcare Organization</label>
                  <Input placeholder="Your Hospital/Clinic Name" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">AI Requirements</label>
                  <Textarea 
                    placeholder="Tell us about your healthcare AI needs and challenges..." 
                    rows={6}
                    className="w-full"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white text-lg py-3">
                  <Send className="mr-2 h-5 w-5" />
                  Send AI Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email Contact</h3>
                    <p className="text-slate-600">info@auspexmedix.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-pink-600 to-rose-700 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="text-slate-600">
                      1576 Sweet Home Rd<br />
                      Buffalo, NY 14228, United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Experience AI Demo</h3>
              <p className="mb-4 opacity-90">
                Witness our AI solutions in action. Schedule a live demonstration with our AI specialists.
              </p>
              <Button variant="secondary" className="w-full bg-white text-pink-600 hover:bg-pink-50">
                Book AI Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
