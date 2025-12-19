import { Truck, Shield, Award, Clock, Gift, Leaf } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Made with 100% pure ghee and finest ingredients sourced directly from farms",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description: "Express shipping to all major cities with temperature-controlled packaging",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "All sweets are prepared fresh every morning by our expert halwais",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "FSSAI certified with strict quality control at every step",
  },
  {
    icon: Gift,
    title: "Gift Packaging",
    description: "Elegant traditional gift boxes perfect for festivals and celebrations",
  },
  {
    icon: Leaf,
    title: "Pure Vegetarian",
    description: "100% vegetarian with no artificial colors or preservatives",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background pattern-traditional relative overflow-hidden">
      {/* Top Border Pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-gold" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-medium tracking-widest uppercase text-sm">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            The <span className="text-gradient-gold">Sweet Splendor</span> Promise
          </h2>
          <p className="text-muted-foreground text-lg mt-6">
            We blend tradition with excellence to bring you the finest South Indian sweets
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/10 hover:border-gold/30 transition-all duration-300 hover-lift text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Line */}
              <div className="w-12 h-0.5 bg-gradient-gold mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-gold" />
    </section>
  );
};

export default FeaturesSection;
