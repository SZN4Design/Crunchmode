
import BackgroundRemover from '@/components/BackgroundRemover';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const BackgroundRemoverPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="py-12">
        <BackgroundRemover />
      </div>
      <Footer />
    </div>
  );
};

export default BackgroundRemoverPage;
