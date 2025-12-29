import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Download, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface LeadCaptureFormProps {
  title: string;
  description: string;
  buttonText: string;
  leadMagnet?: string;
  className?: string;
  variant?: 'inline' | 'card';
}

const LeadCaptureForm = ({ 
  title, 
  description, 
  buttonText, 
  leadMagnet,
  className,
  variant = 'card'
}: LeadCaptureFormProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're in!",
      description: leadMagnet 
        ? "Check your email for the download link." 
        : "We'll send you personalized car recommendations.",
    });
    
    setEmail('');
    setIsLoading(false);
  };

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={cn('flex gap-3', className)}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : buttonText}
        </Button>
      </form>
    );
  }

  return (
    <div className={cn('bg-primary text-primary-foreground rounded-xl p-6 md:p-8', className)}>
      <div className="max-w-md mx-auto text-center">
        {leadMagnet && (
          <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-6 h-6" />
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-primary-foreground/80 mb-6 text-sm">{description}</p>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            required
          />
          <Button 
            type="submit" 
            variant="secondary" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              <ArrowRight className="w-4 h-4 mr-2" />
            )}
            {buttonText}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LeadCaptureForm;
