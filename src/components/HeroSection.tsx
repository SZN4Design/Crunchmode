
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-crunch-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Shift into</span><br />
            <span className="crunch-navy">CrvnchMode</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-crunch-gray max-w-3xl mx-auto mb-12 leading-relaxed">
            Honest car reviews. Smart buying tips. No dealership fluff.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-crunch-blue hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Find Your Next Car
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-crunch-navy text-crunch-navy hover:bg-crunch-navy hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
              <Play className="mr-2 h-5 w-5" />
              Watch Reviews
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-crunch-navy to-crunch-blue rounded-2xl p-8 shadow-2xl animate-scale-in">
              <div className="grid grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-crunch-white opacity-80">Cars Reviewed</div>
                </div>
                <div className="text-center border-x border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">1M+</div>
                  <div className="text-crunch-white opacity-80">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50K+</div>
                  <div className="text-crunch-white opacity-80">Cars Sold</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
