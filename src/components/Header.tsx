import { ShoppingBag, Menu, X, Search, User, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Sweets", href: "#sweets" },
    { name: "Savouries", href: "#savouries" },
    { name: "Specials", href: "#specials" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-light/95 backdrop-blur-md border-b-2 border-crimson/20">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-gold" />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src={logo} 
                alt="Adyar Ananda Bhavan - Sweets & Snacks" 
                className="h-14 md:h-16 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm font-medium text-foreground/80 hover:text-crimson transition-colors relative group uppercase tracking-wide"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-crimson transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center justify-center w-10 h-10 text-foreground/70 hover:text-crimson transition-colors rounded-full hover:bg-crimson/10">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:flex items-center justify-center w-10 h-10 text-foreground/70 hover:text-crimson transition-colors rounded-full hover:bg-crimson/10">
              <Heart className="w-5 h-5" />
            </button>
            <button className="hidden md:flex items-center justify-center w-10 h-10 text-foreground/70 hover:text-crimson transition-colors rounded-full hover:bg-crimson/10">
              <User className="w-5 h-5" />
            </button>
            <Button variant="crimson" size="sm" className="hidden md:flex gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Cart (0)</span>
            </Button>
            
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
          <div className="lg:hidden py-6 border-t border-crimson/20 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-base font-medium text-foreground/80 hover:text-crimson transition-colors py-2 uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="crimson" className="mt-4 w-full">
                <ShoppingBag className="w-4 h-4" />
                <span>View Cart (0)</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
      
      {/* Bottom decorative border */}
      <div className="h-0.5 bg-gradient-gold opacity-50" />
    </header>
  );
};

export default Header;
