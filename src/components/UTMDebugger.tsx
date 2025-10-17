import { useLocation } from 'react-router-dom';
import { useUTMTracking } from '@/hooks/useUTMTracking';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * UTM Debugger Component - displays current and stored UTM parameters
 * Useful for development and testing UTM tracking
 */
export const UTMDebugger = () => {
  const location = useLocation();
  const { getUTMParams, getStoredUTMData } = useUTMTracking();
  
  const currentParams = new URLSearchParams(location.search);
  const sessionUTM = getUTMParams();
  const storedUTM = getStoredUTMData();

  // Get current UTM parameters from URL
  const currentUTM: Record<string, string> = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(key => {
    const value = currentParams.get(key);
    if (value) currentUTM[key] = value;
  });

  return (
    <div className="fixed bottom-4 right-4 max-w-sm z-50">
      <Card className="bg-background/95 backdrop-blur-sm shadow-xl border-2 border-blue-500/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <span className="text-blue-500">🎯</span>
            UTM Tracking Debug
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-xs">
          {/* Current URL Parameters */}
          <div>
            <p className="font-semibold text-muted-foreground mb-1">Current URL:</p>
            {Object.keys(currentUTM).length > 0 ? (
              <div className="space-y-1">
                {Object.entries(currentUTM).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {key.replace('utm_', '')}
                    </Badge>
                    <span className="text-foreground truncate">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground italic">No UTM params in URL</p>
            )}
          </div>

          {/* Session Storage */}
          <div>
            <p className="font-semibold text-muted-foreground mb-1">Session Storage:</p>
            {sessionUTM ? (
              <div className="space-y-1">
                {Object.entries(sessionUTM).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center gap-2">
                    <Badge variant="outline" className="text-xs bg-green-500/10">
                      {key.replace('utm_', '')}
                    </Badge>
                    <span className="text-foreground truncate">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground italic">No session data</p>
            )}
          </div>

          {/* Local Storage */}
          <div>
            <p className="font-semibold text-muted-foreground mb-1">Stored Data:</p>
            {storedUTM ? (
              <div className="space-y-1">
                <p className="text-muted-foreground text-[10px]">
                  Landing: {storedUTM.landingPage}
                </p>
                <p className="text-muted-foreground text-[10px]">
                  Time: {new Date(storedUTM.timestamp).toLocaleString()}
                </p>
                {Object.entries(storedUTM.params).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center gap-2">
                    <Badge variant="outline" className="text-xs bg-purple-500/10">
                      {key.replace('utm_', '')}
                    </Badge>
                    <span className="text-foreground truncate">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground italic">No stored data</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

