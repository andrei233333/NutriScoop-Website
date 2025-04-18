import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Users, Target, Award, Clock, MapPin, Mail, ChevronRight, Leaf, Heart, ShieldCheck, Star, MessageSquare, Share2, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/about-pattern.jpg')] bg-cover bg-center opacity-10 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-20 sm:w-32 h-20 sm:h-32 bg-nutri-green/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-nutri-orange/10 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-1/3 left-1/5 w-12 sm:w-16 h-12 sm:h-16 bg-nutri-green/15 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
        
        <div className="responsive-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-nutri-green/10 rounded-full text-nutri-green font-medium text-xs sm:text-sm mb-4 sm:mb-6">
                ABOUT US
              </div>
              <h1 className="heading-responsive text-nutri-green mb-4 sm:mb-6 leading-tight">
                Crafting <span className="text-nutri-orange">Plant-Based</span> Happiness Since 2025
        </h1>
              <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-nutri-green to-nutri-orange rounded-full mb-4 sm:mb-6"></div>
              <p className="text-responsive text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                NutriScoop delivers premium plant-based ice cream that celebrates nutrition without compromising on flavor. We're on a mission to change how people think about vegan desserts.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm">
                  <Leaf className="h-4 sm:h-5 w-4 sm:w-5 text-nutri-green" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">100% Plant-Based</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm">
                  <Heart className="h-4 sm:h-5 w-4 sm:w-5 text-nutri-orange" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">Locally Made</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm">
                  <ShieldCheck className="h-4 sm:h-5 w-4 sm:w-5 text-nutri-green" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">No Artificial Additives</span>
                </div>
              </div>
              <Button 
                variant="ghost" 
                className="flex items-center gap-2 text-nutri-green hover:text-nutri-orange"
                onClick={() => scrollToSection('our-story')}
              >
                Discover our story
                <ChevronRight className="h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            </div>
            <div className={`relative transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-10 opacity-0'} mt-8 md:mt-0`}>
              <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-28 sm:w-40 h-28 sm:h-40 bg-nutri-orange/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 w-28 sm:w-40 h-28 sm:h-40 bg-nutri-green/10 rounded-full z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl transform transition-all duration-700 hover:scale-[1.02]">
                <img 
                  src="/images/about-hero.jpg" 
                  alt="NutriScoop Ice Cream" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
          onClick={() => scrollToSection('our-story')}
        >
          <div className="bg-white/80 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all">
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-nutri-green" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Our Story Section */}
      <section id="our-story" className="mobile-friendly-padding bg-white relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-28 sm:w-40 h-28 sm:h-40 bg-nutri-green/5 rounded-full"></div>
        <div className="absolute bottom-1/4 left-0 w-28 sm:w-40 h-28 sm:h-40 bg-nutri-orange/5 rounded-full"></div>
        
        <div className="responsive-container relative z-10">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-nutri-green/10 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center">
                <Users className="h-6 sm:h-8 w-6 sm:w-8 text-nutri-green" />
              </div>
            </div>
            <h2 className="subheading-responsive text-nutri-green mb-3 sm:mb-4">Our Company Story</h2>
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-nutri-green to-nutri-orange rounded-full mb-4 sm:mb-6"></div>
            <p className="text-responsive text-gray-600 max-w-3xl mx-auto">
              How NutriVal Company began in Valenzuela City
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto transform transition-all duration-700 hover:translate-y-[-0.5rem]">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-10 sm:mb-16 border border-gray-100">
              <div className="prose max-w-none text-gray-600">
                <p className="text-base sm:text-lg leading-relaxed">
              NutriVal Company was established on February 7, 2025, a partnership formed by ten
              young adults who desire to be successful entrepreneurs. The "Nutri" was derived from a word
              'Nutrition" which signifies the consumption and utilization of nutritious foods to support growth,
              energy production, and overall well being. Meanwhile "Val" comes to "Valenzuela city", the
              hometown of young entrepreneurs.
            </p>
                <p className="text-base sm:text-lg leading-relaxed">
              We chose this company name because it signifies our commitment in providing nutritious 
              and locally inspired products for the community.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12 mt-12 sm:mt-20">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-nutri-orange/10 w-10 sm:w-14 h-10 sm:h-14 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8 text-nutri-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 className="subheading-responsive text-nutri-green mb-3 sm:mb-4">The NutriScoop Brand</h2>
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-nutri-green to-nutri-orange rounded-full mb-4 sm:mb-6"></div>
            <p className="text-responsive text-gray-600 max-w-3xl mx-auto">
              The meaning behind our ice cream brand name
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto transform transition-all duration-700 hover:translate-y-[-0.5rem]">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <div className="prose max-w-none text-gray-600">
                <p className="text-base sm:text-lg leading-relaxed">
              The name 'Nutriscoop' signifies our dedication to plant-based goodness, blending
              nutrition and indulgence to deliver ice cream that is both healthy and satisfying. The word
              'Scoop' brings to mind the simple pleasure our treats bring. The fusion of 'Nutri' and 'Scoop'
              highlights our commitment to sustainability, reflecting our passion for eco-friendly practices and
              plant-based ingredients.
            </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="mobile-friendly-padding bg-gradient-to-r from-nutri-green/5 to-nutri-orange/5 relative overflow-hidden">
        <div className="absolute -right-20 sm:-right-32 -top-20 sm:-top-32 w-40 sm:w-64 h-40 sm:h-64 bg-nutri-green/10 rounded-full"></div>
        <div className="absolute -left-20 sm:-left-32 -bottom-20 sm:-bottom-32 w-40 sm:w-64 h-40 sm:h-64 bg-nutri-orange/10 rounded-full"></div>
        
        <div className="responsive-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transform hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
              <div className="rounded-full bg-nutri-green/10 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
                <Target className="h-6 sm:h-8 w-6 sm:w-8 text-nutri-green" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-nutri-green mb-3 sm:mb-4">Our Mission</h3>
              <div className="h-1 w-10 sm:w-12 bg-nutri-green rounded-full mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
                To value customers with an exciting and one of a kind ice cream experience, while
                promoting healthy and nutritious options that benefit our community.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transform hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
              <div className="rounded-full bg-nutri-orange/10 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
                <Award className="h-6 sm:h-8 w-6 sm:w-8 text-nutri-orange" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-nutri-orange mb-3 sm:mb-4">Our Vision</h3>
              <div className="h-1 w-10 sm:w-12 bg-nutri-orange rounded-full mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
                To be the go-to brand for vegan ice cream, offering a variety of flavors that make it easy
                for people to make healthier, more sustainable choices. Our goal is to become one of the
                healthiest and affordable ice creams in the community. We want to bring joy to dessert lovers
                everywhere while making a positive impact on the world.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-nutri-green text-white">
        <div className="responsive-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 pb-8 sm:pb-10 border-b border-white/20">
            <div>
              <h4 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-6">NutriScoop</h4>
              <p className="text-white/80 text-base sm:text-lg">Healthy & Delicious Plant-Based Ice Cream made in Valenzuela City.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6">Quick Links</h4>
              <nav className="space-y-2 sm:space-y-3">
                <Link to="/" className="block text-white/80 hover:text-white text-base sm:text-lg">Home</Link>
                <Link to="/about" className="block text-white/80 hover:text-white text-base sm:text-lg">About</Link>
                <Link to="/products" className="block text-white/80 hover:text-white text-base sm:text-lg">Products</Link>
                <Link to="/contact" className="block text-white/80 hover:text-white text-base sm:text-lg">Contact</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6">Contact Us</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-nutri-orange h-5 w-5" />
                  <a href="mailto:nutriscoop6@gmail.com" className="text-white/80 hover:text-white text-sm sm:text-base">
                    nutriscoop6@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-nutri-orange h-5 w-5" />
                  <p className="text-white/80 text-sm sm:text-base">MXQG+RMR, Karuhatan Rd, Valenzuela, Metro Manila</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-nutri-orange h-5 w-5" />
                  <p className="text-white/80 text-sm sm:text-base">Monday - Sunday | 10 AM to 8 PM</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href="https://facebook.com/NutriScoopPh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/NutriScoop.Ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6 sm:pt-10 text-center text-white/80">
            <p className="text-base sm:text-lg">&copy; 2025 NutriScoop. All rights reserved.</p>
          </div>
      </div>
      </footer>
    </div>
  );
};

export default About;
