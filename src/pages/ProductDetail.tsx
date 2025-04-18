import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowLeft, Leaf, ChevronRight, Star, ShieldCheck, Heart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Add keyframes for floating animation
const productAnimationStyle = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [isVisible, setIsVisible] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState<typeof products>([]);
  const [activeTab, setActiveTab] = useState("description");

  // Mock data for UI elements not in the Product interface
  const rating = 4;
  const reviews = 124;
  const price = 9.99;

  useEffect(() => {
    setIsVisible(true);
    
    // Set related products (excluding current one)
    if (product) {
      // For this example, we'll just show other flavors
      setRelatedProducts(products.filter(p => p.id !== product.id).slice(0, 3));
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [product, id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold text-nutri-green mb-6">Product Not Found</h1>
          <Link to="/products">
            <Button className="bg-nutri-green hover:bg-nutri-orange">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Determine flavor characteristics based on product ID
  const flavorColor = product.id.includes("carrot") ? "bg-amber-500" :
                      product.id.includes("cucumber") ? "bg-green-500" :
                      product.id.includes("corn") ? "bg-yellow-500" :
                      "bg-purple-500";
                      
  const flavorProfile = product.id.includes("carrot") ? "Sweet & Earthy" :
                        product.id.includes("cucumber") ? "Cool & Refreshing" :
                        product.id.includes("corn") ? "Creamy & Sweet" :
                        "Rich & Creamy";
                        
  const category = product.id.includes("carrot") || product.id.includes("cucumber") 
                    ? "Vegetable Based" 
                    : "Sweet Based";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Adjusted to reduce size and improve positioning */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-nutri-beige/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.jpg')] bg-repeat opacity-5 z-0"></div>
        <div className="absolute top-40 right-10 w-24 h-24 bg-nutri-orange/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-nutri-green/10 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
        
        <div className="container relative z-10">
          <div className="flex items-center mb-6">
            <Link to="/products" className="flex items-center text-nutri-green hover:text-nutri-orange transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              <span className="font-medium">Back to All Flavors</span>
            </Link>
          </div>
          
          <div className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Product Image - Made smaller */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-nutri-orange/10 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-nutri-green/10 rounded-full z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl mx-auto max-w-md">
                <img 
                  src={product.image}
                  alt={product.title} 
                  className="w-full h-auto object-cover max-h-[400px]"
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="inline-block px-4 py-1.5 bg-nutri-green/10 rounded-full text-nutri-green font-medium text-sm mb-6">
                {category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-nutri-green mb-6 leading-tight">
                {product.title}
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-nutri-green to-nutri-orange rounded-full mb-6"></div>
              
              <div className="flex items-center gap-2 mb-8">
                <div className={`w-4 h-4 rounded-full ${flavorColor}`}></div>
                <span className="text-gray-600 font-medium">{flavorProfile}</span>
              </div>
              
              <div className="text-lg text-gray-700 mb-8 leading-relaxed">
                {product.fullDescription}
              </div>
              
              <div className="bg-gradient-to-r from-nutri-green/10 to-nutri-orange/10 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-nutri-green mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-nutri-orange" />
                  Health Benefits
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1">
                        <ShieldCheck className="h-4 w-4 text-nutri-green" />
                      </div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-nutri-green hover:bg-nutri-orange transition-colors text-white rounded-full px-8">
                  <Link to="/contact">
                    Visit Our Store
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-nutri-orange text-nutri-orange hover:bg-nutri-orange/10 rounded-full px-8">
                  <Link to="/products">
                    See All Flavors
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nutri-green mb-4">You Might Also Like</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-nutri-green to-nutri-orange rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our other delicious plant-based flavors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div 
                key={relatedProduct.id} 
                className="group bg-gradient-to-b from-white to-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <Link to={`/products/${relatedProduct.id}`} className="block">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={relatedProduct.image}
                      alt={relatedProduct.title} 
                      className="w-full h-full object-cover object-center max-h-[250px] transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {relatedProduct.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          relatedProduct.id.includes("carrot") ? "bg-amber-500" :
                          relatedProduct.id.includes("cucumber") ? "bg-green-500" :
                          relatedProduct.id.includes("corn") ? "bg-yellow-500" :
                          "bg-purple-500"
                        }`}></div>
                        <span className="text-sm text-white/90">
                          {relatedProduct.id.includes("carrot") ? "Sweet & Earthy" :
                          relatedProduct.id.includes("cucumber") ? "Cool & Refreshing" :
                          relatedProduct.id.includes("corn") ? "Creamy & Sweet" :
                          "Rich & Creamy"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                
                <div className="p-4">
                  <Button asChild variant="ghost" className="w-full justify-center text-nutri-green hover:text-nutri-orange">
                    <Link to={`/products/${relatedProduct.id}`} className="flex items-center gap-2">
                      View this flavor <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
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

export default ProductDetail;
