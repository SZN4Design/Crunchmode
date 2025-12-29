import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, DollarSign, Snowflake, Building2, Zap } from 'lucide-react';

const topicClusters = [
  {
    icon: DollarSign,
    title: 'Budget-Based',
    topics: [
      'Best cars under $20k',
      'Best cars under $30k',
      'Cheapest cars to insure in Canada',
      'Best used cars for tight budgets',
    ],
    color: 'text-score-excellent',
    bgColor: 'bg-score-excellent/10',
  },
  {
    icon: Building2,
    title: 'Lifestyle',
    topics: [
      'Best cars for city commuters',
      'Best cars for condo living',
      'Best cars for families',
      'Best cars for Uber drivers',
    ],
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: TrendingUp,
    title: 'Financial Fit',
    topics: [
      'Cars with lowest long-term cost',
      'Best resale value cars',
      'Cars with lowest repair costs',
    ],
    color: 'text-score-good',
    bgColor: 'bg-score-good/10',
  },
  {
    icon: Snowflake,
    title: 'Winter Driving',
    topics: [
      'Best winter cars in Canada',
      'AWD vs FWD in snow',
      'Best winter tires for your budget',
    ],
    color: 'text-trust',
    bgColor: 'bg-trust/10',
  },
  {
    icon: Zap,
    title: 'EV & Hybrid',
    topics: [
      'Best EVs for condos',
      'Best hybrids for city driving',
      'Hybrid vs EV cost breakdown',
    ],
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
];

const TopicClusters = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Your Perfect Match
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our content by what matters most to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topicClusters.map((cluster) => (
            <div 
              key={cluster.title}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-soft transition-shadow"
            >
              <div className={`w-10 h-10 ${cluster.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <cluster.icon className={`w-5 h-5 ${cluster.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{cluster.title}</h3>
              <ul className="space-y-2">
                {cluster.topics.map((topic) => (
                  <li key={topic}>
                    <Link 
                      to="/blog" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <span>→</span> {topic}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/blog"
            className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
          >
            Browse all topics
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopicClusters;
