import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";
import heroImage from "@/assets/hero-sweets.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-background pattern-kolam">
      {/* Gradient Overlay for pattern readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50 pointer-events-none" />
      
      {/* Ambient glow effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-crimson/8 rounded-full blur-[80px] pointer-events-none" />

      {/* Top-Left Temple Ornament */}
      <div className="ornament-temple-tl hidden lg:block" style={{ top: '100px', left: '20px' }} />
      
      {/* Bottom-Right Temple Ornament */}
      <div className="ornament-temple-br hidden lg:block" style={{ bottom: '20px', right: '20px' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 relative">
            {/* Tag with animation */}
            <div className="inline-flex items-center gap-2 bg-crimson/8 border border-crimson/25 rounded-full px-5 py-2 shadow-sm animate-slide-up backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-pulse"></span>
              <span className="text-sm font-semibold text-crimson tracking-wide">South India's Favourite Since 1988</span>
            </div>

            {/* Heading with staggered animation */}
            <div className="space-y-3 relative">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.05] animate-slide-up-delay-1">
                Authentic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-shadow-glow">Sweets &</span> <br />
                <span className="text-crimson">Savouries</span>
              </h1>
            </div>

            {/* Description with better typography */}
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-xl mx-auto lg:mx-0 font-body leading-relaxed animate-slide-up-delay-2">
              Experience the taste of tradition with our handcrafted sweets and crispy savouries, made fresh daily with pure ghee and premium ingredients.
            </p>

            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 animate-slide-up-delay-3">
              <Button variant="premium" className="px-10 py-7 text-lg rounded-xl shadow-crimson transition-all duration-300 hover:scale-105 hover:shadow-xl text-white group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Shop Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-crimson-dark to-crimson opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button variant="outline" className="border-2 border-gold text-gold-dark hover:bg-gold/15 px-10 py-7 text-lg rounded-xl font-semibold transition-all duration-300 hover:border-gold-dark backdrop-blur-sm">
                View Categories
              </Button>
            </div>

            {/* Trust Badges - inline for CRO */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 animate-slide-up-delay-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                  <Truck className="w-4 h-4 text-gold-dark" />
                </div>
                <span className="font-medium">Free Delivery ₹500+</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-gold-dark" />
                </div>
                <span className="font-medium">100% Fresh</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-gold-dark" />
                </div>
                <span className="font-medium">Same Day Dispatch</span>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative isolate animate-scale-bounce">
            {/* Main Plate Image */}
            <div className="relative z-10 mx-auto max-w-[520px] lg:max-w-none">
              {/* Enhanced golden glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-gold/25 via-gold/10 to-transparent blur-[100px] rounded-full -z-10 animate-glow" />
              
              <img
                src={heroImage}
                alt="Assortment of authentic South Indian sweets on a golden plate"
                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
              />
              
              {/* Floating Offer Badge - Enhanced */}
              <div className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 bg-gradient-to-br from-crimson to-crimson-dark text-white p-6 md:p-7 rounded-2xl shadow-crimson border-2 border-white/20 animate-float hover-lift-premium cursor-pointer" style={{ animationDelay: "1s" }}>
                <div className="text-center space-y-1.5">
                  <p className="text-3xl md:text-4xl font-bold font-display leading-none">20% OFF</p>
                  <p className="text-sm font-medium opacity-90">on first order</p>
                  <div className="mt-2 pt-2 border-t border-white/20">
                    <p className="text-xs font-bold bg-white/15 py-1.5 px-3 rounded-lg backdrop-blur-sm">Code: FIRST20</p>
                  </div>
                </div>
              </div>

              {/* Total Ordering Badge - Enhanced */}
              <div className="absolute bottom-8 md:bottom-12 -right-2 md:-right-6 bg-white/98 backdrop-blur-md shadow-elegant py-3.5 px-6 rounded-full flex items-center gap-3 border border-gold/25 hover-lift-premium cursor-pointer">
                <div className="relative">
                  <span className="w-3 h-3 bg-green-500 rounded-full block"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full block animate-ping absolute inset-0 opacity-75"></span>
                </div>
                <p className="font-semibold text-foreground text-sm">
                  <span className="font-bold text-lg mr-1 text-crimson">127</span> ordering now
                </p>
              </div>

              {/* Rating Badge - New */}
              <div className="absolute top-6 right-4 bg-white/98 backdrop-blur-md shadow-elegant py-2.5 px-4 rounded-full flex items-center gap-2 border border-gold/25 animate-bounce-subtle">
                <span className="text-gold text-lg">★</span>
                <span className="font-bold text-foreground">4.9</span>
                <span className="text-muted-foreground text-sm">(2k+ reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
