
import { Shield, TestTube, Users } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: "Real Insights",
    description: "No sponsored content. No dealership partnerships. Just honest opinions from real ownership and testing."
  },
  {
    icon: TestTube,
    title: "Tested Rides",
    description: "Every review includes real-world driving, ownership costs, and practical usability testing."
  },
  {
    icon: Users,
    title: "Buyer Focused",
    description: "Reviews designed for actual buyers, not car enthusiasts. We focus on what matters in daily life."
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-crunch-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why CrunchMode?
          </h2>
          <p className="text-xl text-crunch-white opacity-80 max-w-2xl mx-auto">
            Cut through the noise with reviews that actually help you make the right choice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center group">
              <div className="bg-crunch-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <point.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {point.title}
              </h3>
              <p className="text-crunch-white opacity-80 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
