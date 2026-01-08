import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-sweets.jpg";
import TraditionalUnderline from "./TraditionalUnderline";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen lg:min-h-[90vh] flex items-center pt-24 md:pt-32 pb-8 md:pb-16 overflow-hidden bg-cream-light pattern-kolam">
      {/* Grand Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-cream-light via-cream-light/95 to-cream-light/50 pointer-events-none" />
      
      {/* Temple-style top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-gold" />

      {/* Top-Left Temple Ornament */}
      <div className="ornament-temple-tl hidden lg:block" style={{ top: '120px', left: '30px' }} />
      
      {/* Bottom-Right Temple Ornament */}
      <div className="ornament-temple-br hidden lg:block" style={{ bottom: '30px', right: '30px' }} />

      {/* Enhanced decorative corner accents */}
      <div className="absolute top-32 right-20 w-48 h-48 bg-gold/20 rounded-full blur-[100px] hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-saffron/15 rounded-full blur-[100px] hidden lg:block" />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-crimson/10 rounded-full blur-[80px] hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-5 md:space-y-8 animate-fade-in relative order-2 lg:order-1">
            {/* Premium Tag with temple styling */}
            <div className="inline-flex items-center gap-2 md:gap-3 bg-crimson/10 border-2 border-crimson/40 rounded-full px-4 md:px-6 py-2 md:py-2.5 shadow-sm backdrop-blur-sm">
              <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-crimson animate-pulse"></span>
              <span className="text-xs md:text-sm font-bold text-crimson tracking-wider uppercase">South India's Favourite Since 1988</span>
            </div>

            {/* Grand Heading with ornate styling */}
            <div className="space-y-2 md:space-y-3 relative">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-ornate">
                <span className="block text-royal-blue">Authentic</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-gold-dark">
                  Sweets &
                </span>
                <span className="block text-crimson">Savouries</span>
              </h1>
              
              {/* Traditional Decorative underline */}
              <TraditionalUnderline size="md" className="justify-center lg:justify-start pt-2 md:pt-4 lg:hidden" />
              <TraditionalUnderline size="lg" className="justify-center lg:justify-start pt-4 hidden lg:flex" />
            </div>

            {/* Description with refined typography */}
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground/90 max-w-xl mx-auto lg:mx-0 font-body leading-relaxed">
              Experience the taste of tradition with our handcrafted sweets and crispy savouries, made fresh daily with pure ingredients.
            </p>

            {/* CTA Buttons - compact and aligned */}
            <div className="flex flex-row gap-3 justify-center lg:justify-start pt-2 md:pt-4">
              <Button variant="premium" className="px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-lg shadow-crimson transition-all hover:scale-105 text-white relative overflow-hidden group border border-crimson-dark/30">
                <span className="relative z-10 flex items-center justify-center font-semibold">
                  Shop Now
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="outline" className="border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-lg font-semibold transition-all">
                View Categories
              </Button>
            </div>
          </div>

          {/* Hero Image Section with grand styling */}
          <div className="relative isolate order-1 lg:order-2 w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto">
            {/* Main Plate Image with ornate frame */}
            <div className="relative z-10">
              {/* Multiple glow layers for depth */}
              <div className="absolute inset-0 bg-gold/25 blur-[60px] md:blur-[100px] rounded-full -z-10" />
              <div className="absolute inset-10 bg-crimson/10 blur-[40px] md:blur-[60px] rounded-full -z-10" />
              
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-gold/20 rounded-full hidden lg:block" />
              <div className="absolute -inset-8 border border-gold/10 rounded-full hidden lg:block" />
              
              <img
                src={heroImage}
                alt="Assortment of authentic South Indian sweets on a golden plate"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
              
              {/* Premium Offer Badge - repositioned for mobile */}
              <div className="absolute -bottom-3 left-2 sm:left-4 md:top-1/2 md:-left-6 md:-translate-y-1/2 md:bottom-auto bg-gradient-to-br from-crimson to-crimson-dark text-white p-2.5 sm:p-3 md:p-5 rounded-lg md:rounded-xl shadow-crimson border-2 border-white/20 animate-float z-20" style={{ animationDelay: "1s" }}>
                <div className="text-center space-y-0.5">
                  <p className="text-lg sm:text-xl md:text-3xl font-bold font-display leading-none">20%</p>
                  <p className="text-[10px] sm:text-xs md:text-base font-semibold">OFF</p>
                  <p className="text-[8px] sm:text-[9px] md:text-xs font-medium opacity-90 hidden sm:block">on first order</p>
                  <div className="mt-1 sm:mt-1.5 md:mt-2 pt-1 sm:pt-1.5 border-t border-white/20">
                    <p className="text-[8px] sm:text-[9px] md:text-[11px] font-bold bg-white/15 py-0.5 sm:py-1 px-1.5 sm:px-2 rounded-full">FIRST20</p>
                  </div>
                </div>
              </div>

              {/* Live Orders Badge - repositioned for mobile */}
              <div className="absolute -bottom-3 right-2 sm:right-4 md:bottom-12 md:-right-4 bg-white/95 backdrop-blur-md shadow-elegant py-1.5 sm:py-2 md:py-3 px-2.5 sm:px-3 md:px-5 rounded-full flex items-center gap-1.5 sm:gap-2 animate-pulse-crimson border-2 border-gold/30 z-20">
                <div className="relative">
                  <span className="w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 bg-green-500 rounded-full block"></span>
                  <span className="w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 bg-green-500 rounded-full block animate-ping absolute inset-0 opacity-75"></span>
                </div>
                <p className="font-semibold text-foreground text-[9px] sm:text-[10px] md:text-sm whitespace-nowrap">
                  <span className="font-bold text-xs sm:text-sm md:text-lg mr-0.5 sm:mr-1 text-crimson">127</span> ordering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
};

export default HeroSection;
