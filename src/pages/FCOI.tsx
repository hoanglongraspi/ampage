import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, FileText, Eye, ExternalLink, BookOpen } from 'lucide-react';

interface FCOIProps {}

const FCOI: React.FC<FCOIProps> = () => {
  const pdfUrl = '/public/Auspex_Medix_FCOI_web.pdf';
  const [viewMode, setViewMode] = useState<'pdf' | 'summary'>('pdf');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'public/Auspex_Medix_FCOI_web.pdf';
    link.click();
  };

  const handleOpenNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-8">
        <br />
        <br />
    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Financial Conflict of Interest Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Auspex Medix LLC Financial Conflict of Interest Policy
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              
              <Button 
                variant="outline"
                onClick={handleOpenNewTab}
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Open in New Tab
              </Button>
            </div>
          </div>

          {/* View Mode Tabs */}
          <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'pdf' | 'summary')} className="w-full">
            {/* <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-6">
              <TabsTrigger value="pdf" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                PDF Viewer
              </TabsTrigger>
              <TabsTrigger value="summary" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Document Summary
              </TabsTrigger>
            </TabsList> */}

            {/* PDF Viewer Tab */}
            <TabsContent value="pdf" className="mt-0">
              <Card>
                <CardHeader>
                  {/* <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    Document Viewer
                  </CardTitle> */}
                  
                </CardHeader>
                <CardContent>
                  <div className="w-full h-[800px] border border-border rounded-lg overflow-hidden bg-muted/10">
                    <iframe
                      src={pdfUrl}
                      className="w-full h-full"
                      title="Auspex Medix FCOI Policy"
                      style={{ border: 'none' }}
                    >
                      <div className="flex items-center justify-center h-full bg-background p-8">
                        <div className="text-center space-y-4">
                          <FileText className="h-16 w-16 text-muted-foreground mx-auto" />
                          <p className="text-muted-foreground">
                            Your browser does not support PDF viewing.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2 justify-center">
                            <Button onClick={handleDownload} size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download PDF
                            </Button>
                            <Button onClick={handleOpenNewTab} variant="outline" size="sm">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Open in New Tab
                            </Button>
                          </div>
                        </div>
                      </div>
                    </iframe>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Summary Tab */}
            <TabsContent value="summary" className="mt-0">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Policy Overview</CardTitle>
                    <CardDescription>
                      Key information about Auspex Medix LLC's Financial Conflict of Interest Policy
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Purpose</h3>
                        <p className="text-muted-foreground">
                          This policy ensures compliance with federal Public Health Service (PHS) regulations 
                          on promoting objectivity in research, applicable to all PHS funded grants, cooperative 
                          agreements, and research contracts.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Scope</h3>
                        <p className="text-muted-foreground">
                          Applies to investigators submitting applications for PHS funding, including grants from 
                          the National Institutes of Health, Food and Drug Administration, and Centers for Disease Control.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Key Requirements</h3>
                        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                          <li>Disclosure of significant financial interests</li>
                          <li>Institutional responsibility compliance</li>
                          <li>Research objectivity promotion</li>
                          <li>Regular training and certification</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Note:</strong> For complete details, definitions, and procedures, 
                          please refer to the full PDF document above.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FCOI;
