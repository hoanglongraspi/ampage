import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Calendar, User, ArrowLeft, Share2, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useFirestore } from '@/hooks/useFirestore';
import { NewsArticle } from '@/types/news';
import { toast } from 'sonner';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getDocument, loading } = useFirestore<NewsArticle>('news');
  const [article, setArticle] = useState<NewsArticle | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (id) {
        const doc = await getDocument(id);
        if (doc) {
          setArticle(doc);
        } else {
          toast.error('Article not found');
          navigate('/news');
        }
      }
    };

    fetchArticle();
  }, [id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Research': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      'Regulatory': 'bg-green-500/10 text-green-400 border-green-500/30',
      'Partnership': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      'Product Launch': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
      'Awards': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
      'Clinical Trial': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
      'Technology': 'bg-teal-500/10 text-teal-400 border-teal-500/30',
      'Company News': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    };
    return colors[category] || 'bg-gray-500/10 text-gray-400 border-gray-500/30';
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader2 className="h-12 w-12 animate-spin text-pink-500" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
            <Link to="/news">
              <Button>Back to News</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/news">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge className={getCategoryColor(article.category)}>
                {article.category}
              </Badge>
              {article.featured && (
                <Badge className="bg-pink-500/10 text-pink-400 border-pink-500/30">
                  Featured
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(article.date)}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {article.author}
              </div>
              <span>{article.readTime}</span>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Featured Image */}
          {article.image && (
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x600?text=Article+Image';
                }}
              />
            </div>
          )}

          {/* Article Content */}
          <div className="mb-12">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {article.content ? (
                <div 
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  className="text-foreground leading-relaxed"
                />
              ) : (
                <div className="text-muted-foreground">
                  <p className="mb-4">{article.excerpt}</p>
                  <p className="italic">Full article content coming soon...</p>
                </div>
              )}
            </div>
          </div>

          {/* Share Button */}
          <div className="flex justify-center mb-12">
            <Button
              onClick={handleShare}
              variant="outline"
              className="gap-2"
            >
              <Share2 className="h-4 w-4" />
              Share Article
            </Button>
          </div>

          {/* Back to News */}
          <div className="text-center">
            <Link to="/news">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Read More Articles
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsDetail;

