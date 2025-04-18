import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight, ChevronDown, Leaf, Heart, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.id.includes(selectedCategory)) 
    : products;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.jpg')] bg-cover bg-center opacity-10 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-nutri-green/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-nutri-orange/10 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-1/3 left-1/5 w-16 h-16 bg-amber-500/10 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
        
        <div className="container relative z-10">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block px-4 py-1.5 bg-nutri-green/10 rounded-full text-nutri-green font-medium text-sm mb-6">
              PLANT-BASED ICE CREAM
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-nutri-green mb-6 leading-tight">
              Discover Our <span className="text-nutri-orange">Delicious</span> Flavors
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-nutri-green to-nutri-orange rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Treat yourself to ice cream you can feel good about! Made with simple plant ingredients, our creamy flavors deliver both amazing taste and health benefits – no compromise needed.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Leaf className="h-5 w-5 text-nutri-green" />
                <span className="text-gray-700 font-medium">100% Plant-Based</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Heart className="h-5 w-5 text-nutri-orange" />
                <span className="text-gray-700 font-medium">Locally Made</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <ShieldCheck className="h-5 w-5 text-nutri-green" />
                <span className="text-gray-700 font-medium">No Artificial Additives</span>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 text-nutri-green hover:text-nutri-orange"
              onClick={() => scrollToSection('products-section')}
            >
              Scroll to see flavors
              <ChevronDown className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
          onClick={() => scrollToSection('products-section')}
        >
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all">
            <ChevronDown className="h-6 w-6 text-nutri-green" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Products Display Section */}
      <section id="products-section" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-64 h-64 bg-nutri-green/5 rounded-full"></div>
        <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-nutri-orange/5 rounded-full"></div>
        
        <div className="container relative z-10 max-w-7xl">
          {/* Ice Cream Display with Decorative Elements */}
          <div className="relative mb-16">
            {/* Decorative elements */}
            <div className="absolute top-8 left-4 w-16 h-16 bg-nutri-orange/20 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
            <div className="absolute top-20 right-12 w-12 h-12 bg-nutri-green/20 rounded-full animate-pulse" style={{animationDelay: '1.3s'}}></div>
            <div className="absolute bottom-12 left-1/4 w-10 h-10 bg-amber-400/20 rounded-full animate-pulse" style={{animationDelay: '0.9s'}}></div>
            <div className="absolute bottom-24 right-1/3 w-8 h-8 bg-green-400/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            
            {/* Flavor showcase heading */}
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl font-bold text-nutri-green mb-4">Delicious Plant-Based Flavors</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-nutri-green to-nutri-orange rounded-full mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Treat yourself to our nutritious ice cream creations made with love
              </p>
            </div>
            
            {/* Product Showcase that resembles an ice cream display counter */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="group bg-gradient-to-b from-white to-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-100"
                >
                  <div className="overflow-hidden aspect-square relative">
                    <img 
                      src={product.image}
                      alt={product.title} 
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 w-full p-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 transform transition-transform duration-500 group-hover:translate-y-[-0.5rem] shadow-lg">
                        <h3 className="text-xl font-bold text-nutri-green group-hover:text-nutri-orange transition-colors duration-300 mb-1">
                          {product.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-3 h-3 rounded-full ${
                            product.id.includes("carrot") ? "bg-amber-500" :
                            product.id.includes("cucumber") ? "bg-green-500" :
                            product.id.includes("corn") ? "bg-yellow-500" :
                            "bg-purple-500"
                          }`}></div>
                          <span className="text-sm text-gray-600 font-medium">
                            {product.id.includes("carrot") ? "Sweet & Earthy" :
                            product.id.includes("cucumber") ? "Cool & Refreshing" :
                            product.id.includes("corn") ? "Creamy & Sweet" :
                            "Rich & Creamy"}
                          </span>
                        </div>
                        
                        <Link 
                          to={`/products/${product.id}`}
                          className="flex items-center justify-center gap-2 bg-nutri-green hover:bg-nutri-orange transition-colors text-white py-2 px-4 rounded-full w-full mt-2 group-hover:shadow-md"
                        >
                          Try This Flavor <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Fun Note */}
          <div className="mt-16 text-center bg-gradient-to-r from-nutri-green/5 via-nutri-beige/30 to-nutri-orange/5 rounded-3xl p-10 border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-nutri-green mb-3">Can't Decide?</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
              Visit our ice cream shop in Valenzuela City to experience all our flavors in person! Our friendly staff will help you discover your perfect plant-based treat.
            </p>
            <Button asChild className="bg-nutri-green hover:bg-nutri-orange text-white mt-2">
              <Link to="/contact">Find Our Store</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-nutri-green text-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/20">
            <div>
              <h4 className="font-bold text-2xl mb-6">NutriScoop</h4>
              <p className="text-white/80 text-lg">Healthy & Delicious Plant-Based Ice Cream made in Valenzuela City.</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Quick Links</h4>
              <nav className="space-y-3">
                <Link to="/" className="block text-white/80 hover:text-white text-lg">Home</Link>
                <Link to="/about" className="block text-white/80 hover:text-white text-lg">About</Link>
                <Link to="/products" className="block text-white/80 hover:text-white text-lg">Products</Link>
                <Link to="/contact" className="block text-white/80 hover:text-white text-lg">Contact</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nutri-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:nutriscoop6@gmail.com" className="text-white/80 hover:text-white">
                    nutriscoop6@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nutri-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-white/80">MXQG+RMR, Karuhatan Rd, Valenzuela, Metro Manila</p>
                </div>
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nutri-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-white/80">Monday - Sunday | 10 AM to 8 PM</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href="https://facebook.com/NutriScoopPh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/NutriScoop.Ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 text-center text-white/80">
            <p className="text-lg">&copy; 2025 NutriScoop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;
