import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedReviews from '@/components/FeaturedReviews';
import TopicClusters from '@/components/TopicClusters';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedReviews />
      <TopicClusters />
      
      {/* Lead Magnet Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <LeadCaptureForm
            title="Get the Smart Buyer Starter Guide"
            description="Avoid lifestyle mismatches, hidden fees, and costly mistakes. Free PDF with everything dealers won't tell you."
            buttonText="Send Me the Guide"
            leadMagnet="smart-buyer-guide"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
