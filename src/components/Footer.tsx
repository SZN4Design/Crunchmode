import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-crunch-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-crunch-blue rounded-lg flex items-center justify-center mr-3">
                <div className="w-5 h-5 bg-white rounded-full relative">
                  <div className="absolute inset-0 bg-crunch-navy rounded-full scale-50"></div>
                </div>
              </div>
              <span className="text-3xl font-bold">CrvnchMode</span>
            </div>
            <p className="text-crunch-white opacity-80 max-w-md leading-relaxed mb-6">
              Honest car reviews and smart buying advice for everyday drivers. No dealership nonsense, just real insights to help you make the right choice.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-crunch-blue hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-crunch-blue hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-crunch-blue hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                <div className="h-5 w-5 text-center font-bold text-sm leading-5">T</div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#reviews" className="text-crunch-white opacity-80 hover:opacity-100 hover:text-crunch-blue transition-colors">Car Reviews</a></li>
              <li><a href="#about" className="text-crunch-white opacity-80 hover:opacity-100 hover:text-crunch-blue transition-colors">About</a></li>
              <li><a href="#blog" className="text-crunch-white opacity-80 hover:opacity-100 hover:text-crunch-blue transition-colors">Buying Tips</a></li>
              <li><a href="#contact" className="text-crunch-white opacity-80 hover:opacity-100 hover:text-crunch-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-crunch-white opacity-80 hover:opacity-100 hover:text-crunch-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-crunch-white opacity-80 hover:opacity-100 hover:text-crunch-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-crunch-white opacity-80 hover:opacity-100 hover:text-crunch-blue transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-crunch-white opacity-60">
            © 2024 CrvnchMode. All rights reserved. | Honest reviews for smart buyers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
