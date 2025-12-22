import { ShoppingBag, Menu, X, Search, User, Phone, MapPin, Truck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Sweets", href: "#sweets" },
    { name: "Savouries", href: "#savouries" },
    { name: "Festival Specials", href: "#specials" },
    { name: "Gift Boxes", href: "#gifts" },
    { name: "Bulk Orders", href: "#bulk" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Temple-style Red Bar */}
      <div className="bg-gradient-to-r from-crimson-dark via-crimson to-crimson-dark text-white py-2.5 px-4 shadow-crimson">
        <div className="container mx-auto flex justify-between items-center text-xs md:text-sm font-semibold">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>044-4233-3333</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>150+ Stores</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            <span>Free Delivery ₹500+</span>
          </div>
        </div>
        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>

      {/* Main Header with Grand Styling */}
      <header className="sticky top-0 bg-background/85 backdrop-blur-lg border-b-2 border-gold/30 shadow-elegant transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-22">
            {/* Logo with enhanced styling */}
            <div className="flex items-center">
              <a href="#" className="flex items-center group relative">
                <img 
                  src={logo} 
                  alt="Adyar Ananda Bhavan - Sweets & Snacks" 
                  className="h-16 md:h-18 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Logo glow on hover */}
                <div className="absolute inset-0 bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-display text-base font-bold text-foreground hover:text-crimson transition-colors relative group tracking-wide"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-crimson transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center justify-center w-10 h-10 text-foreground/70 hover:text-crimson transition-colors rounded-full hover:bg-crimson/10">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden md:flex items-center justify-center w-10 h-10 text-foreground/70 hover:text-crimson transition-colors rounded-full hover:bg-crimson/10">
                <User className="w-5 h-5" />
              </button>
              <div className="relative">
                <Button variant="ghost" size="icon" className="hidden md:flex text-foreground/70 hover:text-crimson hover:bg-crimson/10 rounded-full w-10 h-10">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute top-0 right-0 w-4 h-4 bg-crimson text-white text-[10px] font-bold flex items-center justify-center rounded-full">3</span>
                </Button>
              </div>
              
              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 text-foreground rounded-full hover:bg-crimson/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-crimson/20 animate-fade-in bg-cream-light">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-display text-lg font-medium text-foreground/80 hover:text-crimson transition-colors py-2 px-4 rounded-lg hover:bg-crimson/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="px-4 mt-4 space-y-3 border-t border-crimson/10 pt-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>044-4233-3333</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Store Locator</span>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
