import { cn } from '@/lib/utils';

interface ScorePillar {
  name: string;
  score: number;
  description: string;
}

interface CrunchScoreProps {
  pillars: ScorePillar[];
  verdict: 'smart-buy' | 'buy-with-confidence' | 'only-if-discounted' | 'lease-only' | 'avoid';
  className?: string;
}

const getScoreColor = (score: number) => {
  if (score >= 80) return 'bg-score-excellent';
  if (score >= 65) return 'bg-score-good';
  if (score >= 50) return 'bg-score-fair';
  if (score >= 35) return 'bg-score-poor';
  return 'bg-score-avoid';
};

const getVerdictDisplay = (verdict: CrunchScoreProps['verdict']) => {
  const verdicts = {
    'smart-buy': { label: 'Smart Buy', color: 'text-score-excellent', bg: 'bg-score-excellent/10' },
    'buy-with-confidence': { label: 'Buy With Confidence', color: 'text-score-good', bg: 'bg-score-good/10' },
    'only-if-discounted': { label: 'Only If Discounted', color: 'text-score-fair', bg: 'bg-score-fair/10' },
    'lease-only': { label: 'Lease Only', color: 'text-score-poor', bg: 'bg-score-poor/10' },
    'avoid': { label: 'Avoid', color: 'text-score-avoid', bg: 'bg-score-avoid/10' },
  };
  return verdicts[verdict];
};

const CrunchScore = ({ pillars, verdict, className }: CrunchScoreProps) => {
  const verdictDisplay = getVerdictDisplay(verdict);
  const averageScore = Math.round(pillars.reduce((sum, p) => sum + p.score, 0) / pillars.length);

  return (
    <div className={cn('bg-card rounded-xl p-6 shadow-soft border border-border', className)}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">CrunchScore™</h3>
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-foreground">{averageScore}</span>
          <span className={cn('px-3 py-1 rounded-full text-sm font-medium', verdictDisplay.bg, verdictDisplay.color)}>
            {verdictDisplay.label}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {pillars.map((pillar, index) => (
          <div key={pillar.name} className="space-y-1.5">
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium text-foreground">{pillar.name}</span>
              <span className="text-muted-foreground">{pillar.score}/100</span>
            </div>
            <div className="h-2.5 bg-muted rounded-full overflow-hidden">
              <div 
                className={cn('h-full rounded-full score-bar', getScoreColor(pillar.score))}
                style={{ '--score-width': `${pillar.score}%`, animationDelay: `${index * 100}ms` } as React.CSSProperties}
              />
            </div>
            <p className="text-xs text-muted-foreground">{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrunchScore;
