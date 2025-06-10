import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heart, Stethoscope, Brain, Activity, Users, Building, Globe, Microscope } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "5+", label: "Medical Specialties", icon: Heart },
    { number: "15+", label: "Research Projects", icon: Microscope },
    { number: "100+", label: "Clinical Partners", icon: Building },
    { number: "25+", label: "Countries Served", icon: Globe }
  ];

  const specialties = [
    { title: "Physical & Occupational Therapy", icon: Activity },
    { title: "Audiology", icon: Stethoscope },
    { title: "Wound Healing & Diabetic Care", icon: Heart },
    { title: "Speech-Language Pathology", icon: Microscope },
    { title: "Dentistry", icon: Users }
  ];

  const values = [
    { title: "Patient-Centered Innovation", description: "Developing technology focused on patient outcomes and safety." },
    { title: "Clinical Excellence", description: "Collaborating with healthcare professionals for real-world solutions." },
    { title: "Advanced Technology", description: "Using AI and machine learning for breakthrough medical solutions." },
    { title: "Evidence-Based Solutions", description: "Validating technologies through clinical trials and research." }
  ];

  const partners = [
    { name: "Stanford AI Lab", type: "Research Institution" },
    { name: "Mayo Clinic", type: "Healthcare Provider" },
    { name: "MIT CSAIL", type: "Technology Partner" },
    { name: "Johns Hopkins", type: "Medical Research" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              About Auspex Medix LLC
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advancing healthcare through innovative medical technologies across specialized therapeutic areas.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bridging the gap between cutting-edge technology and practical medical applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Who We Are */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">Who We Are</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                At Auspex Medix LLC, we are a forward-thinking medical technology company founded by experienced researchers, clinicians, and engineers. We specialize in revolutionizing healthcare through innovative solutions that make a real difference in people's lives.
              </p>
            </div>

            {/* Our Approach */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">Our Approach</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our multidisciplinary approach combines artificial intelligence, advanced imaging, signal processing, and clinical expertise to develop technologies that address real-world healthcare challenges across multiple medical specialties.
              </p>
            </div>
          </div>

          {/* Key Differentiators */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-teal-500/10 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold">What Sets Us Apart</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Microscope className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="font-semibold mb-2">Research Translation</h4>
                <p className="text-sm text-muted-foreground">Converting complex research into practical, deployable medical technologies</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Building className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="font-semibold mb-2">Strategic Partnerships</h4>
                <p className="text-sm text-muted-foreground">Close collaboration with healthcare institutions and research universities</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-500/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-teal-400" />
                </div>
                <h4 className="font-semibold mb-2">User-Centered Design</h4>
                <p className="text-sm text-muted-foreground">Solutions designed for patients, therapists, and clinicians</p>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="text-center bg-muted/30 rounded-2xl p-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-xl">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every solution we develop is designed with the end user in mind—whether that's a patient recovering at home, a therapist conducting treatment, or a clinician making critical diagnostic decisions. We believe in intelligent, accessible, and evidence-based solutions that improve patient outcomes while supporting healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              We develop cutting-edge medical technologies that address real-world healthcare challenges 
              across five specialized areas: Physical & Occupational Therapy, Audiology, Wound Healing, 
              Speech-Language Pathology, and Dentistry.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Specialties */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Medical Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                <specialty.icon className="h-6 w-6 text-blue-400" />
                <span className="font-medium">{specialty.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-background rounded-lg border">
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-lg font-bold mb-1">{partner.name}</h3>
                <span className="text-sm text-blue-400">{partner.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 