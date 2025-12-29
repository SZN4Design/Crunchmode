import { useState } from 'react';
import { ArrowRight, ExternalLink, AlertTriangle, DollarSign, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import CrunchScore from '../CrunchScore';

interface CarResult {
  name: string;
  crunchScore: number;
  whyItFits: string;
  redFlags: string[];
  ownershipCost: string;
  blogLink: string;
  pillars: { name: string; score: number; description: string }[];
  verdict: 'smart-buy' | 'buy-with-confidence' | 'only-if-discounted' | 'lease-only' | 'avoid';
}

interface QuizResultsProps {
  results: CarResult[];
  onRestart: () => void;
}

const QuizResults = ({ results, onRestart }: QuizResultsProps) => {
  const [email, setEmail] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsUnlocked(true);
    setIsLoading(false);
    toast({
      title: "Results unlocked!",
      description: "Your personalized recommendations are ready.",
    });
  };

  if (!isUnlocked) {
    return (
      <div className="max-w-lg mx-auto text-center">
        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Your Top 3 Matches Are Ready!
          </h2>
          <p className="text-muted-foreground mb-6">
            Enter your email to unlock your personalized car recommendations with detailed CrunchScores™.
          </p>

          <form onSubmit={handleUnlock} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-center"
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Unlocking...' : 'Unlock My Results'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            We'll also send you the Smart Buyer Starter Guide free.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Your Best-Fit Cars</h2>
        <p className="text-muted-foreground">Based on your preferences, here are your top matches.</p>
      </div>

      <div className="space-y-6">
        {results.map((car, index) => (
          <div 
            key={car.name} 
            className={cn(
              'bg-card rounded-xl border border-border overflow-hidden shadow-soft',
              'animate-fade-in-up'
            )}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    #{index + 1} Match
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-2">{car.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-foreground">{car.crunchScore}</span>
                  <p className="text-xs text-muted-foreground">CrunchScore™</p>
                </div>
              </div>

              <p className="text-foreground/80 mb-4">{car.whyItFits}</p>

              <CrunchScore pillars={car.pillars} verdict={car.verdict} className="mb-4" />

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                  <DollarSign className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Typical Ownership Cost</p>
                    <p className="text-sm text-muted-foreground">{car.ownershipCost}</p>
                  </div>
                </div>

                {car.redFlags.length > 0 && (
                  <div className="flex items-start gap-2 p-3 bg-warning/5 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-foreground">Red Flags</p>
                      <p className="text-sm text-muted-foreground">{car.redFlags.join(', ')}</p>
                    </div>
                  </div>
                )}
              </div>

              <Button variant="outline" className="w-full" asChild>
                <a href={car.blogLink}>
                  Read Full Review
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="ghost" onClick={onRestart}>
          <RotateCcw className="w-4 h-4 mr-2" />
          Take Quiz Again
        </Button>
      </div>
    </div>
  );
};

export default QuizResults;
