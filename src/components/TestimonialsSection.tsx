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
    <section className="py-20 bg-gradient-cream pattern-kolam relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-gold">Customers</span> Say
          </h2>
          <p className="text-muted-foreground text-lg mt-6">
            Join thousands of happy customers who have experienced our authentic sweets
          </p>
          {/* Ornate Divider */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-3 h-3 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        {/* 3D Carousel */}
        <div className="relative flex items-center justify-center h-[450px] perspective-1000">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-12 z-40 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-elegant border border-gold/20 flex items-center justify-center hover:bg-gold/10 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-crimson" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-12 z-40 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-elegant border border-gold/20 flex items-center justify-center hover:bg-gold/10 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-crimson" />
          </button>

          {/* Cards Container */}
          <div className="relative w-full max-w-lg h-full flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="absolute w-full max-w-md transition-all duration-500 ease-out cursor-pointer"
                style={getCardStyle(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="bg-card rounded-2xl p-8 shadow-card border border-gold/20 relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                    <Quote className="w-5 h-5 text-foreground" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4 pt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-foreground/80 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gold/10">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-foreground font-semibold shadow-gold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-crimson w-8"
                  : "bg-gold/40 hover:bg-gold/60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 bg-white/95 backdrop-blur-md rounded-2xl shadow-elegant border border-gold/20 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Years of Legacy" },
              { value: "2M+", label: "Happy Customers" },
              { value: "100+", label: "Sweet Varieties" },
              { value: "4.9", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">{stat.value}</p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
