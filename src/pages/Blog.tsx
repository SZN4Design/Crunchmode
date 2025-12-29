import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Sample blog posts data
const blogPosts = [
  {
    slug: 'best-cars-under-30k-canada-2024',
    title: 'Best Cars Under $30K in Canada (2024)',
    excerpt: 'Finding the sweet spot between value and reliability. These cars offer the best bang for your buck.',
    category: 'Budget',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
  },
  {
    slug: 'best-winter-cars-canada',
    title: 'Best Winter Cars for Canadian Drivers',
    excerpt: 'AWD, FWD, or 4WD? We break down what actually matters for winter driving and which cars handle it best.',
    category: 'Winter Driving',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=800&q=80',
  },
  {
    slug: 'best-cars-for-condo-living',
    title: 'Best Cars for Condo Living in 2024',
    excerpt: 'Tight parking, underground garages, and city driving. Here are the cars that make condo life easier.',
    category: 'Lifestyle',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
  },
  {
    slug: 'hybrid-vs-ev-cost-breakdown',
    title: 'Hybrid vs EV: The Real Cost Breakdown',
    excerpt: 'Beyond the sticker price. We calculate 5-year ownership costs including charging, fuel, and maintenance.',
    category: 'EV & Hybrid',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
  },
  {
    slug: 'cheapest-cars-to-insure-canada',
    title: 'Cheapest Cars to Insure in Canada',
    excerpt: 'Insurance can make or break your budget. These cars keep your premiums low without sacrificing safety.',
    category: 'Budget',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80',
  },
  {
    slug: 'best-resale-value-cars-2024',
    title: 'Cars with the Best Resale Value (2024)',
    excerpt: 'Buy smart, sell smart. These cars hold their value better than anything else on the market.',
    category: 'Financial Fit',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              CrunchMode Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              In-depth guides to help you find the right car for your life, budget, and driving needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-soft hover:shadow-trust transition-shadow duration-300"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm text-primary font-medium hover:gap-2 transition-all"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">Not sure where to start?</p>
            <Button asChild size="lg">
              <Link to="/quiz">
                Take the Quiz
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

export default Blog;
