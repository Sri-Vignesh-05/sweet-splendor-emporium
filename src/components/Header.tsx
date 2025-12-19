import { ShoppingBag, Menu, X, Search, User, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Sweets", href: "#products" },
    { name: "Specials", href: "#specials" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
              <span className="font-display text-2xl font-bold text-foreground">S</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold text-foreground">Sweet Splendor</h1>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">Since 1965</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center justify-center w-10 h-10 text-foreground/70 hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:flex items-center justify-center w-10 h-10 text-foreground/70 hover:text-primary transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="hidden md:flex items-center justify-center w-10 h-10 text-foreground/70 hover:text-primary transition-colors">
              <User className="w-5 h-5" />
            </button>
            <Button variant="hero" size="sm" className="hidden md:flex gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Cart (0)</span>
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gold/20 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" className="mt-4 w-full">
                <ShoppingBag className="w-4 h-4" />
                <span>View Cart (0)</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
