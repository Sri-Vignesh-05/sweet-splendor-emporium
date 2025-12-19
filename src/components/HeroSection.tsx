import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Truck, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-sweets.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-hero pattern-kolam pattern-temple">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-32 left-10 w-40 h-40 bg-crimson/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-royal-blue/5 rounded-full blur-2xl" />
      </div>

      {/* Traditional Border Pattern - Top */}
      <div className="absolute top-24 left-0 right-0 h-2 bg-gradient-crimson opacity-80" />
      <div className="absolute top-[6.5rem] left-0 right-0 h-1 bg-gradient-gold opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-crimson/10 border-2 border-crimson/30 rounded-full px-5 py-2.5">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <span className="text-sm font-semibold text-crimson-dark uppercase tracking-wide">Authentic South Indian Taste</span>
            </div>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                A Legacy of
                <span className="block text-gradient-crimson mt-2">Sweet Excellence</span>
              </h1>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-24 h-1 bg-gradient-gold rounded-full" />
                <div className="w-3 h-3 rotate-45 bg-crimson" />
                <div className="w-12 h-1 bg-gradient-gold rounded-full opacity-50" />
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-body leading-relaxed">
              Experience the rich heritage of South Indian sweets and savouries, handcrafted with love using time-honored recipes passed down through generations.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>Since 1988</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold" />
                <span>100% Pure Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-gold" />
                <span>Fresh Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="crimson" size="xl" className="group">
                Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                View Menu
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full bg-gradient-gold border-3 border-cream-light flex items-center justify-center text-sm font-bold text-foreground shadow-gold"
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
                  <span className="font-bold text-foreground">4.9/5</span> from 5,000+ happy customers
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border-2 border-crimson/40 rounded-3xl transform rotate-3" />
            <div className="absolute -inset-4 border-2 border-gold/30 rounded-3xl transform -rotate-3" />
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-elegant border-4 border-gold/40">
              <img
                src={heroImage}
                alt="Authentic South Indian Sweets Assortment from Adyar Ananda Bhavan"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              
              {/* Logo Badge */}
              <div className="absolute top-6 left-6 bg-cream-light/95 backdrop-blur-sm rounded-xl p-3 shadow-elegant border border-gold/30">
                <img src={logo} alt="A2B" className="h-10 w-auto" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-cream-light/95 backdrop-blur-sm rounded-xl p-5 shadow-elegant border border-gold/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-xl font-bold text-foreground">Festive Special Box</p>
                    <p className="text-sm text-muted-foreground">Limited Edition Collection</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-display font-bold text-crimson">₹999</p>
                    <p className="text-sm text-muted-foreground line-through">₹1,499</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Discount Badge */}
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-crimson rounded-full flex items-center justify-center shadow-crimson animate-float border-4 border-gold/50">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-cream-light">30%</p>
                <p className="text-xs font-bold text-cream-light/90 uppercase tracking-wide">OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
