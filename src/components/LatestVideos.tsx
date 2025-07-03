
import { Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const videos = [
  {
    id: 1,
    title: "5 Cars You Should NOT Buy in 2024",
    platform: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1494976688153-c44c814c3af7?w=400&h=225&fit=crop",
    views: "250K views",
    duration: "12:45"
  },
  {
    id: 2,
    title: "Tesla vs Toyota: Real Cost Comparison",
    platform: "TikTok",
    thumbnail: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=400&fit=crop",
    views: "1.2M views",
    duration: "0:58"
  }
];

const LatestVideos = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold crunch-navy mb-6">
            Latest Videos
          </h2>
          <p className="text-xl text-crunch-gray max-w-2xl mx-auto">
            Quick car tips, detailed reviews, and buying advice across all platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {videos.map((video) => (
            <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-crunch-blue/90 rounded-full p-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded text-sm">
                  {video.duration}
                </div>
                <div className="absolute top-4 right-4 bg-crunch-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                  {video.platform}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl crunch-navy mb-3 group-hover:text-crunch-blue transition-colors">
                  {video.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-crunch-gray">{video.views}</span>
                  <Button size="sm" variant="outline" className="border-crunch-blue text-crunch-blue hover:bg-crunch-blue hover:text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Watch
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-crunch-blue hover:bg-blue-600 text-white px-8 py-3">
            See More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;
