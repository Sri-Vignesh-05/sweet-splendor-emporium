import { Clock, Truck, Shield, Award, Sparkles } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Est. 1988",
      subtitle: "35+ Years Legacy",
      color: "text-crimson",
      bgColor: "bg-crimson/10",
    },
    {
      icon: Truck,
      title: "Free Delivery",
      subtitle: "Above ₹500",
      color: "text-royal-blue",
      bgColor: "bg-royal-blue/10",
    },
    {
      icon: Shield,
      title: "100% Fresh",
      subtitle: "Made Daily",
      color: "text-accent-green",
      bgColor: "bg-accent-green/10",
    },
    {
      icon: Award,
      title: "FSSAI Certified",
      subtitle: "Quality Assured",
      color: "text-gold-dark",
      bgColor: "bg-gold/15",
    },
  ];

  return (
    <section className="relative -mt-8 z-20 mb-16">
      <div className="container mx-auto px-4">
        <div className="bg-white/98 backdrop-blur-xl rounded-3xl shadow-elegant border border-gold/20 p-8 md:p-10 gradient-border">
          {/* Mobile: Manual Scroll, Desktop: Grid */}
          <div className="flex lg:grid lg:grid-cols-4 gap-8 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 snap-x scrollbar-none">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative flex items-center justify-start lg:justify-center gap-5 group min-w-[260px] lg:min-w-0 snap-start pl-2 lg:pl-0 cursor-pointer hover-lift-premium rounded-xl p-3 -m-3"
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-current/10 shrink-0`}>
                  <feature.icon className={`w-7 h-7 ${feature.color} transition-colors`} />
                </div>
                <div className="text-left whitespace-nowrap lg:whitespace-normal">
                  <h3 className="font-display font-bold text-lg text-foreground leading-tight group-hover:text-crimson transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {feature.subtitle}
                  </p>
                </div>
                
                {/* Divider for desktop */}
                {index !== features.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
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
