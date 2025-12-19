import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import categorySweets from "@/assets/category-sweets.jpg";
import categorySavouries from "@/assets/category-savouries.jpg";

interface Category {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  itemCount: number;
  href: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Traditional Sweets",
    tagline: "Handcrafted with Love",
    description: "Authentic South Indian sweets made with pure ghee, premium nuts, and time-honored recipes passed down through generations.",
    image: categorySweets,
    itemCount: 45,
    href: "#sweets",
  },
  {
    id: 2,
    name: "Crispy Savouries",
    tagline: "Perfectly Spiced",
    description: "Crunchy, flavorful snacks crafted with the finest ingredients and traditional Tamil Nadu recipes for an unforgettable taste.",
    image: categorySavouries,
    itemCount: 32,
    href: "#savouries",
  },
  {
    id: 3,
    name: "Gift Boxes",
    tagline: "Share the Joy",
    description: "Elegant, customizable gift boxes filled with our finest sweets and savouries, perfect for festivals, weddings, and special celebrations.",
    image: categorySweets, // Using sweets image as placeholder for now
    itemCount: 12,
    href: "#gifts",
  },
];

const CategoryCard = ({ category, index }: { category: Category; index: number }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`group relative flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 items-center`}
    >
      {/* Image */}
      <div className="relative w-full lg:w-1/2 overflow-hidden rounded-2xl border-crimson shadow-elegant">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
        
        {/* Item Count Badge */}
        <div className="absolute top-6 left-6 bg-gradient-gold text-foreground px-4 py-2 rounded-full shadow-gold">
          <span className="font-semibold">{category.itemCount}+ Items</span>
        </div>

        {/* Corner Decoration */}
        <div className="absolute bottom-0 right-0 w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
            <path d="M100 0 L100 100 L0 100 Q50 50 100 0" fill="hsl(43 85% 50%)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className={`w-full lg:w-1/2 ${isReversed ? "lg:pr-8" : "lg:pl-8"} space-y-6`}>
        {/* Tagline */}
        <span className="inline-block text-crimson font-medium tracking-widest uppercase text-sm border-b-2 border-crimson/30 pb-1">
          {category.tagline}
        </span>
        
        {/* Title */}
        <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
          {category.name}
        </h3>
        
        {/* Decorative Line */}
        <div className="flex items-center gap-4">
          <div className="h-1 w-20 bg-gradient-gold rounded-full" />
          <div className="w-3 h-3 rounded-full bg-crimson" />
          <div className="h-1 w-10 bg-gradient-gold rounded-full opacity-50" />
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground text-lg leading-relaxed">
          {category.description}
        </p>
        
        {/* CTA */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Button variant="crimson" size="lg" className="group/btn">
            Explore {category.name.split(" ")[1]}
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
          <Button variant="heroOutline" size="lg">
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-12 bg-background pattern-kolam relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-crimson/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            <span className="underline-crimson">Shop by Category</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-8 max-w-2xl mx-auto">
            From melt-in-your-mouth sweets to perfectly crispy savouries, discover the authentic taste of South India
          </p>
          
          {/* Ornate Divider */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-3 h-3 rotate-45 bg-crimson" />
            <div className="w-4 h-4 rounded-full border-2 border-gold" />
            <div className="w-3 h-3 rotate-45 bg-crimson" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-24">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
