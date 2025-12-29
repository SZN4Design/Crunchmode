import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle, TrendingUp, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-sm text-primary mb-6">
            <Shield className="w-4 h-4" />
            Decision support, not dealership pressure
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight text-balance">
            Turn car reviews into<br />
            <span className="text-primary">confident buying decisions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            CrunchMode combines trusted YouTube reviews, real ownership data, and smart quizzes to find your perfect car match.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" asChild className="text-base px-8">
              <Link to="/quiz">
                Find Your Best-Fit Car
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8">
              <Link to="/reviews">
                <Play className="mr-2 h-5 w-5" />
                Watch Reviews
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-foreground mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Cars Analyzed</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-foreground mb-1">5</div>
              <div className="text-sm text-muted-foreground">CrunchScore™ Pillars</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-foreground mb-1">0</div>
              <div className="text-sm text-muted-foreground">Dealership Affiliations</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-foreground mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Independent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
