
import { useState } from 'react';
import { ArrowRight, Car, DollarSign, MapPin, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const LeadGenSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    carType: '',
    location: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead generation form submitted:', formData);
    toast({
      title: "Thanks for your interest!",
      description: "We'll send you personalized car recommendations within 24 hours.",
    });
    setFormData({ name: '', email: '', budget: '', carType: '', location: '' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold crunch-navy mb-6">
            Get Your Personalized Car List
          </h2>
          <p className="text-xl text-crunch-gray max-w-2xl mx-auto">
            Tell us what you need, and we'll recommend the perfect cars for your lifestyle and budget.
          </p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-crunch-blue to-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">
              Find Your Perfect Match
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium crunch-navy flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Your Name
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium crunch-navy">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium crunch-navy flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Budget Range
                  </label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-20k">Under $20,000</SelectItem>
                      <SelectItem value="20k-30k">$20,000 - $30,000</SelectItem>
                      <SelectItem value="30k-40k">$30,000 - $40,000</SelectItem>
                      <SelectItem value="40k-50k">$40,000 - $50,000</SelectItem>
                      <SelectItem value="50k-plus">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium crunch-navy flex items-center">
                    <Car className="h-4 w-4 mr-2" />
                    Car Type
                  </label>
                  <Select value={formData.carType} onValueChange={(value) => setFormData({...formData, carType: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="What type of car?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="truck">Truck</SelectItem>
                      <SelectItem value="electric">Electric Vehicle</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="coupe">Coupe/Sports Car</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium crunch-navy flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Location (Optional)
                </label>
                <Input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="City, State (helps with local pricing)"
                  className="h-12"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-crunch-blue hover:bg-blue-600 text-white h-14 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get My Car Recommendations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-crunch-gray">
              <p>We'll email you personalized recommendations within 24 hours. No spam, ever.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadGenSection;
