import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import QuizContainer from '@/components/quiz/QuizContainer';

const Quiz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your Best-Fit Car
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Answer 10 quick questions about your lifestyle and needs. 
              We'll match you with your top 3 cars.
            </p>
          </div>

          <QuizContainer />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Quiz;
