/**
 * Utility page to seed Firestore with initial data
 * Visit /seed-data to run this
 */

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Loader2, Database, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { seedNewsData } from '@/scripts/seedNews';

const SeedData = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; count?: number; error?: any } | null>(null);

  const handleSeed = async () => {
    setLoading(true);
    setResult(null);

    try {
      const seedResult = await seedNewsData();
      setResult(seedResult);
    } catch (error) {
      setResult({ success: false, error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-600/30">
                <Database className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Seed Database
            </h1>
            <p className="text-xl text-muted-foreground">
              Initialize your Firestore database with sample news articles
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Database className="h-6 w-6 text-pink-500" />
                Database Seeding Tool
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Warning */}
              <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-500 mb-1">Important</h4>
                  <p className="text-sm text-muted-foreground">
                    This will add sample news articles to your Firestore database. 
                    Make sure your Firebase security rules allow write access.
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <h4 className="font-semibold">What will be seeded:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>7 sample news articles</li>
                  <li>Various categories (Research, Partnership, Awards, etc.)</li>
                  <li>1 featured article</li>
                  <li>Sample images from Unsplash</li>
                  <li>Realistic dates and metadata</li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="flex justify-center pt-4">
                <Button
                  onClick={handleSeed}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Seeding Database...
                    </>
                  ) : (
                    <>
                      <Database className="mr-2 h-5 w-5" />
                      Seed News Articles
                    </>
                  )}
                </Button>
              </div>

              {/* Result */}
              {result && (
                <div className={`mt-6 p-4 rounded-lg border ${
                  result.success 
                    ? 'bg-green-500/10 border-green-500/30' 
                    : 'bg-red-500/10 border-red-500/30'
                }`}>
                  <div className="flex items-start gap-3">
                    {result.success ? (
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <h4 className={`font-semibold mb-2 ${
                        result.success ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {result.success ? 'Success! 🎉' : 'Error'}
                      </h4>
                      {result.success ? (
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            Successfully seeded {result.count} articles to Firestore!
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2 mt-4">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.location.href = '/news'}
                              className="flex-1"
                            >
                              View News Page
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.location.href = '/news/admin'}
                              className="flex-1"
                            >
                              Open Admin Panel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            Failed to seed database. Check the console for details.
                          </p>
                          {result.error && (
                            <p className="text-xs font-mono bg-black/20 p-2 rounded">
                              {result.error.toString()}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Instructions */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold mb-3">Next Steps:</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Click "Seed News Articles" to populate your database</li>
                  <li>Visit <a href="/news" className="text-pink-500 hover:underline">/news</a> to see the articles</li>
                  <li>Visit <a href="/news/admin" className="text-pink-500 hover:underline">/news/admin</a> to manage articles</li>
                  <li>Update Firestore security rules if needed (see Firebase Console)</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Firebase Console Link */}
          <div className="mt-8 text-center">
            <a 
              href="https://console.firebase.google.com/project/auspexmedix-45e3a/firestore" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              Open Firebase Console →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeedData;

