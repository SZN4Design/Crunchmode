
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedReviews from '@/components/FeaturedReviews';
import TrustSection from '@/components/TrustSection';
import LeadGenSection from '@/components/LeadGenSection';
import LatestVideos from '@/components/LatestVideos';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedReviews />
      <TrustSection />
      <LeadGenSection />
      <LatestVideos />
      <Footer />
    </div>
  );
};

export default Index;
