import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Save, Loader2, Upload, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useFirestore } from '@/hooks/useFirestore';
import { NewsArticle, NewsCategory } from '@/types/news';
import { RichTextEditor } from '@/components/RichTextEditor';
import { toast } from 'sonner';

const NewsEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getDocument, addDocument, updateDocument, loading: actionLoading } = 
    useFirestore<NewsArticle>('news');

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<NewsArticle>>({
    title: '',
    excerpt: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    author: '',
    category: 'Research',
    image: '',
    readTime: '5 min read',
    featured: false,
    published: true
  });

  const categories: NewsCategory[] = [
    'Research',
    'Regulatory',
    'Partnership',
    'Product Launch',
    'Awards',
    'Clinical Trial',
    'Technology',
    'Company News'
  ];

  useEffect(() => {
    if (id) {
      loadArticle();
    }
  }, [id]);

  const loadArticle = async () => {
    if (!id) return;
    
    setLoading(true);
    const article = await getDocument(id);
    if (article) {
      setFormData(article);
    } else {
      toast.error('Article not found');
      navigate('/news/admin');
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.excerpt || !formData.author) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      if (id) {
        // Update existing article
        const success = await updateDocument(id, formData);
        if (success) {
          toast.success('Article updated successfully! ✅');
          navigate('/news/admin');
        } else {
          toast.error('Failed to update article');
        }
      } else {
        // Create new article
        const newId = await addDocument(formData as Omit<NewsArticle, 'id'>);
        if (newId) {
          toast.success('Article created successfully! 🎉');
          navigate('/news/admin');
        } else {
          toast.error('Failed to create article');
        }
      }
    } catch (error) {
      console.error('Error saving article:', error);
      toast.error('An error occurred while saving the article');
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleContentChange = (content: string) => {
    setFormData({ ...formData, content });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/news/admin">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Admin
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400">
              {id ? 'Edit Article' : 'Create New Article'}
            </h1>
            <p className="text-xl text-muted-foreground mt-2">
              {id ? 'Update your article details' : 'Write and publish a new article'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info Card */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-blue-600 text-lg"
                    placeholder="Enter article title"
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Brief summary of the article"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Author */}
                  <div>
                    <label htmlFor="author" className="block text-sm font-medium mb-2">
                      Author *
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-blue-600"
                      placeholder="Author name"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  {/* Read Time */}
                  <div>
                    <label htmlFor="readTime" className="block text-sm font-medium mb-2">
                      Read Time
                    </label>
                    <input
                      type="text"
                      id="readTime"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-blue-600"
                      placeholder="5 min read"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-blue-600"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Content Card */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Article Content</CardTitle>
              </CardHeader>
              <CardContent>
                <RichTextEditor
                  content={formData.content || ''}
                  onChange={handleContentChange}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Use the toolbar above to format your content. You can add headings, lists, quotes, links, and images.
                </p>
              </CardContent>
            </Card>

            {/* Media Card */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Featured Image</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="image" className="block text-sm font-medium mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                {formData.image && (
                  <div className="relative">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400?text=Image+Preview';
                      }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Settings Card */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="w-5 h-5 rounded border-border"
                  />
                  <div>
                    <span className="text-sm font-medium">Featured Article</span>
                    <p className="text-xs text-muted-foreground">Display this article prominently on the news page</p>
                  </div>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleInputChange}
                    className="w-5 h-5 rounded border-border"
                  />
                  <div>
                    <span className="text-sm font-medium">Published</span>
                    <p className="text-xs text-muted-foreground">Make this article visible to the public</p>
                  </div>
                </label>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 sticky bottom-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-border">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/news/admin')}
                disabled={actionLoading}
              >
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={actionLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {actionLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    {id ? 'Update' : 'Publish'} Article
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsEdit;

