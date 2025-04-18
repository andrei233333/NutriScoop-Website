import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-nutri-beige/50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.jpg')] bg-repeat opacity-5 z-0"></div>
        <div className="absolute top-40 right-10 w-24 h-24 bg-nutri-orange/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-nutri-green/10 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>

        <div className="container max-w-6xl relative z-10">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-1.5 bg-nutri-green/10 rounded-full text-nutri-green font-medium text-sm mb-4">
                CONTACT US
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-nutri-green">Get in Touch with NutriScoop</h1>
              <div className="h-1 w-20 bg-gradient-to-r from-nutri-green to-nutri-orange rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We'd love to hear from you! Visit our store, reach out online, or connect with us on social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Information */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Map and Address */}
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100">
              <div className="h-80 bg-gray-100 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.8548528675967!2d120.98146807499743!3d14.668764377798125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b45789c7c447%3A0xb75d793bde367821!2sKaruhatan%20Rd%2C%20Valenzuela%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1652345678901!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NutriScoop Location"
                  className="absolute inset-0"
                ></iframe>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-nutri-green mb-6">Store Location</h2>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-nutri-green/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-nutri-green h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">NutriScoop Valenzuela</h3>
                    <p className="text-gray-600">MXQG+RMR, Karuhatan Rd, Valenzuela, Metro Manila</p>
                    <a 
                      href="https://maps.google.com/?q=Karuhatan+Rd,+Valenzuela,+Metro+Manila"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nutri-orange hover:underline mt-2 inline-block font-medium"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-nutri-orange/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-nutri-orange h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Opening Hours</h3>
                    <div className="flex justify-between text-gray-600 mb-1">
                      <span>Monday - Friday:</span>
                      <span className="font-medium text-gray-700">10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Saturday - Sunday:</span>
                      <span className="font-medium text-gray-700">10:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-nutri-green mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-nutri-green/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-nutri-green h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                      <a href="tel:+639123456789" className="text-gray-700 hover:text-nutri-green transition-colors">
                        (+63) 912-345-6789
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-nutri-orange/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-nutri-orange h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <a href="mailto:nutriscoop6@gmail.com" className="text-gray-700 hover:text-nutri-green transition-colors">
                        nutriscoop6@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-nutri-green mb-6">Connect With Us</h2>
                
                <div className="grid grid-cols-2 gap-4">
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
              </div>
              
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-nutri-green mb-6">Send Us a Message</h2>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-green focus:border-nutri-green transition-colors" 
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-green focus:border-nutri-green transition-colors" 
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-green focus:border-nutri-green transition-colors" 
                      placeholder="Subject of your message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-green focus:border-nutri-green transition-colors" 
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-nutri-green hover:bg-nutri-orange transition-colors text-white py-2">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
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
                  <Mail className="h-5 w-5 text-nutri-orange" />
                  <a href="mailto:nutriscoop6@gmail.com" className="text-white/80 hover:text-white">
                    nutriscoop6@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-nutri-orange" />
                  <p className="text-white/80">MXQG+RMR, Karuhatan Rd, Valenzuela, Metro Manila</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-nutri-orange" />
                  <p className="text-white/80">Monday - Sunday | 10 AM to 8 PM</p>
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
          <div className="pt-10 text-center text-white/80">
            <p className="text-lg">&copy; 2025 NutriScoop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact; 