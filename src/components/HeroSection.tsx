import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-sweets.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-12 overflow-hidden bg-background pattern-kolam">
      {/* Gradient Overlay for pattern readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50 pointer-events-none" />

      {/* Top-Left Temple Ornament - positioned in corner with spacing from all content */}
      <div className="ornament-temple-tl hidden lg:block" style={{ top: '100px', left: '20px' }} />
      
      {/* Bottom-Right Temple Ornament - positioned in corner with spacing from all content */}
      <div className="ornament-temple-br hidden lg:block" style={{ bottom: '20px', right: '20px' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in relative">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-crimson/5 border border-crimson/20 rounded-full px-4 py-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-crimson"></span>
              <span className="text-sm font-semibold text-crimson tracking-wide">South India's Favourite Since 1988</span>
            </div>

            {/* Heading */}
            <div className="space-y-2 relative">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
                Authentic <br />
                <span className="text-specials-gold text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-gold">Sweets &</span> <br />
                <span className="text-crimson">Savouries</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-xl mx-auto lg:mx-0 font-body leading-relaxed">
              Experience the taste of tradition with our handcrafted sweets and crispy savouries, made fresh daily.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="premium" className="px-8 py-6 text-lg rounded-lg shadow-royal transition-all hover:scale-105 text-white">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-gold text-gold-dark hover:bg-gold/10 px-8 py-6 text-lg rounded-lg font-semibold transition-all">
                View Categories
              </Button>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative isolate">
             {/* Main Plate Image */}
            <div className="relative z-10 mx-auto max-w-[500px] lg:max-w-none">
               {/* Golden glow effect behind plate */}
               <div className="absolute inset-0 bg-gold/20 blur-[80px] rounded-full -z-10" />
               
               <img
                src={heroImage}
                alt="Assortment of authentic South Indian sweets on a golden plate"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
              
              {/* Floating Offer Badge */}
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-crimson text-white p-6 rounded-2xl shadow-crimson border-2 border-white/20 animate-float" style={{ animationDelay: "1s" }}>
                 <div className="text-center space-y-1">
                   <p className="text-3xl font-bold font-display leading-none">20% OFF</p>
                   <p className="text-sm font-medium opacity-90">on first order</p>
                   <div className="mt-2 pt-2 border-t border-white/20">
                     <p className="text-xs font-bold bg-white/10 py-1 px-2 rounded">Code: FIRST20</p>
                   </div>
                 </div>
              </div>

              {/* Total Ordering Badge */}
              <div className="absolute bottom-10 -right-4 bg-white/95 backdrop-blur shadow-elegant py-3 px-5 rounded-full flex items-center gap-3 animate-pulse-crimson border border-gold/20">
                 <div className="relative">
                   <span className="w-3 h-3 bg-green-500 rounded-full block"></span>
                   <span className="w-3 h-3 bg-green-500 rounded-full block animate-ping absolute inset-0 opacity-75"></span>
                 </div>
                 <p className="font-semibold text-foreground text-sm">
                   <span className="font-bold text-lg mr-1">127</span> ordering
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
