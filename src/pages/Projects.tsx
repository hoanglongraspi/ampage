import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Activity, Volume2, Scan, Mic, Smile, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      icon: Activity,
      title: "Physical & Occupational Therapy (PT/OT)",
      technologies: "Mobile Rehabilitation (mRehab), Motion Analysis, App-based Therapy Tools",
      description: "Developing digital tools and systems to enhance physical therapy and rehabilitation outcomes through mobile health (mHealth) applications.",
      fullDescription: "Our PT/OT platform revolutionizes rehabilitation through advanced mobile health solutions. We develop comprehensive digital ecosystems that integrate motion analysis, real-time biofeedback, and personalized therapy protocols. Our mRehab applications enable patients to continue their therapy journey at home while maintaining clinical oversight and progress tracking.",
      features: [
        "Real-time motion capture and analysis",
        "Personalized therapy protocol generation",
        "Progress tracking and analytics",
        "Remote patient monitoring",
        "Gamified rehabilitation exercises",
        "Clinical data integration"
      ],
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Volume2,
      title: "Audiology (AUD)",
      technologies: "Audio Processing, Vestibular Diagnostics, EEG Integration",
      description: "Creating assistive hearing systems, diagnosing vestibular disorders like BPPV, and exploring brain-auditory interactions using EEG.",
      fullDescription: "Our audiology solutions combine advanced signal processing with neural monitoring to create comprehensive hearing and balance assessment tools. We integrate EEG data with audio processing to understand brain-auditory interactions, enabling more precise diagnoses and personalized treatment plans for hearing loss and vestibular disorders.",
      features: [
        "Advanced audio signal processing",
        "Vestibular disorder diagnostics",
        "EEG-audio correlation analysis",
        "BPPV detection algorithms",
        "Hearing aid optimization",
        "Balance assessment tools"
      ],
      color: "from-green-500 to-green-600",
      borderColor: "border-green-500/30"
    },
    {
      icon: Scan,
      title: "Wound Healing & Diabetic Foot Care",
      technologies: "Multispectral Imaging (MSI), mmWave Imaging",
      description: "Innovating non-invasive diagnostic technologies for chronic wounds and diabetic foot ulcers, enhancing early detection and monitoring.",
      fullDescription: "Our wound care technology utilizes cutting-edge multispectral and mmWave imaging to provide non-invasive, comprehensive wound assessment. These systems enable early detection of complications, monitor healing progress, and predict treatment outcomes, particularly crucial for diabetic patients who face higher risks of foot complications.",
      features: [
        "Multispectral wound imaging",
        "mmWave tissue penetration analysis",
        "Automated wound measurement",
        "Healing progress tracking",
        "Infection risk assessment",
        "Diabetic foot monitoring"
      ],
      color: "from-orange-500 to-orange-600",
      borderColor: "border-orange-500/30"
    },
    {
      icon: Mic,
      title: "Speech-Language Pathology (SLP)",
      technologies: "Ultrasound Imaging, EEG, AI Speech Analysis",
      description: "Advancing speech therapy through real-time imaging, neural data analysis, and AI-based feedback systems for both clinical and at-home use.",
      fullDescription: "Our SLP technology platform integrates ultrasound imaging with EEG monitoring and AI-powered speech analysis to provide comprehensive speech therapy solutions. This multimodal approach enables real-time visualization of tongue movements, neural activity monitoring, and intelligent feedback systems for both clinical settings and home-based therapy.",
      features: [
        "Real-time ultrasound tongue imaging",
        "EEG-based neural monitoring",
        "AI-powered speech pattern analysis",
        "Automated pronunciation feedback",
        "Progress tracking algorithms",
        "Telehealth therapy support"
      ],
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Smile,
      title: "Dentistry",
      technologies: "Oral Imaging, AI Diagnostics, 3D Analysis",
      description: "Building intelligent tools for oral health screening and orthodontic assessments, leveraging AI for early detection and precision diagnostics.",
      fullDescription: "Our dental technology solutions combine advanced oral imaging with AI-powered diagnostic tools to revolutionize dental care. From early caries detection to comprehensive orthodontic treatment planning, our 3D analysis systems provide dentists with unprecedented insight into oral health conditions and treatment outcomes.",
      features: [
        "3D oral cavity reconstruction",
        "AI-powered caries detection",
        "Orthodontic treatment planning",
        "Periodontal disease assessment",
        "Treatment outcome prediction",
        "Digital smile design"
      ],
      color: "from-teal-500 to-teal-600",
      borderColor: "border-teal-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                Medical Technology Projects
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Advancing healthcare through innovative medical technologies and digital solutions across specialized therapeutic areas
            </p>
          </div>

          {/* Main Projects */}
          <div className="space-y-16 mb-20">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 border ${project.borderColor} overflow-hidden`}
              >
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className={`w-24 h-24 bg-gradient-to-r ${project.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                        <project.icon className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-4xl font-bold text-foreground mb-4 group-hover:text-pink-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="mb-6">
                        <p className="text-lg font-medium text-pink-400 mb-3">Technologies:</p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {project.technologies}
                        </p>
                      </div>
                      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        {project.fullDescription}
                      </p>
                      <div className="flex items-center text-pink-400 group-hover:text-violet-400 transition-colors">
                        <span className="font-medium text-lg">Explore Technology</span>
                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-muted/50 to-muted/70 rounded-2xl p-8 border border-border">
                      <h4 className="text-2xl font-bold text-foreground mb-6">Key Features</h4>
                      <ul className="space-y-4">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mr-4"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
