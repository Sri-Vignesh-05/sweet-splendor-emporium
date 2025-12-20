import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Raghavan",
    location: "Chennai",
    rating: 5,
    text: "The Mysore Pak reminded me of my grandmother's recipe. Absolutely authentic and delicious! The packaging was beautiful too.",
    avatar: "PR",
  },
  {
    id: 2,
    name: "Karthik Nair",
    location: "Bangalore",
    rating: 5,
    text: "Ordered the festive gift box for Diwali. My family was impressed by both the taste and presentation. Will definitely order again!",
    avatar: "KN",
  },
  {
    id: 3,
    name: "Lakshmi Iyer",
    location: "Mumbai",
    rating: 5,
    text: "Best Kaju Katli I've had outside of South India. The quality is exceptional and delivery was super fast. Highly recommended!",
    avatar: "LI",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + testimonials.length) % testimonials.length);
    
    // Determine position: 0 = center, 1 = right, 2 (or -1) = left
    let position = normalizedDiff;
    if (normalizedDiff === 2) position = -1; // Make it appear on the left
    
    if (position === 0) {
      // Center card - fully visible
      return {
        transform: "translateX(0) scale(1) rotateY(0deg)",
        zIndex: 30,
        opacity: 1,
        filter: "blur(0px)",
      };
    } else if (position === 1) {
      // Right card - behind and blurred
      return {
        transform: "translateX(60%) scale(0.85) rotateY(-15deg)",
        zIndex: 20,
        opacity: 0.6,
        filter: "blur(3px)",
      };
    } else {
      // Left card - behind and blurred
      return {
        transform: "translateX(-60%) scale(0.85) rotateY(15deg)",
        zIndex: 20,
        opacity: 0.6,
        filter: "blur(3px)",
      };
    }
  };

  return (
    <section className="py-24 bg-gradient-cream pattern-kolam relative overflow-hidden">
      {/* Ambient Effects */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gold/15 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-crimson/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-5">
          <span className="inline-block text-gold-dark font-semibold tracking-widest uppercase text-sm bg-gold/15 px-6 py-2 rounded-full border border-gold/25">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-gold-dark">Customers</span> Say
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-6 leading-relaxed">
            Join thousands of happy customers who have experienced our authentic sweets
          </p>
          {/* Ornate Divider */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gold to-gold-dark shadow-gold" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        {/* 3D Carousel */}
        <div className="relative flex items-center justify-center h-[480px] perspective-1000">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-10 z-40 w-14 h-14 bg-white/95 backdrop-blur-md rounded-full shadow-elegant border-2 border-gold/25 flex items-center justify-center hover:bg-crimson hover:border-crimson hover:text-white transition-all duration-300 hover:scale-110 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-7 h-7 text-crimson group-hover:text-white transition-colors" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-10 z-40 w-14 h-14 bg-white/95 backdrop-blur-md rounded-full shadow-elegant border-2 border-gold/25 flex items-center justify-center hover:bg-crimson hover:border-crimson hover:text-white transition-all duration-300 hover:scale-110 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-7 h-7 text-crimson group-hover:text-white transition-colors" />
          </button>

          {/* Cards Container */}
          <div className="relative w-full max-w-xl h-full flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="absolute w-full max-w-md transition-all duration-700 ease-out cursor-pointer"
                style={getCardStyle(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="bg-card/98 backdrop-blur-xl rounded-3xl p-10 shadow-elegant border-2 border-gold/20 relative hover:border-gold/40 transition-colors">
                  {/* Quote Icon */}
                  <div className="absolute -top-5 left-10 w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center shadow-gold rotate-3">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-5 pt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-gold fill-gold drop-shadow-sm" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-foreground/85 text-lg leading-relaxed mb-8 italic font-medium">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-5 pt-5 border-t border-gold/15">
                    <div className="w-14 h-14 bg-gradient-to-br from-crimson to-crimson-dark rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-crimson">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-display font-bold text-lg text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-4 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "bg-gradient-to-r from-crimson to-crimson-dark w-10 shadow-crimson"
                  : "bg-gold/30 w-3 hover:bg-gold/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-20 bg-white/98 backdrop-blur-xl rounded-3xl shadow-elegant border-2 border-gold/20 p-10 md:p-12 gradient-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: "35+", label: "Years of Legacy", icon: "🏆" },
              { value: "2M+", label: "Happy Customers", icon: "❤️" },
              { value: "100+", label: "Sweet Varieties", icon: "🍬" },
              { value: "4.9", label: "Average Rating", icon: "⭐" },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                <p className="font-display text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-crimson via-gold-dark to-crimson">{stat.value}</p>
                <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
