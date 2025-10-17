import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Plus, Edit, Trash2, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useFirestore, useFirestoreRealtime, orderBy } from '@/hooks/useFirestore';
import { NewsArticle } from '@/types/news';
import { toast } from 'sonner';

const NewsAdmin = () => {
  const navigate = useNavigate();
  const { documents: allNews, loading } = useFirestoreRealtime<NewsArticle>(
    'news',
    [orderBy('date', 'desc')]
  );

  const { deleteDocument } = useFirestore<NewsArticle>('news');

  const handleDelete = async (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      const success = await deleteDocument(id);
      if (success) {
        toast.success('Article deleted successfully');
      } else {
        toast.error('Failed to delete article');
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              News Admin
            </h1>
            <p className="text-xl text-muted-foreground">
              Manage your news articles and publications
            </p>
          </div>
          <Button
            onClick={() => navigate('/news/edit')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="mr-2 h-5 w-5" />
            Add New Article
          </Button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
              <span className="ml-4 text-lg text-muted-foreground">Loading articles...</span>
            </div>
          )}

          {/* Empty State */}
          {!loading && allNews.length === 0 && (
            <Card className="bg-card/50 backdrop-blur-sm border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-20">
                <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                  <Plus className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No Articles Yet</h3>
                <p className="text-muted-foreground mb-6">Create your first news article to get started</p>
                <Button
                  onClick={() => navigate('/news/edit')}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Plus className="mr-2 h-5 w-5" />
                  Create First Article
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Articles List */}
          {!loading && allNews.length > 0 && (
            <div className="space-y-4">
              {allNews.map((article) => (
                <Card 
                  key={article.id}
                  className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      {/* Image Preview */}
                      <div className="lg:col-span-3">
                        <div className="relative h-32 rounded-lg overflow-hidden">
                          <img
                            src={article.image || 'https://via.placeholder.com/300x200'}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                  {article.featured && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-blue-600 text-white">Featured</Badge>
                    </div>
                  )}
                        </div>
                      </div>

                      {/* Article Info */}
                      <div className="lg:col-span-7">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className="bg-blue-500/10 text-blue-400">
                            {article.category}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{article.date}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{article.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
                          {article.excerpt}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          By {article.author}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/news/edit/${article.id}`)}
                          className="flex-1 lg:flex-none w-full"
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(article.id!, article.title)}
                          className="flex-1 lg:flex-none w-full text-red-500 hover:text-red-600 hover:border-red-500"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsAdmin;

