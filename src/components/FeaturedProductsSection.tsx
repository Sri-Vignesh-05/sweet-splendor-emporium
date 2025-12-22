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
import TraditionalUnderline from "./TraditionalUnderline";

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

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="group relative bg-card card-premium rounded-2xl overflow-hidden hover-lift">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
          <button className="w-10 h-10 bg-cream-light/95 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-crimson hover:text-cream-light transition-colors shadow-elegant">
            <Heart className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-cream-light/95 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-crimson hover:text-cream-light transition-colors shadow-elegant">
            <Eye className="w-5 h-5" />
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.badge && (
            <span className="bg-royal-blue text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/20">
              {product.badge}
            </span>
          )}
          {product.isNew && (
            <span className="bg-royal-blue text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/20">
              New
            </span>
          )}
          {product.originalPrice && !product.badge && (
            <span className="bg-royal-blue text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/20">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>
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
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gold-dark">
            {product.rating}
          </span>
          <span className="text-sm text-muted-foreground">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-crimson transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="space-y-3 pt-3 border-t border-gold/20">
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
            <div className="flex items-center border border-gold/30 rounded-full bg-cream-light/50 backdrop-blur-sm">
              <button 
                onClick={handleDecrement}
                className="w-8 h-8 flex items-center justify-center text-foreground hover:bg-gold/10 hover:text-crimson transition-colors rounded-l-full"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-sm font-semibold text-foreground">
                {quantity}
              </span>
              <button 
                onClick={handleIncrement}
                className="w-8 h-8 flex items-center justify-center text-foreground hover:bg-gold/10 hover:text-crimson transition-colors rounded-r-full"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          
          <Button variant="crimson" className="w-full gap-2 group/btn">
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const FeaturedProductsSection = () => {
  return (
    <section id="products" className="py-12 bg-background pattern-kolam relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-blue/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-gold">Products</span>
          </h2>
          
          {/* Traditional Decorative underline */}
          <TraditionalUnderline size="lg" className="pt-4" />
          
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Discover our most loved sweets and savouries, handpicked from our extensive collection of authentic South Indian delicacies
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="crimson" size="xl" className="group">
              View All Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="premiumOutline" size="xl">
              Browse Categories
            </Button>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>Free Shipping Above ₹500</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>100% Fresh Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>Same Day Dispatch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
