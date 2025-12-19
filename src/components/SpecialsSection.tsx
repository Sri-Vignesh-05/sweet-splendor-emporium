import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Sparkles } from "lucide-react";

const SpecialsSection = () => {
  return (
    <section id="specials" className="py-20 bg-gradient-crimson relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pattern-temple opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gold/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Limited Time Offer</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Festive Gift
              <span className="block text-gold">Collections</span>
            </h2>

            <p className="text-lg text-primary-foreground/80 max-w-lg">
              Celebrate every occasion with our exquisite gift boxes, beautifully packaged in traditional silk-wrapped boxes with brass accents.
            </p>

            {/* Offer Highlights */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center">
                  <Gift className="w-7 h-7 text-gold" />
                </div>
                <div className="text-left">
                  <p className="font-display text-2xl font-bold text-gold">25% OFF</p>
                  <p className="text-sm text-primary-foreground/70">On Gift Boxes</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-gold">₹</span>
                </div>
                <div className="text-left">
                  <p className="font-display text-2xl font-bold text-gold">Free</p>
                  <p className="text-sm text-primary-foreground/70">Shipping above ₹999</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Shop Gift Boxes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl" 
                className="border-gold/50 text-gold hover:bg-gold/10"
              >
                Custom Orders
              </Button>
            </div>

            {/* Countdown Timer */}
            <div className="pt-8">
              <p className="text-sm text-primary-foreground/70 mb-4">Offer ends in:</p>
              <div className="flex justify-center lg:justify-start gap-4">
                {[
                  { value: "02", label: "Days" },
                  { value: "18", label: "Hours" },
                  { value: "45", label: "Mins" },
                  { value: "30", label: "Secs" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gold/20 border border-gold/30 rounded-lg flex items-center justify-center">
                      <span className="font-display text-2xl font-bold text-gold">{item.value}</span>
                    </div>
                    <p className="text-xs text-primary-foreground/60 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-gold/30">
              {/* Gift Box Visual */}
              <div className="aspect-square bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Decorative Patterns */}
                <div className="absolute inset-0 pattern-paisley opacity-30" />
                
                {/* Central Gift Icon */}
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto shadow-gold animate-pulse-gold">
                    <Gift className="w-16 h-16 text-foreground" />
                  </div>
                  <p className="font-display text-2xl font-bold text-primary-foreground mt-6">Royal Collection</p>
                  <p className="text-primary-foreground/70">12 Premium Sweets</p>
                  <div className="mt-4">
                    <span className="font-display text-3xl font-bold text-gold">₹1,499</span>
                    <span className="text-primary-foreground/60 line-through ml-2">₹1,999</span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {["Silk Box", "Brass Accents", "Gift Card", "Free Delivery"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold rounded-full flex items-center justify-center shadow-gold animate-float">
              <div className="text-center">
                <p className="font-display text-lg font-bold text-foreground">25%</p>
                <p className="text-xs text-foreground/80">OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
