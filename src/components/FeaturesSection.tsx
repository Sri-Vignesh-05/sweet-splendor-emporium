import { Clock, Truck, Shield, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Est. 1988",
      subtitle: "35+ Years Legacy",
    },
    {
      icon: Truck,
      title: "Free Delivery",
      subtitle: "Above ₹500",
    },
    {
      icon: Shield,
      title: "100% Fresh",
      subtitle: "Made Daily",
    },
    {
      icon: Award,
      title: "Quality Assured",
      subtitle: "FSSAI Certified",
    },
  ];

  return (
    <section className="relative -mt-10 z-20 mb-12">
      <div className="container mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-elegant border border-gold/20 p-6 md:p-8">
          {/* Mobile: Manual Scroll, Desktop: Grid */}
          <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 snap-x scrollbar-none">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative flex items-center justify-start lg:justify-center gap-4 group min-w-[240px] lg:min-w-0 snap-start pl-2 lg:pl-0"
              >
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors border border-gold/30 shrink-0">
                  <feature.icon className="w-6 h-6 text-foreground/80 group-hover:text-crimson transition-colors" />
                </div>
                <div className="text-left whitespace-nowrap lg:whitespace-normal">
                  <h3 className="font-display font-bold text-lg text-foreground leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.subtitle}
                  </p>
                </div>
                
                {/* Divider for desktop */}
                {index !== features.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-gold/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
