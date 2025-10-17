/**
 * Seed script to populate Firestore with initial news articles
 * Run this in browser console or create a utility page to seed data
 */

import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { NewsArticle } from '@/types/news';

const sampleNewsArticles: Omit<NewsArticle, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: "Breakthrough in AI-Powered Speech Therapy Shows 85% Improvement in Patient Outcomes",
    excerpt: "Our latest clinical trial demonstrates significant improvements in speech-language pathology treatments using real-time ultrasound imaging combined with EEG monitoring.",
    content: "In a groundbreaking study conducted over 12 months with 500 participants, our AI-powered speech therapy platform has shown remarkable results. The combination of real-time ultrasound imaging and EEG monitoring has provided unprecedented insights into neural patterns during speech production...",
    date: "2024-01-15",
    author: "Dr. Sarah Chen, Research Director",
    category: "Research",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&crop=center",
    readTime: "5 min read",
    featured: true,
    published: true
  },
  {
    title: "FDA Breakthrough Device Designation for Diabetic Foot Monitoring System",
    excerpt: "Our multispectral imaging technology receives FDA recognition for its potential to revolutionize diabetic foot care and prevent amputations.",
    content: "The FDA has granted Breakthrough Device Designation to our innovative multispectral imaging system for early detection of diabetic foot complications. This recognition accelerates the path to market for technology that could save thousands of limbs annually...",
    date: "2024-01-10",
    author: "Auspex Medix LLC Team",
    category: "Regulatory",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=center",
    readTime: "3 min read",
    featured: false,
    published: true
  },
  {
    title: "Partnership with Johns Hopkins for Advanced Audiology Research",
    excerpt: "Collaborative study on EEG-integrated hearing systems shows promising results for patients with complex auditory processing disorders.",
    content: "Auspex Medix LLC is proud to announce a strategic partnership with Johns Hopkins University to advance research in audiology and hearing science. Our collaborative study focuses on integrating EEG monitoring with advanced hearing systems...",
    date: "2024-01-08",
    author: "Dr. Michael Rodriguez",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop&crop=center",
    readTime: "4 min read",
    featured: false,
    published: true
  },
  {
    title: "Mobile Rehabilitation Platform Launches Nationwide Pilot Program",
    excerpt: "100 physical therapy clinics across the US begin implementing our mRehab technology for enhanced patient outcomes and remote monitoring.",
    content: "We're excited to announce the launch of our nationwide pilot program for the mRehab mobile rehabilitation platform. This innovative technology enables physical therapists to monitor patients remotely while providing real-time feedback and personalized exercise programs...",
    date: "2024-01-05",
    author: "Jennifer Walsh, Clinical Operations",
    category: "Product Launch",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
    readTime: "6 min read",
    featured: false,
    published: true
  },
  {
    title: "AI Dental Diagnostics Achieve 97% Accuracy in Early Caries Detection",
    excerpt: "Our latest dental imaging AI model surpasses human expert performance in detecting early-stage tooth decay across diverse patient populations.",
    content: "In a comprehensive validation study involving over 10,000 dental X-rays, our AI-powered diagnostic system has achieved 97% accuracy in detecting early-stage caries. This represents a significant improvement over traditional diagnostic methods...",
    date: "2024-01-03",
    author: "Dr. Alex Thompson",
    category: "Research",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=250&fit=crop&crop=center",
    readTime: "4 min read",
    featured: false,
    published: true
  },
  {
    title: "Wound Healing Technology Wins Innovation Award at MedTech Summit",
    excerpt: "Our mmWave imaging solution for chronic wound assessment receives recognition at the premier medical technology conference.",
    content: "Auspex Medix LLC's mmWave imaging technology for chronic wound assessment has been honored with the Innovation Award at the 2023 MedTech Summit. This recognition highlights the transformative potential of our non-invasive imaging solution...",
    date: "2023-12-28",
    author: "Innovation Team",
    category: "Awards",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&crop=center",
    readTime: "2 min read",
    featured: false,
    published: true
  },
  {
    title: "Clinical Trial Results: PT/OT App Shows 78% Reduction in Recovery Time",
    excerpt: "Patients using our motion analysis and app-based therapy tools demonstrate significantly faster rehabilitation outcomes compared to traditional methods.",
    content: "Results from our multi-center clinical trial demonstrate that patients using our integrated physical and occupational therapy platform experience 78% faster recovery times. The study included 300 participants across various rehabilitation scenarios...",
    date: "2023-12-20",
    author: "Dr. Lisa Park, Clinical Research",
    category: "Clinical Trial",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop&crop=center",
    readTime: "7 min read",
    featured: false,
    published: true
  }
];

export async function seedNewsData() {
  console.log('🌱 Starting to seed news data...');
  
  try {
    const newsCollection = collection(db, 'news');
    let successCount = 0;
    
    for (const article of sampleNewsArticles) {
      try {
        const docRef = await addDoc(newsCollection, {
          ...article,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now()
        });
        console.log(`✅ Added article: "${article.title}" with ID: ${docRef.id}`);
        successCount++;
      } catch (error) {
        console.error(`❌ Failed to add article: "${article.title}"`, error);
      }
    }
    
    console.log(`\n🎉 Successfully seeded ${successCount}/${sampleNewsArticles.length} articles!`);
    console.log('Visit /news to see the articles');
    console.log('Visit /news/admin to manage articles');
    
    return { success: true, count: successCount };
  } catch (error) {
    console.error('❌ Error seeding news data:', error);
    return { success: false, error };
  }
}

// Export for use in browser console or seed page
if (typeof window !== 'undefined') {
  (window as any).seedNewsData = seedNewsData;
}

