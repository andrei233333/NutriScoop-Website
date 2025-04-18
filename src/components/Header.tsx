import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2 sm:py-3" 
          : "bg-nutri-beige/90 backdrop-blur-sm py-3 sm:py-4"
      }`}
    >
      <div className="responsive-container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 transition-transform hover:scale-105">
          <img 
            src="/images/logo/nutriscoop_logo.png" 
            alt="NutriScoop Logo" 
            className="h-10 sm:h-12 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.src = '/images/logo/nutriscoop_logo.png';
              console.log('Logo load error, fallback applied');
            }}
          />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold text-nutri-green leading-tight">NutriScoop</span>
            <span className="text-xs text-nutri-orange">Plant-Based Ice Cream</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link 
            to="/" 
            className="text-nutri-green font-medium hover:text-nutri-orange transition-colors relative group py-1"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nutri-orange transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/about" 
            className="text-nutri-green font-medium hover:text-nutri-orange transition-colors relative group py-1"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nutri-orange transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/products" 
            className="text-nutri-green font-medium hover:text-nutri-orange transition-colors relative group py-1"
          >
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nutri-orange transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/contact" 
            className="text-nutri-green font-medium hover:text-nutri-orange transition-colors relative group py-1"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nutri-orange transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-nutri-green">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white/95 backdrop-blur-md border-l border-nutri-green/10">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <img 
                  src="/images/logo/nutriscoop_logo.png" 
                  alt="NutriScoop Logo" 
                  className="h-8 sm:h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/images/logo/nutriscoop_logo.png';
                    console.log('Logo load error (mobile), fallback applied');
                  }}
                />
                <span className="text-lg font-bold text-nutri-green">NutriScoop</span>
              </div>
              <SheetClose asChild>
                <Button variant="ghost" size="icon" className="text-nutri-green">
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </div>
            <nav className="flex flex-col gap-5 mt-8">
              <SheetClose asChild>
                <Link 
                  to="/" 
                  className="text-lg text-nutri-green hover:text-nutri-orange transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link 
                  to="/about" 
                  className="text-lg text-nutri-green hover:text-nutri-orange transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link 
                  to="/products" 
                  className="text-lg text-nutri-green hover:text-nutri-orange transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link 
                  to="/contact" 
                  className="text-lg text-nutri-green hover:text-nutri-orange transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

