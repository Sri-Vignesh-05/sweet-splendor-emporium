import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Star, Eye, ArrowRight, Plus, Minus } from "lucide-react";
import productLadoo from "@/assets/product-ladoo.jpg";
import productMysorePak from "@/assets/product-mysore-pak.jpg";
import productKajuKatli from "@/assets/product-kaju-katli.jpg";
import productSweetBox from "@/assets/product-sweet-box.jpg";
import productMurukku from "@/assets/product-murukku.jpg";
import productPakoda from "@/assets/product-pakoda.jpg";
import productMixture from "@/assets/product-mixture.jpg";
import productBarfi from "@/assets/product-barfi.jpg";
import SectionDivider from "./SectionDivider";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  isNew?: boolean;
  category: "sweets" | "savouries";
}

const products: Product[] = [
  {
    id: 1,
    name: "Besan Ladoo",
    description: "Traditional golden ladoos made with pure ghee and aromatic besan",
    price: 450,
    originalPrice: 550,
    image: productLadoo,
    rating: 4.9,
    reviews: 342,
    badge: "Best Seller",
    category: "sweets",
  },
  {
    id: 2,
    name: "Mysore Pak",
    description: "Authentic Karnataka delicacy with melt-in-mouth texture",
    price: 520,
    image: productMysorePak,
    rating: 4.8,
    reviews: 256,
    isNew: true,
    category: "sweets",
  },
  {
    id: 3,
    name: "Kaju Katli",
    description: "Premium cashew fudge with delicate silver varak finish",
    price: 680,
    originalPrice: 800,
    image: productKajuKatli,
    rating: 4.9,
    reviews: 489,
    badge: "Premium",
    category: "sweets",
  },
  {
    id: 4,
    name: "Festive Gift Box",
    description: "Curated assortment of our finest sweets in premium packaging",
    price: 1299,
    originalPrice: 1599,
    image: productSweetBox,
    rating: 5.0,
    reviews: 178,
    badge: "Gift Pack",
    category: "sweets",
  },
  {
    id: 5,
    name: "Murukku Special",
    description: "Crispy spiral snack made with rice flour and sesame seeds",
    price: 280,
    image: productMurukku,
    rating: 4.8,
    reviews: 215,
    badge: "Popular",
    category: "savouries",
  },
  {
    id: 6,
    name: "Ribbon Pakoda",
    description: "Light and crunchy ribbon-shaped savory with mild spices",
    price: 250,
    image: productPakoda,
    rating: 4.7,
    reviews: 198,
    category: "savouries",
  },
  {
    id: 7,
    name: "Special Mixture",
    description: "Spiced mix of crunchy bits with peanuts and curry leaves",
    price: 320,
    originalPrice: 380,
    image: productMixture,
    rating: 4.8,
    reviews: 312,
    badge: "Best Seller",
    category: "savouries",
  },
  {
    id: 8,
    name: "Mixed Barfi Box",
    description: "Colorful assortment of festive barfis in various flavors",
    price: 580,
    image: productBarfi,
    rating: 4.7,
    reviews: 145,
    isNew: true,
    category: "sweets",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div 
      className="group relative bg-card rounded-2xl overflow-hidden hover-lift-premium border border-gold/15 hover:border-gold/40 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 brightness-105' : 'scale-100'}`}
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Quick Actions */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <button className="w-11 h-11 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-foreground hover:bg-crimson hover:text-white transition-all duration-300 shadow-lg hover:scale-110">
            <Heart className="w-5 h-5" />
          </button>
          <button className="w-11 h-11 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-foreground hover:bg-crimson hover:text-white transition-all duration-300 shadow-lg hover:scale-110">
            <Eye className="w-5 h-5" />
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.badge && (
            <span className="bg-gradient-to-r from-crimson to-crimson-dark text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-bounce-subtle">
              {product.badge}
            </span>
          )}
          {product.isNew && (
            <span className="bg-gradient-to-r from-royal-blue to-royal-blue-light text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              New
            </span>
          )}
          {product.originalPrice && !product.badge && (
            <span className="bg-gradient-to-r from-accent-green to-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        {/* Quick Add Button - Appears on hover */}
        <button className={`absolute bottom-4 left-4 right-4 bg-crimson text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-crimson transition-all duration-300 hover:bg-crimson-dark ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <ShoppingBag className="w-5 h-5" />
          Quick Add
        </button>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-gold fill-gold"
                    : "text-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-bold text-gold-dark">
            {product.rating}
          </span>
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-crimson transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="space-y-4 pt-4 border-t border-gold/15">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold text-crimson">
                ₹{product.price * quantity}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.originalPrice * quantity}
                </span>
              )}
            </div>
            
            {/* Quantity Selector */}
            <div className="flex items-center border-2 border-gold/25 rounded-full bg-background/80 backdrop-blur-sm overflow-hidden">
              <button 
                onClick={handleDecrement}
                className="w-9 h-9 flex items-center justify-center text-foreground hover:bg-crimson hover:text-white transition-all"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center text-sm font-bold text-foreground">
                {quantity}
              </span>
              <button 
                onClick={handleIncrement}
                className="w-9 h-9 flex items-center justify-center text-foreground hover:bg-crimson hover:text-white transition-all"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <Button variant="crimson" className="w-full gap-2 py-6 text-base font-semibold group/btn rounded-xl">
            <ShoppingBag className="w-5 h-5 group-hover/btn:animate-bounce" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-crimson to-gold transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

const FeaturedProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background pattern-kolam relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-crimson/8 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-royal-blue/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <span className="inline-block text-crimson font-semibold tracking-widest uppercase text-sm bg-crimson/8 px-6 py-2 rounded-full border border-crimson/20">
            Our Collection
          </span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-gold-dark">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Discover our most loved sweets and savouries, handpicked from our extensive collection of authentic South Indian delicacies
          </p>
          
          {/* Ornate Divider */}
          <SectionDivider />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-up opacity-0" >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20 space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Button variant="crimson" size="xl" className="group px-10 py-7 text-lg rounded-xl shadow-crimson hover:shadow-xl transition-all duration-300">
              View All Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button variant="premiumOutline" size="xl" className="px-10 py-7 text-lg rounded-xl">
              Browse Categories
            </Button>
          </div>
          
          {/* Enhanced Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-10 pt-10">
            <div className="flex items-center gap-3 text-muted-foreground group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="w-3 h-3 rounded-full bg-gold animate-pulse" />
              </div>
              <span className="font-medium">Free Shipping Above ₹500</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="w-3 h-3 rounded-full bg-gold animate-pulse" />
              </div>
              <span className="font-medium">100% Fresh Guarantee</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="w-3 h-3 rounded-full bg-gold animate-pulse" />
              </div>
              <span className="font-medium">Same Day Dispatch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
