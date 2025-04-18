import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { Facebook, Instagram, Mail, MapPin, Clock, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-nutri-beige to-white">
      <Header />
      
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/hero-bg.jpg')] bg-cover bg-center opacity-10 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-16 sm:w-20 h-16 sm:h-20 bg-nutri-green/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-nutri-orange/10 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
        
        <div className="responsive-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-block px-3 sm:px-5 py-1.5 sm:py-2 bg-nutri-green/10 rounded-full text-nutri-green font-medium text-xs sm:text-sm mb-4 sm:mb-6">
                PLANT-BASED • NUTRITIOUS • DELICIOUS
              </div>
              
              <h1 className="heading-responsive mb-4 sm:mb-6 leading-tight">
                <span className="text-nutri-green">NutriScoop:</span> <span className="text-nutri-orange">Premium</span> Plant-Based Ice Cream
          </h1>
              
              <div className="flex justify-center mb-6 sm:mb-10">
                <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-nutri-green to-nutri-orange rounded-full"></div>
              </div>
              
              <p className="text-responsive text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Experience ice cream reinvented – silky smooth, impossibly creamy, and crafted purely from plants. Savor every spoonful of bliss while feeling good about your choices for your body and the planet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
                <Button asChild size="lg" className="bg-nutri-green hover:bg-nutri-green/90 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                  <Link to="/products">
                    Explore Our Flavors <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  onClick={() => scrollToSection('products')}
                  variant="outline" 
                  size="lg" 
                  className="border-nutri-orange text-nutri-orange hover:bg-nutri-orange/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full w-full sm:w-auto"
                >
                  See Our Products
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
          onClick={() => scrollToSection('features')}
        >
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all">
            <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-nutri-green" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-nutri-beige to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="mobile-friendly-padding bg-gradient-to-b from-white to-nutri-beige/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-nutri-green/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-nutri-orange/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="responsive-container relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="subheading-responsive text-nutri-green mb-4">Why Choose NutriScoop?</h2>
            <p className="text-responsive text-gray-600 max-w-2xl mx-auto">Our ice cream delivers the perfect balance of taste and nutrition</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Plant-Based Feature */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-nutri-green/10 to-transparent rounded-bl-3xl -translate-y-10 translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <div className="bg-gradient-to-br from-nutri-green/20 to-nutri-green/5 w-16 sm:w-24 h-16 sm:h-24 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 transform group-hover:rotate-3 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-12 w-8 sm:w-12 text-nutri-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12V8a2 2 0 0 0-2-2h-5.5a1 1 0 0 1-.7-.3L9.8 3.7a1 1 0 0 0-.7-.3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.3" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 19h6m-3-3v6" />
                </svg>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-nutri-green mb-3 sm:mb-4 group-hover:text-nutri-orange transition-colors duration-300">100% Plant-Based</h3>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Made exclusively with natural plant ingredients that are better for your health and kinder to our planet.
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-nutri-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Dairy-free alternative
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-nutri-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    No artificial additives
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-nutri-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Environmentally friendly
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Made with Love Feature */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-nutri-orange/10 to-transparent rounded-bl-3xl -translate-y-10 translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <div className="bg-gradient-to-br from-nutri-orange/20 to-nutri-orange/5 w-16 sm:w-24 h-16 sm:h-24 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 transform group-hover:rotate-3 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-12 w-8 sm:w-12 text-nutri-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-nutri-orange mb-3 sm:mb-4 group-hover:text-nutri-green transition-colors duration-300">Made with Love</h3>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Every batch of our ice cream is handcrafted with care, attention to detail, and a genuine passion for creating delicious treats.
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-nutri-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Handcrafted recipes
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-nutri-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Attention to detail
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-nutri-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Small batch quality
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Nutritious Feature */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-nutri-green/10 to-transparent rounded-bl-3xl -translate-y-10 translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <div className="bg-gradient-to-br from-nutri-green/20 to-nutri-green/5 w-16 sm:w-24 h-16 sm:h-24 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 transform group-hover:rotate-3 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-12 w-8 sm:w-12 text-nutri-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-nutri-green mb-3 sm:mb-4 group-hover:text-nutri-orange transition-colors duration-300">Nutritionally Rich</h3>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Packed with essential vitamins, minerals and antioxidants to support your health and wellness goals.
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-nutri-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Vitamin-rich ingredients
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-nutri-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Natural antioxidants
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-nutri-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Health-focused recipes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 relative overflow-hidden bg-white">
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-nutri-green/5 rounded-full"></div>
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-nutri-orange/5 rounded-full"></div>
        
        {/* Decorative elements - ice cream themed */}
        <div className="absolute top-1/4 left-10 w-8 h-8 bg-nutri-green/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-12 h-12 bg-nutri-orange/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-nutri-green/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-14 h-14 bg-nutri-orange/20 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
        
        <div className="container relative z-10 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-nutri-green/10 rounded-full text-nutri-green font-medium text-sm mb-4">
              OUR DELICIOUS FLAVORS
            </div>
            <h2 className="text-5xl font-bold text-nutri-green mb-5">Pick Your Favorite Scoop</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each flavor is crafted with love using plant-based ingredients for a guilt-free indulgence
            </p>
          </div>
          
          {/* Product Showcase with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Carrot Flavor */}
            <div className="group bg-gradient-to-b from-white to-nutri-orange/5 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.01] border border-orange-100">
              <Link to="/products/carrot" className="block">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-nutri-green text-xs font-semibold rounded-full px-3 py-1 shadow-sm z-20">
                    Vegetable Based
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="px-5 py-2.5 bg-white/95 text-nutri-green font-semibold rounded-full flex items-center shadow-lg">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                  <img 
                    src="/images/products/carrot.png" 
                    alt="Carrot Flavor Ice Cream" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </Link>
              <div className="p-6">
                <Link to="/products/carrot" className="block group-hover:underline">
                  <h3 className="text-2xl font-bold text-nutri-green group-hover:text-nutri-orange transition-colors duration-300">
                    Carrot Delight
                  </h3>
                </Link>
                <p className="text-gray-600 mt-2 mb-4">
                  A bitter-sweet flavor beneficial for regulating sugar levels, rich in beta-carotene and vitamin A.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="text-sm text-gray-500">Sweet & Earthy</span>
                  </div>
                  <Link to="/products/carrot" className="text-nutri-orange font-medium hover:underline flex items-center text-sm">
                    Try it <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Corn Flavor */}
            <div className="group bg-gradient-to-b from-white to-yellow-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.01] border border-yellow-100">
              <Link to="/products/corn" className="block">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-nutri-orange text-xs font-semibold rounded-full px-3 py-1 shadow-sm z-20">
                    Grain Based
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="px-5 py-2.5 bg-white/95 text-nutri-green font-semibold rounded-full flex items-center shadow-lg">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                  <img 
                    src="/images/products/corn.png" 
                    alt="Corn Flavor Ice Cream" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </Link>
              <div className="p-6">
                <Link to="/products/corn" className="block group-hover:underline">
                  <h3 className="text-2xl font-bold text-nutri-orange group-hover:text-nutri-green transition-colors duration-300">
                    Sweet Corn Dream
                  </h3>
                </Link>
                <p className="text-gray-600 mt-2 mb-4">
                  A milky sweet flavor rich in vitamins, minerals, and antioxidants that aid digestion and eye health.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-sm text-gray-500">Creamy & Sweet</span>
                  </div>
                  <Link to="/products/corn" className="text-nutri-orange font-medium hover:underline flex items-center text-sm">
                    Try it <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Cucumber Flavor */}
            <div className="group bg-gradient-to-b from-white to-green-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.01] border border-green-100">
              <Link to="/products/cucumber" className="block">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-nutri-green text-xs font-semibold rounded-full px-3 py-1 shadow-sm z-20">
                    Vegetable Based
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="px-5 py-2.5 bg-white/95 text-nutri-green font-semibold rounded-full flex items-center shadow-lg">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                  <img 
                    src="/images/products/cucumber.png" 
                    alt="Cucumber Flavor Ice Cream" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </Link>
              <div className="p-6">
                <Link to="/products/cucumber" className="block group-hover:underline">
                  <h3 className="text-2xl font-bold text-nutri-green group-hover:text-nutri-orange transition-colors duration-300">
                    Cucumber Refresh
                  </h3>
                </Link>
                <p className="text-gray-600 mt-2 mb-4">
                  A mild lightly sweet flavor high in water content, helping with blood sugar and weight management.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-500">Cool & Refreshing</span>
                  </div>
                  <Link to="/products/cucumber" className="text-nutri-orange font-medium hover:underline flex items-center text-sm">
                    Try it <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Sweet Potato Flavor */}
            <div className="group bg-gradient-to-b from-white to-purple-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.01] border border-purple-100">
              <Link to="/products/sweet-potato" className="block">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-nutri-orange text-xs font-semibold rounded-full px-3 py-1 shadow-sm z-20">
                    Root Based
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="px-5 py-2.5 bg-white/95 text-nutri-green font-semibold rounded-full flex items-center shadow-lg">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                  <img 
                    src="/images/products/sweet_potato.png" 
                    alt="Sweet Potato Flavor Ice Cream" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </Link>
              <div className="p-6">
                <Link to="/products/sweet-potato" className="block group-hover:underline">
                  <h3 className="text-2xl font-bold text-nutri-orange group-hover:text-nutri-green transition-colors duration-300">
                    Sweet Potato Bliss
                  </h3>
                </Link>
                <p className="text-gray-600 mt-2 mb-4">
                  A naturally sweet flavor packed with antioxidants, great for gut health and immune system.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-gray-500">Rich & Creamy</span>
                  </div>
                  <Link to="/products/sweet-potato" className="text-nutri-orange font-medium hover:underline flex items-center text-sm">
                    Try it <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ice Cream Shop Call to Action */}
          <div className="mt-20 text-center bg-gradient-to-r from-nutri-green/10 via-white to-nutri-orange/10 rounded-3xl p-12 shadow-lg border border-gray-100">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-nutri-green mb-4">Visit Our Ice Cream Shop</h3>
              <p className="text-gray-700 text-lg mb-8">
                Experience all our flavors in person! Come try free samples and discover your new favorite plant-based treat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-nutri-green hover:bg-nutri-orange text-white rounded-full w-full max-w-xs">
                  <Link to="/products" className="flex items-center gap-2">
                    See All Flavors <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-nutri-orange text-nutri-orange hover:bg-nutri-orange/10 text-lg px-8 py-6 rounded-full">
                  <Link to="/contact">Find Our Store</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white/70 relative overflow-hidden">
        <div className="absolute -right-32 -bottom-32 w-64 h-64 bg-nutri-green/10 rounded-full"></div>
        <div className="absolute top-20 left-20 w-16 h-16 bg-nutri-orange/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/2 w-10 h-10 bg-nutri-green/15 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
        
        <div className="container relative z-10 max-w-6xl">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 bg-nutri-green/10 rounded-full text-nutri-green font-medium text-sm mb-4">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-nutri-green mb-4">Visit Our Ice Cream Shop</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience our plant-based ice cream in person and discover your new favorite flavors
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-stretch">
              {/* Store Information */}
              <div className="md:col-span-3 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-10"></div>
                  <img 
                    src="/images/store-front.jpg" 
                    alt="NutriScoop Store" 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-1">NutriScoop Valenzuela</h3>
                    <p className="text-white/90 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-nutri-orange" />
                      Karuhatan Rd, Valenzuela, Metro Manila
                    </p>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-5">
                      <div className="bg-nutri-green/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Clock className="text-nutri-green h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Opening Hours</h4>
                        <p className="text-gray-600">Monday - Friday</p>
                        <p className="text-gray-800 font-medium">10:00 AM - 8:00 PM</p>
                        <p className="text-gray-600 mt-2">Saturday - Sunday</p>
                        <p className="text-gray-800 font-medium">10:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-5">
                      <div className="bg-nutri-orange/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Mail className="text-nutri-orange h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Contact Us</h4>
                        <a href="mailto:nutriscoop6@gmail.com" className="text-gray-800 font-medium hover:text-nutri-green transition-colors block mb-2">
                          nutriscoop6@gmail.com
                        </a>
                        <p className="text-gray-600">Phone:</p>
                        <p className="text-gray-800 font-medium">(+63) 912-345-6789</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-4">How to Get Here</h4>
                    <div className="bg-gray-50 rounded-xl p-4 relative overflow-hidden h-48">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.8548528675967!2d120.98146807499743!3d14.668764377798125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b45789c7c447%3A0xb75d793bde367821!2sKaruhatan%20Rd%2C%20Valenzuela%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1652345678901!5m2!1sen!2sph" 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen={false} 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          title="NutriScoop Location"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connect & Social */}
              <div className="md:col-span-2 flex flex-col">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-nutri-green mb-6">Connect With Us</h3>
                  
                  <p className="text-gray-600 mb-8">Follow us for updates, promotions, and behind-the-scenes content of our delicious ice cream creations.</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <a
                      href="https://facebook.com/NutriScoopPh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-4 flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all"
                    >
                      <Facebook className="h-6 w-6" />
                      <span className="font-medium">Facebook</span>
                    </a>
                    <a
                      href="https://instagram.com/NutriScoop.Ph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-xl p-4 flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all"
                    >
                      <Instagram className="h-6 w-6" />
                      <span className="font-medium">Instagram</span>
                    </a>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center">
                      <Button asChild size="lg" className="bg-nutri-green hover:bg-nutri-orange text-white rounded-full w-full max-w-xs">
                        <Link to="/contact" className="flex items-center justify-center gap-2">
                          Message Us <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
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

export default Index;
