import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuickFitSummaryProps {
  goodFor: string[];
  notIdealFor: string[];
  className?: string;
}

const QuickFitSummary = ({ goodFor, notIdealFor, className }: QuickFitSummaryProps) => {
  return (
    <div className={cn('grid md:grid-cols-2 gap-6', className)}>
      <div className="bg-score-excellent/5 border border-score-excellent/20 rounded-xl p-5">
        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Check className="w-5 h-5 text-score-excellent" />
          Good For
        </h4>
        <ul className="space-y-2.5">
          {goodFor.map((item, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-foreground/80">
              <Check className="w-4 h-4 text-score-excellent mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-score-avoid/5 border border-score-avoid/20 rounded-xl p-5">
        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <X className="w-5 h-5 text-score-avoid" />
          Not Ideal For
        </h4>
        <ul className="space-y-2.5">
          {notIdealFor.map((item, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-foreground/80">
              <X className="w-4 h-4 text-score-avoid mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuickFitSummary;
