
import { Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const reviews = [
  {
    id: 1,
    title: "2024 Tesla Model 3 Highland",
    rating: 4.5,
    category: "Electric",
    thumbnail: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=250&fit=crop",
    price: "$38,990",
    quickTake: "Tesla's refresh brings better interior and efficiency"
  },
  {
    id: 2,
    title: "2024 Toyota Camry Hybrid",
    rating: 4.8,
    category: "Sedan",
    thumbnail: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&h=250&fit=crop",
    price: "$33,400",
    quickTake: "Reliable, efficient, and surprisingly engaging"
  },
  {
    id: 3,
    title: "2024 Ford F-150 Lightning",
    rating: 4.3,
    category: "Electric Truck",
    thumbnail: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop",
    price: "$54,995",
    quickTake: "Electric truck that actually works for work"
  },
  {
    id: 4,
    title: "2024 Honda CR-V",
    rating: 4.6,
    category: "SUV",
    thumbnail: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop",
    price: "$28,200",
    quickTake: "The reliable choice that never disappoints"
  }
];

const FeaturedReviews = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold crunch-navy mb-6">
            Latest Reviews
          </h2>
          <p className="text-xl text-crunch-gray max-w-2xl mx-auto">
            Real-world testing. Honest opinions. No manufacturer influence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reviews.map((review) => (
            <Card key={review.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={review.thumbnail} 
                  alt={review.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-crunch-blue/90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-crunch-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                  {review.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg crunch-navy mb-2 group-hover:text-crunch-blue transition-colors">
                  {review.title}
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(review.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-crunch-gray">{review.rating}</span>
                </div>
                <p className="text-sm text-crunch-gray mb-3">{review.quickTake}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-crunch-blue text-lg">{review.price}</span>
                  <Button size="sm" variant="outline" className="border-crunch-blue text-crunch-blue hover:bg-crunch-blue hover:text-white">
                    Watch Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-crunch-navy hover:bg-gray-800 text-white px-8 py-3">
            View All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;
