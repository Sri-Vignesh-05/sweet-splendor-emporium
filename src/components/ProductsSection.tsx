import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Star, Eye } from "lucide-react";
import productLadoo from "@/assets/product-ladoo.jpg";
import productMysorePak from "@/assets/product-mysore-pak.jpg";
import productKajuKatli from "@/assets/product-kaju-katli.jpg";
import productBarfi from "@/assets/product-barfi.jpg";

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
}

const products: Product[] = [
  {
    id: 1,
    name: "Besan Ladoo",
    description: "Traditional golden ladoos made with pure ghee and besan",
    price: 450,
    originalPrice: 550,
    image: productLadoo,
    rating: 4.9,
    reviews: 342,
    badge: "Best Seller",
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
  },
  {
    id: 3,
    name: "Kaju Katli",
    description: "Premium cashew fudge with silver varak finish",
    price: 680,
    originalPrice: 800,
    image: productKajuKatli,
    rating: 4.9,
    reviews: 489,
    badge: "Premium",
  },
  {
    id: 4,
    name: "Mixed Barfi Box",
    description: "Colorful assortment of festive barfis in various flavors",
    price: 580,
    image: productBarfi,
    rating: 4.7,
    reviews: 178,
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover-lift border border-gold/10">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-elegant">
            <Heart className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-elegant">
            <Eye className="w-5 h-5" />
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.badge && (
            <span className="bg-gradient-gold text-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-gold">
              {product.badge}
            </span>
          )}
          {product.isNew && (
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
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
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-2 border-t border-gold/10">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-primary">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          <Button variant="hero" size="sm" className="gap-2">
            <ShoppingBag className="w-4 h-4" />
            Add
          </Button>
        </div>
      </div>

      {/* Traditional Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-gradient-cream pattern-paisley relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-medium tracking-widest uppercase text-sm">Our Collection</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            <span className="underline-gold underline-gold-center">Handcrafted Delights</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6">
            Each sweet is a masterpiece, crafted with love using centuries-old recipes and the finest ingredients
          </p>
          {/* Ornate Divider */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-3 h-3 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="premiumOutline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
