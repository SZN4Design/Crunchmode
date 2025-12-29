import { DollarSign, Shield, Wrench, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OwnershipRealityProps {
  insurance: string;
  fuel: string;
  maintenance: string;
  knownIssues: string[];
  className?: string;
}

const OwnershipReality = ({ insurance, fuel, maintenance, knownIssues, className }: OwnershipRealityProps) => {
  return (
    <div className={cn('bg-card rounded-xl p-6 shadow-soft border border-border', className)}>
      <h3 className="text-lg font-semibold text-foreground mb-5">Ownership Reality</h3>
      
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
          <Shield className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Insurance</p>
            <p className="text-sm text-muted-foreground">{insurance}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
          <DollarSign className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Fuel</p>
            <p className="text-sm text-muted-foreground">{fuel}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
          <Wrench className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Maintenance</p>
            <p className="text-sm text-muted-foreground">{maintenance}</p>
          </div>
        </div>
      </div>

      {knownIssues.length > 0 && (
        <div className="bg-warning/5 border border-warning/20 rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-warning" />
            Known Issues
          </h4>
          <ul className="space-y-2">
            {knownIssues.map((issue, index) => (
              <li key={index} className="text-sm text-foreground/80 flex items-start gap-2">
                <span className="text-warning">•</span>
                {issue}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OwnershipReality;
