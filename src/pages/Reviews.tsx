import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Sample video reviews
const videoReviews = [
  {
    id: 'dQw4w9WgXcQ',
    title: '2024 Toyota Camry Hybrid - The Reliable Choice',
    channel: 'Throttle House',
    views: '1.2M views',
    category: 'Sedan',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: '2024 Mazda CX-5 Review - Premium Without the Price',
    channel: 'Straight Pipes',
    views: '890K views',
    category: 'SUV',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Honda Civic 2024 - Still the Benchmark?',
    channel: 'Doug DeMuro',
    views: '2.1M views',
    category: 'Compact',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Hyundai Ioniq 6 - EV Game Changer',
    channel: 'MKBHD',
    views: '3.5M views',
    category: 'EV',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Kia Telluride - Best Family SUV?',
    channel: 'Throttle House',
    views: '1.8M views',
    category: 'SUV',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Subaru Outback 2024 - Winter Warrior',
    channel: 'Straight Pipes',
    views: '750K views',
    category: 'Wagon',
  },
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Curated Video Reviews
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-2">
              The best independent YouTube reviewers. No dealership affiliations.
            </p>
            <p className="text-sm text-muted-foreground">
              We curate trusted voices so you don't have to search.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoReviews.map((video, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-soft hover:shadow-trust transition-all duration-300 group"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {video.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{video.views}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{video.channel}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-muted-foreground mb-8">
              Independent YouTube reviews. No dealership affiliation.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-8 p-8 bg-muted/30 rounded-xl">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Not sure which car to research?
            </h2>
            <p className="text-muted-foreground mb-4">
              Take our quiz and we'll recommend your top 3 matches.
            </p>
            <Button asChild size="lg">
              <Link to="/quiz">
                Find Your Best-Fit Car
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;
