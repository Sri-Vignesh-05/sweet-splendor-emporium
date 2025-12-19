import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Sparkles } from "lucide-react";

const SpecialsSection = () => {
  return (
    <section id="specials" className="py-8 bg-gradient-crimson relative overflow-hidden text-center lg:text-left">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pattern-temple opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Content: Heading & CTA */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-3 py-1">
                  <Sparkles className="w-3 h-3 text-gold" />
                  <span className="text-xs font-medium text-gold">Limited Time Offer</span>
                </div>
              </div>
              <h2 className="font-display text-3xl font-bold text-primary-foreground leading-none">
                Festive <span className="text-gold">Gift Boxes</span>
              </h2>
              <p className="text-primary-foreground/80 mt-1 text-sm">Save 25% on all premium sweet collections.</p>
            </div>

            {/* CTA Button */}
            <Button variant="hero" size="lg" className="group shrink-0">
               Shop Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content: Timer */}
          <div className="flex items-center gap-4 bg-background/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-gold/20">
            <p className="text-xs font-bold text-gold uppercase tracking-widest hidden md:block">Ends In:</p>
            <div className="flex gap-3">
              {[
                { value: "02", label: "D" },
                { value: "18", label: "H" },
                { value: "45", label: "M" },
                { value: "30", label: "S" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 bg-gold/20 border border-gold/30 rounded-lg flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-gold">{item.value}</span>
                  </div>
                  <p className="text-[10px] text-primary-foreground/60 mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
