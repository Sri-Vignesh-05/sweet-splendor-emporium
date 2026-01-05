import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import TraditionalUnderline from "./TraditionalUnderline";

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
      {/* Golden Ornamental Corners */}
      <div className="absolute top-0 left-0 w-28 h-28 md:w-40 md:h-40 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-50">
          <defs>
            <linearGradient id="testCornerGold1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(42 95% 52%)" />
              <stop offset="50%" stopColor="hsl(38 90% 45%)" />
              <stop offset="100%" stopColor="hsl(42 95% 52%)" />
            </linearGradient>
          </defs>
          <path d="M0 0 L35 0 C30 4 26 9 22 17 C18 25 13 30 0 35 Z" fill="url(#testCornerGold1)" />
          <circle cx="10" cy="10" r="2" fill="hsl(42 95% 52%)" />
          <circle cx="6" cy="17" r="1.2" fill="hsl(38 90% 45%)" />
          <circle cx="17" cy="6" r="1.2" fill="hsl(38 90% 45%)" />
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-28 h-28 md:w-40 md:h-40 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-50 transform scale-x-[-1]">
          <defs>
            <linearGradient id="testCornerGold2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(42 95% 52%)" />
              <stop offset="50%" stopColor="hsl(38 90% 45%)" />
              <stop offset="100%" stopColor="hsl(42 95% 52%)" />
            </linearGradient>
          </defs>
          <path d="M0 0 L35 0 C30 4 26 9 22 17 C18 25 13 30 0 35 Z" fill="url(#testCornerGold2)" />
          <circle cx="10" cy="10" r="2" fill="hsl(42 95% 52%)" />
          <circle cx="6" cy="17" r="1.2" fill="hsl(38 90% 45%)" />
          <circle cx="17" cy="6" r="1.2" fill="hsl(38 90% 45%)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-28 h-28 md:w-40 md:h-40 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-50 transform scale-y-[-1]">
          <defs>
            <linearGradient id="testCornerGold3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(42 95% 52%)" />
              <stop offset="50%" stopColor="hsl(38 90% 45%)" />
              <stop offset="100%" stopColor="hsl(42 95% 52%)" />
            </linearGradient>
          </defs>
          <path d="M0 0 L35 0 C30 4 26 9 22 17 C18 25 13 30 0 35 Z" fill="url(#testCornerGold3)" />
          <circle cx="10" cy="10" r="2" fill="hsl(42 95% 52%)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-28 h-28 md:w-40 md:h-40 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-50 transform scale-[-1]">
          <defs>
            <linearGradient id="testCornerGold4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(42 95% 52%)" />
              <stop offset="50%" stopColor="hsl(38 90% 45%)" />
              <stop offset="100%" stopColor="hsl(42 95% 52%)" />
            </linearGradient>
          </defs>
          <path d="M0 0 L35 0 C30 4 26 9 22 17 C18 25 13 30 0 35 Z" fill="url(#testCornerGold4)" />
          <circle cx="10" cy="10" r="2" fill="hsl(42 95% 52%)" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-gold">Customers</span> Say
          </h2>
          
          {/* Traditional Decorative underline */}
          <TraditionalUnderline size="lg" className="pt-4" />
          
          <p className="text-muted-foreground text-lg mt-6">
            Join thousands of happy customers who have experienced our authentic sweets
          </p>
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
