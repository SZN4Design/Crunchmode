import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import QuickFitSummary from '@/components/QuickFitSummary';
import CrunchScore from '@/components/CrunchScore';
import OwnershipReality from '@/components/OwnershipReality';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { Button } from '@/components/ui/button';

// Sample blog post data
const samplePost = {
  title: '2024 Toyota Camry Hybrid: The Smart Buyer\'s Choice',
  subtitle: 'Is it the right fit for your real-life driving needs?',
  category: 'Sedan Reviews',
  readTime: '10 min read',
  publishDate: 'December 15, 2024',
  youtubeId: 'dQw4w9WgXcQ', // Placeholder
  goodFor: [
    'Daily commuters wanting fuel efficiency',
    'Families needing reliable transportation',
    'Long-term owners (5+ years)',
    'Those prioritizing low maintenance costs',
    'Highway-heavy driving patterns',
  ],
  notIdealFor: [
    'Enthusiast drivers seeking excitement',
    'Those wanting the latest tech features',
    'Short-term lease seekers (lower incentives)',
    'Buyers wanting a sporty aesthetic',
  ],
  pillars: [
    { name: 'Financial Reality', score: 85, description: 'Excellent fuel economy at 52 mpg combined. Low depreciation.' },
    { name: 'Reliability Reality', score: 95, description: 'Toyota\'s hybrid system is industry-leading. Minimal issues reported.' },
    { name: 'Lifestyle Fit', score: 80, description: 'Spacious interior, comfortable seats. Conservative styling.' },
    { name: 'Usage Fit', score: 88, description: 'Excels in mixed city/highway. Smooth and quiet.' },
    { name: 'Resale Strength', score: 90, description: 'Retains 65%+ value after 3 years. Strong demand.' },
  ],
  verdict: 'smart-buy' as const,
  ownership: {
    insurance: '$130-180/month (avg)',
    fuel: '$80-120/month (52 mpg)',
    maintenance: '$400-600/year',
    knownIssues: [
      'Infotainment can be slow to respond',
      'Some wind noise at highway speeds',
      'Brake feel takes getting used to (regenerative)',
    ],
  },
  whoShouldAvoid: [
    'If you want a car that excites you every time you drive it, the Camry Hybrid is not that car.',
    'If you need the latest tech (wireless CarPlay, digital dash), look elsewhere.',
    'If you\'re only keeping the car 1-2 years, the Toyota premium may not pay off.',
  ],
};

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12 md:py-16">
        <article className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Blog
          </Link>

          {/* Hero */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {samplePost.category}
              </span>
              <span className="text-sm text-muted-foreground">{samplePost.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {samplePost.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {samplePost.subtitle}
            </p>
            
            {/* Primary CTA */}
            <div className="mt-6">
              <Button asChild>
                <Link to="/quiz">
                  Find Your Best-Fit Car
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </header>

          {/* YouTube Embed */}
          <section className="mb-10">
            <YouTubeEmbed 
              videoId={samplePost.youtubeId} 
              title={samplePost.title}
            />
          </section>

          {/* Quick Fit Summary */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-5">Quick Fit Summary</h2>
            <QuickFitSummary 
              goodFor={samplePost.goodFor}
              notIdealFor={samplePost.notIdealFor}
            />
          </section>

          {/* CrunchScore */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-5">CrunchScore™ Breakdown</h2>
            <CrunchScore 
              pillars={samplePost.pillars}
              verdict={samplePost.verdict}
            />
          </section>

          {/* Ownership Reality */}
          <section className="mb-10">
            <OwnershipReality {...samplePost.ownership} />
          </section>

          {/* Who Should Avoid */}
          <section className="mb-10">
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">Who Should Avoid This Car</h2>
              <ul className="space-y-3">
                {samplePost.whoShouldAvoid.map((item, index) => (
                  <li key={index} className="text-foreground/80 flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA Block */}
          <section className="mb-10">
            <LeadCaptureForm
              title="Find Your Best-Fit Car"
              description="Not sure if this car is right for you? Take our 2-minute quiz and get personalized recommendations."
              buttonText="Take the Quiz"
            />
          </section>

          {/* Secondary CTA */}
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Get the Smart Buyer Starter Guide
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Free PDF: How to avoid lifestyle mismatches, hidden fees, and what to ask at dealerships.
            </p>
            <Button variant="outline" asChild>
              <Link to="/guide">
                Download Free Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
