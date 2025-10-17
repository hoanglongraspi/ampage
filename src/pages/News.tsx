import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Calendar, User, ArrowRight, ExternalLink, TrendingUp, Award, Beaker, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useFirestoreRealtime, orderBy } from '@/hooks/useFirestore';
import { NewsArticle } from '@/types/news';
import { NewsPagination } from '@/components/NewsPagination';

const ITEMS_PER_PAGE = 6;

const News = () => {
  // Fetch news from Firebase in real-time
  const { documents: allNews, loading, error } = useFirestoreRealtime<NewsArticle>(
    'news',
    [orderBy('date', 'desc')]
  );

  const [featuredNews, setFeaturedNews] = useState<NewsArticle | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Use all news articles
  const filteredArticles = useMemo(() => {
    if (!allNews || allNews.length === 0) return [];
    return [...allNews];
  }, [allNews]);

  // Set featured article
  useEffect(() => {
    if (filteredArticles.length > 0) {
      const featured = filteredArticles.find(article => article.featured) || filteredArticles[0];
      setFeaturedNews(featured);
    } else {
      setFeaturedNews(null);
    }
  }, [filteredArticles]);

  // Paginate articles (excluding featured)
  const { paginatedArticles, totalPages } = useMemo(() => {
    const articles = filteredArticles.filter(article => article.id !== featuredNews?.id);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    
    return {
      paginatedArticles: articles.slice(startIndex, endIndex),
      totalPages: Math.ceil(articles.length / ITEMS_PER_PAGE)
    };
  }, [filteredArticles, featuredNews, currentPage]);

  // Fallback data for when Firebase is empty or loading
  const fallbackFeaturedNews = {
    title: "Breakthrough in AI-Powered Speech Therapy Shows 85% Improvement in Patient Outcomes",
    excerpt: "Our latest clinical trial demonstrates significant improvements in speech-language pathology treatments using real-time ultrasound imaging combined with EEG monitoring.",
    date: "2024-01-15",
    author: "Dr. Sarah Chen, Research Director",
    category: "Research" as const,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&crop=center",
    readTime: "5 min read"
  };

  const fallbackNewsArticles = [
    {
      title: "FDA Breakthrough Device Designation for Diabetic Foot Monitoring System",
      excerpt: "Our multispectral imaging technology receives FDA recognition for its potential to revolutionize diabetic foot care and prevent amputations.",
      date: "2024-01-10",
      author: "Auspex Medix Team",
      category: "Regulatory",
      readTime: "3 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Partnership with Johns Hopkins for Advanced Audiology Research",
      excerpt: "Collaborative study on EEG-integrated hearing systems shows promising results for patients with complex auditory processing disorders.",
      date: "2024-01-08",
      author: "Dr. Michael Rodriguez",
      category: "Partnership",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Mobile Rehabilitation Platform Launches Nationwide Pilot Program",
      excerpt: "100 physical therapy clinics across the US begin implementing our mRehab technology for enhanced patient outcomes and remote monitoring.",
      date: "2024-01-05",
      author: "Jennifer Walsh, Clinical Operations",
      category: "Product Launch",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "AI Dental Diagnostics Achieve 97% Accuracy in Early Caries Detection",
      excerpt: "Our latest dental imaging AI model surpasses human expert performance in detecting early-stage tooth decay across diverse patient populations.",
      date: "2024-01-03",
      author: "Dr. Alex Thompson",
      category: "Research",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Wound Healing Technology Wins Innovation Award at MedTech Summit",
      excerpt: "Our mmWave imaging solution for chronic wound assessment receives recognition at the premier medical technology conference.",
      date: "2023-12-28",
      author: "Innovation Team",
      category: "Awards",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Clinical Trial Results: PT/OT App Shows 78% Reduction in Recovery Time",
      excerpt: "Patients using our motion analysis and app-based therapy tools demonstrate significantly faster rehabilitation outcomes compared to traditional methods.",
      date: "2023-12-20",
      author: "Dr. Lisa Park, Clinical Research",
      category: "Research",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop&crop=center"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Research":
        return <Beaker className="h-4 w-4" />;
      case "Awards":
        return <Award className="h-4 w-4" />;
      case "Product Launch":
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Research":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "Regulatory":
        return "bg-green-500/10 text-green-400 border-green-500/30";
      case "Partnership":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      case "Product Launch":
        return "bg-orange-500/10 text-orange-400 border-orange-500/30";
      case "Awards":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/30";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Display fallback data if Firebase is empty
  const displayFeaturedNews = featuredNews || (allNews.length === 0 ? fallbackFeaturedNews : null);
  const displayNewsArticles = paginatedArticles.length > 0 ? paginatedArticles : (allNews.length === 0 ? fallbackNewsArticles : []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-blue-600 dark:text-blue-400">
              Latest News
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Stay updated with the latest breakthroughs in medical technology and research from Auspex Medix
            </p>
            {!loading && allNews.length === 0 && (
              <p className="text-sm text-muted-foreground mt-4">
                💡 Showing sample data. Connect to Firebase to see live news.
              </p>
            )}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
              <span className="ml-4 text-lg text-muted-foreground">Loading news...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-10 text-red-500">
              <p>Error loading news: {error.message}</p>
              <p className="text-sm text-muted-foreground mt-2">Showing sample data instead.</p>
            </div>
          )}

          {/* Featured News */}
          {!loading && displayFeaturedNews && (
            <Link to={(displayFeaturedNews as any).id ? `/news/${(displayFeaturedNews as any).id}` : '#'}>
              <Card className="mb-16 bg-card/50 backdrop-blur-sm border-blue-500/30 overflow-hidden group hover:bg-card/70 transition-all duration-500">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="bg-blue-600/10 p-12 flex items-center">
                      <div>
                        <Badge className={`mb-4 ${getCategoryColor(displayFeaturedNews.category)}`}>
                          {getCategoryIcon(displayFeaturedNews.category)}
                          <span className="ml-2">{displayFeaturedNews.category}</span>
                        </Badge>
                        <h2 className="text-4xl font-bold text-foreground mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {displayFeaturedNews.title}
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                          {displayFeaturedNews.excerpt}
                        </p>
                        <div className="flex items-center text-muted-foreground mb-6 space-x-6">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {formatDate(displayFeaturedNews.date)}
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            {displayFeaturedNews.author}
                          </div>
                          <span>{displayFeaturedNews.readTime}</span>
                        </div>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors cursor-pointer">
                          <span className="font-medium text-lg">Read Full Article</span>
                          <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-r-2xl">
                      <img 
                        src={displayFeaturedNews.image} 
                        alt={displayFeaturedNews.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="flex items-center mb-4">
                          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-2xl shadow-blue-600/40">
                            <Beaker className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-white font-semibold text-lg">Featured {displayFeaturedNews.category}</p>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-75"></div>
                          <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-150"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )}

          {/* News Grid */}
          {!loading && displayNewsArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayNewsArticles.map((article, index) => (
                <Link 
                  key={article.id || index}
                  to={article.id ? `/news/${article.id}` : '#'}
                >
                  <Card 
                    className="group bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:-translate-y-2 border hover:border-blue-500/50 cursor-pointer overflow-hidden h-full"
                  >
                 <div className="relative h-48 overflow-hidden">
                   <img 
                     src={article.image} 
                     alt={article.title}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                   <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                     <Badge className={`${getCategoryColor(article.category)}`}>
                       {getCategoryIcon(article.category)}
                       <span className="ml-2">{article.category}</span>
                     </Badge>
                     {article.featured && (
                       <Badge className="bg-pink-500/10 text-pink-400 border-pink-500/30">
                         Featured
                       </Badge>
                     )}
                   </div>
                 </div>
                 <CardHeader className="pb-4">
                   <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                     {article.title}
                   </h3>
                 </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-muted-foreground text-sm mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(article.date)}
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <User className="h-3 w-3 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      <span className="font-medium text-sm">Read More</span>
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && allNews.length > 0 && paginatedArticles.length > 0 && (
            <NewsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default News; 