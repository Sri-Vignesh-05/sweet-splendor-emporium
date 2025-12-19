import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-sweets.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden pattern-kolam pattern-temple">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gold/5 rounded-full blur-2xl" />
      </div>

      {/* Traditional Border Pattern - Top */}
      <div className="absolute top-20 left-0 right-0 h-8 bg-gradient-gold opacity-20" 
        style={{
          maskImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='8' viewBox='0 0 40 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 8 L10 0 L20 8 L30 0 L40 8' fill='none' stroke='currentColor' stroke-width='2'/%3E%3C/svg%3E\")",
          maskRepeat: "repeat-x",
          WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='8' viewBox='0 0 40 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 8 L10 0 L20 8 L30 0 L40 8' fill='none' stroke='currentColor' stroke-width='2'/%3E%3C/svg%3E\")",
          WebkitMaskRepeat: "repeat-x"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-sm font-medium text-gold-dark">Authentic South Indian Sweets</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                A Legacy of
                <span className="block text-gradient-gold">Sweet Traditions</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-gold mx-auto lg:mx-0 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-body leading-relaxed">
              Experience the rich heritage of South Indian sweets, handcrafted with love using time-honored recipes passed down through generations.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span>50+ Years of Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span>100% Pure Ghee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span>Same Day Fresh</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="premium" size="xl" className="group">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                View Collections
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-gold border-2 border-background flex items-center justify-center text-xs font-bold text-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">4.9/5</span> from 2,000+ happy customers
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border-2 border-gold/30 rounded-3xl transform rotate-3" />
            <div className="absolute -inset-4 border-2 border-gold/20 rounded-3xl transform -rotate-3" />
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-elegant border-ornate">
              <img
                src={heroImage}
                alt="Authentic South Indian Sweets Assortment"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-elegant border border-gold/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg font-semibold text-foreground">Festive Special Box</p>
                    <p className="text-sm text-muted-foreground">Limited Edition Collection</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-display font-bold text-primary">₹999</p>
                    <p className="text-xs text-muted-foreground line-through">₹1,499</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold animate-float">
              <div className="text-center">
                <p className="font-display text-xl font-bold text-foreground">30%</p>
                <p className="text-xs font-medium text-foreground/80">OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
