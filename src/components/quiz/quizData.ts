export interface QuizOption {
  value: string;
  label: string;
  description?: string;
}

export interface QuizQuestionData {
  id: string;
  title: string;
  description?: string;
  options: QuizOption[];
  multiSelect?: boolean;
}

export interface QuizAnswer {
  questionId: string;
  value: string | string[];
}

export const quizQuestions: QuizQuestionData[] = [
  {
    id: 'budget',
    title: 'What is your budget range?',
    description: 'Including taxes and fees',
    options: [
      { value: 'under-20k', label: 'Under $20,000', description: 'Best value segment' },
      { value: '20k-30k', label: '$20,000 - $30,000', description: 'Sweet spot for reliability' },
      { value: '30k-40k', label: '$30,000 - $40,000', description: 'More features and power' },
      { value: '40k-plus', label: '$40,000+', description: 'Premium options' },
    ],
  },
  {
    id: 'condition',
    title: 'New or used?',
    options: [
      { value: 'new', label: 'New', description: 'Full warranty, latest features' },
      { value: 'used', label: 'Used (1-3 years)', description: 'Better value, some warranty' },
      { value: 'older-used', label: 'Older Used (4+ years)', description: 'Maximum savings' },
      { value: 'open', label: 'Open to both', description: 'Show me the best deals' },
    ],
  },
  {
    id: 'driving',
    title: 'What type of driving do you do most?',
    options: [
      { value: 'city', label: 'City driving', description: 'Short trips, stop-and-go traffic' },
      { value: 'highway', label: 'Highway commuting', description: 'Long distances, cruising' },
      { value: 'mixed', label: 'Mixed usage', description: 'Balanced city and highway' },
    ],
  },
  {
    id: 'winter',
    title: 'How important is winter driving capability?',
    options: [
      { value: 'critical', label: 'Critical', description: 'Heavy snow, rural roads' },
      { value: 'important', label: 'Important', description: 'Some snow, plowed roads' },
      { value: 'nice-to-have', label: 'Nice to have', description: 'Occasional light snow' },
      { value: 'not-needed', label: 'Not needed', description: 'Mild winters' },
    ],
  },
  {
    id: 'passengers',
    title: 'Who will be riding with you?',
    description: 'Select all that apply',
    multiSelect: true,
    options: [
      { value: 'solo', label: 'Mostly solo' },
      { value: 'partner', label: 'Partner/spouse' },
      { value: 'kids', label: 'Kids (car seats needed)' },
      { value: 'teens', label: 'Teenagers' },
      { value: 'pets', label: 'Pets' },
      { value: 'elderly', label: 'Elderly passengers' },
    ],
  },
  {
    id: 'tech',
    title: 'Tech preference?',
    options: [
      { value: 'high-tech', label: 'Give me all the tech', description: 'Big screens, smart features, connected' },
      { value: 'balanced', label: 'Balanced', description: 'Useful tech without complexity' },
      { value: 'simple', label: 'Keep it simple', description: 'Reliable basics, fewer screens' },
    ],
  },
  {
    id: 'ownership-length',
    title: 'How long do you typically keep a car?',
    options: [
      { value: '1-2', label: '1-2 years', description: 'Lease or trade often' },
      { value: '3-5', label: '3-5 years', description: 'Standard ownership' },
      { value: '6-10', label: '6-10 years', description: 'Long-term ownership' },
      { value: '10-plus', label: '10+ years', description: 'Drive it into the ground' },
    ],
  },
  {
    id: 'risk',
    title: 'Risk tolerance for reliability?',
    options: [
      { value: 'low', label: 'Low risk only', description: 'Proven reliable brands only' },
      { value: 'medium', label: 'Some risk okay', description: 'Open to newer models' },
      { value: 'high', label: 'High risk acceptable', description: 'Will try anything interesting' },
    ],
  },
  {
    id: 'parking',
    title: 'What is your parking situation?',
    options: [
      { value: 'garage', label: 'Private garage', description: 'Protected, easy charging' },
      { value: 'driveway', label: 'Driveway', description: 'Outdoor but private' },
      { value: 'street', label: 'Street parking', description: 'Public, variable spots' },
      { value: 'condo', label: 'Condo/underground', description: 'May have size limits' },
    ],
  },
  {
    id: 'fuel',
    title: 'Fuel preference?',
    options: [
      { value: 'gas', label: 'Gasoline', description: 'Traditional, widely available' },
      { value: 'hybrid', label: 'Hybrid', description: 'Best of both worlds' },
      { value: 'phev', label: 'Plug-in Hybrid', description: 'Short EV range + gas backup' },
      { value: 'ev', label: 'Full Electric', description: 'Zero emissions, home charging needed' },
      { value: 'open', label: 'Open to all', description: 'Whatever fits best' },
    ],
  },
];

