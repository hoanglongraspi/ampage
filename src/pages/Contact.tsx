import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail, MapPin, Clock, Send, Building, Globe, Users, Phone, CheckCircle, XCircle, X } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [popup, setPopup] = useState({
    isOpen: false,
    type: 'success', // 'success' or 'error'
    title: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'd95d0382-7808-4efb-9366-fccfa97b7304');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('subject', `Auspex Medix Contact: ${formData.subject}`);
      formDataToSend.append('inquiry_type', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setPopup({
          isOpen: true,
          type: 'success',
          title: 'Message Sent Successfully!',
          message: 'Thank you for contacting us. We will get back to you soon.'
        });
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      } else {
        console.log('Error:', data);
        setPopup({
          isOpen: true,
          type: 'error',
          title: 'Submission Failed',
          message: 'There was an error sending your message. Please try again or contact us directly.'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setPopup({
        isOpen: true,
        type: 'error',
        title: 'Network Error',
        message: 'Unable to send your message. Please check your connection and try again.'
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@auspexmedix.com",
      description: "Send us an email for collaboration",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "(716) 275-2321",
      description: "Call us during business hours",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "1576 Sweet Home Rd",
      description: "Buffalo, NY 14228-2710, United States",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 5:00 PM",
      description: "Eastern Standard Time",
      color: "from-teal-500 to-teal-600"
    }
  ];



  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-75"></div>
          <div className="absolute bottom-32 left-32 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-150"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <Mail className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get in touch with our medical technology experts. We're here to answer your questions and explore collaboration opportunities.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reach out to us through any of the following channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-[80rem] mx-auto px-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="group bg-background/60 backdrop-blur-sm border hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 text-center shadow-lg hover:shadow-xl min-h-[280px]"
              >
                <CardContent className="p-12">
                  <div className={`w-28 h-28 bg-gradient-to-r ${info.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <info.icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-500 transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-blue-500 font-semibold mb-3 text-lg">{info.details}</p>
                  <p className="text-muted-foreground text-base">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Departments */}
          
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-8 gap-12 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Send us a Message
                <br />
                <span className="text-muted-foreground text-sm">
                  Let's collaborate on your medical technology needs
                </span>
              </h2>
              <Card className="bg-background/60 backdrop-blur-sm border shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your company or organization"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="research">Research Partnership</option>
                        <option value="business">Business Development</option>
                        <option value="collaboration">Clinical Collaboration</option>
                        <option value="support">Technical Support</option>
                        <option value="media">Media & Press</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        placeholder="Tell us about your inquiry or project..."
                      ></textarea>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700 text-white py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Location Info */}
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Visit Our Location
              </h2>
              
              {/* Google Maps Embed */}
              <Card className="bg-background/60 backdrop-blur-sm border shadow-xl mb-8">
                <CardContent className="p-0">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.112484583289!2d-78.78825492344654!3d42.9886577114789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d371b5e8b3f0b5b%3A0x1d8f5c0e6b8e2a4c!2s1576%20Sweet%20Home%20Rd%2C%20Buffalo%2C%20NY%2014228!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Auspex Medix LLC Location - 1576 Sweet Home Rd, Buffalo, NY 14228-2710"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Location Details */}
              <Card className="bg-background/60 backdrop-blur-sm border shadow-xl">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    <MapPin className="inline mr-3 h-6 w-6 text-blue-500" />
                    Our Location
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-500 mb-2">Address</h4>
                      <p className="text-muted-foreground">
                        1576 Sweet Home Rd<br />
                        Buffalo, NY 14228-2710<br />
                        United States
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-teal-500 mb-2">Directions</h4>
                      <p className="text-muted-foreground text-sm">
                        Located on Sweet Home Road in Buffalo. 
                        Convenient parking available on-site. Easily accessible 
                        by car and public transportation.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-green-500 mb-2">Office Hours</h4>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                        Appointments recommended for visits
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success/Error Popup Modal */}
      <Dialog open={popup.isOpen} onOpenChange={(open) => setPopup(prev => ({ ...prev, isOpen: open }))}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              {popup.type === 'success' ? (
                <div className="bg-green-100 dark:bg-green-900 rounded-full p-4">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
              ) : (
                <div className="bg-red-100 dark:bg-red-900 rounded-full p-4">
                  <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
              )}
            </div>
            <DialogTitle className={`text-xl font-bold ${
              popup.type === 'success' 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-red-600 dark:text-red-400'
            }`}>
              {popup.title}
            </DialogTitle>
          </DialogHeader>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              {popup.message}
            </p>
            <Button 
              onClick={() => setPopup(prev => ({ ...prev, isOpen: false }))}
              className={`w-full ${
                popup.type === 'success'
                  ? 'bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700'
                  : 'bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700'
              } text-white`}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Contact; 