// Mock car database for results
const carDatabase = [
  {
    name: '2024 Toyota Camry Hybrid',
    crunchScore: 87,
    whyItFits: 'Exceptional reliability meets fuel efficiency. Perfect for mixed driving with low long-term costs.',
    redFlags: ['Conservative styling', 'Firm ride quality'],
    ownershipCost: '$450-550/month including fuel, insurance, maintenance',
    blogLink: '/blog/2024-toyota-camry-hybrid-review',
    pillars: [
      { name: 'Financial Reality', score: 85, description: 'Excellent fuel economy, low depreciation' },
      { name: 'Reliability Reality', score: 95, description: 'Industry-leading dependability' },
      { name: 'Lifestyle Fit', score: 80, description: 'Spacious, comfortable for families' },
      { name: 'Usage Fit', score: 88, description: 'Great for city and highway' },
      { name: 'Resale Strength', score: 90, description: 'Holds value exceptionally well' },
    ],
    verdict: 'smart-buy' as const,
    tags: ['hybrid', 'reliable', 'family', 'fuel-efficient'],
  },
  {
    name: '2024 Mazda CX-5',
    crunchScore: 84,
    whyItFits: 'Premium feel without the premium price. Engaging to drive with upscale interior.',
    redFlags: ['Smaller cargo area', 'No hybrid option'],
    ownershipCost: '$500-600/month including fuel, insurance, maintenance',
    blogLink: '/blog/2024-mazda-cx5-review',
    pillars: [
      { name: 'Financial Reality', score: 82, description: 'Competitive pricing, good value retention' },
      { name: 'Reliability Reality', score: 88, description: 'Strong reliability track record' },
      { name: 'Lifestyle Fit', score: 85, description: 'Upscale interior, enjoyable driving' },
      { name: 'Usage Fit', score: 80, description: 'Versatile for most needs' },
      { name: 'Resale Strength', score: 85, description: 'Strong resale values' },
    ],
    verdict: 'buy-with-confidence' as const,
    tags: ['suv', 'premium-feel', 'reliable', 'fun-to-drive'],
  },
  {
    name: '2024 Honda Civic',
    crunchScore: 86,
    whyItFits: 'The benchmark compact car. Practical, efficient, and surprisingly fun to drive.',
    redFlags: ['Road noise on highway', 'Basic base model'],
    ownershipCost: '$400-500/month including fuel, insurance, maintenance',
    blogLink: '/blog/2024-honda-civic-review',
    pillars: [
      { name: 'Financial Reality', score: 88, description: 'Low cost of ownership' },
      { name: 'Reliability Reality', score: 92, description: 'Proven reliability' },
      { name: 'Lifestyle Fit', score: 82, description: 'Practical and spacious for its class' },
      { name: 'Usage Fit', score: 85, description: 'Excellent for commuting' },
      { name: 'Resale Strength', score: 88, description: 'Exceptional value retention' },
    ],
    verdict: 'smart-buy' as const,
    tags: ['compact', 'reliable', 'fuel-efficient', 'commuter'],
  },
];

export const calculateResults = (answers: QuizAnswer[]) => {
  // Simplified scoring - in production this would be more sophisticated
  return carDatabase.slice(0, 3);
};
